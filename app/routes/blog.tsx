import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
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
  {
    id: "4",
    title: "Mastering TypeScript: Advanced Types and Patterns",
    excerpt:
      "Dive deep into TypeScript's advanced type system and learn patterns that will make your code more robust and maintainable.",
    date: "March 5, 2023",
    readTime: "15 min read",
    category: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "5",
    title: "State Management in 2023: Beyond Redux",
    excerpt:
      "Exploring modern state management solutions for React applications and when to use each approach.",
    date: "February 18, 2023",
    readTime: "11 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
  },
  {
    id: "6",
    title: "Building Accessible Web Applications",
    excerpt:
      "A practical guide to creating web applications that are accessible to all users, including those with disabilities.",
    date: "January 30, 2023",
    readTime: "9 min read",
    category: "Accessibility",
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80",
  },
  {
    id: "7",
    title: "Serverless Architecture: Pros, Cons, and Best Practices",
    excerpt:
      "An in-depth look at serverless architecture, its advantages, limitations, and how to implement it effectively.",
    date: "December 12, 2022",
    readTime: "13 min read",
    category: "Cloud",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "8",
    title: "Web Performance Optimization Techniques",
    excerpt:
      "Essential strategies and tools to optimize your web application's performance and improve user experience.",
    date: "November 5, 2022",
    readTime: "10 min read",
    category: "Performance",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    id: "9",
    title: "GraphQL vs REST: Choosing the Right API Paradigm",
    excerpt:
      "A comparative analysis of GraphQL and REST APIs, with guidelines on when to use each approach.",
    date: "October 20, 2022",
    readTime: "12 min read",
    category: "API",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
];

const categories = [
  "All",
  "React",
  "TypeScript",
  "Backend",
  "Cloud",
  "API",
  "Performance",
  "Accessibility",
  "Trends",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="font-heading mb-4 text-5xl font-bold text-white">
              Blog
            </h1>
            <p className="font-opensans mx-auto max-w-2xl text-lg text-[#C0C0C0]">
              Insights and thoughts on software development, architecture, and
              technology trends; please note that these are not all my articles and only the contents placeholders. It is a work in progress.
            </p>
          </motion.div>

          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex overflow-x-auto pb-2 w-full md:w-auto">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full border border-gray-700 transition-colors whitespace-nowrap ${
                        activeCategory === category
                          ? "bg-white text-black font-bold"
                          : "bg-transparent text-white hover:border-[#C0C0C0] hover:text-[#C0C0C0]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C0C0C0]"
                />
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/blog/${post.id}`} className="block h-full">
                    <Card
                      className="h-full overflow-hidden border border-gray-800 bg-gray-900 text-white transition-all duration-300 hover:border-[#C0C0C0] hover:shadow-[0_0_15px_rgba(192,192,192,0.3)]"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
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
                      <CardHeader className="pb-2 flex-shrink-0 h-[80px]">
                        <CardTitle className="font-heading text-xl font-bold text-white line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow h-[120px] flex flex-col">
                        <CardDescription className="font-opensans mb-4 text-gray-300 line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="border-t border-gray-800 pt-3 flex-shrink-0 flex justify-between items-center h-[50px]">
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
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-heading text-white mb-4">
                No articles found
              </h3>
              <p className="text-[#C0C0C0]">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
