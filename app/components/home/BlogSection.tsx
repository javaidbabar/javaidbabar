import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  posts?: BlogPost[];
  onViewAllClick?: () => void;
}

const BlogSection = ({
  title = "Latest Articles",
  subtitle = "Insights and thoughts on software development, architecture, and technology trends; please note that these are not all my articles and only the contents placeholders. It is a work in progress.",
  posts = [
    {
      id: "1",
      title: "Optimizing React Performance with Memo and Callbacks",
      excerpt:
        "Learn how to use React.memo, useCallback, and useMemo to significantly improve your application's performance.",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    },
    {
      id: "2",
      title: "Building Scalable Microservices with Node.js",
      excerpt:
        "A comprehensive guide to designing and implementing microservices architecture using Node.js and Docker.",
      date: "May 22, 2023",
      readTime: "12 min read",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
    {
      id: "3",
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt:
        "Exploring upcoming trends, technologies, and paradigm shifts that will shape the future of web development.",
      date: "April 10, 2023",
      readTime: "10 min read",
      category: "Trends",
      image:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&q=80",
    },
  ],
  onViewAllClick = () => (window.location.href = "/blog"),
}: BlogSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-montserrat mb-4 text-4xl font-bold text-black md:text-5xl">
            {title}
          </h2>
          <p className="font-opensans mx-auto max-w-2xl text-lg text-gray-700">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link to={`/blog/${post.id}`} className="block h-full">
                <Card
                  className="h-full overflow-hidden border border-gray-800 bg-gray-900 text-white transition-all duration-300 hover:border-[#C0C0C0] hover:shadow-[0_0_15px_rgba(192,192,192,0.3)]"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <Badge className="absolute top-3 right-3 bg-[#C0C0C0] text-black">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2 flex-shrink-0">
                    <CardTitle className="font-montserrat text-xl font-bold text-white line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="font-opensans mb-4 text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="border-t border-gray-800 pt-3 flex-shrink-0 flex justify-between items-center">
                    <p className="font-opensans text-sm text-[#C0C0C0]">
                      {post.date}
                    </p>
                    <p className="font-opensans text-sm text-[#C0C0C0]">
                      {post.readTime}
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Button
            onClick={onViewAllClick}
            className="border-black bg-transparent px-8 py-6 text-lg font-bold text-black hover:bg-black hover:text-white"
            variant="outline"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
