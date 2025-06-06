"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { Project } from "@/app/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 overflow-hidden h-full transition-all duration-300 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/10 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/projects/${project.id}`}>
          <div className="h-64 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative overflow-hidden cursor-pointer">
            <motion.div
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Link>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-zinc-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
              >
                <Github size={20} />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <Link href={`/projects/${project.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="text-emerald-400 border-emerald-400 hover:bg-emerald-400/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
