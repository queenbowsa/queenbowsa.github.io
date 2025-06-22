import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { projects } from "../../data/project.data.js";
import { imageMap } from "./utils/imageMap.jsx";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are a few projects I’ve built. I’m always exploring new ideas, so
          expect this section to keep growing. This is just the beginning.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-8 ${
            projects.length >= 3 ? "lg:grid lg:grid-cols-3" : ""
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-100"
            >
              <div className="h-100 overflow-hidden">
                <img
                  src={imageMap[project.visualKey]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={`${project.id}-${tag}-${i}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    ) : (
                      <span className="text-muted" title="Private Repo">
                        <FaLock size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
