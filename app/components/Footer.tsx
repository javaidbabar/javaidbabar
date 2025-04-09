import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Resume", url: "/resume" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className={cn("w-full bg-black text-white", className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Babar Javaid</h2>
            <p className="font-opensans text-gray-300">
            Principal Software Architect, Engineering Leader, and Software Development Manager
            </p>
            <p className="font-opensans text-sm text-gray-400">
              Building innovative solutions with clean, efficient code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#C0C0C0]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="font-opensans inline-flex items-center text-gray-300 transition-colors hover:text-[#C0C0C0]"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            {/* <h3 className="font-heading text-lg font-bold text-[#C0C0C0]">
              Stay Updated
            </h3>
            <p className="font-opensans text-sm text-gray-300">
              Subscribe to my newsletter for the latest updates on projects and
              blog posts.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-gray-700 bg-gray-900 px-4 py-2 text-white focus:border-[#C0C0C0] focus:outline-none"
              />
              <button className="rounded-r-md bg-[#C0C0C0] px-4 py-2 font-heading font-bold text-black transition-colors hover:bg-[#A0A0A0]">
                Subscribe
              </button>
            </div> */}
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#C0C0C0]">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-colors hover:border-[#C0C0C0] hover:text-[#C0C0C0]"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="font-opensans text-sm text-gray-400">
              Let&apos;s collaborate on your next project
            </p>
          </div>

        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="font-opensans text-sm text-gray-400">
          &copy; {currentYear} Babar Javaid. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <a
              href="/privacy"
              className="font-opensans text-sm text-gray-400 hover:text-[#C0C0C0]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-opensans text-sm text-gray-400 hover:text-[#C0C0C0]"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
