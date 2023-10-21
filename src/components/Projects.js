import React from "react";
import "../styles/Projects.css";
import mongoDbLogo from "../company-logos/MongoDB_White.svg";
import reactLogo from "../company-logos/React-icon.svg";
import androidLogo from "../company-logos/Android_logo.svg";

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
    const figmaSVG = (
        <svg
            width="42"
            height="61"
            viewBox="0 0 42 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 30.5C21 27.9804 22.0009 25.5641 23.7825 23.7825C25.5641 22.0009 27.9804 21 30.5 21C33.0196 21 35.4359 22.0009 37.2175 23.7825C38.9991 25.5641 40 27.9804 40 30.5C40 33.0196 38.9991 35.4359 37.2175 37.2175C35.4359 38.9991 33.0196 40 30.5 40C27.9804 40 25.5641 38.9991 23.7825 37.2175C22.0009 35.4359 21 33.0196 21 30.5V30.5Z"
                stroke="#1E1E1E"
                stroke-width="3.5"
            />
            <path
                d="M2 49.5C2 46.9804 3.00089 44.5641 4.78249 42.7825C6.56408 41.0009 8.98044 40 11.5 40H21V49.5C21 52.0196 19.9991 54.4359 18.2175 56.2175C16.4359 57.9991 14.0196 59 11.5 59C8.98044 59 6.56408 57.9991 4.78249 56.2175C3.00089 54.4359 2 52.0196 2 49.5Z"
                stroke="#1E1E1E"
                stroke-width="3.5"
            />
            <path
                d="M21 2V21H30.5C33.0196 21 35.4359 19.9991 37.2175 18.2175C38.9991 16.4359 40 14.0196 40 11.5C40 8.98044 38.9991 6.56408 37.2175 4.78249C35.4359 3.00089 33.0196 2 30.5 2L21 2Z"
                stroke="#1E1E1E"
                stroke-width="3.5"
            />
            <path
                d="M2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21H21V2H11.5C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5Z"
                stroke="#1E1E1E"
                stroke-width="3.5"
            />
            <path
                d="M2 30.5C2 33.0196 3.00089 35.4359 4.78249 37.2175C6.56408 38.9991 8.98044 40 11.5 40H21V21H11.5C8.98044 21 6.56408 22.0009 4.78249 23.7825C3.00089 25.5641 2 27.9804 2 30.5Z"
                stroke="#1E1E1E"
                stroke-width="3.5"
            />
        </svg>
    );

    return (
        <div class="scroll-parent">
            <div className="scroll-element primary">
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
            </div>
            <div className="scroll-element secondary">
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
                <div className="scroll-item">Logo</div>
            </div>
        </div>
    );

    return (
        <div className="bg bg-zinc-800 text-gray-300 flex space-x-24 overflow-hidden w-full p-4">
            {/* <img src={mongoDbLogo} className="w-40" />
            <img src={androidLogo} className="w-16" />
            <img src={reactLogo} className="w-16" /> */}
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
            <div>Logo</div>
        </div>
    );
}
