import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-purple">
            Hi, I'm Rada!
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Full-Stack Developer
          </h2> */}
          {/* <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications
            using modern technologies. Currently building amazing projects with
            React, Node.js, and TypeScript.
          </p> */}

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/projects"
              className="btn-primary px-8 py-4 rounded-full font-semibold text-white no-underline inline-block"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-white no-underline inline-block"
            >
              Get In Touch
            </Link>
          </div> */}

          {/* Avatar/Profile Image */}
          <div className="flex justify-center mb-2">
            <div className="relative">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center glass hover-lift">
                {/* Placeholder for profile image */}
                <div className="text-6xl">👩‍💻</div>
                {/* Uncomment when you have image */}
                {/* <Image
                  src="/profile-image.jpg"
                  alt="Rada Ivanković"
                  width={256}
                  height={256}
                  className="rounded-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-4" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Hi, I'm Rada!
          </h2>

          <div className="glass rounded-3xl p-2 md:p-12 hover-lift">
            <p className="text-gray-300 text-lg leading-relaxed">
              As an aspiring junior developer, I'm thrilled about diving into
              the world of web development, learning, and creating awesome
              things online. I can't wait to embark on this exciting programming
              journey and bring my passion and dedication to the table. I have
              experience building full-stack applications with modern
              technologies and I'm always eager to learn new tools and
              frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-4 px-4" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text my-6 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass rounded-2xl p-4 hover-lift text-center group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white ">{skill.name}</h3>
                {/* <span className="text-purple-400 text-sm font-medium">
                  {skill.level}
                </span> */}
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
    // level: "Advanced",
    icon: "⚛️",
  },
  {
    name: "Next.js",
    // level: "Intermediate",
    icon: "🔷",
  },
  {
    name: "Node.js",
    // level: "Intermediate",
    icon: "💚",
  },
  {
    name: "TypeScript",
    // level: "Intermediate",
    icon: "💎",
  },
  {
    name: "CSS/Tailwind",
    // level: "Advanced",
    icon: "🎨",
  },
  {
    name: "PostgreSQL",
    // level: "Intermediate",
    icon: "🗄️",
  },
];
