import { motion } from "framer-motion";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../../utils";

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return <p>Invalid project URL.</p>;

  const project = projectsData.find((p) => p.id === id);

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={handleBack}
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          Back to Projects
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <motion.h1
        variants={fadeInUp}
        className="text-5xl font-bold mb-4 text-indigo-800"
      >
        {project.title}
      </motion.h1>

      <motion.h3
        variants={fadeInUp}
        className="text-xl text-gray-600 mb-8"
      >
        {project.subtitle}
      </motion.h3>

      <motion.section variants={fadeInUp} className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">📄 More Project Info</h2>
        <p className="text-gray-800 text-lg leading-relaxed">{project.description}</p>

        {project.github && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-indigo-600 text-white py-2 px-5 rounded-md hover:bg-indigo-700 transition"
          >
            🚀 View on GitHub
          </motion.a>
        )}
      </motion.section>

      <motion.section variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600">🖼️ Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {project.screenshots.map((src, idx) => (
            <motion.div
              key={idx}
              variants={imageFade}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg border shadow-sm"
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div variants={fadeInUp} className="mt-12">
        <button
          onClick={handleBack}
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          ← Back to Projects
        </button>
      </motion.div>
    </motion.div>
  );
};
