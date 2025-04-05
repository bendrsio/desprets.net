"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import AnimatedText from "@/components/animated-text";
import SmoothScrollLink from "@/components/smooth-scroll-link";
import ProjectCard from "@/components/project-card";
import SectionDivider from "@/components/section-divider";

// Function to check if element is in viewport
const useScrollReveal = () => {
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
};

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white font-mono">
      <header className="container mx-auto py-6 px-4 sticky top-0 z-50 backdrop-blur-lg bg-white/50 dark:bg-black/50 border-b border-zinc-200 dark:border-zinc-800">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">Benjamin Desprets</div>
          <div className="space-x-6 flex items-center">
            <SmoothScrollLink
              href="#projects"
              className="hover:text-emerald-400 transition-colors"
            >
              Projects
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#about"
              className="hover:text-emerald-400 transition-colors"
            >
              About
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#skills"
              className="hover:text-emerald-400 transition-colors"
            >
              Skills
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#contact"
              className="hover:text-emerald-400 transition-colors"
            >
              Contact
            </SmoothScrollLink>
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
        {/* Hero Section */}
        <motion.section
          className="py-2 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl md:text-6xl font-bold mb-6">
            {" "}
            Benjamin Desprets{" "}
          </div>
          <AnimatedText
            text="Full-stack developer"
            className="text-xl md:text-2xl max-w-2xl mb-8 text-zinc-600 dark:text-gray-400"
            typingSpeed={50}
            showCursor={true}
          />
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <SmoothScrollLink href="#projects" className="inline-block">
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10"
              >
                View Projects
              </Button>
            </SmoothScrollLink>
            <SmoothScrollLink href="#contact" className="inline-block">
              <Button className="bg-emerald-400 text-black hover:bg-emerald-500">
                Contact Me
              </Button>
            </SmoothScrollLink>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="py-2 scroll-reveal">
          <AnimatedText
            text="Projects"
            className="text-3xl font-bold mb-2"
            typingSpeed={100}
            showCursor={false}
          />
          <SectionDivider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-2 scroll-reveal">
          <AnimatedText
            text="About Me"
            className="text-3xl font-bold mb-2"
            typingSpeed={100}
            showCursor={false}
          />
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-zinc-600 dark:text-gray-400 mb-4">
              I'm a passionate developer with a focus on creating clean,
              efficient, and user-friendly applications. With expertise in both
              frontend and backend technologies, I enjoy building complete
              solutions that solve real-world problems.
            </p>
            <p className="text-zinc-600 dark:text-gray-400 mb-4">
              I'm currently completing my master's degree in computer science at
              Epitech and obtaining a certificate in management at McGill
              University. My academic journey has equipped me with a strong
              foundation in software development, problem-solving, and
              leadership skills.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-2 scroll-reveal">
          <AnimatedText
            text="Skills"
            className="text-3xl font-bold mb-2"
            typingSpeed={100}
            showCursor={false}
          />
          <SectionDivider />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <div className="h-2 w-2 bg-emerald-400 mr-2"></div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-2 scroll-reveal">
          <AnimatedText
            text="Contact"
            className="text-3xl font-bold mb-2"
            typingSpeed={100}
            showCursor={false}
          />
          <SectionDivider />
          <div className="max-w-md">
            <motion.p
              className="text-zinc-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Interested in working together? Feel free to reach out through any
              of the following channels:
            </motion.p>
            <div className="space-y-4">
              <motion.a
                href="mailto:benjy.desprets@gmail.com"
                className="flex items-center group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.1 }}
                whileHover={{ x: 15 }}
              >
                <Mail className="mr-4 text-emerald-400" />
                <span className="group-hover:text-emerald-400 transition-colors">
                  benjy.desprets@gmail.com
                </span>
              </motion.a>
              <motion.a
                href="https://github.com/bendrsio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.1 }}
                whileHover={{ x: 15 }}
              >
                <Github className="mr-4 text-emerald-400" />
                <span className="group-hover:text-emerald-400 transition-colors">
                  github.com/bendrsio
                </span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/benjamindesprets"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: 0.1 }}
                whileHover={{ x: 15 }}
              >
                <Linkedin className="mr-4 text-emerald-400" />
                <span className="group-hover:text-emerald-400 transition-colors">
                  linkedin.com/in/benjamindesprets
                </span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-zinc-600 dark:text-gray-400">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Benjamin Desprets. All rights reserved.
          </p>
          <p className="mt-2 text-xs">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

// Sample data - replace with your own
const projects = [
  {
    id: "1",
    title: "Project One",
    description:
      "A full-stack application with authentication and database integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "An e-commerce platform with payment processing and inventory management.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    github: "#",
    demo: "#",
  },
  {
    id: "3",
    title: "Project Three",
    description:
      "A real-time chat application with video calling capabilities.",
    technologies: ["React", "Socket.io", "WebRTC", "Firebase"],
    github: "#",
    demo: "#",
  },
];

const skills = [
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
];

// const skills = [
//   "JavaScript/TypeScript",
//   "React/Next.js",
//   "Node.js",
//   "HTML/CSS",
//   "Tailwind CSS",
//   "MongoDB",
//   "PostgreSQL",
//   "Git/GitHub",
//   "Docker",
//   "AWS",
//   "GraphQL",
//   "Redux",
// ];
