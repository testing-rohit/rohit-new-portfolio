import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const achievements = [
    "GSoC 2025 High Rank",
    2000,
    "Open Source Contributor",
    2000,
    "Oracle Cloud Certified",
    2000,
    "Hacktoberfest 2025 (Top 10k Global)",
    2000,
    "React.js Developer",
    2000,
    "Full-Stack Developer",
    2000,
    "Cloud UI Builder",
    2000,
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              <img
                src="/Self_Image.png"
                alt="Rohit Sharma"
                className="w-32 h-32 rounded-full object-cover border-2 border-primary/30 relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-widest uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Hi, I'm <span className="text-gradient">Rohit Sharma</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light"
          >
            Frontend Developer | Cloud Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-16 mb-12 text-lg md:text-xl font-medium"
          >
            <TypeAnimation
              sequence={achievements}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium rounded-lg neon-border transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              asChild
            >
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card px-8 py-6 text-base font-medium rounded-lg hover:border-primary/50 transition-all duration-300"
              asChild
            >
              <a href="resume.pdf" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="https://github.com/caffeine-rohit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="http://linkedin.com/in/rohit-sharma-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:caffeine.rohit@gmail.com"
              className="w-12 h-12 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
