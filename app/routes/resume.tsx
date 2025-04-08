import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Download } from "lucide-react";

interface Achievements {
  title: string;
  description: string;
}

interface SuccessHighlightItem {
  title: string;
  achievements: Achievements[];
}

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

const successHighlights: SuccessHighlightItem[] = [
  {
    title: "Technical Leadership and Innovation",
    achievements: [
      {
        title: "Scalable IoT Platform",
        description: "Led the development of an IoT platform with 1M+ active devices and 72,000 users in 4 years.",
      },
      {
        title: "Generative AI Platform",
        description: "Led the development of a SaaS portal for a generative AI video startup that raised $18M and SOC2 compliance.",
      },
      {
        title: "Remote Monitoring and Controls",
        description: "Led the development of a remote monitoring and controls application for a fleet of over 800 locomotives, resulting in a 10x premium acquisition.",
      },
      {
        title: "Robotic Process Automation (RPA)",
        description: "Led the development of RPA in a continuous improvement report application, reducing the processing time from 2 weeks to a few hours.",
      },
      {
        title: "Process Automation",
        description: "Automated manual order processing, boosting sales agent productivity by 6x and reducing CI/CD time by 3x.",
      },
      {
        title: "Data Aggregation and Visualization",
        description: "Led the development of an aggregation application for heterogeneous data of multiple power grids and dashboarding in Tableau.",
      },
      {
        title: "Cybersecurity and Incident Response",
        description: "Led a cybersecurity RED team on incident response to deter and protect infrastructure from a 0-day vulnerability exploit.",
      },
      {
        title: "",
        description: "Orchestrated GDPR, CCPA, SOC2, and HIPAA compliance while integrating SAST & DAST security into CI/CD, reducing vulnerabilities by 70%.",
      },
      {
        title: "AI-Driven Savings Engine",
        description: "Designed and deployed an AI-driven savings engine, increasing user engagement and revenue by 35%.",
      },
      {
        title: "Engineering Best Practices",
        description: "Established engineering best practices and governance models, improving developer productivity and code quality.",
      },
      {
        title: "Technical Roadmaps and Architecture Strategies",
        description: "Defined technical roadmaps and architecture strategies, aligning engineering efforts with business goals.",
      },
    ],
  },
  {
    title: "Enterprise Software and Business Growth",
    achievements: [
      {
        title: "Tax Management Solution",
        description: "Designed an ERP-based tax management solution, reducing the implementation time of new tax forms from 1 year to 4 weeks.",
      },
      {
        title: "HIPPA-Approved Telemedicine Solution",
        description: "Directed development of a HIPAA-compliant telemedicine solution, connecting patients in developing countries with global medical expertise.",
      },
      {
        title: "Vehicles Operations Monitoring",
        description: "Led the development of a vehicle operations monitoring application, reducing maintenance costs by 5x.",
      },
      {
        title: "Website Development and Growth",
        description: "Led the design and development of enterprise-grade web solutions, enhancing user experience, optimizing performance, and driving business growth. Spearheaded website development for an engineering consultancy, supporting its expansion from 10 to 400+ engineers over six years.",
      },
      {
        title: "Application Development",
        description: "Led the development of a CMS-based intranet application, accelerating internal collaboration and process management by 7x.",
      },
    ],
  },
  {
    title: "DevSecOps & Performance Optimization",
    achievements: [
      {
        title: "",
        description: "Streamlined mobile app CI/CD processes for App Store and Play Store deployments, enhancing overall development efficiency.",
      },
      {
        title: "",
        description: "Designed and implemented scalable CI/CD pipelines, automating software build, test, and deployment processes to enhance development speed and reliability.",
      },
      {
        title: "",
        description: "Integrated security best practices (DevSecOps) into CI/CD workflows, ensuring vulnerability scanning, compliance checks, and automated security testing at every stage.",
      },
      {
        title: "",
        description: "Set up Infrastructure as Code (IaC) using Terraform, Ansible, and CloudFormation, enabling automated provisioning and consistent deployment across environments.",
      },
      {
        title: "",
        description: "Configured containerized deployments with Docker, streamlining microservices deployment and orchestration.",
      },
      {
        title: "",
        description: "Implemented real-time monitoring and logging solutions (Prometheus, Grafana, ELK, Datadog, LogRocket, NewRelic) to track system health, performance, and security threats.",
      },
      {
        title: "",
        description: "Established proactive alerting mechanisms using tools like Prometheus Alertmanager, PagerDuty, or AWS CloudWatch to detect and resolve issues before they impact users.",
      },
      {
        title: "",
        description: "Enforced security policies using tools like SonarQube, Snyk, and Trivy, ensuring code quality, dependency management, and vulnerability scanning within CI/CD pipelines.",
      },
      {
        title: "",
        description: "Optimized CI/CD workflows by implementing caching, parallel execution, and pipeline optimizations to reduce build and deployment times.",
      },
      {
        title: "",
        description: "Enhanced CI/CD efficiency by implementing caching, parallel execution, and pipeline optimizations, reducing build and deployment times. Led DevOps initiatives that cut CI/CD time by 66%, lowering costs and accelerating development.",
      },
      {
        title: "",
        description: "Managed cloud-based and hybrid CI/CD infrastructure (AWS, Azure, GCP, Jenkins, GitHub Actions, GitLab CI/CD) for high availability and scalability.",
      },
      {
        title: "",
        description: "Led post-deployment performance analysis and feedback loops, continuously improving pipeline efficiency, security, and reliability.",
      },
    ],
  },
];

