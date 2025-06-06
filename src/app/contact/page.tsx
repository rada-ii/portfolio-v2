"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-purple">
          Contact
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Ready for new challenges and collaboration. Contact me for projects,
          opportunities, or just to connect!
        </p>
      </section>

      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Send className="w-8 h-8 text-purple-400 mr-4" />
                  <h2 className="text-3xl font-bold gradient-text">
                    Send Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none resize-none"
                      placeholder="Describe your project or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary px-8 py-4 rounded-lg text-white font-medium flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:ra.da@live.com"
                        className="text-white hover:text-purple-400"
                      >
                        ra.da@live.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">Serbia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Social Links
                </h3>

                <div className="flex space-x-6">
                  <a
                    href="https://github.com/rada-ii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rada-ivankovic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:ra.da@live.com"
                    className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="glass rounded-3xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready to work together?
                </h3>
                <p className="text-gray-300 mb-6">
                  For urgent projects, contact me directly
                </p>
                <a
                  href="mailto:ra.da@live.com"
                  className="btn-primary px-6 py-3 rounded-full text-white font-medium inline-flex items-center space-x-2"
                >
                  <Mail size={18} />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
