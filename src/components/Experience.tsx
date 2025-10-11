import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Globe, UtensilsCrossed, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "OWASP Foundation",
    role: "Open Source Contributor",
    period: "2024 – Present",
    description: "Enhanced documentation, drafted new features, mentored by industry experts.",
    tools: ["React", "Markdown", "Docker", "CI/CD"],
    icon: Building2,
  },
  {
    company: "OpenGov Africa",
    role: "UI/UX Contributor",
    period: "2025 – Present",
    description: "Proposed and built new community features, improved accessibility and layout.",
    tools: ["React", "TailwindCSS", "Figma"],
    icon: Globe,
  },
  {
    company: "Share Bite",
    role: "Frontend Contributor",
    period: "2025",
    description: "Enhanced dashboard UX and responsive components.",
    tools: ["React", "JavaScript", "CSS"],
    icon: UtensilsCrossed,
  },
  {
    company: "CodSoft",
    role: "Full Stack Web Developer (Offer)",
    period: "2025",
    description: "Offer received recently; not joined yet (waiting for Vultr response).",
    tools: ["Full Stack Development"],
    icon: Briefcase,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Experience</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-2xl hover:glow-primary transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-foreground/90 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
