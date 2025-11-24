import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const FlipCard = ({ title, description, image, tags, github, demo }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[400px] perspective-1000 group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full glass-card rounded-xl overflow-hidden backface-hidden border border-white/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-2/3 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>

        <div
          className="absolute w-full h-full glass-card rounded-xl p-6 backface-hidden flex flex-col justify-between border border-white/10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient">{title}</h3>
            <p className="text-sm text-gray-300 mb-6">{description}</p>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="flex-1 hover:border-primary/50" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default FlipCard;
