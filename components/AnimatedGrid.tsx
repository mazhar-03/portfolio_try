"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/types";

type Props = {
  projects: Project[];
};

export default function AnimatedGrid({ projects }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
