import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  fullDescription?: string;
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    fullDescription:
      "A comprehensive e-commerce platform built for scalability and performance. This application features real-time inventory management, secure payment processing with Stripe, and a responsive admin dashboard for managing products, orders, and customer data.",
    features: [
      "User authentication and profile management",
      "Product catalog with advanced filtering and search",
      "Shopping cart and wishlist functionality",
      "Secure checkout with multiple payment options",
      "Order tracking and history",
      "Admin dashboard for inventory and order management",
      "Analytics and reporting tools",
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    screenshots: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    ],
  },
  {
    id: "2",
    title: "AI Content Generator",
    description:
      "An AI-powered application that creates custom content based on user preferences and requirements.",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&q=80",
    technologies: ["Python", "TensorFlow", "OpenAI API", "Flask"],
    category: "AI/ML",
    fullDescription:
      "This AI-powered content generation platform leverages advanced machine learning models to create high-quality, customized content for various purposes. The application integrates with OpenAI's GPT models and custom-trained models to generate blog posts, product descriptions, social media content, and more.",
    features: [
      "Content generation for multiple formats and purposes",
      "Customizable tone, style, and length settings",
      "SEO optimization suggestions",
      "Content editing and refinement tools",
      "User content library and organization",
      "API access for integration with other platforms",
      "Usage analytics and content performance metrics",
    ],
    liveUrl: "https://example.com/ai-content",
    githubUrl: "https://github.com/example/ai-content",
    screenshots: [
      "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=800&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    ],
  },
  {
    id: "3",
    title: "Financial Dashboard",
    description:
      "Interactive dashboard for tracking investments, expenses, and financial goals with data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    fullDescription:
      "A comprehensive financial dashboard that helps users track their investments, expenses, and financial goals. The application features interactive data visualizations, budget planning tools, and investment portfolio analysis to provide users with a complete overview of their financial health.",
    features: [
      "Expense tracking and categorization",
      "Budget planning and monitoring",
      "Investment portfolio management",
      "Financial goal setting and progress tracking",
      "Interactive charts and visualizations",
      "Bank account integration",
      "Customizable dashboard widgets",
      "Financial reports and insights",
    ],
    liveUrl: "https://example.com/financial-dashboard",
    githubUrl: "https://github.com/example/financial-dashboard",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics platform for tracking social media performance across multiple platforms.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    technologies: ["React", "Redux", "Express", "PostgreSQL"],
    category: "Full Stack",
    fullDescription:
      "This social media analytics platform provides businesses and content creators with comprehensive insights into their social media performance across multiple platforms. The application aggregates data from various social networks, offering unified analytics, audience insights, and content performance metrics.",
    features: [
      "Cross-platform social media data aggregation",
      "Audience demographics and engagement metrics",
      "Content performance analysis",
      "Competitor benchmarking",
      "Scheduled reporting and alerts",
      "Custom dashboard creation",
      "AI-powered content recommendations",
      "Campaign tracking and ROI measurement",
    ],
    liveUrl: "https://example.com/social-analytics",
    githubUrl: "https://github.com/example/social-analytics",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    ],
  },
  {
    id: "5",
    title: "Task Management System",
    description:
      "A collaborative task management application with real-time updates and team workflow features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    category: "Full Stack",
    fullDescription:
      "A collaborative task management system designed for teams to organize, track, and complete projects efficiently. The application features real-time updates, customizable workflows, and integration capabilities with other productivity tools.",
    features: [
      "Task creation, assignment, and tracking",
      "Project organization and milestone setting",
      "Real-time collaboration and updates",
      "Customizable workflows and board views",
      "Time tracking and reporting",
      "File sharing and document management",
      "Calendar integration and deadline reminders",
      "Mobile app for on-the-go management",
    ],
    liveUrl: "https://example.com/task-management",
    githubUrl: "https://github.com/example/task-management",
    screenshots: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    ],
  },
  {
    id: "6",
    title: "Health & Fitness Tracker",
    description:
      "A mobile-first application for tracking workouts, nutrition, and health metrics with personalized insights.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    category: "Mobile",
    fullDescription:
      "A comprehensive health and fitness tracking application that helps users monitor their workouts, nutrition, and overall health metrics. The app provides personalized insights and recommendations based on user data and goals, supporting a holistic approach to health and wellness.",
    features: [
      "Workout planning and tracking",
      "Nutrition logging and meal planning",
      "Health metrics monitoring (weight, sleep, heart rate)",
      "Goal setting and progress visualization",
      "Personalized recommendations and insights",
      "Social features for motivation and accountability",
      "Integration with fitness devices and apps",
      "Customizable dashboard and reports",
    ],
    liveUrl: "https://example.com/fitness-tracker",
    githubUrl: "https://github.com/example/fitness-tracker",
    screenshots: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    ],
  },
  {
    id: "7",
    title: "Real Estate Marketplace",
    description:
      "A platform connecting property buyers, sellers, and agents with advanced search and virtual tours.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: ["Angular", "Node.js", "PostgreSQL", "AWS"],
    category: "Full Stack",
    fullDescription:
      "A comprehensive real estate marketplace that connects property buyers, sellers, and agents. The platform features advanced property search capabilities, virtual tours, mortgage calculators, and agent-client communication tools to streamline the property buying and selling process.",
    features: [
      "Advanced property search with multiple filters",
      "Virtual property tours and 3D walkthroughs",
      "Mortgage calculator and financing resources",
      "Agent profiles and direct messaging",
      "Property listing management for sellers and agents",
      "Saved searches and property alerts",
      "Neighborhood information and market trends",
      "Review and rating system for agents",
    ],
    liveUrl: "https://example.com/real-estate",
    githubUrl: "https://github.com/example/real-estate",
    screenshots: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    ],
  },
  {
    id: "8",
    title: "Learning Management System",
    description:
      "An educational platform with course creation, student management, and interactive learning features.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["React", "Django", "PostgreSQL", "Redis"],
    category: "Full Stack",
    fullDescription:
      "A comprehensive learning management system designed for educational institutions and online course creators. The platform includes tools for course creation, student management, assessment, and interactive learning experiences to facilitate effective online education.",
    features: [
      "Course creation and curriculum management",
      "Student enrollment and progress tracking",
      "Interactive content including videos, quizzes, and assignments",
      "Discussion forums and real-time chat",
      "Automated grading and feedback",
      "Certificate generation upon course completion",
      "Analytics dashboard for instructors",
      "Mobile-responsive design for learning on the go",
    ],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms",
    screenshots: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    ],
  },
  {
    id: "9",
    title: "Weather Visualization App",
    description:
      "An interactive weather application with beautiful visualizations and forecasting capabilities.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["Vue.js", "D3.js", "Node.js", "Weather API"],
    category: "Frontend",
    fullDescription:
      "An interactive weather application that provides users with current conditions, forecasts, and historical weather data through beautiful and informative visualizations. The app uses multiple weather data sources to ensure accuracy and offers location-based personalization.",
    features: [
      "Real-time weather conditions and forecasts",
      "Interactive maps and data visualizations",
      "Historical weather data and trends",
      "Severe weather alerts and notifications",
      "Location-based personalization",
      "Multiple location tracking",
      "Weather impact on daily activities",
      "Shareable weather reports and screenshots",
    ],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/example/weather",
    screenshots: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=800&q=80",
    ],
  },
];

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
      activeCategory === "All" || project.category === activeCategory,
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
              A showcase of my technical projects and professional work
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
          <DialogContent className="bg-gray-900 text-white border border-gray-800 max-w-4xl">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl font-bold text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="font-opensans text-[#C0C0C0]">
                {selectedProject.category}
              </DialogDescription>
            </DialogHeader>

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
                    {selectedProject.screenshots
                      .slice(1)
                      .map((screenshot, index) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} screenshot ${index + 2}`}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      ))}
                  </div>
                </div>
              )}
          </DialogContent>
        )}
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
