import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaFacebook,
  FaPenAlt,
  FaEnvelope,
  FaLaptop,
  FaCheck,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaChartBar,
  FaMobileAlt,
  FaGlobe
} from "react-icons/fa";

const Services = () => {
  // Infinite scroll setup for trusted companies
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Meta",
    "Netflix",
    "Tesla",
    "Adobe",
    "Spotify",
    "Airbnb",
    "Uber",
    "Intel",
    "Samsung",
    "PayPal",
    "LinkedIn",
    "Twitter",
  ];

  // Calculate scroll distance for seamless loop
  useEffect(() => {
    if (scrollerRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const scrollerContentWidth = scrollerRef.current.scrollWidth;
      setScrollerWidth(scrollerContentWidth + containerWidth);
    }
  }, []);

  useEffect(() => {
    controls.start({
      x: [0, -scrollerWidth / 2],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  }, [scrollerWidth, controls]);

  const services = [
    {
      icon: <FaSearch className="text-3xl text-green-600" />,
      title: "Search Engine Optimization",
      description:
        "Dominate search rankings with our comprehensive SEO strategies that drive qualified traffic and boost conversions.",
      features: [
        "Advanced keyword research & analysis",
        "Technical SEO optimization",
        "Content strategy & link building",
        "Local SEO for geo-targeted results"
      ],
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Performance Marketing",
      description:
        "Maximize ROI with data-driven paid campaigns across all major digital platforms.",
      features: [
        "Google Ads & Microsoft Advertising",
        "Social media advertising (Meta, LinkedIn)",
        "Programmatic & display advertising",
        "Conversion rate optimization"
      ],
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Social Media Management",
      description: "Build authentic relationships and brand loyalty through strategic social engagement.",
      features: [
        "Platform-specific content strategies",
        "Community growth & management",
        "Influencer marketing programs",
        "Social listening & sentiment analysis"
      ],
    },
    {
      icon: <FaPenAlt className="text-3xl text-green-600" />,
      title: "Content Strategy",
      description: "Attract, engage, and convert your audience with compelling content across all channels.",
      features: [
        "Blogs & thought leadership content",
        "Video production & storytelling",
        "Email marketing automation",
        "Interactive content creation"
      ],
    },
    {
      icon: <FaLaptop className="text-3xl text-green-600" />,
      title: "Web Experience",
      description: "Create high-converting digital experiences that delight users and drive business growth.",
      features: [
        "UX/UI design & optimization",
        "Conversion-focused development",
        "Progressive web apps",
        "Performance optimization"
      ],
    },
    {
      icon: <FaMobileAlt className="text-3xl text-green-600" />,
      title: "Mobile Marketing",
      description: "Reach your audience wherever they are with cutting-edge mobile strategies.",
      features: [
        "App store optimization",
        "Mobile advertising campaigns",
        "SMS marketing automation",
        "Location-based marketing"
      ],
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
          Results-Driven Digital Marketing Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We combine data, creativity, and technology to deliver measurable business growth
        </p>
      </motion.div>

      {/* Trusted Companies Marquee */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Trusted by Innovative Brands Worldwide
          </h2>
          <p className="text-gray-600">
            Join hundreds of companies accelerating their growth with our solutions
          </p>
        </motion.div>

        <div ref={containerRef} className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
          <motion.div
            ref={scrollerRef}
            className="absolute flex items-center gap-8 px-4 h-full"
            animate={controls}
            style={{ width: scrollerWidth * 2 }}
          >
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <motion.div
                  key={`${company}-${index}`}
                  className="flex-shrink-0 px-8 py-4 bg-white rounded-xl shadow-md border border-green-100 flex items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 20px rgba(74, 222, 128, 0.3)",
                  }}
                >
                  <span className="text-xl font-medium text-green-700 whitespace-nowrap">
                    {company}
                  </span>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 border border-green-100 hover:shadow-xl transition-all flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center mb-5">
              <div className="p-3 bg-green-50 rounded-lg mr-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-green-700">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-5">{service.description}</p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                Learn more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Differentiators Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-full mx-auto bg-gradient-to-r from-green-50 to-green-100 p-10 rounded-2xl mb-20"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            The Adonomics Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLightbulb className="text-2xl" />,
                title: "Innovation-Driven",
                desc: "We pioneer cutting-edge marketing technologies that give you a competitive edge"
              },
              {
                icon: <FaChartBar className="text-2xl" />,
                title: "Data-Optimized",
                desc: "Real-time analytics and AI-driven insights maximize your campaign performance"
              },
              {
                icon: <FaShieldAlt className="text-2xl" />,
                title: "Transparent & Secure",
                desc: "Enterprise-grade security with full visibility into all marketing activities"
              },
              {
                icon: <FaGlobe className="text-2xl" />,
                title: "Global Expertise",
                desc: "Localized strategies tailored to your target markets worldwide"
              },
              {
                icon: <FaUsers className="text-2xl" />,
                title: "Dedicated Teams",
                desc: "Your success is managed by senior specialists, not junior staff"
              },
              {
                icon: <FaCheck className="text-2xl" />,
                title: "Proven Results",
                desc: "Documented case studies demonstrate our consistent performance"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-green-100 p-3 rounded-full mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-gradient-to-r from-green-600 to-green-700 p-12 rounded-2xl shadow-lg max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Outperform Your Competition?
        </h3>
        <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
          Schedule your free strategy session and receive a customized growth plan
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-green-600 hover:bg-gray-50 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-md"
          >
            Get Started Today
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-bold py-4 px-10 rounded-full text-lg transition-all"
          >
            View Case Studies
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;