import { type Project } from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({
    title,
    subtitle,
    projects,
}: {
    title: string;
    subtitle: string;
    projects: Project[];
}) {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                    <p className="text-muted-foreground">{subtitle}</p>
                </div>

                {projects.length === 0 ? (
                    <p className="text-center text-muted-foreground">
                        No projects to show here yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p) => (
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
