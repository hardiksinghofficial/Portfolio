import Image from "next/image";
import React, { useEffect, useState } from "react";
import { techIconMap } from "./navPages/Projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
    title: string;
    description: string;
    thumbnail: string;
    techStack: string[];
    gradient: string;
    github?: string;
    live?: string;
    year?: string;
    role?: string;
    onClick?: () => void;
}

export default function ProjectCard({
    title,
    description,
    thumbnail,
    techStack,
    gradient,
    github,
    live,
    year,
    role,
    onClick,
}: ProjectCardProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    const lightShadow = {
        boxShadow: `
      rgba(0, 0, 0, 0.5) 0px 15px 25px,
      rgba(0, 0, 0, 0.35) 0px 10px 15px,
      rgba(0, 0, 0, 0.25) 0px 4px 6px
    `,
    };

    const darkShadow = {
        boxShadow: `
      rgba(200, 200, 200, 0.2) 2px 2px 6px,
      rgba(160, 160, 160, 0.15) 0px 6px 10px
    `,
    };

    // Extract the primary color from gradient string for the top glow
    const primaryColor = gradient.split(',')[0].trim();

    return (
        <div
            className="flex flex-col border border-zinc-200 dark:border-slate-800 rounded-2xl overflow-hidden group transition-all duration-300 bg-white dark:bg-[#0b0c10]"
            style={isDarkMode ? lightShadow : darkShadow}
        >
            {/* Top segment with gradient and image */}
            <div 
              className="relative pt-5 px-5 pb-0" 
              style={{ background: `radial-gradient(100% 100% at 50% 0%, ${primaryColor}55 0%, transparent 100%)` }}
            >
                {/* Badges */}
                <div className="flex justify-between items-center mb-6">
                    <span className="bg-black/30 dark:bg-black/50 text-white text-xs px-3 py-1.5 rounded-full font-semibold tracking-wider">
                        {year || "2024"}
                    </span>
                    <span className="bg-black/30 dark:bg-black/50 text-white text-xs px-3 py-1.5 rounded-full font-semibold tracking-wider flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span> {role || "Project"}
                    </span>
                </div>

                {/* Thumbnail */}
                <div className="flex justify-center mt-2 relative rounded-t-xl overflow-hidden shadow-2xl border-t border-x border-white/10 dark:border-white/5">
                   <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0b0c10] to-transparent z-10 top-[60%]"></div>
                   <Image
                       src={thumbnail}
                       alt={title}
                       width={500}
                       height={300}
                       className="object-cover w-full h-[200px] sm:h-[240px] relative z-0 transition-transform duration-500 group-hover:scale-105"
                   />
                </div>
            </div>

            {/* Content segment */}
            <div className="p-6 pt-2 flex flex-col flex-1 gap-5 z-20 bg-white dark:bg-[#0b0c10]">
                {/* Tech Stack */}
                <div className="flex space-x-[-12px] relative z-30 -mt-8">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="w-11 h-11 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center text-[22px] shadow-md border-[3px] border-white dark:border-[#0b0c10] transition-transform hover:-translate-y-1"
                            style={{ zIndex: techStack.length - index }}
                        >
                            {techIconMap[tech] || null}
                        </div>
                    ))}
                </div>

                {/* Title & Desc */}
                <div className="flex flex-col gap-3 flex-1 mt-1">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">{title}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-2">
                    <a 
                        href={live && live !== "#" ? live : undefined}
                        onClick={(e) => { if (!live || live === "#") { e.preventDefault(); onClick && onClick(); } }}
                        className="flex-1 min-w-[130px] bg-[#e8390d] hover:bg-[#d0330b] text-white py-2.5 px-4 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-colors cursor-pointer"
                        target={live && live !== "#" ? "_blank" : "_self"}
                        rel="noreferrer"
                    >
                        <ExternalLink size={18} /> Live Preview
                    </a>
                    <a 
                        href={github && github !== "#" ? github : undefined}
                        className="flex-1 min-w-[130px] bg-transparent border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white py-2.5 px-4 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-colors cursor-pointer"
                        target={github && github !== "#" ? "_blank" : "_self"}
                        rel="noreferrer"
                    >
                        <FaGithub size={18} /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
