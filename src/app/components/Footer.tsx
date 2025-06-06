import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" py-8 border-t border-white/10 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-between space-x-8 mb-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2024 Rada Ivanković. Built with passion and lots of coffee ☕
          </p>
          <a
            href="https://www.linkedin.com/in/rada-ivankovi%C4%87-52621b74/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 flex items-center space-x-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/rada-ii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 flex items-center space-x-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="mailto:ra.da@live.com"
            className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110 flex items-center space-x-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
