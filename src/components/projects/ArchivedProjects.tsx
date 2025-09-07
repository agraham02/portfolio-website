"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProjects, type Project } from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";

const isArchivedOrScrapped = (p: Project) =>
    p.scope === "scrapped" ||
    p.status === "archived" ||
    p.status === "scrapped";

export default function ArchivedProjects() {
    const projects = featuredProjects.filter(isArchivedOrScrapped);

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Archived & Scrapped
                    </h2>
                    <p className="text-muted-foreground">
                        Experiments and unlaunched work with takeaways.
                    </p>
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        Nothing to show here yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p) => (
                            // <motion.div
                            //     key={p.id}
                            //     initial={{ opacity: 0, y: 16 }}
                            //     whileInView={{ opacity: 1, y: 0 }}
                            //     viewport={{ once: true }}
                            //     transition={{ duration: 0.4 }}
                            // >
                            //     <Card className="p-5 h-full bg-card/60 backdrop-blur border-dashed">
                            //         <div className="flex items-center gap-2 mb-3">
                            //             <Badge
                            //                 variant="destructive"
                            //                 className="text-xs"
                            //             >
                            //                 Scrapped
                            //             </Badge>
                            //             <Badge
                            //                 variant="outline"
                            //                 className="text-xs capitalize"
                            //             >
                            //                 {p.category}
                            //             </Badge>
                            //         </div>
                            //         <h3 className="text-xl font-semibold">
                            //             {p.title}
                            //         </h3>
                            //         <p className="text-sm text-muted-foreground mt-2">
                            //             {p.description}
                            //         </p>

                            //         {p.lessons?.length ? (
                            //             <ul className="mt-4 space-y-2">
                            //                 {p.lessons
                            //                     .slice(0, 3)
                            //                     .map((l, i) => (
                            //                         <li
                            //                             key={i}
                            //                             className="text-xs text-muted-foreground"
                            //                         >
                            //                             • {l}
                            //                         </li>
                            //                     ))}
                            //             </ul>
                            //         ) : null}
                            //         {p.reason && (
                            //             <p className="text-xs text-muted-foreground mt-3 italic">
                            //                 Why it was scrapped: {p.reason}
                            //             </p>
                            //         )}

                            //         <div className="mt-5 flex flex-wrap gap-2">
                            //             {p.githubUrl && (
                            //                 <Button
                            //                     asChild
                            //                     size="sm"
                            //                     variant="outline"
                            //                 >
                            //                     <a
                            //                         href={p.githubUrl}
                            //                         target="_blank"
                            //                         rel="noreferrer noopener"
                            //                     >
                            //                         Source
                            //                     </a>
                            //                 </Button>
                            //             )}
                            //             {p.demoUrl && (
                            //                 <Button asChild size="sm">
                            //                     <a
                            //                         href={p.demoUrl}
                            //                         target="_blank"
                            //                         rel="noreferrer noopener"
                            //                     >
                            //                         Demo
                            //                     </a>
                            //                 </Button>
                            //             )}
                            //         </div>
                            //     </Card>
                            // </motion.div>
                            <ProjectCard
                                project={p}
                                isActive={true}
                                key={p.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
