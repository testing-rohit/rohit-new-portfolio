import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How Cloud GPUs Empower AI Frontends",
    excerpt:
      "Exploring the intersection of cloud computing and AI-powered frontend applications. Learn how GPU acceleration transforms user experiences.",
    date: "March 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
    link: "https://ezcodewithcaffeine.blogspot.com/2025/10/how-cloud-gpus-empower-ai-frontends.html", // blog1
  },
  {
    title: "Migrating Legacy UIs to React — Lessons Learned",
    excerpt:
      "A comprehensive guide on modernizing legacy applications with React. Real-world challenges and solutions from production migrations.",
    date: "February 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    link: "https://migrating-legacy.blogspot.com/2025/02/blog-2-migrating-legacy-uis-to-react.html", // blog2
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Blog & <span className="text-gradient">Notes</span>
          </h2>

          <div className="columns-1 md:columns-2 gap-8 max-w-5xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="block glass-card rounded-2xl overflow-hidden hover:glow-primary transition-all group cursor-pointer break-inside-avoid mb-8"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
