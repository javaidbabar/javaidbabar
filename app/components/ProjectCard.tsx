import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  onClick?: () => void;
  className?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and technologies used in its development.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  onClick,
  className,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={cn("cursor-pointer h-full", className)}
      onClick={onClick}
    >
      <Card
        className="h-full overflow-hidden border border-gray-200 bg-black text-white transition-all duration-300 hover:border-[#C0C0C0] hover:shadow-[0_0_15px_rgba(192,192,192,0.3)]"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader className="pb-2 flex-shrink-0 h-[80px]">
          <CardTitle className="font-heading text-xl font-bold text-white line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col h-[120px]">
          <CardDescription className="font-opensans mb-4 text-gray-300 line-clamp-3 flex-grow">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className="bg-[#C0C0C0] text-black hover:bg-[#A0A0A0]"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-800 pt-3 flex-shrink-0 h-[50px]">
          <p className="font-opensans text-sm text-[#C0C0C0]">
            Click to view details
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
