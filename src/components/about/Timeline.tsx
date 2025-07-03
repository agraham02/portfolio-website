import { timelineData } from "./timelineData";
import { Timeline } from "@/components/ui/timeline";
import ImageGrid from "@/components/ui/image-grid";
import { motion } from "framer-motion";

export default function TimelineSection() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.section
            className="py-20 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-950/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
        >
            <div className="max-w-6xl mx-auto md:px-4">
                <motion.div className="text-center mb-8 px-8" variants={fadeInUp}>
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
                        My Journey
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        From self-taught beginner to full-stack engineer, here's
                        how I've grown through real projects, internships, and
                        continuous learning.
                    </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="w-full">
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
