import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface FeaturedProjectsProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
  onViewAllClick?: () => void;
}

const FeaturedProjects = ({
  title = "Featured Projects",
  subtitle = "A selection of my recent work and personal projects; please note that these are not all my projects and only the contents placeholders. It is a work in progress.",
  projects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment processing.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: "2",
      title: "AI Content Generator",
      description:
        "An AI-powered application that creates custom content based on user preferences and requirements.",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&q=80",
      technologies: ["Python", "TensorFlow", "OpenAI API", "Flask"],
    },
    {
      id: "3",
      title: "Financial Dashboard",
      description:
        "Interactive dashboard for tracking investments, expenses, and financial goals with data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    },
    {
      id: "4",
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics platform for tracking social media performance across multiple platforms.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      technologies: ["React", "Redux", "Express", "PostgreSQL"],
    },
  ],
  onViewAllClick = () => console.log("View all projects clicked"),
}: FeaturedProjectsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full bg-black py-20" id="featured-projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-montserrat mb-4 text-4xl font-bold text-white md:text-5xl">
            {title}
          </h2>
          <p className="font-opensans mx-auto max-w-2xl text-lg text-[#C0C0C0]">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                onClick={() => console.log(`Project ${project.id} clicked`)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button
            onClick={onViewAllClick}
            className="border-[#C0C0C0] bg-transparent px-8 py-6 text-lg font-bold text-white hover:bg-[#C0C0C0] hover:text-black"
            variant="outline"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
