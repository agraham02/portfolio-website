# Portfolio Website Redesign - Product Requirements Document

**Date Created:** January 26, 2026  
**Version:** 2.0  
**Status:** Finalized
**Last Updated:** January 26, 2026
**Clarification Session:** Complete (35/35 questions answered)

---

## 1. Executive Summary

The goal of this project is to transform the portfolio website into a **world-class, actively maintained, and visually impressive** showcase of your skills as a full-stack software engineer. The site should serve as the single link you share with people who want to understand your capabilities in **system design, UI/UX design, and full-stack development**.

Key objectives:

- Demonstrate technical excellence through clean, impressive UI/UX
- Showcase diverse skill set (system design, UI/UX, full-stack development)
- Create a sense of active maintenance and continuous improvement
- Leverage modern libraries and animations to create memorable experiences

---

## 2. Vision & Goals

### 2.1 Vision Statement

A portfolio website that tells your engineering story through beautiful, interactive design—one that captures both technical depth and design sophistication.

### 2.2 Primary Goals

1. **Credibility**: Establish yourself as a skilled, thoughtful engineer
2. **Engagement**: Create memorable experiences that keep visitors interested
3. **Clarity**: Communicate your skills, projects, and experience effortlessly
4. **Maintenance**: Demonstrate active development and continuous improvement
5. **Accessibility**: Ensure all users can navigate and experience the site

---

## 3. User Personas

### 3.1 Recruiter

- **Goal**: Quickly assess technical capabilities and cultural fit
- **Pain Points**: Too much text, unclear project contributions, generic portfolios
- **Desired Outcomes**: Clear CV section, project highlights, easy contact

### 3.2 Tech Recruiter / Engineering Manager

- **Goal**: Evaluate system design thinking and architectural knowledge
- **Pain Points**: Lack of technical depth, no evidence of problem-solving
- **Desired Outcomes**: Case studies, system design insights, technical blog posts

### 3.3 Potential Collaborator / Client

- **Goal**: Understand your design philosophy and development capabilities
- **Pain Points**: Boring static portfolios, unclear work quality
- **Desired Outcomes**: Beautiful UI/UX demos, interactive projects, design philosophy

### 3.4 Tech Enthusiast / Peer

- **Goal**: Learn from your experience and stay updated on your work
- **Pain Points**: Outdated content, no blog or insights sharing
- **Desired Outcomes**: Technical blog, project breakdowns, active community presence

---

## 4. Core Pages & Features

### 4.1 Homepage (`/`)

**Purpose**: Create immediate impact and establish credibility

**Key Components:**

- **Hero Section**: Eye-catching introduction with animated elements
    - **3D Background** (Desktop Only): Three.js interactive 3D scene for desktop/high-performance devices, 2D gradient fallback for mobile
    - Clear value proposition (Who you are, what you do)
    - **Primary CTA**: "View My Work" → links to `/projects` page
    - **Testimonials Section**: Client testimonials below hero for social proof
- **Quick Stats Section**: Highlight achievements at a glance
    - Years of experience
    - Projects completed
    - Technologies mastered
    - Blog posts published
- **Featured Projects**: 2-3 standout projects with visuals
- **Skills Showcase**: Visual representation of core competencies
    - System Design
    - UI/UX Design
    - Full-Stack Development
- **Recent Blog Posts**: Latest thought leadership
- **CTA Section**: "Let's Build Something Together"

**Tech Stack:**

- Motion/Framer Motion for smooth animations
- Magic UI components for polished elements
- Tailwind CSS for responsive design
- Optional: Three.js for 3D elements (hero background, interactive demos)

---

### 4.2 About Page (`/about`)

**Purpose**: Tell your professional story and build personal connection

**Key Components:**

- **Professional Journey**: Timeline of career milestones (highlights only)
    - Key roles and significant achievements
    - Growth moments and turning points
    - Skip short-term or less relevant positions
    - Link to full resume page (`/resume`) for detailed history
- **Expertise Deep Dive**: 3 main pillars
    1. **System Design**: Approach, methodologies, case studies
    2. **UI/UX Design**: Philosophy, process, case studies
    3. **Full-Stack Development**: Tech stack, architectural patterns
