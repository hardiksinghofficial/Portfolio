"use client";
import { FaGitAlt, FaGithub, FaReact, FaJava, FaDocker } from "react-icons/fa6";
import { RiCss3Fill, RiHtml5Fill, RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot, SiSpringsecurity, SiJsonwebtokens, SiHibernate, SiMysql, SiRedis, SiApachekafka, SiPostman } from "react-icons/si";
import SkillCard from "../SkillCard";
import { jetbrainsMono } from "@/app/font";
import { IoLogoJavascript } from "react-icons/io5";

const skillCategories = {
    "Programming Languages": [
        { name: "Java", icon: <FaJava />, hoverColor: "group-hover:text-orange-500" },
        { name: "JavaScript", icon: <IoLogoJavascript />, hoverColor: "group-hover:text-yellow-400" },
    ],
    "Frameworks & Libraries": [
        { name: "Spring Boot", icon: <SiSpringboot />, hoverColor: "group-hover:text-green-500" },
        { name: "Spring Security", icon: <SiSpringsecurity />, hoverColor: "group-hover:text-green-600" },
        { name: "Hibernate/JPA", icon: <SiHibernate />, hoverColor: "group-hover:text-yellow-600" },
        { name: "React.js", icon: <FaReact />, hoverColor: "group-hover:text-cyan-300" },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill />, hoverColor: "group-hover:text-cyan-400" },
        { name: "HTML 5", icon: <RiHtml5Fill />, hoverColor: "group-hover:text-orange-500" },
        { name: "CSS 3", icon: <RiCss3Fill />, hoverColor: "group-hover:text-blue-500" },
    ],
    "Databases": [
        { name: "MySQL", icon: <SiMysql />, hoverColor: "group-hover:text-blue-400" },
        { name: "Redis", icon: <SiRedis />, hoverColor: "group-hover:text-red-500" },
    ],
    "Tools & Others": [
        { name: "Git", icon: <FaGitAlt />, hoverColor: "group-hover:text-orange-600" },
        { name: "Github", icon: <FaGithub />, hoverColor: "group-hover:text-purple-500" },
        { name: "Docker", icon: <FaDocker />, hoverColor: "group-hover:text-blue-500" },
        { name: "Postman", icon: <SiPostman />, hoverColor: "group-hover:text-orange-500" },
        { name: "Apache Kafka", icon: <SiApachekafka />, hoverColor: "group-hover:text-gray-600" },
        { name: "JWT", icon: <SiJsonwebtokens />, hoverColor: "group-hover:text-pink-500" },
    ]
};

export default function SkillsSection() {
    return (
        <section id="skills" className={` ${jetbrainsMono.className} flex flex-col gap-10 py-16 px-4 w-full`}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    My Skills
                </h1>
            </div>
            
            <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto mt-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold text-center md:text-left text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                            {category}
                        </h2>
                        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} {...skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
