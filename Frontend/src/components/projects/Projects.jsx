import React from "react";
import { Divider, ProjectCard } from "../index";
import { projects } from "./projectDetails.js";

function Projects() {
  return (
    <>
      <div
        id="projects"
        className="w-full min-h-full relative bg-black text-muted-foreground p-18 "
      >
        <div>
          <span className="text-primary font-mono tracking-widest">
            $ ls <span className="text-foreground">projects/</span>
            <span className="cursor animate-pulse">_</span>
          </span>
        </div>
        <div className="grid grid-cols-2 pt-10 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Projects;
