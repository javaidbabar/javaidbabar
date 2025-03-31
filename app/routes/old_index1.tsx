import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Star } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

const industries = [
  { name: "IoT", years: 8 },
  { name: "E-commerce", years: 6 },
  { name: "Medical", years: 4 },
  { name: "Education", years: 3 },
  { name: "RPA", years: 2 },
  { name: "AI Agents", years: 2 },
];

const roles = [
  { title: "Engineering Manager", duration: "2020-Present" },
  { title: "Solution Architect", duration: "2018-2020" },
  { title: "Software Architect", duration: "2015-2018" },
  { title: "Data Scientist", duration: "2013-2015" },
  { title: "Full Stack Developer", duration: "2010-2013" },
];

const topProjects = [
  {
    title: "Enterprise IoT Platform",
    description:
      "Led the development of a scalable IoT platform handling millions of device connections",
    impact: "Reduced operational costs by 40%",
    tech: ["Node.js", "MQTT", "AWS IoT"],
  },
  {
    title: "Healthcare Management System",
    description:
      "Architected a comprehensive healthcare platform for patient management",
    impact: "Improved patient care efficiency by 60%",
    tech: ["React", "Node.js", "FHIR"],
  },
  {
    title: "E-commerce Transformation",
    description: "Led digital transformation of a major retail platform",
    impact: "Increased online sales by 200%",
    tech: ["Microservices", "React", "AWS"],
  },
];

const testimonials = [
  {
    text: "Exceptional technical leadership and vision in transforming our legacy systems.",
    author: "Sarah Chen",
    position: "CTO, TechCorp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    text: "Delivered complex projects consistently ahead of schedule with outstanding quality.",
    author: "Michael Rodriguez",
    position: "VP Engineering, HealthTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    text: "Transformed our engineering culture and established robust architectural practices.",
    author: "Emily Watson",
    position: "Director of Engineering, EduTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
];

// const slides = [
//   {
//     title: "20+ Years Experience",
//     subtitle: "Leading and architecting enterprise solutions",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     gradient: "from-slate-950/80 dark:from-blue-500/20",
//   },
//   {
//     title: "50+ Enterprise Projects",
//     subtitle: "Delivered across various industries",
//     image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
//     gradient: "from-slate-950/80 dark:from-purple-500/20",
//   },
//   {
//     title: "Cloud Architecture Expert",
//     subtitle: "AWS, Azure, and GCP certified solutions architect",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     gradient: "from-slate-950/80 dark:from-green-500/20",
//   },
// ];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel - Temporarily disabled
      <section className="h-screen relative">
        <Carousel className="h-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="h-screen">
                <div className="relative h-full w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} to-background/90 flex items-center`}
                  >
                    <div className="container">
                      <div className="max-w-2xl space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold text-white">
                          {slide.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-200">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 h-12 w-12" />
          <CarouselNext className="right-8 h-12 w-12" />
        </Carousel>
      </section>
      */}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-background dark:from-primary/10">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Babar Javaid</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Principal Software Architect with 20+ years of experience in
            building scalable distributed systems and leading engineering teams.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="/resume">
                <FileText className="mr-2 h-5 w-5" /> View Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/projects">
                <ExternalLink className="mr-2 h-5 w-5" /> View Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Industry Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Card key={industry.name} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.years} years</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-20 bg-slate-50 dark:bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Career Journey</h2>
          <div className="space-y-6">
            {roles.map((role) => (
              <div key={role.title} className="flex items-center gap-4">
                <div className="w-32 text-sm text-muted-foreground">
                  {role.duration}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topProjects.map((project) => (
              <Card key={project.title} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm">{project.impact}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">&quot;{testimonial.text}&quot;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Babar Javaid. All rights reserved.
          </p>
          {/* <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/blog">Blog</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/projects">Projects</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/resume">Resume</a>
            </Button>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
