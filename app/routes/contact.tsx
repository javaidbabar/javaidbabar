import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
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
              Contact Me
            </h1>
            <p className="font-opensans mx-auto max-w-2xl text-lg text-[#C0C0C0]">
              Let's discuss your project or opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                Get In Touch
              </h2>

              <p className="font-opensans text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                using the contact form or through my social media profiles.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#C0C0C0]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Email
                    </h3>
                    <p className="font-opensans text-[#C0C0C0]">
                      contact@babarjavaid.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#C0C0C0]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Phone
                    </h3>
                    <p className="font-opensans text-[#C0C0C0]">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#C0C0C0]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      Location
                    </h3>
                    <p className="font-opensans text-[#C0C0C0]">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-heading text-lg font-bold text-white mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-full hover:bg-[#C0C0C0] hover:text-black transition-colors duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-full hover:bg-[#C0C0C0] hover:text-black transition-colors duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 p-3 rounded-full hover:bg-[#C0C0C0] hover:text-black transition-colors duration-300"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="font-heading text-white block"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#C0C0C0] focus:ring-[#C0C0C0]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="font-heading text-white block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#C0C0C0] focus:ring-[#C0C0C0]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="font-heading text-white block"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#C0C0C0] focus:ring-[#C0C0C0]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-heading text-white block"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#C0C0C0] focus:ring-[#C0C0C0] min-h-[150px]"
                  />
                </div>

                <Button className="bg-[#C0C0C0] text-black hover:bg-white w-full flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
