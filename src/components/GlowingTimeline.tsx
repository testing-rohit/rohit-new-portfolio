import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Globe, UtensilsCrossed, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "OWASP Foundation",
    role: "Open Source Contributor",
    period: "2024 – Present",
    description: "Enhanced documentation, drafted new features, mentored by industry experts.",
    tools: ["React", "Markdown", "Docker", "CI/CD"],
    icon: Building2,
    color: "primary",
  },
  {
    company: "OpenGov Africa",
    role: "UI/UX Contributor",
    period: "2025 – Present",
    description: "Proposed and built new community features, improved accessibility and layout.",
    tools: ["React", "TailwindCSS", "Figma"],
    icon: Globe,
    color: "primary",
  },
  {
    company: "Share Bite",
    role: "Frontend Contributor",
    period: "2025",
    description: "Enhanced dashboard UX and responsive components.",
    tools: ["React", "JavaScript", "CSS"],
    icon: UtensilsCrossed,
    color: "primary",
  },
  {
    company: "CodSoft",
    role: "Full Stack Web Developer (Offer)",
    period: "2025",
    description: "Offer received recently; not joined yet",
    tools: ["Full Stack Development"],
    icon: Briefcase,
    color: "primary",
  },
];

const TimelineItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {index < experiences.length - 1 && (
        <div className="absolute left-1/2 top-20 w-px h-full -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
      )}

      <div className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
        <div className="flex-1" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-lg glass-card border border-primary/30 flex items-center justify-center relative">
            <exp.icon className="w-8 h-8 text-primary" />
            <div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl" />
          </div>
        </div>

        <div className="flex-1">
          <motion.div
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
            <p className="text-primary font-semibold mb-2">{exp.role}</p>
            <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
            <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const GlowingTimeline = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-20 relative">
      {experiences.map((exp, index) => (
        <TimelineItem key={index} exp={exp} index={index} />
      ))}
    </div>
  );
};

export default GlowingTimeline;
