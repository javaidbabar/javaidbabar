import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroOption {
  headline: string;
  subheadline: string;
  cta: {
    primary: string;
    secondary: string;
  };
  backgroundImage: string;
}

interface HeroSectionProps {
  selectedOption?: number;
}

const heroOptions: HeroOption[] = [
  {
    headline: "🚀 Tech Leader | SaaS Innovator | Business Strategist",
    subheadline:
      "With 20+ years of experience in software development, SaaS, and business growth, I help companies scale, optimize, and innovate.",
    cta: {
      primary: "📩 Let's Connect",
      secondary: "🔥 Explore My Work",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80",
  },
  {
    headline: "Building the Future of AI, SaaS & Business Growth",
    subheadline:
      "I create, scale, and optimize SaaS products, AI solutions, and digital businesses, driving impact across industries.",
    cta: {
      primary: "🚀 See My Work",
      secondary: "📞 Let's Talk",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  },
  {
    headline: "Babar Javaid – Tech Entrepreneur & SaaS Visionary",
    subheadline:
      "From startup scaling to enterprise consulting, I turn ideas into high-impact solutions. Let's build the future, together.",
    cta: {
      primary: "💡 Read My Insights",
      secondary: "🎯 Work With Me",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=1920&q=80",
  },
  {
    headline: "Scaling Businesses & Investing in the Future",
    subheadline:
      "As a SaaS founder, tech consultant, and investor, I help businesses achieve exponential growth through innovation and strategy.",
    cta: {
      primary: "📊 Explore My Ventures",
      secondary: "🤝 Let's Collaborate",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
  },
  {
    headline: "👋 Hi, I'm Babar Javaid.",
    subheadline:
      "I build, scale, and optimize tech businesses, SaaS products, and digital solutions.",
    cta: {
      primary: "🚀 Learn More",
      secondary: "💡 Let's Connect",
    },
    backgroundImage:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1920&q=80",
  },
];

const HeroSection = ({ selectedOption = 0 }: HeroSectionProps) => {
  const [currentOption, setCurrentOption] = useState(selectedOption);
  const [autoplay, setAutoplay] = useState(true);
  const option = heroOptions[currentOption];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentOption((prev) => (prev + 1) % heroOptions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleManualChange = (index: number) => {
    setCurrentOption(index);
    setAutoplay(false);
    // Resume autoplay after 15 seconds of inactivity
    setTimeout(() => setAutoplay(true), 15000);
  };

  return (
    <section className="relative w-full h-[calc(100vh-58px)] lg:h-[calc(100vh-80px)] bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentOption}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${option.backgroundImage})`,
              filter: "brightness(0.3)",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 z-10 flex items-center justify-center">
        <motion.div
          className="max-w-screen-xl w-full md:ml-[-10%] lg:ml-[-10%] h-[400px] flex flex-col justify-center xs:items-center sm:items-center md:items-center lg:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading xs:text-center sm:text-center md:text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {option.headline}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-[#C0C0C0] font-heading xs:text-center sm:text-center md:text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {option.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 xs:justify-center sm:justify-center md:justify-center lg:justify-start"
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-md hover:bg-purple-700 transition-colors duration-300 w-full">
                {option.cta.primary}
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="border-2 border-teal-500 text-teal-500 font-bold py-3 px-8 rounded-md hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full">
                {option.cta.secondary}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {heroOptions.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentOption === index ? "bg-white w-6" : "bg-gray-600 hover:bg-gray-400"}`}
            onClick={() => handleManualChange(index)}
            aria-label={`Option ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
