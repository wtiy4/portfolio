import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, Linkedin } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Alwaleed Alharbi | Frontend Developer";
  }, []);

  const projects = [
    {
      title: "Youtube modern clone",
      description: "A modern clone with a responsive layout.",
      link: "https://youtube-ubgf.onrender.com/",
      image: "/public/images/youtube.png",
    },
    {
      title: "Space",
      description: "A space themed web page",
      link: " https://wtiy4.github.io/Space-project/",
      image: "/public/images/3b8or.png",
    },
    {
      title: "Weather API",
      description: "Weather UI fetching live data from API.",
      link: "https://weatherapi2-rega.onrender.com/",
      image: "/public/images/weather.png",
    },
    {
      title: "Student's graduation system",
      description: "Graduation project manager interface.",
      link: "https://project-managment-ufbh.onrender.com/",
      image: "https://via.placeholder.com/400x300?text=Project+Preview",
    },
    {
      title: "iChat",
      description: "Real-time chat app using Socket.io.",
      link: "https://chatapp-gokt.onrender.com/",
      image: "/public/images/ichat.png",
    },
    {
      title: "Rick & Morty Explorer",
      description: "Character explorer with API filters.",
      link: "https://rick-n-morty-lab.onrender.com/",
      image: "/public/images/rick.png",
    },
    {
      title: "BMI Calculator",
      description: "Simple and responsive BMI calculator.",
      link: "https://rmini-project-demo.onrender.com/",
      image: "https://via.placeholder.com/400x300?text=Project+Preview",
    },
    {
      title: "Job Application Form",
      description: "Form handling with useState.",
      link: "https://usestate-hw.onrender.com/",
      image: "https://via.placeholder.com/400x300?text=Project+Preview",
    },
    {
      title: "Call of Duty Clone",
      description: "Gaming homepage UI recreation.",
      link: "https://cod-weekend-project.onrender.com/",
      image: "/public/images/cod.png",
    },
    {
      title: "Trips Agency",
      description: "Responsive travel booking UI.",
      link: "https://tailwind-hw-8pl8.onrender.com/",
      image: "https://via.placeholder.com/400x300?text=Project+Preview",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 to-black text-white p-8">
      <section className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-2 text-emerald-300">
            Alwaleed Alharbi
          </h1>
          <p className="text-lg text-gray-300">
            Frontend Developer & UI Enthusiast
          </p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <a
              href="mailto:waleedbdulaziz@gmail.com"
              className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-emerald-300 hover:text-black transition"
            >
              <Mail className="w-4 h-4" /> Contact
            </a>
            <a
              href="https://github.com/wtiy4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-emerald-300 hover:text-black transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alwaleed-alharbi-3700201b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-emerald-300 hover:text-black transition"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-emerald-200">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="backdrop-blur-lg bg-white/10 border border-white/10 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40   rounded-lg mb-4 border border-white/10"
                />
                <h3 className="text-xl font-bold mb-1 text-emerald-100">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:underline text-sm"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
