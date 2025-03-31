import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  skills?: string[];
  imageUrl?: string;
  resumeUrl?: string;
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Software Architect & Engineer",
  description = "I'm a passionate software architect and engineer with over 8 years of experience building scalable, high-performance applications. My expertise spans frontend and backend development, with a focus on creating elegant solutions to complex problems. I believe in clean code, user-centered design, and continuous learning.\n\nThroughout my career, I've worked with startups and enterprise clients across various industries, helping them transform their ideas into robust digital products. I'm particularly interested in performance optimization, system architecture, and creating intuitive user experiences.",
  skills = [
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "GraphQL",
    "Docker",
    "Python",
    "UI/UX Design",
    "System Architecture",
    "Performance Optimization",
    "Microservices",
    "CI/CD",
  ],
  imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  resumeUrl = "/resume",
}: AboutSectionProps) => {
  return (
    <section className="w-full py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border-2 border-[#C0C0C0] rounded-lg transform translate-x-4 translate-y-4"></div>
            <img
              src={imageUrl}
              alt="Professional portrait"
              className="w-full h-auto rounded-lg object-cover relative z-10 border-4 border-black"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2 text-black">
              {title}
            </h2>
            <h3 className="text-xl font-semibold font-montserrat mb-6 text-[#C0C0C0]">
              {subtitle}
            </h3>

            <div className="space-y-4 mb-8 text-gray-800 font-opensans">
              {description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold font-montserrat mb-4 text-black">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black text-white rounded-full text-sm font-montserrat"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button
              className="bg-black text-white hover:bg-[#333] px-8 py-6 text-lg font-bold"
              onClick={() => (window.location.href = resumeUrl)}
            >
              View Full Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
