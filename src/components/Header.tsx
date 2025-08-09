"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 bg-white">
            {/* Left Side */}
            <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Hi, I&apos;m <span className="text-blue-600">John Doe</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-700 mb-4">
                    Software Engineer &amp; Problem Solver
                </h2>
                <p className="text-gray-600 mb-6">
                    I build exceptional digital experiences with clean code and
                    user-centered design. Specialized in web applications that
                    deliver real business value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="#work">
                        <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-700 transition">
                            View My Work
                        </button>
                    </Link>
                    <Link href="#contact">
                        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
                            Contact Me
                        </button>
                    </Link>
                </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="mb-8 lg:mb-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                    <Image
                        src="/assets/profile.jpg"
                        alt="Typing on laptop"
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
