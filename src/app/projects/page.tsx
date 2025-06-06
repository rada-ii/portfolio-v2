import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-purple">
          Featured Projects
        </h1>
      </section>

      {/* Projects Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass rounded-3xl overflow-hidden hover-lift"
              >
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-4xl">{project.icon}</div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary px-4 py-2 rounded-lg text-white font-medium flex items-center justify-center space-x-2 text-sm"
                      >
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex-1 bg-gray-600/20 text-gray-400 px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm cursor-not-allowed">
                        <span>Coming Soon</span>
                      </span>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary px-4 py-2 rounded-lg text-white font-medium flex items-center justify-center space-x-2 text-sm"
                      >
                        <Github size={16} />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="flex-1 bg-gray-600/20 text-gray-400 px-4 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 text-sm cursor-not-allowed">
                        <Github size={16} />
                        <span>Private</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        s
      </section>

      {/* CTA Section */}
      <section className="px-4 mt-20">
        s
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              Let&rsquo;s Work Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm always excited to take on new challenges and collaborate on
              interesting projects. we can bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-full text-white font-medium inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const projects = [
  // Real Projects
  {
    title: "Event Manager",
    description:
      "Full-stack event management platform with user authentication, image uploads, and real-time CRUD operations. Built with modern tech stack and deployed on Vercel.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Cloudinary",
    ],
    icon: "🎯",
    liveUrl: "https://event-manager-frontend-ruby.vercel.app",
    githubUrl: "https://github.com/rada-ii/event-manager",
  },
  {
    title: "Quote App",
    description:
      "Modern quote application with save/delete functionality built with Next.js and TypeScript. Features clean UI design and responsive layout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    icon: "💬",
    liveUrl: null, // Coming soon
    githubUrl: null, // Private or coming soon
  },
  {
    title: "Pokemon App",
    description:
      "Interactive Pokemon search application with favorites functionality and detailed character information. Integrates with Pokemon API for real-time data.",
    technologies: ["React", "Bootstrap", "REST API", "JavaScript"],
    icon: "🐾",
    liveUrl: "https://pokemon-react-app-gamma.vercel.app/",
    githubUrl: "https://github.com/rada-ii/Pokemon-react-app",
  },

  // Placeholder Projects
  {
    title: "Movie Quotes",
    description:
      "Full-stack application for browsing and managing movie quotes with user authentication and data persistence using Supabase backend.",
    technologies: ["React", "Supabase", "CSS", "JavaScript"],
    icon: "🎬",
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Bit-Show",
    description:
      "TV show search application that allows users to discover and explore detailed information about their favorite shows using external TV show API.",
    technologies: ["React", "CSS", "API", "JavaScript"],
    icon: "📺",
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Books Tracker",
    description:
      "Simple yet effective book tracking application that allows users to add and manage their reading list with a clean and intuitive interface.",
    technologies: ["React", "CSS", "Local Storage", "JavaScript"],
    icon: "📚",
    liveUrl: null,
    githubUrl: null,
  },
];
