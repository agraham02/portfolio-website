# Divyo Waitlist Feature - Implementation Guide

## 🎉 Overview

A production-ready waitlist signup system for the divyo React Native mobile app, built with:

-   **Next.js 15+ App Router** with React Server Components and Server Actions
-   **Supabase PostgreSQL** for database with Row Level Security (RLS)
-   **Google reCAPTCHA v3** for bot protection (score-based verification)
-   **TypeScript** with strict type checking
-   **Zod** for runtime validation
-   **Resend** for optional confirmation emails
-   **Tailwind CSS** for styling

## 🏗️ Architecture

### Security-First Design

-   ✅ All secrets kept server-only (service role key, reCAPTCHA secret, etc.)
-   ✅ Server-side reCAPTCHA v3 verification with score threshold
-   ✅ Privacy-conscious IP hashing (SHA-256)
-   ✅ RLS enabled with no anon insert policy
-   ✅ Duplicate email handling prevents enumeration attacks
-   ✅ Admin CSV export with API key authentication

### Components

```
src/
├── app/
│   ├── actions/
│   │   └── subscribe.ts          # Server Action for waitlist signup
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts           # CSV export endpoint (admin)
│   ├── divyo/
│   │   └── page.tsx               # Landing page with waitlist form
│   └── layout.tsx                 # Root layout with reCAPTCHA script
├── components/
│   └── WaitlistForm.tsx           # Client component with reCAPTCHA
└── lib/
    └── supabaseAdmin.ts           # Server-only Supabase client
```

## 📋 Prerequisites