const coreCompetencies: Achievements[] = [
  {
    title: "AI & Software Architecture",
    description: "AI/ML (LLMs, LangChain), MERN/PERN, .NET, Python, Microservices, REST APIs",
  },
  {
    title: "Project & Team Leadership",
    description: "Agile/Scrum, Technical Roadmaps, Product Development, Remote Teams",
  },
  {
    title: "Cloud & DevOps",
    description: "AWS, Google Cloud, CI/CD, Docker, Kubernetes, Infrastructure as Code (IaC)",
  },
  {
    title: "Low-Code & No-Code Solutions",
    description: "Reduced development time by 60% using Zapier, Paragon, and Bubble while enabling scalable automation.",
  },
  {
    title: "Shopify App Development",
    description: "Developed custom Shopify apps (Node.js, React), integrating Shopify APIs, webhooks, and Liquid templates to enhance merchant automation.",
  },
  {
    title: "Programming Languages",
    description: "JavaScript, TypeScript, Python, C#, Java",
  },
  {
    title: "Web & Mobile Technologies",
    description: "React, Next.js, Remix, Node.js, NestJS, React Native, Expo",
  },
  {
    title: "Databases",
    description: "SQL Server, PostgreSQL, MySQL, MongoDB, Redis, DynamoDB, Elasticsearch , Cassandra, Neo4j, Firebase, SQLite, CockroachDB",
  },
];

