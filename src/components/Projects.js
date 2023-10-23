import React from "react";
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

export default function Projects() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-5xl">Projects</h2>
            <SearchBar />
            {/* <div>Filter</div> */}
            <ProjectCardGrid />
            <a
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 cursor-pointer"
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

function SearchBar() {
    return (
        <form className="w-8/12 m-5">
            <div class="flex">
                <label
                    for="search-dropdown"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Your Email
                </label>
                <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                    type="button"
                >
                    All categories{" "}
                    <svg
                        class="w-2.5 h-2.5 ml-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
                <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                    >
                        <li>
                            <button
                                type="button"
                                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Mockups
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Templates
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Design
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Logos
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos, Design Templates..."
                        required
                    />
                    <button
                        type="submit"
                        class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

function ProjectCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className="overflow-hidden">
                <img src="/defaul-image.jpg" />
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Card Title
                </h3>
                <p className="mb-3 font-norma text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi orci ligula, sodales et libero.
                </p>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                    Expand
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
            </div>
        </div>
    );
}

function ProjectCardGrid() {
    return (
        <div className="grid grid-cols-3 gap-8 m-5 mx-20">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
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

function ScrollBannerElement({ type }) {
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