- **Values & Philosophy**: What drives your engineering decisions
- **Personal Touch**: Why you love engineering, hobbies, interests
- **Tech Stack**: Infinite scroll logo section (current implementation)
    - Enhance with improved animations and updated logos
    - Maintain existing structure, focus on polish

**Tech Stack:**

- Aceternity UI for timeline component
- Motion for scroll-triggered animations
- Magic UI for hero/section transitions

---

### 4.3 Projects Page (`/projects`)

**Purpose**: Showcase tangible work and demonstrate capabilities

**Key Components:**

- **Project Grid**: Interactive grid with dynamic filtering
    - **Search box** for text queries
    - **Clickable tags** for technology and project type filtering
    - **Client-side filtering** for instant feedback
    - Cards with static screenshots/images (optimized)
- **Project Card**: For each project
    - Eye-catching cover image/video
    - Project title & brief description
    - Technologies used (visual badges)
    - Links: Live Demo, GitHub, Case Study
    - Key metric/achievement
- **Detailed Project Pages** (`/projects/[slug]`) - **Launch with 2-3 case studies only**
    - Hero with project screenshot
    - Problem statement
    - Solution approach
    - **System architecture diagrams** (preferred over code snippets)
    - Design decisions (if applicable)
    - Technology choices
    - Results/metrics
    - **Video/GIF gallery** showing interactions
    - **GitHub repository links** (primary code sharing method)
    - Code snippets only for particularly interesting solutions
    - Other projects link to external demos/GitHub without full case studies

**Tech Stack:**

- Carousel component (Aceternity or Custom)
- Motion for smooth transitions
- Enhanced video/image components
- Three.js for 3D project visualizations (optional)

---

### 4.4 Blog Page (`/blog`)

**Purpose**: Share knowledge and demonstrate thought leadership

**Implementation Timeline**: Phase 2 - Infrastructure, Phase 3+ Launch

- Build blog infrastructure in Phase 2 (MDX setup, templates, routing)
- Write content in parallel during development
- **Public launch only when 3+ quality posts are ready**
- Newsletter signup added when blog has 5+ posts

**Key Components:**

- **Blog Index**: Sortable/filterable post list
    - By topic: System Design, UI/UX, Full-Stack, Career
    - No search initially (navigation sufficient)
    - Reading time estimates
- **Blog Post Pages** (`/blog/[slug]`)
    - Rich markdown with syntax highlighting
    - Table of contents (auto-generated)
    - Author bio & date
    - Navigation (prev/next posts)
    - **No comments initially** (add in Phase 4 if engagement warrants)
    - Related posts
    - Share buttons

**Recommended Content Topics:**

- System design interviews
- React/Next.js patterns
- UI/UX design principles
- Database architecture
- Performance optimization
- Career growth tips

**Tech Stack:**

- MDX for blog content
- Syntax highlighting library (Prism or Shiki)
- Motion for animations

---

### 4.5 Contact Page (`/contact`)

**Purpose**: Make it easy for opportunities to reach you

**Key Components:**

- **Contact Form**:
    - Name (required)
    - Email (required)
    - Subject (optional)
    - Message (required)
    - Project Type dropdown (optional): Consulting, Full-time, Freelance, Collaboration, Other
    - Data validation & error handling
    - **Backend**: Supabase for storage + immediate email notification via edge function
- **Alternative Contact Methods**:
    - Email address (clickable)
    - Social links (GitHub, LinkedIn, Twitter)
    - Calendar integration (Calendly or similar)
- **Availability Statement**:
    - **"Currently employed, open to exceptional opportunities"**
    - Response time expectation
    - Social links (GitHub, LinkedIn, Twitter)
    - Direct email link

**Tech Stack:**

- shadcn/ui Form components
- Supabase for form storage
- Email integration (SendGrid or similar)

---

### 4.6 Divyo Landing Page (`/divyo`)

**Purpose**: Dedicated page for Divyo product showcase

**Status**: Keep as separate landing page

- Maintain distinct design and branding
- **No integration** into main site navigation
- Reference Divyo in projects grid with link to `/divyo`
- Polish existing page, ensure mobile responsiveness
- Add video demonstrations

### 4.7 Resume Page (`/resume`)

**Purpose**: Provide detailed professional history

**Key Components:**

- HTML resume view (formatted, readable)
- **PDF download button**
- Professional formatting
- Comprehensive employment history
- Education, skills, certifications

