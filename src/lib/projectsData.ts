export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
    category: "web" | "mobile" | "ai" | "backend";
    status: "completed" | "in-progress" | "archived" | "scrapped";
    // Explicit ownership/context for clear grouping on the Projects page
    scope: "personal" | "client" | "scrapped";
    // Optional fields (especially useful for client case studies)
    clientName?: string;
    caseStudyUrl?: string;
    role?: string;
    problem?: string;
    solution?: string;
    results?: string;
    // Optional fields for archived/scrapped items
    lessons?: string[];
    reason?: string;
    year: number;
}

export const featuredProjects: Project[] = [
    {
        id: "family-game-room",
        title: "Family Game Room",
        description:
            "A collaborative gaming platform for families to connect and play games like Spades and Dominoes together remotely.",
        longDescription:
            "A full-stack web application built with React and Node.js that enables families to play classic games together online. Features real-time multiplayer gaming, and family room management. Current support includes Spades and Dominoes, with plans to add more games and features.",
        image: "/images/FamilyGameRoom.png",
        technologies: ["React", "Next.js", "Node.js", "Socket.io"],
        demoUrl: "https://family-gr-client.vercel.app",
        githubUrl: "https://github.com/agraham02/family-game-room",
        featured: true,
        category: "web",
        status: "completed",
        scope: "personal",
        year: 2025,
    },
    {
        id: "face-detection-app",
        title: "AI Face Detection System",
        description:
            "Advanced computer vision application with real-time face detection and recognition capabilities.",
        longDescription:
            "A sophisticated AI-powered application that performs real-time face detection and recognition using TensorFlow and OpenCV. Features include emotion detection, age estimation, and facial landmark analysis.",
        image: "/images/FaceDetection.jpg",
        technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
        demoUrl: "https://face-detection-demo.vercel.app",
        githubUrl: "https://github.com/agraham02/face-detection-app",
        featured: true,
        category: "ai",
        status: "completed",
        scope: "personal",
        year: 2023,
    },
    {
        id: "college-connect",
        title: "CollegeConnect Mobile App",
        description:
            "Social networking platform connecting college students across campuses.",
        longDescription:
            "A React Native mobile application that helps college students connect with peers, find study groups, and discover campus events. Built with Firebase for real-time messaging and user authentication.",
        image: "/images/Screen_Recording_20220913_081228_CollegeConnect.mp4",
        technologies: ["React Native", "Firebase", "Expo", "Node.js"],
        githubUrl: "https://github.com/agraham02/collegeConnectAPI",
        featured: true,
        category: "mobile",
        status: "scrapped",
        scope: "scrapped",
        year: 2022,
    },
    {
        id: "cubi3-game",
        title: "Cubi3 Puzzle Game",
        description:
            "An innovative 3D puzzle game with physics-based mechanics and progressive difficulty.",
        longDescription:
            "A mobile puzzle game built with Unity and C# featuring 3D cube manipulation, physics-based gameplay, and increasing difficulty over the course of the game. Includes an in-game store to buy cosmetics for the cube.",
        image: "/images/Screen_Recording_20221004_073635_Cubi3.mp4",
        technologies: ["Unity", "C#"],
        featured: true,
        category: "mobile",
        status: "scrapped",
        scope: "scrapped",
        year: 2022,
    },
];

