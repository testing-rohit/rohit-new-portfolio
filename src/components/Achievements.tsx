import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Code, Target, Users } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure Developer",
    year: "2025",
    description: "Certified in OCI development and cloud architecture",
  },
  {
    icon: Code,
    title: "Hacktoberfest 2025",
    year: "2025",
    description: "6 PRs merged, Top 10k Contributor Globally",
  },
  {
    icon: Star,
    title: "GSoC 2025 Finalist",
    year: "2025",
    description: "OWASP PyGoat Project",
  },
  {
    icon: Users,
    title: "Smart India Hackathon",
    year: "2024",
    description: "Top 50 / 300 Teams at JECRC Prelims",
  },
  {
    icon: Trophy,
    title: "University Topper",
    year: "2024–25",
    description: "94% in Project Development",
  },
  {
    icon: Target,
    title: "University Ideathon",
    year: "2024",
    description: "#4 Rank among all participants",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:glow-accent transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center mb-4">
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{achievement.year}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
