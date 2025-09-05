"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Heart, Code, Coffee, Zap } from "lucide-react";

export default function Footer({ version }: { version?: string }) {
    const footerLinks = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    const socialLinks = [
        {
            href: "https://github.com/agraham02",
            icon: FaGithub,
            label: "GitHub",
            color: "hover:text-gray-300",
        },
        {
            href: "https://www.linkedin.com/in/ahmad-graham",
            icon: FaLinkedin,
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            href: "mailto:ahmadgrahamdev@gmail.com",
            icon: HiOutlineMail,
            label: "Email",
            color: "hover:text-red-400",
        },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 text-gray-300 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Branding & Tagline */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl font-bold mb-4">
                                    &lt;
                                    <span className="text-blue-400">
                                        Ahmad Graham
                                    </span>{" "}
                                    /&gt;
                                </h1>
                                <p className="text-lg text-gray-400 mb-6 max-w-md">
                                    Building digital experiences with clean code
                                    and innovative solutions.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>Made with</span>
                                    <Heart
                                        size={16}
                                        className="text-red-400 animate-pulse"
                                    />
                                    <span>and</span>
                                    <Coffee
                                        size={16}
                                        className="text-amber-400"
                                    />
                                    <span>by a passionate developer</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <Code size={18} className="text-blue-400" />
                                    Quick Links
                                </h3>
                                <nav className="space-y-3">
                                    {footerLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="block text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </motion.div>
                        </div>

                        {/* Contact & Connect */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <Zap size={18} className="text-cyan-400" />
                                    Let&apos;s Connect
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.div
                                                key={social.href}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                <Link
                                                    href={social.href}
                                                    target={
                                                        social.href.startsWith(
                                                            "mailto:"
                                                        )
                                                            ? "_self"
                                                            : "_blank"
                                                    }
                                                    aria-label={social.label}
                                                    className={`group flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${social.color} transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-600/50 hover:scale-105`}
                                                >
                                                    <IconComponent className="text-xl group-hover:scale-110 transition-transform duration-200" />
                                                    <span className="text-sm font-medium opacity-80 group-hover:opacity-100">
                                                        {social.label}
                                                    </span>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent my-8"
                    />

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
                    >
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <span>
                                © 2025 Ahmad Graham. All rights reserved.
                            </span>
                            <span className="hidden md:inline">•</span>
                            <span className="hidden md:inline">
                                Built with Next.js & TypeScript
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link
                                href="/privacy"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/terms"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Terms
                            </Link>
                            <div className="text-xs bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
                                {version ? `v${version}` : "v1.0.0"}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
