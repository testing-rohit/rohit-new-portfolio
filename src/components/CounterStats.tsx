import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatCounter = ({ end, label, suffix = "", prefix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const CounterStats = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
      <StatCounter end={3} label="Years Experience" suffix="+" />
      <StatCounter end={15} label="Open Source Projects" suffix="+" />
      <StatCounter end={5} label="Certifications" />
    </div>
  );
};

export default CounterStats;
