import { motion, useAnimation } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaArrowDown, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';

const Team = () => {
    const controls = useAnimation();
    // Hero section animation
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0 });
      await controls.start({ 
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 3 } 
      });
    };
    sequence();
  }, [controls]);
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const directors = [
    {
      name: "Aditya Singh",
      role: "Director of Operations",
      bio: "10+ years in digital strategy and business scaling",
      img: "/team/director1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "aditya@adonomics.com"
      }
    },
    {
      name: "Prince Dwivedi",
      role: "Director of Finance",
      bio: "Financial strategist specializing in tech startups",
      img: "/team/director2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "prince@adonomics.com"
      }
    },
    {
      name: "Vidya Niwas",
      role: "Director of Administration",
      bio: "Operations expert focused on process optimization",
      img: "/team/director3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "vidya@adonomics.com"
      }
    },
    {
      name: "Avinash Singh",
      role: "Director of Business Development",
      bio: "Partnership specialist with global network",
      img: "/team/director4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "avinash@adonomics.com"
      }
    }
  ];

  const teamMembers = [
  {
    name: "Rahul Kumar",
    role: "Graphic Designer",
    expertise: "Figma | Photoshop | Illustrator",
    img: "https://images.unsplash.com/photo-1574722772849-7b249c18a2fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJveXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Sakshi Thakur",
    role: "SEO Optimization Specialist",
    expertise: "SEO | PPC | Google Analytics",
    img: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Nikhil Kumar",
    role: "Full Stack Developer",
    expertise: "React | Node.js | MongoDB",
    img: "https://images.unsplash.com/photo-1592046285097-6cdf4daf0d69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Ankur",
    role: "Full Stack Developer",
    expertise: "React | Node.js | MongoDB",
    img: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Sumit Kumar Singh",
    role: "Social Media Manager",
    expertise: "Content Strategy | Engagement | Analytics",
    img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Satyam Kumar",
    role: "Graphic Designer",
    expertise: "Figma | Photoshop | Illustrator",
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww"
  }
];


  return (
    <div className="bg-white">
       {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-200 blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [-50, 50, -50],
              y: [0, 100, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-200 blur-3xl opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -100, 0],
              y: [0, -80, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          className="relative z-10 text-center px-4"
        >
          <motion.div 
            className="inline-block mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <div className="text-emerald-500 text-6xl mb-4">👋</div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Meet Our <span className="text-emerald-600">Team</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The brilliant minds and creative souls who make the magic happen every day
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.a 
              href="#team-section"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white animate-bounce"
              whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowDown />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>


      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders guiding our strategic direction
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {directors.map((director, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={director.img}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{director.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{director.name}</h3>
                  <p className="text-green-600 mb-4">{director.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={director.social.linkedin} 
                      className="text-gray-400 hover:text-green-600 transition-colors"
                      aria-label={`${director.name} LinkedIn`}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`https://twitter.com/${director.social.twitter}`} 
                      className="text-gray-400 hover:text-green-600 transition-colors"
                      aria-label={`${director.name} Twitter`}
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${director.social.email}`} 
                      className="text-gray-400 hover:text-green-600 transition-colors"
                      aria-label={`Email ${director.name}`}
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented professionals executing our vision
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our <span className="text-green-300">Team</span>?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-green-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;