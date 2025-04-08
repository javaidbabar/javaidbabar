import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", hasMega: false },
    { name: "Blog", path: "/blog", hasMega: true },
    { name: "Resume", path: "/resume", hasMega: false },
    { name: "Projects", path: "/projects", hasMega: true },
    { name: "Contact", path: "/contact", hasMega: false },
  ];

  const featuredPosts = [
    {
      title: "Optimizing React Performance",
      excerpt: "Learn how to use React.memo, useCallback, and useMemo",
      path: "/blog/1",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&q=80",
    },
    {
      title: "Building Scalable Microservices",
      excerpt: "A guide to designing microservices architecture",
      path: "/blog/2",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies",
      path: "/blog/3",
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=300&q=80",
    },
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      excerpt: "Full-stack e-commerce solution with real-time inventory",
      path: "/projects/1",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&q=80",
    },
    {
      title: "AI Content Generator",
      excerpt: "AI-powered application for custom content creation",
      path: "/projects/2",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813028c4?w=300&q=80",
    },
    {
      title: "Financial Dashboard",
      excerpt: "Interactive dashboard for tracking investments",
      path: "/projects/3",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/javaidbabar",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/javaidbabar",
      label: "LinkedIn",
    },
    {
      icon: <X className="h-6 w-6" />,
      href: "https://x.com/javaidbabar",
      label: "X",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black text-white h-20 flex items-center justify-between px-6 md:px-12 border-b border-gray-800",
        className,
      )}
    >
      <div className="container mx-auto max-w-screen-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-md bg-white"
          />
          <Link to="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-white">Babar</span>
            <span className="text-[#C0C0C0]">Javaid</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.hasMega ? (
              <Popover key={link.name}>
                <PopoverTrigger asChild>
                  <button className="font-heading font-bold text-sm uppercase tracking-wider hover:text-[#C0C0C0] transition-colors flex items-center gap-1">
                    {link.name}
                    <ChevronDown size={14} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[800px] p-0 bg-black border border-gray-800">
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {link.name === "Blog"
                        ? featuredPosts.map((post, idx) => (
                            <Link key={idx} to={post.path} className="group">
                              <div className="space-y-2">
                                <div className="overflow-hidden rounded-md">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                                <h4 className="font-poppins font-bold text-white group-hover:text-[#C0C0C0] transition-colors">
                                  {post.title}
                                </h4>
                                <p className="text-sm text-gray-400">
                                  {post.excerpt}
                                </p>
                              </div>
                            </Link>
                          ))
                        : featuredProjects.map((project, idx) => (
                            <Link key={idx} to={project.path} className="group">
                              <div className="space-y-2">
                                <div className="overflow-hidden rounded-md">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                </div>
                                <h4 className="font-poppins font-bold text-white group-hover:text-[#C0C0C0] transition-colors">
                                  {project.title}
                                </h4>
                                <p className="text-sm text-gray-400">
                                  {project.excerpt}
                                </p>
                              </div>
                            </Link>
                          ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                      <Link
                        to={link.path}
                        className="font-poppins text-sm font-bold uppercase text-[#C0C0C0] hover:text-white transition-colors"
                      >
                        View All {link.name}
                      </Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="font-poppins font-bold text-sm uppercase tracking-wider hover:text-[#C0C0C0] transition-colors"
              >
                {link.name}
              </Link>
            ),
          )}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white hover:text-[#C0C0C0] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black text-white border-l border-[#C0C0C0] w-[300px] p-6"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end mb-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-6 mb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="font-heading font-bold text-lg uppercase tracking-wider hover:text-[#C0C0C0] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex space-x-6 justify-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-white hover:text-[#C0C0C0] transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
