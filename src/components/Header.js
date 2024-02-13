import React from "react";
import "../styles/Header.css";

export default function Header() {
    return (
        <header className="w-full h-screen flex flex-col justify-center align-baseline bg-neutral-300 relative">
            <div className="mx-8 w-fit">
                <h1 className="text-8xl mb-4">Ahmad Graham</h1>
                <strong className="text-4xl mb-6 font-normal flex items-center justify-center">
                    <div className="flex items-center justify-center">
                        Sub-Title Text
                    </div>
                    <div className="text-scroller relative font-semibold overflow-y-hidden grow">
                        <span className="absolute top-0 mx-4">
                            <p>Cool</p>
                            <p>Art</p>
                            <p>Intruiging</p>
                            <p>Challenging</p>
                            <p>Cool</p>
                        </span>
                    </div>
                </strong>
                <div className="flex w-9/12 text-center">
                    <CustomButton text="Button 1" />
                    <CustomButton text="Button 2" type="secondary" />
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
