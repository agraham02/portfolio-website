import Header from "@/components/Header";
import InfiniteScrollLogos from "@/components/InfiniteScrollLogos";
import { TimelineSection } from "@/components/Timeline";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
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

const techIcons = [
    { id: "react", icon: <FaReact /> },
    { id: "nextjs", icon: <SiNextdotjs /> },
    { id: "node", icon: <FaNodeJs /> },
    { id: "tailwind", icon: <SiTailwindcss /> },
    { id: "aws", icon: <FaAws /> },
    { id: "docker", icon: <FaDocker /> },
    { id: "github", icon: <FaGithub /> },
    { id: "typescript", icon: <SiTypescript /> },
    { id: "javascript", icon: <SiJavascript /> },
    { id: "python", icon: <SiPython /> },
    { id: "java", icon: <FaJava /> },
    { id: "graphql", icon: <SiGraphql /> },
    { id: "flutter", icon: <SiFlutter /> },
    { id: "expo", icon: <SiExpo /> },
    { id: "nestjs", icon: <SiNestjs /> },
    { id: "mongodb", icon: <SiMongodb /> },
    { id: "postgresql", icon: <SiPostgresql /> },
    { id: "supabase", icon: <SiSupabase /> },
    { id: "vercel", icon: <SiVercel /> },
    { id: "netlify", icon: <SiNetlify /> },
    { id: "git", icon: <FaGitAlt /> },
    { id: "figma", icon: <SiFigma /> },
    { id: "postman", icon: <SiPostman /> },
    { id: "jira", icon: <SiJira /> },
    { id: "tensorflow", icon: <SiTensorflow /> },
    { id: "pytorch", icon: <SiPytorch /> },
    { id: "pandas", icon: <SiPandas /> },
    { id: "numpy", icon: <SiNumpy /> },
];

export default function Home() {
    return (
        <main>
            <Header />
            {/* <StickyScroll content={content} /> */}
            <InfiniteScrollLogos
                icons={techIcons} // Pass the array of icon objects
                iconSize="text-5xl" // Example: Increase size
                iconColor="text-gray-600" // Example: Adjust default color
                iconHoverColor="hover:text-blue-400" // Example: Adjust hover color
                speed="normal"
            />
            {/* <TimelineSection /> */}
        </main>
    );
}
