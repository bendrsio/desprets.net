import { notFound } from "next/navigation";
import { projects } from "@/app/projects";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}
