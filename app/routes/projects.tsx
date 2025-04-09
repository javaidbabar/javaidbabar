import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project, projects } from "@/data";

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "AI/ML",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" || project.category.includes(activeCategory)
  );

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="font-heading mb-4 text-5xl font-bold text-white">
              Projects
            </h1>
            <p className="font-opensans mx-auto max-w-2xl text-lg text-[#C0C0C0]">
              A showcase of my technical projects and professional work.
            </p>
          </motion.div>

          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full border border-gray-700 transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-white text-black font-bold"
                      : "bg-transparent text-white hover:border-[#C0C0C0] hover:text-[#C0C0C0]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  onClick={() => handleProjectClick(project)}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="bg-gray-900 text-white border border-gray-800 max-w-4xl max-h-[80vh] overflow-hidden">
            <DialogHeader className="sticky top-0 bg-gray-900 flex justify-between">
              <div>
                <DialogTitle className="font-heading text-2xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="font-opensans text-[#A0A0A0]">
                    {selectedProject.category.join(" | ")}
                </DialogDescription>
              </div>
            </DialogHeader>

            <div
              className="overflow-y-auto max-h-[calc(80vh-100px)]"
              style={{
                scrollbarColor: "gray transparent",
                scrollbarWidth: "thin",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg object-cover"
                  />

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-[#C0C0C0] text-black">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    {selectedProject.liveUrl && (
                      <Button
                        className="bg-white text-black hover:bg-[#C0C0C0] flex items-center gap-2"
                        onClick={() =>
                          window.open(selectedProject.liveUrl, "_blank")
                        }
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    )}

                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="border-[#C0C0C0] text-white hover:bg-[#C0C0C0] hover:text-black flex items-center gap-2"
                        onClick={() =>
                          window.open(selectedProject.githubUrl, "_blank")
                        }
                      >
                        <Github size={16} />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Overview
                  </h3>
                  <p className="font-opensans text-gray-300 mb-4">
                    {selectedProject.fullDescription}
                  </p>

                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Key Features
                  </h3>
                  <ul className="list-disc pl-5 mb-4 font-opensans text-gray-300">
                    {selectedProject.features?.map((feature, index) => (
                      <li key={index} className="mb-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedProject.screenshots &&
                selectedProject.screenshots.length > 1 && (
                  <div className="mt-6">
                    <h3 className="font-heading text-lg font-bold text-white mb-3">
                      Additional Screenshots
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${
                            index + 2
                          }`}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