const workExperience: TimelineItem[] = [
  {
    period: "Jan 2023 - Present (30+ direct and indirect reports)",
    title: "Tech Leader & Principal Software Architect",
    company: "Simublade, Houston, TX, USA",
    description: "",
    achievements: [
      "Led SOC 2 compliance activity for Tavus client, ensuring successful certification.",
      "Improved team productivity by 30% using AI-driven process automation and workflow enhancements.",
      "Redesigned software architecture, reducing technical debt and enhancing long-term scalability.",
      "Reduced deployment failures by 50%, accelerating release cycles across environments.",
      "Mentored junior engineers, providing goal-oriented structured learning paths and technical guidance.",
    ],
    technologies: ["React/Next.js", "Node/Nest.js", "AWS", "GCP", "TypeScript", "Python", "Docker", "PostgreSQL", "Redis", ".Net Core"],
  },
  {
    period: "Oct 2022 - Dec 2022",
    title: "Software Architect",
    company: "Programmers Force, Lahore, Pakistan",
    description: "",
    achievements: [
      "Conducted architecture reviews to optimize system performance and security.",
      "Identified and resolved architectural bottlenecks, improving application response time by 40%.",
      "Collaborated with CTO and team leads to align technical strategies with business objectives."
    ],
    technologies: ["Laravel", "React", "Node.js", "MongoDB", "Docker", "Python"],
  },
  {
    period: "Jan 2021 - Oct 2022 (10+ direct and indirect reports)",
    title: "Senior Software Architect and Project Manager",
    company: "Websentials, Lahore, Pakistan",
    description: "",
    achievements: [
      "Streamlined development and quality assurance workflows, reducing project delivery timelines by 25%.",
      "Led the development of a tax management solution, reducing implementation time from 1 year to 4 weeks.",
      "Trained and mentored engineers in best practices and modern software methodologies.",
    ],
    technologies: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SaSS", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker"],
  },
  {
    period: "Apr 2018 - Dec 2020 (5+ direct and indirect reports)",
    title: "Software Architect",
    company: "Confiz Limited, Lahore, Pakistan",
    description: "",
    achievements: [
      "Led the development of high-volume applications, improving system scalability.",
      "Automated testing and CI/CD pipelines, reducing deployment failures by 50%.",
      "Managed cross-functional teams to deliver mission-critical projects on time.",
    ],
    technologies: ["TypeScript", "JavaScript", ".Net Core", "Java", "MS SQL Server", "PostgreSQL", "Azure", "Docker"],
  },
  {
    period: "Oct 2016 - Mar 2018 (30+ direct and indirect reports)",
    title: "Head of Software Engineering & Senior Software Architect",
    company: "BlueEast (Private) Limited, Lahore, Pakistan",
    description: "",
    achievements: [
      "Led the development of IoT platforms and eCommerce products.",
      "Conducted cost optimization of cloud environments, reducing infrastructure costs by 20%.",
      "Designed automation for manual ordering processing, increasing sales agent velocity by 6x, and led DevOps to reduce CI/CD time by 3x.",
      "Led the development to optimize the production line quality assurance process of IoT products by 80%.",
    ],
    technologies: ["TypeScript", "JavaScript", "React", "Node.js", ".Net Core", "MongoDB", "PostgreSQL", "AWS", "Docker", "PHP", "Magento", "Shopify", "WordPress", "SAP"],
  },
  {
    period: "Oct 2005 - Sep 2016 (15+ direct and indirect reports)",
    title: "Technical & System Architect",
    company: "Powersoft19, Lahore, Pakistan",
    description: "",
    achievements: [
      "Developed M2M remote asset monitoring applications improving operational efficiency.",
      "Designed and implemented vehicle tracking dashboards and monitoring systems.",
      "Designed and implemented data aggregation applications for heterogeneous data of multiple power grids.",
      "Led the development of a remote monitoring and controls application for a fleet of over 800 locomotives, resulting in a 10x premium acquisition.",
      "Designed and implemented a telemedicine solution connecting patients in developing countries with global medical expertise.",
    ],
    technologies: ["JavaScript", "Angular", "Node.js", ".Net Frameworks & Web APIs", "MS SQL Server", "PHP", "Drupal", "HTML", "CSS", "WordPress", "Oracle ERP"],
  },
];

const education: Education[] = [
  {
    period: "2001 - 2005",
    degree: "B.Sc. (Hons) in Computer Science",
    institution: "University of the Punjab, Lahore, Pakistan",
    description: "Graduated with honors. Specialized in software engineering.",
  },
  {
    period: "2009",
    degree: "PMP (Project Management Professional) Training",
    institution: "Dr. Azhar, USA",
    description: "Training in project management principles and practices.",
  },
  {
    period: "2010 - 2016",
    degree: "Microsoft Certified Trainer (MCT)",
    institution: "Microsoft",
    description: "Certified trainer for Microsoft technologies (ASP.NET, SQL, Developer).",
  },
];

