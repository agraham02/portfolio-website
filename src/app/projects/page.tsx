import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectCarousel from "@/components/projects/ProjectCarousel";
import OpenSourceProjects from "@/components/projects/OpenSourceProjects";
import { allProjects, Project } from "@/lib/projectsData";
import CallToActionSection from "@/components/home/CallToActionSection";

const isArchivedOrScrapped = (p: Project) =>
    p.scope === "scrapped" ||
    p.status === "archived" ||
    p.status === "scrapped";

const isPersonal = (p: Project) => p.scope === "personal";

const isClient = (p: Project) => p.scope === "client";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen">
            <ProjectsHero />

            <ProjectCarousel
                title="Launched Projects"
                subtitle="Production apps I own and shipped."
                projects={allProjects.filter(isPersonal)}
            />
            <ProjectCarousel
                title="Client Work"
                subtitle="Shipped projects delivered as a freelancer/consultant."
                projects={allProjects.filter(isClient)}
            />
            <ProjectCarousel
                title="Archived & Scrapped"
                subtitle="Experiments and unlaunched work with takeaways."
                projects={allProjects.filter(isArchivedOrScrapped)}
            />

            <OpenSourceProjects />

            <CallToActionSection />
        </div>
    );
};

export default ProjectsPage;
