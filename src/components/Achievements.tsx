import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AchievementCarousel from "./AchievementCarousel";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
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
              Recognition
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Achievements & <span className="text-gradient">Certifications</span>
            </h2>
          </div>

          <AchievementCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
