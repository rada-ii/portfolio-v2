import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="pt-16 pb-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Profile Image */}
          <div className="flex justify-center mb-2">
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center glass hover-lift">
                {/* Placeholder for avatar image */}
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Hi, I am Rada!
          </h1>

          <div className="glass rounded-3xl p-2 md:p-12 hover-lift">
            <p className="text-gray-300 text-lg leading-relaxed">
              A software developer from Belgrade who enjoys turning coffee into
              code. I build web applications using React, Next.js, and Node.js,
              and I'm genuinely excited about creating things that solve real
              problems. Currently exploring the world of full-stack development
              while trying to write cleaner code and slowly accepting that
              hunting 🐛 is 90% of programming.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-4 md:mb-12 mb-16" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-2xl font-bold gradient-text my-6 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-32 ">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-2xl p-4 hover-lift text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const skills = [
  {
    name: "React",
    icon: "⚛️",
  },
  {
    name: "Next.js",
    icon: "🔷",
  },
  {
    name: "Node.js",
    icon: "💚",
  },
  {
    name: "TypeScript",
    icon: "💎",
  },
  {
    name: "CSS/Tailwind",
    icon: "🎨",
  },
  {
    name: "HTML",
    icon: "🌐",
  },
  {
    name: "JavaScript",
    icon: "⚡",
  },
  {
    name: "Git/GitHub",
    icon: "🐙",
  },
  {
    name: "MongoDB",
    icon: "🍃",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
  },
  {
    name: "API/REST",
    icon: "🔗",
  },
  {
    name: "Responsive Design",
    icon: "📱",
  },
];
