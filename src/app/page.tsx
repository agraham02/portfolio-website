import InfiniteScrollLogos from "@/components/InfiniteScrollLogos";
import HeroSection from "@/components/home/HeroSection";
import BentoGrid from "@/components/home/BentoGrid";
import FeaturesSection from "@/components/home/FeaturesSection";
import TechStackSection from "@/components/home/TechStackSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import FloatingNavigation from "@/components/FloatingNavigation";
import ScrollToTop from "@/components/ScrollToTop";
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
        <>
            <main className="min-h-screen">
                {/* Hero Section */}
                <section id="hero">
                    <HeroSection />
                </section>
                
                {/* About Me - Bento Grid */}
                <section id="about">
                    <BentoGrid />
                </section>
                
                {/* Features/Skills Section */}
                <section id="features">
                    <FeaturesSection />
                </section>
                
                {/* Technology Stack */}
                <section id="tech">
                    <TechStackSection techIcons={techIcons} />
                </section>
                
                {/* Call to Action */}
                <section id="contact">
                    <CallToActionSection />
                </section>
            </main>
            
            {/* Floating Navigation */}
            <FloatingNavigation />
            
            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    );
}
