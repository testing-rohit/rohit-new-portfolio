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
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "OpenGov Africa",
    role: "UI/UX Contributor",
    period: "2025 – Present",
    description: "Proposed and built new community features, improved accessibility and layout.",
    tools: ["React", "TailwindCSS", "Figma"],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "Share Bite",
    role: "Frontend Contributor",
    period: "2025",
    description: "Enhanced dashboard UX and responsive components.",
    tools: ["React", "JavaScript", "CSS"],
    icon: UtensilsCrossed,
    color: "from-green-500 to-emerald-500",
  },
  {
    company: "CodSoft",
    role: "Full Stack Web Developer (Offer)",
    period: "2025",
    description: "Offer received recently; not joined yet (waiting for Vultr response).",
    tools: ["Full Stack Development"],
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
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
      {/* Glowing line connector */}
      {index < experiences.length - 1 && (
        <div className="absolute left-1/2 top-20 w-0.5 h-full -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-transparent" />
      )}

      <div className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
        <div className="flex-1" />
        
        {/* Central glowing node */}
        <motion.div
          className="relative z-10"
          animate={inView ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        >
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
            <exp.icon className="w-8 h-8 text-white" />
          </div>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} blur-xl opacity-50 animate-pulse`} />
        </motion.div>

        <div className="flex-1">
          <motion.div
            className="glass-card p-6 rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
            <p className="text-primary font-semibold mb-2">{exp.role}</p>
            <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
            <p className="text-foreground/90 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}
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
