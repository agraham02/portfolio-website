import React from "react";
import "../styles/Header.css";

export default function Header() {
    return (
        <header className="w-full h-screen flex flex-col justify-center align-baseline">
            <div className="w-full h-full absolute"></div>
            <div className="mx-auto flex flex-col items-center w-fit z-10 text-center">
                <h1 className="text-8xl mb-4">Ahmad Graham</h1>
                <h2 className="text-4xl mb-6 font-normal w-full">
                    <div className="flex flex-col mx-10 items-center">
                        <div className="flex justify-center items-center w-fit leading-snug">
                            A Computer Scientist Who Is
                        </div>
                        <div className="text-scroller overflow-y-hidden relative font-semibold w-52 m-2">
                            <div className="absolute top-0 w-full">
                                <div className="flex flex-col items-center">
                                    <p>Adaptable</p>
                                    <p>Resourceful</p>
                                    <p>Dedicated</p>
                                    <p>Curious</p>
                                    <p>Passionate</p>
                                    <p>Meticulous</p>
                                    <p>Resilient</p>
                                    <p>Thorough</p>
                                    <p>Empathetic</p>
                                    <p>Pragmatic</p>
                                    <p>Adaptable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </h2>
                <div className="flex w-9/12 text-center">
                    <CustomButton text="View Projects" />
                    <CustomButton text="Contact" type="secondary" />
                </div>
            </div>
            <svg
                className="w-10 h-10 self-center absolute bottom-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
            </svg>
        </header>
    );
}

function CustomButton({ text, type }) {
    const primaryStyle =
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 grow cursor-pointer";
    const secondaryStyle =
        "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 grow cursor-pointer";
    const tertiaryStyle = "";
    let style = primaryStyle;

    if (type == "secondary") {
        style = secondaryStyle;
    }

    return <div className={style}>{text}</div>;
}