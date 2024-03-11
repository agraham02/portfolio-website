import { useEffect, useState } from "react";
import "../styles/Projects.css";

import awsLogo from "../company-logos/Amazon_Web_Services_Logo.svg";
import androidLogo from "../company-logos/Android_logo.svg";
import androidStudioLogo from "../company-logos/Android_Studio_Icon_3.6.svg";
// import cLogo from "../company-logos/C_Programming_Language.svg";
import cSharpLogo from "../company-logos/C_sharp.svg";
import expressLogo from "../company-logos/expressjs-ar21.svg";
import figmaLogo from "../company-logos/Figma-logo.svg";
// import javaLogo from "../company-logos/Java-Logo.svg";
import javascriptLogo from "../company-logos/JavaScript_logo.svg";
import mongoDbLogo from "../company-logos/MongoDB_Spring-Green.svg";
import nodeLogo from "../company-logos/Node.js_logo.svg";
import postgresLogo from "../company-logos/Postgresql_elephant.svg";
// import pythonLogo from "../company-logos/Python-logo.svg";
import reactLogo from "../company-logos/React-icon.svg";
import reactNativeLogo from "../company-logos/react-native-1.svg";
import swiftLogo from "../company-logos/Swift_logo.svg";
// import tensorFlowLogo from "../company-logos/Tensorflow_logo.svg";
import unityLogo from "../company-logos/Unity_Technologies_logo.svg";
import xcodeLogo from "../company-logos/xcode-seeklogo.com.svg";
import {
    AnimatePresence,
    // AnimateSharedLayout,
    motion,
    LayoutGroup,
    // stagger,
} from "framer-motion";
import { timeAgo } from "../utils/useTimeAgo";

export default function Projects() {
    const [searchWord, setSearchWord] = useState("");

    return (
        <div className="flex flex-col items-center my-6" id="projects">
            <h2 className="text-5xl m-2">Projects</h2>
            <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
            <ProjectCardGrid
                searchWord={searchWord}
            />
            <a
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 cursor-pointer"
                href="https://github.com/agraham02"
                target="_blank"
            >
                View on GitHub
                <svg
                    className="w-3 h-3 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                </svg>
            </a>
            <InfiniteScrollBanner />
        </div>
    );
}

function SearchBar({
    searchWord,
    setSearchWord,
}: {
    searchWord: string;
    setSearchWord: Function;
}) {
    return (
        <div className="w-8/12 m-5">
            <div className="flex">
                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search projects..."
                        value={searchWord}
                        onChange={(e) => setSearchWord(e.target.value)}
                        required
                    />
                </div>
            </div>
        </div>
    );
}

interface Project {
    name: string;
    title: string;
    createdAt: Date;
    description: string;
    link: string;
    updatedAt: Date;
    pushedAt: Date;
    topics: Array<string>;
    url: string;
    id: number;
}

