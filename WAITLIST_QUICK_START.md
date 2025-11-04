# 🚀 Quick Start Checklist

## Before You Deploy

### ✅ Completed

-   [x] Database table `waitlist_signups` created in Supabase
-   [x] RLS policies configured
-   [x] All code files implemented
-   [x] Dependencies installed (`@supabase/supabase-js`, `resend`)

### 📝 To Do Now

#### 1. Get Your Supabase Service Role Key

1. Go to https://supabase.com/dashboard/project/_/settings/api
2. Copy the **service_role** key (not the anon key!)
3. Keep it secret - NEVER commit to git

#### 2. Register for Google reCAPTCHA v3

1. Visit https://www.google.com/recaptcha/admin
2. Click "+" to create a new site
3. Choose "reCAPTCHA v3"
4. Add domains:
    - `localhost` (for development)
    - Your production domain
5. Get your **Site Key** and **Secret Key**

#### 3. (Optional) Set up Resend for Emails

1. Go to https://resend.com
2. Verify your domain
3. Generate an API key
4. Note your sender email

#### 4. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:

    ```bash
    cp .env.local.example .env.local
    ```

2. Fill in ALL values in `.env.local`:

    ```env
    # Already filled in:
    NEXT_PUBLIC_SUPABASE_URL="https://sonsathwjrxivsrcntay.supabase.co"
    SUPABASE_ANON_KEY="[your-anon-key]"

    # YOU NEED TO ADD:
    SUPABASE_SERVICE_ROLE_KEY="[from step 1]"
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY="[from step 2]"
    RECAPTCHA_SECRET_KEY="[from step 2]"

    # Optional for emails:
    RESEND_API_KEY="[from step 3]"
    DIVYO_EMAIL_FROM="divyo <hello@yourdomain.com>"

    # Generate a secure admin key:
    ADMIN_EXPORT_KEY="[run: openssl rand -base64 32]"
    ```

3. Generate your admin key:
    ```bash
    openssl rand -base64 32
    ```

#### 5. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000/divyo and test the form!

#### 6. Deploy to Vercel

1. Push code to GitHub
2. Import in Vercel
3. Add ALL environment variables from `.env.local`
4. Mark these as **Secret**:
    - `SUPABASE_SERVICE_ROLE_KEY`
    - `RECAPTCHA_SECRET_KEY`
    - `RESEND_API_KEY`
    - `ADMIN_EXPORT_KEY`
5. Deploy!

#### 7. Update reCAPTCHA Domains

After deploying, add your Vercel domain to Google reCAPTCHA:

1. Go to https://www.google.com/recaptcha/admin
2. Edit your site
3. Add your Vercel domain (e.g., `yoursite.vercel.app`)

## 🧪 Test Checklist

After deployment:

-   [ ] Visit `/divyo` page - form appears
-   [ ] Submit valid email - success message shows
-   [ ] Check Supabase dashboard - new row in `waitlist_signups`
-   [ ] Try duplicate email - still shows success (prevents enumeration)
-   [ ] Check email inbox - confirmation email received (if Resend configured)
-   [ ] Test CSV export:
    ```bash
    curl -H "x-admin-key: YOUR_ADMIN_KEY" \
         https://yoursite.vercel.app/api/waitlist \
         --output waitlist.csv
    ```

## 📊 Monitor

Keep an eye on:

1. **Supabase dashboard** - New signups
2. **Vercel logs** - Server errors
3. **Google reCAPTCHA console** - Score distribution
4. **Resend dashboard** - Email delivery (if configured)

## 🐛 Common Issues

### "SUPABASE_SERVICE_ROLE_KEY is not configured"

-   Make sure you copied the service_role key, not the anon key
-   Verify it's in `.env.local` (local) or Vercel environment variables (production)

### reCAPTCHA not loading

-   Check NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set
-   Verify your domain is added in Google reCAPTCHA console
-   Wait a few minutes after adding domain

### Emails not sending

-   Verify domain is verified in Resend
-   Check DIVYO_EMAIL_FROM matches verified domain
-   Review Resend logs for errors

### CSV export returns 401

-   Verify ADMIN_EXPORT_KEY matches in request header and environment
-   Use lowercase `x-admin-key` header name

## 📖 Full Documentation

See `WAITLIST_SETUP.md` for complete documentation including:

-   Architecture overview
-   Security considerations
-   API reference
-   Customization guide
-   Troubleshooting

## 🎉 You're Done!

Your production-ready waitlist is now live! 🚀

Check your database to see signups rolling in, and monitor your reCAPTCHA scores to ensure quality leads.
