import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Code, Target, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure Developer",
    year: "2025",
    description: "Certified in OCI development and cloud architecture",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "Hacktoberfest 2025",
    year: "2025",
    description: "6 PRs merged, Top 10k Contributor Globally",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Star,
    title: "GSoC 2025 Finalist",
    year: "2025",
    description: "OWASP PyGoat Project",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Smart India Hackathon",
    year: "2024",
    description: "Top 50 / 300 Teams at JECRC Prelims",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Trophy,
    title: "University Topper",
    year: "2024–25",
    description: "94% in Project Development",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "University Ideathon",
    year: "2024",
    description: "#4 Rank among all participants",
    color: "from-indigo-500 to-purple-500",
  },
];

const AchievementCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass-card"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 glass-card p-6 rounded-2xl relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 transition-opacity duration-300`}
              style={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
            />
            
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-primary font-semibold mb-3">{achievement.year}</p>
              
              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  height: hoveredIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {achievement.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass-card"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AchievementCarousel;