---

## 5. Technical Stack & Libraries

### 5.1 Core Framework

- **Next.js 15+**: App Router, React Server Components, optimized image/font handling
- **React 19**: Latest features and optimizations

### 5.2 Styling & UI

- **Tailwind CSS**: Utility-first CSS framework with dark mode class strategy
- **shadcn/ui**: Accessible, unstyled components (already in use)
- **Aceternity UI**: Premium animation components (already in use)
- **Magic UI**: 150+ free animated components & effects
    - Use for: Animated grids, shimmer effects, spotlight effects, hero sections
    - Perfect for: Landing page components, transitions, smooth animations

**Color Palette** (Finalized):

- **Primary**: Blue tones (professional, trustworthy, tech-aligned)
- **Accents**: 2-3 complementary colors from blue family
- **Theme**: Dark mode primary with light mode toggle

**Typography** (Finalized):

- **System fonts** for body text (performance optimized)
- **1-2 Google Fonts** via next/font for display/heading hierarchy
- Balance of performance and visual distinction

### 5.3 Animation & Motion

- **Motion/Framer Motion** (motion.dev): Smooth, performant animations
    - Scroll triggers
    - Parallax effects
    - Staggered animations
    - Gesture animations

### 5.4 3D & Interactive (Finalized Implementation)

- **Three.js**: 3D visualizations
    - **Use case**: Hero background ONLY
    - **Implementation**: Conditional rendering based on device capability
    - **Desktop**: Full 3D interactive scene
    - **Mobile**: 2D gradient fallback for performance
    - **Optimization**: Lazy loading, reduced motion support
- **@react-three/fiber**: React renderer for Three.js
    - Component-based approach for hero 3D scene
- **@react-three/drei**: Helpers & abstractions
    - Use for cameras, controls, lighting in hero scene

### 5.5 Additional Libraries

- **clsx**: Conditional className management
- **date-fns**: Date formatting utilities
- **MDX**: For blog content (if using)
- **Supabase**: Backend for forms, blog data, waitlist
- **next-image**: Optimized image component
- **next-font**: Optimized font loading

### 5.6 Developer Tools

- **TypeScript**: Strict mode, full type safety
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting
- **Jest/Vitest**: Unit testing (if needed)

---

## 6. Design Principles

### 6.1 Visual Design

- **Clean & Modern**: Minimal clutter, maximum clarity
- **Theme Implementation**:
    - Dark mode as primary theme
    - **System preference detection** on first visit
    - **Manual toggle** in navigation
    - Preference persisted in localStorage
    - Implemented via Tailwind dark mode + custom React hook
- **Generous Spacing**: Breathing room between elements
- **Typography**: Clear hierarchy with system fonts + Google Fonts
- **Color Palette**: Blue primary + complementary accents
    - Primary: Blue tones (professional, tech-aligned)
    - Accents: 2-3 complementary blues
    - Grays: Light, medium, dark for text and backgrounds
- **Performance First**: Design-first approach, then optimize intelligently
    - No strict page weight budget
    - Use lazy loading, code splitting, modern image formats
    - Prioritize visual impact while maintaining good Core Web Vitals

### 6.2 Interaction Design

- **Smooth Animations**: 300-500ms transitions by default
- **Micro-interactions**: Hover states, button feedback
- **Responsive**: Works beautifully on all devices
- **Accessible**: **WCAG 2.1 AA compliance** (target)
    - Keyboard navigation
    - Screen reader support
    - Sufficient color contrast ratios
    - Visible focus indicators
    - Semantic HTML throughout
    - Lighthouse accessibility score target: 95+

### 6.3 User Experience

- **Fast Loading**: Optimize for Core Web Vitals
    - LCP (Largest Contentful Paint): < 2.5s
    - FID (First Input Delay): < 100ms
    - CLS (Cumulative Layout Shift): < 0.1
- **Easy Navigation**: Clear information hierarchy
- **Mobile First**: Optimized mobile experience
- **Intuitive**: Users should understand immediately what to do

---

## 7. Content Strategy

### 7.1 Homepage Content

