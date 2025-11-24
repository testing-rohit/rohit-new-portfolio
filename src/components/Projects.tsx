import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FlipCard from "./FlipCard";

const projects = [
  {
    title: "Cloud Dashboard UI",
    description: "Simulated cloud management console with login mock, instance table, live metrics, and dark mode.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "TailwindCSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Cloud Cost Optimizer",
    description: "Smart web app recommending optimal cloud configs based on traffic and budget; includes charts and AI summary.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "AI", "Charts", "API Integration"],
    github: "#",
    demo: "#",
  },
  {
    title: "Rohit UI Kit",
    description: "Reusable component library (Button, Card, Modal) inspired by enterprise design systems.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
    tags: ["React", "Component Library", "Design System"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-sm font-medium text-primary mb-4 tracking-widest uppercase"
            >
              My Work
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FlipCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
