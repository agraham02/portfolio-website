import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 p-4">
            <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a
                        href="https://ahmadgraham.me/"
                        className="hover:underline"
                        target="_blank"
                    >
                        Ahmad Graham
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline">
                            Back to top
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Created by{" "}
                <a
                    href="https://ahmadgraham.me/"
                    className="hover:underline"
                    target="_blank"
                >
                    Ahmad Graham
                </a>
            </div>
        </footer>
    );
}
