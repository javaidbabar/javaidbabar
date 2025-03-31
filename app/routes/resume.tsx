import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

const workExperience: TimelineItem[] = [
  {
    period: "2021 - Present",
    title: "Senior Software Architect",
    company: "TechInnovate Solutions",
    description:
      "Leading architecture design and implementation for enterprise-level applications, focusing on scalability and performance optimization.",
    achievements: [
      "Redesigned the microservices architecture, reducing system latency by 40%",
      "Implemented CI/CD pipeline that decreased deployment time by 65%",
      "Led a team of 8 developers to deliver a major platform upgrade ahead of schedule",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "Kubernetes",
      "GraphQL",
      "TypeScript",
    ],
  },
  {
    period: "2018 - 2021",
    title: "Full Stack Developer",
    company: "Digital Frontier Inc.",
    description:
      "Developed and maintained full-stack applications for clients in finance, healthcare, and e-commerce sectors.",
    achievements: [
      "Built a real-time analytics dashboard that increased client revenue by 25%",
      "Optimized database queries, improving application performance by 30%",
      "Mentored junior developers and established coding standards",
    ],
    technologies: ["React", "Redux", "Express.js", "MongoDB", "Docker", "Jest"],
  },
  {
    period: "2016 - 2018",
    title: "Frontend Developer",
    company: "WebSphere Technologies",
    description:
      "Created responsive, user-friendly interfaces for web applications with a focus on accessibility and performance.",
    achievements: [
      "Developed a component library that reduced development time by 40%",
      "Improved website accessibility to meet WCAG 2.1 AA standards",
      "Reduced bundle size by 60% through code splitting and lazy loading",
    ],
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass",
      "Webpack",
      "Accessibility",
    ],
  },
];

const education: Education[] = [
  {
    period: "2012 - 2016",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    description:
      "Graduated with honors. Specialized in software engineering and artificial intelligence.",
  },
  {
    period: "2020",
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services",
    description:
      "Professional certification for designing distributed systems on AWS.",
  },
  {
    period: "2019",
    degree: "Professional Scrum Master I",
    institution: "Scrum.org",
    description:
      "Certification in Agile project management and Scrum methodologies.",
  },
];

const skills = {
  technical: [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "GraphQL",
    "REST APIs",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "System Architecture",
    "Microservices",
    "Performance Optimization",
  ],
  soft: [
    "Team Leadership",
    "Project Management",
    "Technical Writing",
    "Problem Solving",
    "Communication",
    "Mentoring",
    "Agile Methodologies",
    "Client Relations",
  ],
};

const Resume = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                Babar Javaid
              </h1>
              <p className="font-opensans text-lg text-[#C0C0C0]">
                My professional journey as a Software Architect and Engineer
                with a focus on building scalable and high-performance applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 md:mt-0"
            >
              <Button className="bg-[#C0C0C0] text-black hover:bg-white flex items-center gap-2 px-6 py-5">
                <Download size={18} />
                Download PDF
              </Button>
            </motion.div>
          </div>

          {/* Professional Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 bg-gray-900 p-8 rounded-lg border border-gray-800"
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-4 border-b border-gray-800 pb-2">
              Professional Summary
            </h2>
            <p className="font-opensans text-gray-300">
              Experienced Software Architect and Engineer with over 8 years of
              expertise in designing and implementing scalable, high-performance
              applications. Proficient in full-stack development with a focus on
              React, Node.js, and cloud technologies. Passionate about clean
              code, user-centered design, and continuous learning. Proven track
              record of leading technical teams and delivering complex projects
              on time and within budget.
            </p>
          </motion.section>

          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">
              Work Experience
            </h2>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C0C0C0]"></div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#C0C0C0] transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold text-white">
                        {job.title}
                      </h3>
                      <span className="font-opensans text-[#C0C0C0]">
                        {job.period}
                      </span>
                    </div>

                    <p className="font-heading text-lg text-[#C0C0C0] mb-4">
                      {job.company}
                    </p>
                    <p className="font-opensans text-gray-300 mb-4">
                      {job.description}
                    </p>

                    <h4 className="font-heading text-md font-bold text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc pl-5 mb-4 font-opensans text-gray-300">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-black text-white border border-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">
              Education & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#C0C0C0] transition-all duration-300"
                >
                  <span className="font-opensans text-sm text-[#C0C0C0] mb-2 block">
                    {edu.period}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="font-heading text-md text-[#C0C0C0] mb-3">
                    {edu.institution}
                  </p>
                  <p className="font-opensans text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">
              Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#C0C0C0] text-black px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-black text-white border border-[#C0C0C0] px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
