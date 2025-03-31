// import React from "react";
// import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/home/SkillsSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import AboutSection from "../components/home/AboutSection";
import BlogSection from "../components/home/BlogSection";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjects />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
