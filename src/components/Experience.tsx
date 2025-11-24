import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlowingTimeline from "./GlowingTimeline";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-sm font-medium text-primary mb-4 tracking-widest uppercase"
            >
              Career Journey
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Experience Timeline</span>
            </h2>
          </div>

          <GlowingTimeline />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