- **Hero**: "Full-Stack Engineer | System Design | UI/UX"
- **Subheading**: "I build beautiful, scalable systems that solve real problems"
- **Primary CTA**: "View My Work" → `/projects` (finalized)
- **Testimonials**: 3-5 client quotes for credibility

### 7.2 About Page Content

- **Timeline**: Key milestones and growth moments (highlights only, not exhaustive history)
- **Expertise**: Deep dive into 3 core areas
- **Philosophy**: Your approach to engineering and design
- **Fun fact**: Personal touch to humanize your profile
- **Tech Stack**: Infinite scroll section (current implementation, enhance animations)
- **Resume Link**: Prominent link to `/resume` page for full details

### 7.3 Projects Content

- Select 5-8 best projects showcasing range
- **Mix of professional work + personal side projects** (finalized)
- Each should tell a story (problem → solution → results)
- **2-3 detailed case studies** at launch, expand over time
- Screenshots for project cards, videos/GIFs in detail pages
- GitHub links as primary code sharing method

### 7.4 Blog Content

- **Launch requirement**: 3+ high-quality posts minimum
- Focus on topics you're passionate about
- Mix of: Technical deep-dives, career insights, tutorials
- Aim for consistency (monthly or bi-weekly posting)
- **Newsletter signup**: Add when blog has 5+ posts
- **No comments initially**: Add in Phase 4 if engagement warrants

---

## 8. Feature Prioritization

### Phase 1 (MVP - Weeks 1-2)

- [ ] Homepage redesign with conditional 3D hero
- [ ] Client testimonials section
- [ ] About page with timeline (highlights)
- [ ] Infinite scroll tech stack enhancement
- [ ] Projects page with search + tag filtering
- [ ] 2-3 detailed project case studies
- [ ] Resume page with PDF download
- [ ] Contact form (Supabase + email notifications)
- [ ] "Currently employed" availability statement
- [ ] Mobile navigation polish
- [ ] Theme toggle (dark/light with system detection)
- [ ] Core page SEO (Homepage, About, Projects)

### Phase 2 (Enhancement - Weeks 3-4)

- [ ] Blog infrastructure (MDX, syntax highlighting, templates)
- [ ] Write 3+ blog posts in parallel
- [ ] Additional project detail pages (beyond initial 2-3)
- [ ] Advanced Magic UI animations
- [ ] Performance optimization
- [ ] Blog SEO implementation

### Phase 3 (Polish - Week 5)

- [ ] Blog public launch (when 3+ posts ready)
- [ ] Remaining page SEO
- [ ] WCAG 2.1 AA accessibility audit
- [ ] Cross-browser testing
- [ ] Final design polish
- [ ] Pre-launch performance review

### Phase 4 (Ongoing)

- [ ] Regular blog updates
- [ ] Newsletter signup (when blog has 5+ posts)
- [ ] Blog comments system (if engagement warrants)
- [ ] Additional project case studies
- [ ] Performance monitoring via Vercel Analytics
- [ ] User feedback implementation

---

## 9. Performance & SEO Targets

### 9.1 Core Web Vitals

- **LCP**: Target < 2.5s (Green)
- **FID/INP**: Target < 100ms (Green)
- **CLS**: Target < 0.1 (Green)

### 9.2 Lighthouse Scores

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### 9.3 SEO Strategy

- **Phase 1**: Core pages (Homepage, About, Projects) get full SEO
    - Optimized meta tags (title, description)
    - Open Graph tags for social sharing
    - Twitter cards
- **Standard SEO Infrastructure**:
    - Dynamic sitemap.xml generation
    - robots.txt
    - Schema.org structured data (Person, Website)
    - JSON-LD for schemas
- **Phase 2**: Blog SEO implementation
    - Article structured data
    - Optimized blog post meta tags
- **No site search**: Navigation sufficient for scope

---

## 10. Success Metrics

### 10.1 Quantitative Metrics

- **Bounce Rate**: < 40%
- **Average Session Duration**: > 2 minutes
- **Pages Per Session**: > 2.5
- **Mobile Traffic Percentage**: > 50%
- **Return Visitor Percentage**: > 30%

### 10.2 Qualitative Metrics

- Positive feedback from visitors
- Increased inquiries/opportunities
- Social media shares
- Blog reader engagement
- Referral traffic

---

## 11. Finalized Decisions Summary

### 11.1 All Key Decisions Made ✅

