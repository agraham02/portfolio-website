import { timelineData } from "./timelineData";
import { Timeline } from "@/components/ui/timeline";
import ImageGrid from "@/components/ui/image-grid";
import { motion } from "motion/react";

export default function TimelineSection() {
    const fadeIn = { duration: 0.6, ease: "easeOut" as const };

    return (
        <motion.section
            className="py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-6xl mx-auto md:px-4">
                <motion.div
                    className="text-center mb-8 px-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={fadeIn}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
                        My Journey
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        From self-taught beginner to full-stack engineer,
                        here&apos;s how I&apos;ve grown through real projects,
                        internships, and continuous learning.
                    </p>
                </motion.div>
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ...fadeIn, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Timeline
                        data={timelineData.map((entry) => ({
                            title: entry.title,
                            content: (
                                <div>
                                    {entry.paragraphs.map((text, i) => (
                                        <p
                                            key={i}
                                            className="text-slate-600 dark:text-slate-300 text-xl md:text-lg font-normal mb-8 leading-relaxed whitespace-pre-line"
                                        >
                                            {text}
                                        </p>
                                    ))}
                                    <ImageGrid images={entry.images} />
                                </div>
                            ),
                        }))}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}
