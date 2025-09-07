"use client";

import OpenSourceProjects from "@/components/projects/OpenSourceProjects";
import ProjectsHero from "@/components/projects/ProjectsHero";
import PersonalLaunched from "@/components/projects/PersonalLaunched";
import ClientProjects from "@/components/projects/ClientProjects";
import ArchivedProjects from "@/components/projects/ArchivedProjects";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen">
            <ProjectsHero />
            <PersonalLaunched />
            <ClientProjects />
            <ArchivedProjects />
            <OpenSourceProjects />
        </div>
    );
};

export default ProjectsPage;
