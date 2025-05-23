import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  
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

  return (
    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we transform ideas into digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group bg-gray-800"
    >
      <div className="aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-2">{project.category}</p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
              +{project.tags.length - 2}
            </span>
          )}
        </div>
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
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`card-${project.id}`}
        className="relative bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2"
        >
          <FiX size={20} />
        </button>

        <div className="h-48 sm:h-64 bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="mb-6">
            <span className="text-emerald-400 text-sm font-medium">{project.category}</span>
            <h2 className="text-2xl font-bold text-white mt-1">{project.title}</h2>
          </div>

          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="mb-6">
            <h3 className="text-white font-medium mb-2">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          

          <div className="flex justify-between pt-4 border-t border-gray-700">
            <button 
              onClick={onPrev}
              className="text-gray-400 hover:text-white flex items-center text-sm"
            >
              <FiChevronLeft className="mr-1" />
              Previous
            </button>
            <button 
              onClick={onNext}
              className="text-gray-400 hover:text-white flex items-center text-sm"
            >
              Next
              <FiChevronRight className="ml-1" />
            </button>
             <button className=" bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full flex items-center">
              <FiExternalLink className="mr-2" />
              Visit Project
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;