**35 questions answered via clarification session. See PORTFOLIO_REDESIGN_PRD-clarification-session.md for full details.**

### 11.2 Critical Decisions Locked In

- ✅ **3D Hero**: Conditional (desktop only, mobile gets 2D gradient)
- ✅ **Blog Launch**: Phase 2 infrastructure, go live with 3+ posts
- ✅ **Theme**: System detection + manual toggle (dark primary)
- ✅ **Projects**: Mix of professional + side projects, 2-3 case studies at launch
- ✅ **Availability**: "Currently employed, open to exceptional opportunities"
- ✅ **Newsletter**: Add when blog has 5+ posts
- ✅ **Comments**: No initially, add in Phase 4 if needed
- ✅ **Primary Color**: Blue tones
- ✅ **Typography**: System fonts + 1-2 Google Fonts
- ✅ **Resume**: Both view page + PDF download
- ✅ **Contact Backend**: Supabase + immediate email
- ✅ **Deployment**: Vercel
- ✅ **Analytics**: Vercel Analytics (already implemented)
- ✅ **Testimonials**: Yes, include on homepage
- ✅ **Mobile Nav**: Polish existing, don't replace
- ✅ **Tech Stack Display**: Keep infinite scroll, enhance animations
- ✅ **Divyo**: Keep separate, no integration
- ✅ **Accessibility**: WCAG 2.1 AA
- ✅ **Internationalization**: English only
- ✅ **Changelog**: No
- ✅ **Public Roadmap**: No

### 11.3 Out of Scope (Explicitly Decided)

- ❌ Site-wide search functionality
- ❌ Blog comments at launch
- ❌ Newsletter signup initially
- ❌ Multi-language support
- ❌ Changelog page
- ❌ Public feature roadmap
- ❌ 3D elements beyond hero background
- ❌ Strict performance budget (design-first approach instead)

---

## 12. Next Steps - Ready for Implementation

**PRD Status**: ✅ Finalized (all 35 clarification questions answered)

### Immediate Actions (Before Development)

1. ✅ **Design System Document**: Create comprehensive design system (see DESIGN_SYSTEM.md)
2. **Content Gathering**:
    - Identify 2-3 hero projects for detailed case studies
    - Collect 3-5 client testimonials with quotes
    - Draft professional bio and career highlights timeline
    - Prepare project screenshots and demo videos
3. **Technical Preparation**:
    - Install Three.js, React Three Fiber, Drei
    - Install Magic UI components
    - Set up custom theme hook
    - Configure Supabase edge function for emails

### Development Phases

4. **Phase 1 Implementation** (Weeks 1-2): Core pages + functionality
5. **Phase 2 Enhancement** (Weeks 3-4): Blog infrastructure + content creation
6. **Phase 3 Polish** (Week 5): SEO, accessibility, testing
7. **Launch & Monitor**: Deploy to Vercel, track metrics
8. **Phase 4 Ongoing**: Regular updates, blog posts, improvements

---

## Appendix: Recommended Magic UI Components

Based on Magic UI's offerings, here are components that could enhance your portfolio:

1. **Animated Grids**: For projects showcase
2. **Shimmer Effects**: For CTAs and buttons
3. **Spotlight Effects**: Hero section highlights
4. **Smooth Text Reveal**: For section headings
5. **Interactive Cards**: Project cards with hover effects
6. **Animated Backgrounds**: Hero sections
7. **Scroll Animations**: Reveal on scroll
8. **Floating Navigation**: Modern navbar
9. **Border Animations**: Frame highlights for important content
10. **Pulse Effects**: For CTAs, badges

---

## 13. Additional Specifications

### 13.1 Site-Wide Components

**Footer** (Finalized):

- Copyright notice
- Navigation links: Home, About, Projects, Blog, Contact
- Social media links: GitHub, LinkedIn, Twitter
- Email contact address
- Clean, organized layout
- No newsletter signup initially

**Mobile Navigation** (Finalized):

- Keep current implementation
- Focus on polish: smoother animations, better touch targets
- Improve visual hierarchy
- Ensure accessibility compliance

---

**Document Version History:**

- v1.0 (Jan 26, 2026): Initial PRD draft
- v2.0 (Jan 26, 2026): Finalized with 35 clarifications, ready for implementation
