import Header from "@/components/Header";
import InfiniteScrollLogos from "@/components/InfiniteScrollLogos";
import Image from "next/image";
import {
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaGithub,
    FaJava,
    FaGitAlt,
} from "react-icons/fa6";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiGraphql,
    SiFlutter,
    SiExpo,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiSupabase,
    SiVercel,
    SiNetlify,
    SiFigma,
    SiPostman,
    SiJira,
    SiTensorflow,
    SiPytorch,
    SiPandas,
    SiNumpy,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Running out of content
            </div>
        ),
    },
];

function Hero() {
    return (
        <section className="container mx-auto flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-20 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Full-Stack Developer & Creative Technologist
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                I build exceptional and accessible digital experiences.
                Currently seeking new opportunities to apply my skills in a
                challenging and collaborative environment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                    <Link href="/projects">
                        View My Work <MoveRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </div>
        </section>
    );
}

const techIconsRaw = [
    { id: "react", icon: <FaReact />, displayName: "React" },
    { id: "nextjs", icon: <SiNextdotjs />, displayName: "Next.js" },
    { id: "node", icon: <FaNodeJs />, displayName: "Node.js" },
    { id: "tailwind", icon: <SiTailwindcss />, displayName: "Tailwind CSS" },
    { id: "aws", icon: <FaAws />, displayName: "AWS" },
    { id: "docker", icon: <FaDocker />, displayName: "Docker" },
    { id: "github", icon: <FaGithub />, displayName: "GitHub" },
    { id: "typescript", icon: <SiTypescript />, displayName: "TypeScript" },
    { id: "javascript", icon: <SiJavascript />, displayName: "JavaScript" },
    { id: "python", icon: <SiPython />, displayName: "Python" },
    { id: "java", icon: <FaJava />, displayName: "Java" },
    { id: "graphql", icon: <SiGraphql />, displayName: "GraphQL" },
    { id: "flutter", icon: <SiFlutter />, displayName: "Flutter" },
    { id: "expo", icon: <SiExpo />, displayName: "Expo" },
    { id: "nestjs", icon: <SiNestjs />, displayName: "NestJS" },
    { id: "mongodb", icon: <SiMongodb />, displayName: "MongoDB" },
    { id: "postgresql", icon: <SiPostgresql />, displayName: "PostgreSQL" },
    { id: "supabase", icon: <SiSupabase />, displayName: "Supabase" },
    { id: "vercel", icon: <SiVercel />, displayName: "Vercel" },
    { id: "netlify", icon: <SiNetlify />, displayName: "Netlify" },
    { id: "git", icon: <FaGitAlt />, displayName: "Git" },
    { id: "figma", icon: <SiFigma />, displayName: "Figma" },
    { id: "postman", icon: <SiPostman />, displayName: "Postman" },
    { id: "jira", icon: <SiJira />, displayName: "Jira" },
    { id: "tensorflow", icon: <SiTensorflow />, displayName: "TensorFlow" },
    { id: "pytorch", icon: <SiPytorch />, displayName: "PyTorch" },
    { id: "pandas", icon: <SiPandas />, displayName: "Pandas" },
    { id: "numpy", icon: <SiNumpy />, displayName: "NumPy" },
];

function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const techIcons = shuffleArray(techIconsRaw);

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            {/* <StickyScroll content={content} /> */}
            <InfiniteScrollLogos
                icons={techIcons} // Pass the array of icon objects
                iconSize="text-5xl" // Example: Increase size
                iconColor="text-gray-600" // Example: Adjust default color
                iconHoverColor="hover:text-blue-400" // Example: Adjust hover color
                speed="normal"
            />
        </main>
    );
}
