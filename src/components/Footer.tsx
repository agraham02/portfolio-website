
export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 p-3">
            <div className="w-full mx-auto max-w-screen-xl whitespace-nowrap flex flex-wrap justify-between items-center">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-2">
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
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 mx-2">
                    <li>
                        <a href="#" className="hover:underline">
                            Back to top
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center">
                Created by {" "} 
                <a
                    href="https://ahmadgraham.me/"
                    className="hover:underline mx-1"
                    target="_blank"
                >
                    Ahmad Graham
                </a>
            </div>
        </footer>
    );
}