export const allProjects: Project[] = [
    ...featuredProjects,
    // ——— Client Websites ———
    {
        id: "jdc-corporate-website",
        title: "Jackson Development Company Website",
        description:
            "Modern corporate website with vendor info, projects, and contact workflows.",
        longDescription:
            "Redesigned Jackson Development Company's public website to present projects, services, and vendor information with a clean, mobile-first experience. Built a maintainable content model and added structured sections for Careers and Procurement. Prepared the codebase to later integrate a secure vendor portal.",
        image: "/images/jdc-website.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
            "Contentlayer/MDX",
        ],
        demoUrl: "https://jacksondevelopmentco.com", // replace if different
        featured: false,
        category: "web",
        status: "completed",
        scope: "client",
        clientName: "Jackson Development Company (USVI)",
        role: "Full-stack developer and UX lead",
        problem:
            "Outdated static site with limited content structure and no clear funnel for vendors and applicants.",
        solution:
            "A performant Next.js site with a flexible content system and clear IA for Services, Projects, Careers, and Vendor resources.",
        results:
            "Improved clarity and navigation. Faster page loads, easier content updates, and a foundation for a future vendor portal.",
        year: 2025,
    },
    {
        id: "cslabs-website-redesign",
        title: "CS Labs Website Redesign",
        description:
            "Lightweight marketing site with dynamic content and blog/newsroom.",
        longDescription:
            "Designed and implemented a clean, credible web presence for a small startup. Added a newsroom/blog with MDX, a simple Careers page, and a secure contact form with spam protection. Content authors can publish without developer involvement.",
        image: "/images/cslabs-website.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Contentlayer",
            "Decap CMS",
            "Vercel",
            "reCAPTCHA",
        ],
        demoUrl: "https://cslabs.tech", // replace if staging
        featured: false,
        category: "web",
        status: "in-progress",
        scope: "client",
        clientName: "CS Labs",
        role: "Frontend engineer and content system architect",
        problem:
            "No updatable dynamic content and no structured way to share company updates or roles.",
        solution:
            "Composable Next.js components, MDX pipeline with Contentlayer, and CMS-backed content for non-technical updates.",
        results:
            "Faster iteration on content. Clear navigation for Products, Services, News, Careers, and Contact.",
        year: 2025,
    },

    // ——— Product / Personal ———
    {
        id: "divyo-receipt-scanner",
        title: "Divyo — Scan, Split, Settle",
        description:
            "Mobile app that scans receipts and fairly splits bills with friends.",
        longDescription:
            "Divyo turns messy receipts into structured line items using on-device OCR, then helps users assign items to participants (including guests), calculate totals, taxes, and tips, and generate a shareable summary. Focus on robust parsing across varied receipt formats with confidence thresholds and error handling.",
        image: "/images/divyo.png",
        technologies: [
            "React Native (Expo)",
            "TypeScript",
            "@react-native-ml-kit/text-recognition",
            "Supabase (Auth/DB/Storage)",
            "Node.js",
            "Tailwind (NativeWind)",
        ],
        demoUrl: undefined,
        githubUrl: undefined, // private for now; add when public
        featured: true,
        category: "mobile",
        status: "in-progress",
        scope: "personal",
        role: "Founder and full-stack engineer",
        problem:
            "Splitting group bills is tedious and error-prone. Manual entry makes it slow and frustrating.",
        solution:
            "OCR + parsing pipeline to auto-extract items, assign participants, handle taxes/tips, and share a clean split summary.",
        results:
            "Prototype parsing on real receipts, with planned rate limits for free tier and subscription for power users.",
        lessons: [
            "Normalize OCR output before inference",
            "Confidence-based fallbacks and user confirmations reduce friction",
            "Design UX for the 80% common receipts but allow quick corrections",
        ],
        year: 2025,
    },
    {
        id: "soundscape-geo-music",
        title: "SoundScape — What’s Playing Nearby",
        description:
            "Location-aware web app to explore music people are listening to around you.",
        longDescription:
            "A map-first experience that surfaces anonymized, aggregated ‘now playing’ tracks from nearby listeners and hotspots. Uses the Spotify Web API and geolocation to create a serendipitous discovery surface. Built as a class capstone and later extended with a cleaner UI and caching.",
        image: "/images/soundscape.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Spotify Web API",
            "Mapbox/Leaflet",
            "Node.js",
        ],
        demoUrl: undefined,
        githubUrl: undefined,
        featured: false,
        category: "web",
        status: "completed",
        scope: "personal",
        role: "Product lead and full-stack engineer",
        problem:
            "Music discovery feels siloed. It’s hard to see what nearby people are actually playing right now.",
        solution:
            "A privacy-aware, map-based feed of trending tracks and hotspots near the user, refreshed periodically.",
        results:
            "Working prototype, positive user feedback on ‘ambient discovery’ and city/venue exploration use cases.",
        year: 2024,
    },

    // ——— Case-Study Friendly (optional future) ———
    {
        id: "jdc-vendor-portal",
        title: "JDC Vendor Portal",
        description:
            "Secure portal for vendors to register, apply to contracts, and manage documents.",
        longDescription:
            "Extends the public JDC website with authenticated vendor onboarding, contract listings, document uploads, and staff review workflows. RBAC-gated UI, audit-friendly data model, and future integrations for procurement automation.",
        image: "/images/jdc-portal.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase (Auth/Postgres/Storage)",
            "Node.js",
            "Vercel",
        ],
        demoUrl: undefined,
        githubUrl: undefined,
        featured: false,
        category: "web",
        status: "in-progress",
        scope: "client",
        clientName: "Jackson Development Company (USVI)",
        caseStudyUrl: undefined,
        role: "Tech lead and full-stack engineer",
        problem:
            "Paper-heavy vendor onboarding and contract applications slowed procurement and created errors.",
        solution:
            "A centralized portal with profile management, contract applications, required-doc checklists, and staff review tools.",
        results:
            "In development. Early demos show clearer workflows and less back-and-forth for document collection.",
        year: 2025,
    },
];
