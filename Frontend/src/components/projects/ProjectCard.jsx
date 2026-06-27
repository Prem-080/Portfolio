import React from "react";

function ProjectCard({ project }) {
  return (
    <>
      <div
        key={project.id}
        className="border border-border rounded-xl overflow-hidden bg-background hover:border-primary transition-all duration-300"
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            alt={project.title}
            src={project.image}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{project.title}</h2>

          <p className="text-muted-foreground mt-3">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-border text-sm font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="border px-4 py-2 rounded-lg hover:border-primary"
            >
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-black px-4 py-2 rounded-lg"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
