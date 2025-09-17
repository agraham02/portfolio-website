"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MoveRight, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "../ui/aurora-background";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { EMAIL, RESUME_URL } from "@/lib/const";

function Content() {
    return (
        <div className="container mx-auto max-w-7xl relative z-10">
            {/* Left side - Text content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
            >
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for work
                </motion.div>

                {/* Main heading with staggered animation */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    >
                        <span className="block">Hi, I&apos;m</span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-primary"
                        >
                            Ahmad Graham
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-xl md:text-2xl font-semibold text-muted-foreground"
                    >
                        A{" "}
                        <div className="inline-block mx-1">
                            <ContainerTextFlip
                                words={[
                                    "Passionate",
                                    "Creative",
                                    "Collaborative",
                                    "Resilient",
                                    "Precise",
                                    "Resourceful",
                                ]}
                            />
                        </div>{" "}
                        Software Engineer
                    </motion.div>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
                >
                    I craft exceptional digital experiences through clean code
                    and innovative solutions. Passionate about full-stack
                    development, cloud technologies, and creating software that
                    makes a difference.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/projects">
                        <Button size="lg" className="group text-lg px-8 py-6">
                            View My Work
                            <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <Link
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 py-6"
                        >
                            View Resume
                            <ExternalLink className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href={`mailto:${EMAIL}`}>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-lg px-8 py-6"
                        >
                            Get in Touch
                            <Mail className="h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
                >
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                            10+
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Projects
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                            3+
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Years Experience
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                            100%
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Client Satisfaction
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

const HeroSection = () => {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mx-10 my-2"
            >
                <Content />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </AuroraBackground>
    );
};

export default HeroSection;