function ProjectCardGrid({ searchWord }: { searchWord: string }) {
    const [projects, setProjects] = useState<Array<Project>>([]);
    const [filteredProjects, setFilteredProjects] = useState<Array<Project>>(
        []
    );
    const [isLoading, setIsLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    // const [opacity, setOpacity] = useState(0);
    // const [isVisible, setIsVisible] = useState(false);
    // const staggerProjectItems = stagger(0.1, { startDelay: 0.15 });

    function filterProjects(searchWord: string) {
        if (!searchWord) {
            setFilteredProjects(projects); // Return all projects if searchWord is empty
            return;
        }

        const searchWordLower = searchWord.toLowerCase();
        const newFilteredProjects = projects.filter(
            (project) =>
                project.name.toLowerCase().includes(searchWordLower) ||
                project.description?.toLowerCase().includes(searchWordLower) ||
                project.title?.toLowerCase().includes(searchWordLower)
        );

        setFilteredProjects(newFilteredProjects);
    }

    useEffect(() => {}, [searchWord, projects]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            filterProjects(searchWord);
            // Send Axios request here
        }, 400);

        return () => clearTimeout(delayDebounceFn);
    }, [searchWord, projects]);

    function capitalizeTitle(title: string) {
        // Helper function to capitalize the first letter of a word
        function capitalize(word: string) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }

        // Improved regex to split title; avoids splitting acronyms
        // Splits on hyphens, underscores, or between lowercase to uppercase transitions not preceded by uppercase (to keep acronyms together)
        const words = title.split(/[-_]|(?<![A-Z])(?=[A-Z])/).map((word) => {
            // Only capitalize if the word is not an acronym
            // console.log(word);
            if (word.toUpperCase() !== word) {
                if (word === "api") return word.toUpperCase();
                return capitalize(word);
            }
            return word;
        });

        // Join the words with spaces
        return words.join(" ");
    }

    interface GitHubProject {
        name: string;
        created_at: string;
        updated_at: string;
        pushed_at: string;
        description: string;
        homepage: string;
        topics: string[];
        html_url: string;
        id: number;
    }

    async function fetchGitHubProjects() {
        try {
            const response = await fetch(
                "https://api.github.com/users/agraham02/repos",
                { method: "GET" }
            );
            const jsonData = await response.json();
            // console.log(jsonData);
            const projectsData = jsonData.map((project: GitHubProject) => ({
                name: project.name,
                title: capitalizeTitle(project.name),
                createdAt: new Date(project.created_at),
                description: project.description,
                link: project.homepage,
                updatedAt: new Date(project.updated_at),
                pushedAt: new Date(project.pushed_at),
                topics: project.topics,
                url: project.html_url,
                id: project.id,
            }));
            // console.log(projectsData);
            setProjects(projectsData);
            setFilteredProjects(projectsData);
        } catch (error) {
            setLoadingError(true);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchGitHubProjects();
    }, []);

    if (isLoading) {
        return (
            <div role="status" className="m-5">
                <svg
                    aria-hidden="true"
                    className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        );
    } else {
        if (loadingError) {
            return (
                <div className="m-5">
                    Cannot fetch projects from GitHub at this time.
                </div>
            );
        } else {
            if (projects.length > 0) {
                return (
                    <LayoutGroup>
                        <motion.div
                            id="projectsGridSection"
                            className="w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center m-6"
                            layout
                        >
                            <AnimatePresence>
                                {filteredProjects.map(
                                    (project: Project, index) => (
                                        <ProjectCard
                                            project={project}
                                            index={index}
                                            // opacity={opacity}
                                            // isVisible={isVisible}
                                            key={project.id}
                                        />
                                    )
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </LayoutGroup>
                );
            } else {
                return (
                    <div className="m-5">
                        No projects to display at this time.
                    </div>
                );
            }
        }
    }
}

function ProjectCard({
    project,
    index,
    // opacity,
    // isVisible,
}: {
    project: Project;
    index: number;
    // opacity: number;
    // isVisible: boolean;
}) {
    return (
        <motion.div
            id={`project-card-${index}`}
            className={`project-card h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden p-5 flex flex-col`}
            // style={{ transitionDelay: `${index * 200}ms` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
            key={project.id}
        >
            {/* <div className="overflow-hidden">
                <img src="/defaul-image.jpg" />
            </div> */}
            <div className="space-y-2 pb-3">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                </h3>
                <p className=" text-gray-700 dark:text-gray-400">
                    {project.description}
                </p>
                <div className="te text-sm text-gray-400">
                    Created {project.createdAt.toLocaleDateString()} • Last
                    updated {timeAgo.format(project.updatedAt)}
                </div>
                <div className="topics-container flex overflow-x-auto space-x-2">
                    {project.topics.map((topic) => (
                        <div
                            className="border-2 rounded-2xl whitespace-nowrap px-3"
                            key={project.id + "" + topic}
                        >
                            {topic}
                        </div>
                    ))}
                </div>
            </div>
            <a href={project.url} target="_blank">
                <div className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                    GitHub
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </div>
            </a>
        </motion.div>
    );
}

function InfiniteScrollBanner() {
    return (
        <div className="scroll-parent bg-zinc-800">
            <ScrollBannerElement type="primary" />
            <ScrollBannerElement type="secondary" />
        </div>
    );
}

function ScrollBannerElement({ type }: { type: string }) {
    return (
        <div className={`scroll-element ${type}`}>
            <img src={figmaLogo} className="w-16" />
            <img src={reactLogo} className="w-16" />
            <img src={mongoDbLogo} className="w-16" />
            <img src={javascriptLogo} className="w-16" />
            <img src={reactNativeLogo} className="w-16" />
            <img src={expressLogo} className="w-16" />
            <img src={swiftLogo} className="w-16" />
            <img src={postgresLogo} className="w-16" />
            <img src={nodeLogo} className="w-16" />
            <img src={cSharpLogo} className="w-16" />
            <img src={androidLogo} className="w-16" />
            <img src={xcodeLogo} className="w-16" />
            <img src={unityLogo} className="w-16" />
            <img src={androidStudioLogo} className="w-16" />
            <img src={awsLogo} className="w-16" />
        </div>
    );
}