const skills = {
  technical: ["JavaScript/TypeScript", "React", "Node.js", "GraphQL", "REST APIs", "AWS", "Docker", "Kubernetes", "CI/CD", "MongoDB", "PostgreSQL", "Redis", "System Architecture", "Microservices", "Performance Optimization"],
  soft: ["Team Leadership", "Project Management", "Technical Writing", "Problem Solving", "Communication", "Mentoring", "Agile Methodologies", "Client Relations"],
};

const Resume = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">Resume</h1>
              <p className="font-opensans text-lg text-[#C0C0C0]">My professional journey and qualifications</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 md:mt-0">
              {/* <Button className="bg-[#C0C0C0] text-black hover:bg-white flex items-center gap-2 px-6 py-5">
                <Download size={18} />
                Download PDF
              </Button> */}
            </motion.div>
          </div>

          {/* Professional Summary */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-16 bg-gray-900 p-8 rounded-lg border border-gray-800">
            <h2 className="font-heading text-2xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Profile</h2>
            <p className="font-opensans text-gray-300">Engineering Leader & Principal Software Architect with expertise in AI/ML, SaaS, cloud, and security compliance. Skilled in scaling teams, optimizing workflows, and architecting high-performance solutions that drive business growth.</p>
          </motion.section>

          {/* Success Highlights */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">Success Highlights</h2>

            <div className="space-y-12">
              {successHighlights.map((successHighlight, index) => (
                <div key={index} className="relative pl-0">
                  {/* <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C0C0C0]"></div> */}

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#C0C0C0] transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold text-white">{successHighlight.title}</h3>
                    </div>

                    <ul className="list-disc pl-5 mb-4 font-opensans text-gray-300">
                      {successHighlight.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement.title.length > 0 && <span className="font-poppins font-bold tracking-wide text-gray-200">{achievement.title}:</span>} {achievement.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Core Competencies */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">Core Competencies</h2>

            <div className="space-y-12">
            <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#C0C0C0]">
              {coreCompetencies.map((coreCompetency, index) => (
                  <div key={index} className="transition-all duration-300">
                    <ul className="list-disc pl-5 mb-4 font-opensans text-gray-300">
                      <li key={index} className="mb-1">
                        {coreCompetency.title.length > 0 && <span className="font-poppins font-bold tracking-wide text-gray-200">{coreCompetency.title}:</span>} {coreCompetency.description}
                      </li>
                    </ul>
                  </div>
              ))}
              </div>
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">Professional Experience</h2>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C0C0C0]"></div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#C0C0C0] transition-all duration-300">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="font-heading text-xl font-bold text-white">{job.title}</h3>
                      <span className="font-opensans text-[#C0C0C0]">{job.period}</span>
                    </div>

                    <p className="font-heading text-lg text-[#C0C0C0] mb-4">{job.company}</p>
                    <p className="font-opensans text-gray-300 mb-4">{job.description}</p>

                    <h4 className="font-heading text-md font-bold text-white mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 mb-4 font-opensans text-gray-300">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <Badge key={i} className="bg-black text-white border border-gray-700">
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
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">Education & Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-[#C0C0C0] transition-all duration-300">
                  <span className="font-opensans text-sm text-[#C0C0C0] mb-2 block">{edu.period}</span>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="font-heading text-md text-[#C0C0C0] mb-3">{edu.institution}</p>
                  <p className="font-opensans text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <h2 className="font-heading text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="font-heading text-xl font-bold text-white mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <Badge key={index} className="bg-[#C0C0C0] text-black px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="font-heading text-xl font-bold text-white mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <Badge key={index} className="bg-black text-white border border-[#C0C0C0] px-3 py-1">
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
