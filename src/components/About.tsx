import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <p className="text-lg leading-relaxed mb-6">
              I'm a Computer Science Engineering student and frontend developer passionate about building modern, 
              scalable, cloud-integrated web applications.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I've contributed to global open-source organizations like <span className="text-primary font-semibold">OWASP Foundation</span>, 
              <span className="text-primary font-semibold"> OpenGov Africa</span>, and <span className="text-primary font-semibold">Share Bite UI</span>, 
              enhancing documentation and designing new platform features.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Certified <span className="text-primary font-semibold">Oracle Cloud Infrastructure Developer</span> and 
              <span className="text-primary font-semibold"> Hacktoberfest 2025 Top 10k Contributor</span> with 6 merged PRs.
            </p>
            <p className="text-lg leading-relaxed">
              I bring <span className="text-gradient font-semibold">adaptability, collaboration, and problem-solving</span> to every project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
