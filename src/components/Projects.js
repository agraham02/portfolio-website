import React from "react";
import ProjectCard from "./sub-components/ProjectCard";

export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div>
                <div>Search</div>
                <div>Filter</div>
            </div>
            <ProjectCardGrid />
            <div>More on GitHub</div>
            <InfiniteScrollBanner />
        </div>
    );
}

function ProjectCardGrid() {
    return (
        <div>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

function InfiniteScrollBanner() {
  return (
      <div>
          <div>Logo</div>
          <div>Logo</div>
          <div>Logo</div>
          <div>Logo</div>
          <div>Logo</div>
      </div>
  );
}
