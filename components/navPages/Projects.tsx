import { Heart } from "lucide-react";
import React, { JSX, useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal"; // ⬅️ You must have this file
import { jetbrainsMono } from "@/app/font";

import { FaReact, FaJava } from "react-icons/fa6";
import { SiMysql, SiApachekafka, SiTailwindcss, SiHibernate, SiSpringboot, SiJsonwebtokens } from "react-icons/si";

export const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  java: <FaJava className="text-orange-500" />,
  spring: <SiSpringboot className="text-green-500" />,
  mysql: <SiMysql className="text-blue-400" />,
  kafka: <SiApachekafka className="text-gray-300" />,
  tailwind: <SiTailwindcss className="text-cyan-400" />,
  hibernate: <SiHibernate className="text-yellow-600" />,
  jwt: <SiJsonwebtokens className="text-pink-500" />
};

const projects = [
  {
    title: "AttendPro — Employee Attendance System",
    description: "End-to-end multi-role attendance platform with biometric photo capture, GPS validation, leave management, and granular analytics dashboard. Delivered 90% reduction in manual tracking.",
    thumbnail: "/project1.png",
    techStack: ["react", "spring", "jwt", "hibernate", "tailwind"],
    gradient: "#14f195, rgb(13, 1, 60)",
    github: "https://github.com/hardiksinghofficial/AttendPro",
    live: "#",
    year: "2024",
    role: "Full-Stack"
  },
  {
    title: "Full-Stack E-Commerce & AI App",
    description: "Production-grade e-commerce platform using event-driven architecture with Kafka, robust JWT security, and OpenAI API integrations for smart product personalization.",
    thumbnail: "/project2.png",
    techStack: ["react", "spring", "mysql", "kafka"],
    gradient: "#51fbfb, rgb(13, 1, 60)",
    github: "#",
    live: "#",
    year: "2025",
    role: "Full-Stack"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div id="projects" className={`  ${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex gap-2 text-[#e8390d]">
          Made with <Heart />
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className={`${jetbrainsMono.className} grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
