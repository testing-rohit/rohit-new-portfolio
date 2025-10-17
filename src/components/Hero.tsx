import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";
import FloatingIcons3D from "./FloatingIcons3D";

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
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-purple/10 to-accent-cyan/10" />
      <ParticleBackground />
      
      {/* 3D Floating Icons */}
      <div className="absolute inset-0 opacity-60">
        <FloatingIcons3D />
      </div>
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
          <img 
            src="/Self_Image.png" 
            alt="Rohit Sharma" 
            className="w-32 h-32 mx-auto rounded-full object-cover glow-primary"
           />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Rohit Sharma</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Frontend Developer | Cloud Enthusiast
          </p>

          <div className="h-16 mb-12 text-lg md:text-xl font-medium">
            <TypeAnimation
              sequence={achievements}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="glow-primary relative overflow-hidden group" asChild>
                <a href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="glass-card hover:glow-accent" asChild>
                <a href="resume.pdf" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/caffeine-rohit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="http://linkedin.com/in/rohit-sharma-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:caffeine.rohit@gmail.com"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            {/* <ArrowDown className="w-6 h-6 text-muted-foreground" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
