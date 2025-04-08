"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold text-gray-900">
                        &lt;<span className="text-blue-600">Portfolio</span>
                        /&gt;
                    </span>
                </Link>

                {/* Nav links */}
                <nav className="flex items-center space-x-8 text-gray-700 font-medium">
                    <Link
                        href="#about"
                        className="hover:text-blue-600 transition"
                    >
                        About
                    </Link>
                    <Link
                        href="#skills"
                        className="hover:text-blue-600 transition"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#projects"
                        className="hover:text-blue-600 transition"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-blue-600 transition"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
}
