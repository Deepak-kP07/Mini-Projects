import { Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-green-600 text-sm">
            <p>© 2024 PlantOut. All Rights Reserved.</p>
          </div>

          {/* Center - Developer info */}
          <div className="text-green-600 text-sm text-center">
            <p>
              Developed and Maintained by{" "}
              <span className="font-semibold">Deepak KP</span>
            </p>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/deepak_kp_7/"
              className="bg-green-400 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-300 hover:scale-105 transform"
              aria-label="Instagram"
              target="_blank"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-kp-559a85282/"
              className="bg-green-400 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-300 hover:scale-105 transform"
              aria-label="LinkedIn"
              target="_blank"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Deepak-kP07"
              className="bg-green-400 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-300 hover:scale-105 transform"
              aria-label="GitHub"
              target="_blank"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
