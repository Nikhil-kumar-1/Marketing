// AboutSection.jsx
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { FaChartLine, FaUsers, FaLightbulb, FaAward } from "react-icons/fa";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      value: "1+",
      label: "Years Experience",
      icon: <FaAward className="text-emerald-500 text-2xl" />,
    },
    {
      value: "100+",
      label: "Clients Worldwide",
      icon: <FaUsers className="text-emerald-500 text-2xl" />,
    },
    {
      value: "95%",
      label: "Client Retention",
      icon: <FaChartLine className="text-emerald-500 text-2xl" />,
    },
    {
      value: "10+",
      label: "Awards Won",
      icon: <FaLightbulb className="text-emerald-500 text-2xl" />,
    },
  ];

  return (
    <section className=" py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 min-h-screen">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Image with Animation */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our team working"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600/10"></div>
            </div>

            {/* Floating card animation */}
            <motion.div
              initial={{ y: -20, x: -20, rotate: -5 }}
              animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs"
            >
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaUsers className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    100+ Happy Clients
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Trusted by businesses worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Our Agency
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              We Combine <span className="text-emerald-600">Innovation</span>{" "}
              With Proven Marketing Strategies
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Founded in 2025, we've grown from a small team of marketing
              enthusiasts to a full-service digital agency helping businesses
              transform their online presence. Our data-driven approach ensures
              measurable results for every client.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-10">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FiCheck className="text-emerald-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Comprehensive digital marketing solutions
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FiCheck className="text-emerald-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Transparent reporting and analytics
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-emerald-100 p-2 rounded-full mr-4">
                  <FiCheck className="text-emerald-600" />
                </div>
                <p className="text-gray-800 font-medium">
                  Dedicated account managers
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
