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
    link: "https://ezcodewithcaffeine.blogspot.com/2025/10/how-cloud-gpus-empower-ai-frontends.html",
  },
  {
    title: "Migrating Legacy UIs to React — Lessons Learned",
    excerpt:
      "A comprehensive guide on modernizing legacy applications with React. Real-world challenges and solutions from production migrations.",
    date: "February 2025",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    link: "https://migrating-legacy.blogspot.com/2025/02/blog-2-migrating-legacy-uis-to-react.html",
  },
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-32 relative">
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
              Latest Writings
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Blog & <span className="text-gradient">Notes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="block glass-card rounded-xl overflow-hidden hover:border-primary/30 transition-all group cursor-pointer border border-white/10"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
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
                  <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
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
