import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-300 px-6 py-12">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between">
                {/* Branding & Tagline */}
                <div>
                    <h1 className="text-2xl font-bold">
                        &lt;<span className="text-blue-500">Portfolio</span>
                        /&gt;
                    </h1>
                    <p className="mt-2 text-gray-400">
                        Building digital experiences with clean code
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center space-x-5 text-2xl text-gray-400">
                    <Link
                        href="https://github.com/"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <FaGithub className="hover:text-white transition" />
                    </Link>
                    <Link
                        href="https://linkedin.com/"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="hover:text-white transition" />
                    </Link>
                    <Link
                        href="https://twitter.com/"
                        target="_blank"
                        aria-label="Twitter"
                    >
                        <FaTwitter className="hover:text-white transition" />
                    </Link>
                    <Link
                        href="mailto:youremail@example.com"
                        aria-label="Email"
                    >
                        <HiOutlineMail className="hover:text-white transition" />
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6" />

            {/* Bottom row */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-400">
                <p>© 2025 John Doe. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#about" className="hover:text-white transition">
                        About
                    </Link>
                    <Link
                        href="#skills"
                        className="hover:text-white transition"
                    >
                        Skills
                    </Link>
                    <Link
                        href="#projects"
                        className="hover:text-white transition"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-white transition"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