1. **Supabase Account** - [Create one here](https://supabase.com)
2. **Google reCAPTCHA v3** - [Register here](https://www.google.com/recaptcha/admin)
3. **Resend Account** (optional) - [Sign up here](https://resend.com)

## 🚀 Setup Instructions

### 1. Database Setup (Already Complete!)

The database table `waitlist_signups` has been created with the following schema:

```sql
CREATE TABLE public.waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  source TEXT,
  user_agent TEXT,
  ip_hash TEXT
);
```

RLS is enabled, and only authenticated server-side requests can insert data.

### 2. Environment Variables Setup

1. Copy the example environment file:

    ```bash
    cp .env.local.example .env.local
    ```

2. Fill in your actual values in `.env.local`:

    **Supabase** (get from https://supabase.com/dashboard/project/_/settings/api):

    ```env
    NEXT_PUBLIC_SUPABASE_URL="https://sonsathwjrxivsrcntay.supabase.co"
    SUPABASE_ANON_KEY="your-anon-key-here"
    SUPABASE_SERVICE_ROLE_KEY="your-service-role-key-here"
    ```

    **Google reCAPTCHA v3**:

    ```env
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-site-key-here"
    RECAPTCHA_SECRET_KEY="your-secret-key-here"
    ```

    **Resend (Optional)**:

    ```env
    RESEND_API_KEY="re_your_api_key_here"
    DIVYO_EMAIL_FROM="divyo <hello@yourdomain.com>"
    ```

    **Admin Export**:

    ```env
    ADMIN_EXPORT_KEY="generate-a-secure-random-string"
    ```

    Generate a secure admin key:

    ```bash
    openssl rand -base64 32
    ```

### 3. Register for Google reCAPTCHA v3

1. Go to https://www.google.com/recaptcha/admin
2. Click "+" to create a new site
3. Fill in:
    - **Label**: divyo Waitlist
    - **reCAPTCHA type**: Select "reCAPTCHA v3"
    - **Domains**:
        - Add `localhost` for development
        - Add your production domain (e.g., `yourdomain.com`)
4. Accept terms and submit
5. Copy the **Site Key** and **Secret Key** to your `.env.local`

### 4. Set up Resend (Optional - for confirmation emails)

1. Go to https://resend.com and create an account
2. Verify your sending domain
3. Generate an API key from the dashboard
4. Add the API key and sender email to `.env.local`

### 5. Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add all environment variables from `.env.local` to Vercel project settings
4. Mark these as **Secret**:
    - `SUPABASE_SERVICE_ROLE_KEY`
    - `RECAPTCHA_SECRET_KEY`
    - `RESEND_API_KEY`
    - `ADMIN_EXPORT_KEY`
5. Deploy!

## 🧪 Testing

### Test the Waitlist Form

1. Start the dev server:

    ```bash
    npm run dev
    ```

2. Navigate to: http://localhost:3000/divyo

3. Fill in the form and submit

4. Check your Supabase database to see the new entry:
    ```sql
    SELECT * FROM waitlist_signups ORDER BY created_at DESC;
    ```

### Test CSV Export

Export the waitlist as CSV:

```bash
curl -H "x-admin-key: your-admin-key-here" \
     http://localhost:3000/api/waitlist \
     --output waitlist.csv
```

Production:

```bash
curl -H "x-admin-key: your-admin-key-here" \
     https://yourdomain.com/api/waitlist \
     --output waitlist.csv
```

## 📊 Database Queries

### View all signups

```sql
SELECT
  email,
  created_at,
  source
FROM waitlist_signups
ORDER BY created_at DESC;
```

### Count signups by source

```sql
SELECT
  source,
  COUNT(*) as count
FROM waitlist_signups
GROUP BY source
ORDER BY count DESC;
```

### Recent signups (last 24 hours)

```sql
SELECT *
FROM waitlist_signups
WHERE created_at > NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;
```

## 🔒 Security Considerations

### Production Checklist

-   ✅ All secrets are in environment variables (not committed to git)
-   ✅ SUPABASE_SERVICE_ROLE_KEY is never exposed to client
-   ✅ RECAPTCHA_SECRET_KEY is server-only
-   ✅ reCAPTCHA score threshold is enforced (0.5)
-   ✅ IP addresses are hashed before storage
-   ✅ Duplicate emails return success (prevent enumeration)
-   ✅ RLS enabled on database table
-   ✅ Admin export requires authentication
-   ⚠️ Consider adding rate limiting (e.g., via Vercel Edge Config)
-   ⚠️ Consider IP whitelisting for CSV export endpoint
-   ⚠️ Rotate ADMIN_EXPORT_KEY regularly

### Monitoring

Monitor these metrics:

1. **reCAPTCHA scores** - If scores are consistently low, adjust threshold
2. **Failed verification attempts** - May indicate bot activity
3. **Duplicate email attempts** - Track email reuse patterns
4. **Confirmation email delivery** - Monitor Resend dashboard

## 🎨 Customization

### Change reCAPTCHA Score Threshold

Edit `src/app/actions/subscribe.ts`:

```typescript
const RECAPTCHA_MIN_SCORE = 0.7; // Default: 0.5 (stricter)
```

### Customize Confirmation Email

Edit the email template in `src/app/actions/subscribe.ts` in the `sendConfirmationEmail` function.

### Add More Form Fields

1. Update database schema:

    ```sql
    ALTER TABLE waitlist_signups ADD COLUMN phone TEXT;
    ```

2. Update Zod schema in `src/app/actions/subscribe.ts`
3. Add field to `WaitlistForm.tsx`
4. Update TypeScript types in `src/lib/supabaseAdmin.ts`

### Use Form in Other Pages

```tsx
import WaitlistForm from "@/components/WaitlistForm";

export default function YourPage() {
    return (
        <div>
            <h1>Join Our Waitlist</h1>
            <WaitlistForm source="your-page-name" />
        </div>
    );
}
```

## 🐛 Troubleshooting

### reCAPTCHA not loading

1. Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set
2. Verify domain is registered in Google reCAPTCHA console
3. Check browser console for errors
4. Ensure reCAPTCHA script loads in layout.tsx

### Database errors

1. Verify `SUPABASE_SERVICE_ROLE_KEY` is correct
2. Check RLS policies in Supabase dashboard
3. Ensure table exists: `SELECT * FROM waitlist_signups;`

### Emails not sending

1. Verify `RESEND_API_KEY` is set
2. Check domain is verified in Resend dashboard
3. Review Resend logs for errors
4. Ensure `DIVYO_EMAIL_FROM` matches verified domain

### CSV export returns 401

1. Verify `ADMIN_EXPORT_KEY` matches in request and server
2. Check header name is `x-admin-key` (lowercase)
3. Ensure key is in production environment variables

## 📚 API Reference

### Server Action: `subscribeToWaitlist`

```typescript
interface SubscribeResponse {
    ok: boolean;
    message: string;
}

async function subscribeToWaitlist(
    formData: FormData
): Promise<SubscribeResponse>;
```

**FormData fields:**

-   `email` (required): User's email address
-   `token` (required): reCAPTCHA v3 token
-   `source` (optional): Source identifier (e.g., "landing-hero")
-   `userAgent` (optional): Browser user agent string

### API Route: `/api/waitlist`

**GET** - Export waitlist as CSV

**Headers:**

-   `x-admin-key`: Your admin export key

**Response:** CSV file download

**POST** - Get waitlist with filters (optional implementation)

**Headers:**

-   `x-admin-key`: Your admin export key

**Body:**

```json
{
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "source": "landing-hero",
    "limit": 1000,
    "offset": 0
}
```

## 🎯 Best Practices

1. **Test reCAPTCHA in production** - Behavior differs from localhost
2. **Monitor score distribution** - Adjust threshold based on real data
3. **Rotate admin keys** - Schedule regular key rotation
4. **Backup database** - Enable Supabase automatic backups
5. **Rate limit API endpoints** - Prevent abuse
6. **Monitor email deliverability** - Check Resend analytics
7. **GDPR compliance** - Add privacy policy and consent checkbox if needed

## 📖 Additional Resources

-   [Next.js App Router Docs](https://nextjs.org/docs/app)
-   [Supabase Docs](https://supabase.com/docs)
-   [reCAPTCHA v3 Docs](https://developers.google.com/recaptcha/docs/v3)
-   [Resend Docs](https://resend.com/docs)
-   [Zod Docs](https://zod.dev)

## 🤝 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review browser console and server logs
3. Verify all environment variables are set correctly
4. Check Supabase logs in dashboard

## 📝 License

Part of your portfolio website project.
