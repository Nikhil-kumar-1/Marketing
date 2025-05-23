import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end start"],
  });

  const projects = [
    {
      id: 1,
      title: "Food Ordering App",
      description: "A seamless mobile experience for restaurant discovery and food delivery",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Mobile App",
      tags: ["UI/UX", "React Native", "Food Tech"]
    },
    {
      id: 2,
      title: "Safety Consultation",
      description: "Enterprise platform for workplace safety management and compliance",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Web Design",
      tags: ["Dashboard", "B2B", "Analytics"]
    },
    {
      id: 3,
      title: "Ark Homes",
      description: "Modern real estate platform with virtual property tours",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Website",
      tags: ["Real Estate", "3D Tours", "Property Management"]
    },
    {
      id: 4,
      title: "Member Benefits",
      description: "Loyalty program with personalized offers and rewards",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Marketing",
      tags: ["CRM", "Loyalty", "Personalization"]
    },
    {
      id: 5,
      title: "KinnectD",
      description: "Social networking platform for professional communities",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Branding",
      tags: ["Social Media", "Networking", "Community"]
    },
    {
      id: 6,
      title: "Cuero Health",
      description: "Telemedicine platform with AI-powered diagnostics",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Healthcare",
      tags: ["Telehealth", "AI", "Medical"]
    },
  ];

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div ref={galleryRef} className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          style={{ opacity }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our latest projects and see how we transform ideas into digital experiences
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ y }}
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <ProjectModal 
            project={projects.find(p => p.id === selectedId)} 
            onClose={() => setSelectedId(null)}
            onNext={() => {
              const currentIndex = projects.findIndex(p => p.id === selectedId);
              const nextIndex = (currentIndex + 1) % projects.length;
              setSelectedId(projects[nextIndex].id);
            }}
            onPrev={() => {
              const currentIndex = projects.findIndex(p => p.id === selectedId);
              const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
              setSelectedId(projects[prevIndex].id);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project.id)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
    >
      <div className="aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{project.category}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <button className="self-end bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full">
          <FiExternalLink />
        </button>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`card-${project.id}`}
        className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2"
        >
          <FiX size={24} />
        </button>

        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-emerald-400 font-medium">{project.category}</span>
              <h2 className="text-3xl font-bold text-white mt-1">{project.title}</h2>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center">
              <FiExternalLink className="mr-2" />
              Visit Project
            </button>
          </div>

          <p className="text-gray-300 mb-8">{project.description}</p>

          <div className="mb-8">
            <h3 className="text-white font-medium mb-3">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-auto pt-4 border-t border-gray-800">
            <button 
              onClick={onPrev}
              className="text-gray-400 hover:text-white flex items-center"
            >
              <FiChevronLeft className="mr-1" />
              Previous
            </button>
            <button 
              onClick={onNext}
              className="text-gray-400 hover:text-white flex items-center"
            >
              Next
              <FiChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;