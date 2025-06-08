import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="pt-16 md:pb-10 pb-2 text-center">
        <div className="max-w-6xl mx-auto">
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
      <section className="my-4 py-8" id="about md:px-6 px-4">
        <div className="max-w-6xl mx-auto text-center md:px-6 px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text md:mb-10 mb-8">
            Hi, I am Rada!
          </h1>

          <div className="glass rounded-3xl py-2 md:py-8 hover-lift ">
            <p className="text-gray-300 text-lg leading-relaxed md:p-4 p-2">
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
      <section className="p-4 md:mb-4 mb-2" id="skills">
        <div className="max-w-6xl mx-auto md:px-6 px-0 md:py-20 py-12 ">
          <h2 className="text-3xl md:text-2xl font-bold gradient-text text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 ">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-2xl p-4 hover-lift text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold group-hover:text-violet-500/35 text-slate-300 transition-colors duration-200">
                  {skill.name}
                </h3>
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
