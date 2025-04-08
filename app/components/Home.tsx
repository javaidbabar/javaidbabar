import HeroSection from "./home/HeroSection";
import SkillsSection from "./home/SkillsSection";
import FeaturedProjects from "./home/FeaturedProjects";
import AboutSection from "./home/AboutSection";
import BlogSection from "./home/BlogSection";
import Header from "./Header";
import Footer from "./Footer";

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
