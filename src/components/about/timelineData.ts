// filepath: src/data/timelineData.ts
export interface TimelineEntry {
    title: string;
    paragraphs: string[];
    images: {
        src: string;
        alt: string;
        orientation: "landscape" | "portrait" | "square";
    }[];
}

export const timelineData: TimelineEntry[] = [
    {
        title: "2017 - 2020",
        paragraphs: [
            "After a devastating hurricane struck my island home in the U.S. Virgin Islands, I relocated to Virginia Beach. Back home, I didn’t have access to many resources for learning computer science, but moving to the States changed everything. I enrolled in the Advanced Technology Center (ATC), where I split my time between high school classes and college-level courses in software and game development. That program gave me my first hands-on experience with programming, starting with C# and the Unity Game Engine, and I was immediately hooked.",
            "Outside of class, I dove into self-learning with Codecademy, YouTube, and personal projects. By the time I entered college, I had a solid foundation in web development and a clear direction.",
        ],
        images: [
            {
                src: "/images/landscape.png",
                alt: "Early programming projects",
                orientation: "landscape",
            },
            {
                src: "/images/portrait.png",
                alt: "Early programming projects",
                orientation: "portrait",
            },
            // ...more images
        ],
    },
    {
        title: "2020 - 2022",
        paragraphs: [
            "I began studying Computer Science at George Mason University in 2020 during the height of the COVID-19 pandemic. Despite the challenges of remote learning, I stayed curious and creative, building demo websites and sharpening my frontend skills with React.",
            "I also worked part-time on campus as a Classroom Support Technician and as a Changeover Crew Member at EagleBank Arena. These jobs taught me adaptability, collaboration, and problem-solving, all of which translated seamlessly into my journey as a developer.",
        ],
        images: [
            {
                src: "/images/landscape.png",
                alt: "Early programming projects",
                orientation: "landscape",
            },
            // ...more images
        ],
    },
    {
        title: "2023",
        paragraphs: [
            "This was the year I truly became a full-stack engineer. I started writing my first backend services with Node.js, Express, and SQL databases, and began tying together frontends and APIs into fully functional apps. One of my early full-stack projects used the Spotify API and geolocation to show users what music was playing nearby.",
            "That summer, I interned at Amazon with the Amazon Photos team in Seattle, where I designed and implemented a new Video Card feature using React Native, Swift, Java, and AWS services. I learned how to work in large codebases, follow agile practices, and collaborate closely with other engineers, a big growth milestone.",
        ],
        images: [
            {
                src: "/images/portrait.png",
                alt: "Early programming projects",
                orientation: "portrait",
            },
            // ...more images
        ],
    },
    {
        title: "2024",
        paragraphs: [
            "In 2024, I joined NECX, a startup building secure platforms for victim services. As a Software Engineering Intern, I worked directly with the CTO and CFO to build and scale full-stack features. I led the redesign of our database schema to improve integrity and query performance, and developed a secure, real-time chat system with document-sharing capabilities.",
            "Outside of work, I launched a multiplayer online card game that supports custom room logic for Spades and Dominoes, letting my family play together from anywhere. I also built a financial dashboard (now sunsetted) that integrated the Plaid API to centralize user bank data.",
            "And, most importantly, I graduated with a Bachelor of Science in Computer Science from George Mason University.",
        ],
        images: [
            {
                src: "/images/square.png",
                alt: "Early programming projects",
                orientation: "square",
            },
            // ...more images
        ],
    },
    {
        title: "2025 and Beyond",
        paragraphs: [
            "This year has been about sharpening my craft and building products that are useful, thoughtful, and human-centered. The job market has been tough, but I’ve used this time to grow.",
            "I began freelancing, creating websites and internal portals for clients. I launched a React Native app that uses OCR to help groups split bills quickly and fairly, a real problem I faced that I decided to solve with tech.",
            "I’m diving deeper into DevOps (CI/CD, Redis, containerization, cloud architecture) and exploring data science to better understand how data can drive decision-making and be used to make better products driven by AI. I’ve built a recommendation system prototype and an MVP chatbot focused on personal growth. I also implemented a Tic Tac Toe game powered by the Minimax algorithm and explored global data sets like GDP vs. Life Expectancy.",
            "Right now, I’m focused on combining creativity with technical depth to build scalable applications that make everyday life easier, and I’m very excited for what’s next!",
        ],
        images: [
            {
                src: "/images/landscape.png",
                alt: "Early programming projects",
                orientation: "landscape",
            },
            {
                src: "/images/portrait.png",
                alt: "Early programming projects",
                orientation: "portrait",
            },
            {
                src: "/images/portrait.png",
                alt: "Early programming projects",
                orientation: "portrait",
            },
            {
                src: "/images/square.png",
                alt: "Early programming projects",
                orientation: "square",
            },
        ],
    },
];
