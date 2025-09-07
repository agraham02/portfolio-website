"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredProjects, type Project } from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";

const isLaunchedPersonal = (p: Project) =>
    p.scope === "personal" &&
    p.status === "completed" &&
    (p.category === "web" || p.category === "mobile");

export default function PersonalLaunched() {
    const projects = featuredProjects.filter(isLaunchedPersonal);

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Launched Projects
                    </h2>
                    <p className="text-muted-foreground">
                        Production apps I own and shipped.
                    </p>
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        No launched projects to show yet.
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
                            //     <Card className="p-5 h-full bg-card/80 backdrop-blur border">
                            //         <div className="flex items-center gap-2 mb-3">
                            //             <Badge
                            //                 variant="outline"
                            //                 className="text-xs capitalize"
                            //             >
                            //                 {p.category}
                            //             </Badge>
                            //             <Badge className="text-xs">
                            //                 Launched
                            //             </Badge>
                            //         </div>
                            //         <h3 className="text-xl font-semibold">
                            //             {p.title}
                            //         </h3>
                            //         <p className="text-sm text-muted-foreground mt-2">
                            //             {p.description}
                            //         </p>

                            //         {p.technologies?.length ? (
                            //             <div className="flex flex-wrap gap-1 mt-4">
                            //                 {p.technologies
                            //                     .slice(0, 6)
                            //                     .map((t) => (
                            //                         <Badge
                            //                             key={t}
                            //                             variant="secondary"
                            //                             className="text-xs"
                            //                         >
                            //                             {t}
                            //                         </Badge>
                            //                     ))}
                            //             </div>
                            //         ) : null}

                            //         <div className="mt-5 flex gap-2">
                            //             {p.demoUrl && (
                            //                 <Button asChild size="sm">
                            //                     <a
                            //                         href={p.demoUrl}
                            //                         target="_blank"
                            //                         rel="noreferrer noopener"
                            //                     >
                            //                         View
                            //                     </a>
                            //                 </Button>
                            //             )}
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
                            //                         Code
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
