import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "devops" | "other";
}

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  subtitle?: string;
}

const SkillsSection = ({
  title = "Professional Stats",
  subtitle = "A snapshot of my professional journey and achievements",
}: SkillsSectionProps) => {
  return (
    <section className="w-full py-20 bg-black text-white" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-opensans">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300 text-center">
            <p className="text-4xl font-bold text-silver mb-2">20+</p>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300 text-center">
            <p className="text-4xl font-bold text-silver mb-2">50+</p>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300 text-center">
            <p className="text-4xl font-bold text-silver mb-2">15+</p>
            <p className="text-sm text-gray-400">Technologies Mastered</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300 text-center">
            <p className="text-4xl font-bold text-silver mb-2">99%</p>
            <p className="text-sm text-gray-400">Client Satisfaction</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold font-montserrat">
                Client Retention
              </h3>
              <span className="text-silver font-bold">92%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-silver h-2.5 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold font-montserrat">
                On-time Delivery
              </h3>
              <span className="text-silver font-bold">98%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-silver h-2.5 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold font-montserrat">
                Code Quality
              </h3>
              <span className="text-silver font-bold">95%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "95%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-silver h-2.5 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-silver transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold font-montserrat">
                Budget Adherence
              </h3>
              <span className="text-silver font-bold">97%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "97%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-silver h-2.5 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
