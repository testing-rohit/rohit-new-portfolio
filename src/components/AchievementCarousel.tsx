import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Trophy,
  Star,
  Code,
  Target,
  Users,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Award,
    title: "Oracle Cloud Infrastructure Developer",
    year: "2025",
    description: "Certified in OCI development and cloud architecture",
    color: "from-orange-500 to-red-500",
    certificate: "OCI_Certificate.jpg",
  },
  {
    icon: Code,
    title: "Hacktoberfest 2025",
    year: "2025",
    description: "6 PRs merged, Top 10k Contributor Globally",
    color: "from-purple-500 to-pink-500",
    certificate: "Hacktoberfest_Certificate.jpg",
  },
  {
    icon: Star,
    title: "Google Summer of Code 2025 Finalist",
    year: "2025",
    description: "OWASP PyGoat Project",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Smart India Hackathon",
    year: "2025",
    description: "Top 50 / 300+ Teams at JECRC Prelims",
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
  {
    icon: Layers,
    title: "More Certificates",
    year: "Udemy Frontend",
    description: "Hover to see all",
    color: "from-gray-500 to-gray-700",
    type: "more",
  },
];
const udemyCerts = [
  { title: "JavaScript, jQuery & TypeScript", img: "JS, J-Query &TS Certificate.jpg" },
  { title: "Mastering React", img: "Mastering_React_Certificate.jpeg" },
  { title: "Frontend 10 Projects", img: "Frontend 10 Projects_Certificate.jpeg" },
  { title: "Introduction to Data Structure & Algorithms", img: "DSA_basics_Certificate.jpeg" },
  { title: "Google Adwords Crash Course", img: "G-Adwords_Certificate.jpeg" },
];

const AchievementCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const [showUdemy, setShowUdemy] = useState(false);

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
    <div
      className="relative max-w-7xl mx-auto"
      onMouseLeave={() => setShowUdemy(false)}
    >
      {/* Left Scroll Button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass-card"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {/* Achievement Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-80 glass-card p-6 rounded-2xl relative overflow-hidden cursor-pointer"
            onMouseEnter={() => {
              setHoveredIndex(index);
              if (achievement.type === "more") setShowUdemy(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              if (achievement.type === "more") setShowUdemy(false);
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={() =>
              achievement.certificate && setSelectedCert(achievement.certificate)
            }
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 transition-opacity duration-300`}
              style={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
            />
            <div className="relative z-10">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-primary font-semibold mb-3">
                {achievement.year}
              </p>
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

      {/* Right Scroll Button */}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass-card"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Udemy Side Panel */}
      <AnimatePresence>
        {showUdemy && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-80 bg-[#1e1e1e]/95 backdrop-blur-md shadow-lg border-l border-gray-700 z-50 p-6 overflow-y-auto"
            onMouseEnter={() => setShowUdemy(true)}
            onMouseLeave={() => setShowUdemy(false)}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-200">
              Frontend Certificates
            </h2>
            <div className="flex flex-col gap-4">
              {udemyCerts.map((cert, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-3 rounded-xl hover:bg-gray-800/70 transition cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedCert(cert.img)}
                >
                  <p className="text-sm text-gray-300 font-medium">
                    {cert.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <img
            src={selectedCert}
            alt="Certificate"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AchievementCarousel;
