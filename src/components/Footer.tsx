import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> by Rohit Sharma
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
