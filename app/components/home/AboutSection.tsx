import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  callToAction?: string;
  description?: string;
  skills?: string[];
  imageUrl?: string;
  resumeUrl?: string;
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Principal Software Architect, Engineering Leader, and Software Development Manager",
  description = `I’m Babar Javaid, a technology leader and architect with over 10 years of experience building scalable software systems, leading cross-functional teams, and driving digital transformation across startups, enterprises, and high-growth ventures.
My expertise spans AI SaaS platforms, Shopify apps, eCommerce, FinTech, and IoT, with a strong foundation in agile delivery and cloud-native architecture. I’ve managed teams of 100+ engineers, led multi-million-dollar projects, and improved company valuations through technical innovation and operational excellence. My leadership blends deep technical know-how with strong business acumen-allowing me to translate complex engineering goals into measurable business impact.
As a hands-on leader, I’ve implemented DevOps pipelines, SOC 2 compliance, multi-tenant SaaS platforms, and integrations with third-party ecosystems like SAP and Shopify. I’ve also built service offerings around low-code/no-code automation.
My passion lies in building empowered teams, delivering value to users, and aligning engineering with long-term business strategy. I thrive in roles where I can drive innovation, mentor leaders, and create scalable, future-ready solutions.
Let’s connect if you’re seeking a results-driven technology executive who can balance innovation, delivery, and people.`,
  skills = ["Technology & Engineering Leadership", "Software Architecture & System Design", "Business & Technical Strategy Alignment", "Information Security & Compliance", "Team Building & Mentorship", "AI & SaaS Product Development", "Agile Project & Program Management", "DevOps & CI/CD Automation"],
  imageUrl = "javaidbabar-pic.jpg",
  resumeUrl = "/resume",
}: AboutSectionProps) => {
  return (
    <section className="w-full py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 border-2 border-[#C0C0C0] rounded-lg transform translate-x-4 translate-y-4"></div>
            <img src={imageUrl} alt="Professional portrait" className="w-full h-auto rounded-lg object-cover relative z-10 border-4 border-black" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2 text-black">{title}</h2>
            <h3 className="text-xl font-semibold font-montserrat mb-6 text-[#C0C0C0]">{subtitle}</h3>

            <div className="space-y-4 mb-8 text-gray-800 font-opensans">
              {description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-bold font-montserrat mb-4 text-black">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-black text-white rounded-full text-sm font-montserrat">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button className="bg-black text-white hover:bg-[#333] px-8 py-6 text-lg font-bold" onClick={() => (window.location.href = resumeUrl)}>
              View Full Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
