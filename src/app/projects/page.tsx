import Footer from "../components/Footer";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 mb-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-purple">
            Featured Projects
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="md:px-24 px-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gradient-to-br from-slate-800/40 via-slate-700/30 to-purple-900/20 backdrop-blur-lg border border-slate-600/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group"
              >
                {/* Project Screenshot */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-slate-800/20 overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-6 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 backdrop-blur-sm text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/20 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center space-x-2 transform"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700/50 hover:bg-slate-600/60 border border-slate-500/30 text-slate-200 hover:text-white px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 transform"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const projects = [
  {
    title: "Event Manager",
    description:
      "Full-stack event management platform with user authentication, image uploads, and real-time CRUD operations. Built with modern tech stack and deployed on Vercel.",
    technologies: ["Next.JS", "PostgreSQL", "TS", "Cloudinary"],
    screenshot: "/screenshots/event-menager.png",
    liveUrl: "https://event-manager-frontend-ruby.vercel.app",
    githubUrl: "https://github.com/rada-ii/event-manager",
  },
  {
    title: "Email Signature Generator",
    description:
      "Email Signature Generator is a modern web application built with Vue 3, Vite, and Tailwind CSS that allows users to create clean, customizable email signatures using a simple form and live preview.",
    technologies: ["Vue 3", "Vite", "Tailwind CSS"],
    screenshot: "/screenshots/email-signature.png",
    liveUrl: "https://email-signature-generator-steel.vercel.app/",
    githubUrl: "https://github.com/rada-ii/Email-signature-generator",
  },
  {
    title: "Pokemon App",
    description:
      "Interactive Pokemon search application with favorites functionality and detailed character information. Integrates with Pokemon API for real-time data.",
    technologies: ["React", "Bootstrap", "REST API", "JavaScript"],
    screenshot: "/screenshots/pokemon.png",
    liveUrl: "https://pokemon-react-app-gamma.vercel.app/",
    githubUrl: "https://github.com/rada-ii/Pokemon-react-app",
  },
  {
    title: "Rick and Morty App",
    description:
      "Interactive character explorer for Rick and Morty TV series with dynamic API data fetching, pagination, and dark/light theme toggle functionality.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    screenshot: "/screenshots/rick&morty.png",
    liveUrl: "https://rada-ii.github.io/Rick_and_Morty/",
    githubUrl: "https://github.com/rada-ii/Rick_and_Morty",
  },
  {
    title: "Weather App",
    description:
      "Weather application built with React and Vite that provides real-time weather information with a clean, intuitive interface.",
    technologies: ["React", "CSS", "Weather API"],
    screenshot: "/screenshots/weather.png",
    liveUrl: "https://weather-react-practice.vercel.app/",
    githubUrl: "https://github.com/rada-ii/Weather-react",
  },
  {
    title: "Bit-Show",
    description:
      "TV show search application that allows users to discover and explore detailed information about their favorite shows using external TV show API.",
    technologies: ["React", "CSS", "API", "JavaScript"],
    screenshot: "/screenshots/tv-show.png",
    liveUrl: "https://bit-show-react.vercel.app",
    githubUrl: "https://github.com/rada-ii/bit-show-react",
  },
];
