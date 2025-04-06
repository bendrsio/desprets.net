"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/animated-text";
import MarkdownRenderer from "@/components/markdown-renderer";

// This would typically come from a database or API
const projects = [
  {
    id: "1",
    title: "Project One",
    description:
      "A full-stack application with authentication and database integration.",
    technologies: ["React", "Tailwind", "Railway", "TypeScript"],
    github: "https://github.com/bendrsio/emoji-color-picker",
    demo: "https://emoji.desprets.net/",
    fullDescription: `
      A unique take on color pickers, showing the closest emoji.
    `,
    images: ["/Emoji-Color-Picker.png"],
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "An e-commerce platform with payment processing and inventory management.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    github: "#",
    demo: "#",
    fullDescription: `
      This e-commerce platform provides a complete solution for online stores, with features for both customers and store administrators.
      
      ## Features
      
      - Product catalog with categories and search
      - Shopping cart and checkout process
      - Payment processing with Stripe
      - Inventory management
      - Order tracking and history
      - Admin dashboard for managing products, orders, and customers
      
      ## Technical Details
      
      The application is built with Next.js, taking advantage of both server-side rendering and static site generation for optimal performance. Tailwind CSS is used for styling, providing a consistent and responsive design.
      
      Prisma is used as the ORM, connecting to a PostgreSQL database. This provides type-safe database access and simplifies database migrations.
      
      Stripe is integrated for payment processing, with a custom checkout flow that provides a seamless experience for customers.
      
      ## Challenges and Solutions
      
      Managing inventory across multiple concurrent sessions was a significant challenge. This was addressed by implementing optimistic UI updates combined with server-side validation to prevent overselling.
      
      ## Outcome
      
      The platform has been successfully deployed for multiple clients, with positive feedback on its ease of use and reliability. It demonstrates my ability to build complex, production-ready applications with modern technologies.
    `,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "3",
    title: "Project Three",
    description:
      "A real-time chat application with video calling capabilities.",
    technologies: ["React", "Socket.io", "WebRTC", "Firebase"],
    github: "#",
    demo: "#",
    fullDescription: `
      This real-time communication platform enables users to chat and make video calls directly in their browser.
      
      ## Features
      
      - Text chat with message history
      - One-on-one video calls
      - Group video conferences
      - Screen sharing
      - File sharing
      - User presence indicators
      
      ## Technical Details
      
      The frontend is built with React, with custom hooks for managing WebRTC connections and chat state. The UI is designed to be intuitive and responsive, with a focus on providing a seamless communication experience.
      
      Socket.io is used for signaling and managing real-time connections, while WebRTC handles the peer-to-peer audio and video streams. Firebase provides authentication and persistent storage for message history.
      
      ## Challenges and Solutions
      
      Implementing reliable peer-to-peer connections across different network configurations was challenging. This was addressed by implementing TURN server fallback for situations where direct connections aren't possible.
      
      ## Outcome
      
      The application has been successfully deployed and is being used by distributed teams for daily communication. It demonstrates my ability to work with real-time technologies and implement complex peer-to-peer systems.
    `,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
];

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
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white font-mono">
      <header className="container mx-auto py-6 px-4 sticky top-0 z-50 backdrop-blur-lg bg-white/50 dark:bg-black/50 border-b border-zinc-200 dark:border-zinc-800">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Benjamin Desprets
          </Link>
          <div className="space-x-6 flex items-center">
            <Link
              href="/#projects"
              className="hover:text-emerald-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="hover:text-emerald-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="/#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="hover:text-emerald-400 transition-colors"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

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
            Back to all projects
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href={project.demo}>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
            </motion.div>
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

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-zinc-600 dark:text-gray-400 mt-20">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Benjamin Desprets. All rights reserved.
          </p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
