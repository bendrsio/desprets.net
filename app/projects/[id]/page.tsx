"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/animated-text";
import MarkdownRenderer from "@/components/markdown-renderer";
import { projects } from "@/app/projects";

// Calculate reading time
const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const readingTime = calculateReadingTime(project.fullDescription);

  // Animate sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".scroll-reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white font-mono">
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-emerald-400 hover:underline mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimatedText
            text={project.title}
            className="text-4xl font-bold mb-4"
            typingSpeed={50}
            showCursor={false}
          />

          <div className="flex items-center mb-4 text-zinc-600 dark:text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readingTime} min read</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex space-x-4 mb-8">
            {project.github && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href={project.github}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </Link>
              </motion.div>
            )}
            {project.link && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href={project.link}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Check it out
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
          <MarkdownRenderer content={project.fullDescription} />
        </motion.div>
      </main>
    </div>
  );
}
