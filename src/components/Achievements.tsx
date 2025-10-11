import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AchievementCarousel from "./AchievementCarousel";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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

          <AchievementCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
