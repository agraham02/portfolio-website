import React from "react";

export default function Header() {
    return (
        <header className="w-full h-screen flex flex-col justify-center align-baseline bg-neutral-300 relative">
            <div className="mx-8 w-fit">
                <h1 className="text-8xl">Ahmad Graham</h1>
                <strong className="text-5xl inline-block mb-6 mt-2 font-normal">
                    Sub-title Text
                </strong>
                <div className="flex w-9/12 text-center">
                    <CustomButton text="Button 1" />
                    <CustomButton text="Button 2" type="secondary" />
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 self-center absolute bottom-0"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
            </svg>
        </header>
    );
}

function CustomButton({text, type}) {
    const primaryStyle =
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 grow cursor-pointer";
    const secondaryStyle =
        "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 grow cursor-pointer";
    const tertiaryStyle = "";
    let style = primaryStyle;

    if (type == "secondary") {
        style = secondaryStyle
    }

    return (
        <div className={style}>
            {text}
        </div>
    );
}
