import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaBrain,
  FaEdit,
  FaBullhorn,
  FaQuestion,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const faqs = [
  {
    question: "What types of videos do you create?",
    answer:
      "We create explainer videos, product demos, social media content, testimonial videos, and more based on your goals.",
  },
  {
    question: "Can I provide my own script or voiceover?",
    answer:
      "Absolutely! We can work with your script or voiceover or create one from scratch based on your brief.",
  },
  {
    question: "Do you handle editing and post-production?",
    answer:
      "Yes, our service includes professional editing, sound mixing, and post-production effects.",
  },
  {
    question: "What is the typical turnaround time?",
    answer:
      "Depending on complexity, most video projects are delivered within 7–14 days.",
  },
];

const VideoContent = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800">
      <Helmet>
        <title>Video Content Services | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Video Content, Video Marketing, Adonomics Technologies, Digital Marketing, digital marketing agency
digital marketing company
content marketing
digital marketing services"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Transform your brand's message with our expert video content services. Engage your audience and boost conversions with high-quality videos."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/video-content"
        />
        <meta
          property="og:title"
          content="Video Content Services | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Transform your brand's message with our expert video content services. Engage your audience and boost conversions with high-quality videos."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/video-content"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1649783465020-1e0c6f9ced0e?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-50"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            <FaVideo className="text-6xl text-white mx-auto mb-6 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInUp}
          >
            Impactful Video Content That Tells Your Story
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInUp}
          >
            From concept to cut — our videos deliver your message with clarity,
            emotion, and intent.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInUp}
          >
            Start Your Video Project
          </motion.a>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: <FaBrain />,
            title: "Creative Planning",
            desc: "We brainstorm video ideas that match your goals and audience preferences.",
          },
          {
            icon: <FaEdit />,
            title: "Script & Storyboard",
            desc: "Our writers and designers craft compelling scripts and visual guides.",
          },
          {
            icon: <FaVideo />,
            title: "Filming & Animation",
            desc: "High-quality video shoots or animations — customized for every need.",
          },
          {
            icon: <FaBullhorn />,
            title: "Optimized for Reach",
            desc: "Videos are tailored for YouTube, Instagram, or your platform of choice.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={fadeInUp}
          >
            <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
            <h4 className="text-xl font-bold mb-2 text-blue-800">
              {item.title}
            </h4>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Why Choose Our Video Content Services?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🎬",
              title: "Professional Production",
              desc: "Studio-quality production and editing for polished results.",
            },
            {
              icon: "📊",
              title: "Marketing Focus",
              desc: "Every video is made to boost brand presence and conversions.",
            },
            {
              icon: "🎯",
              title: "Targeted Messaging",
              desc: "Videos tailored to your audience, voice, and platform.",
            },
            {
              icon: "🤝",
              title: "Collaborative Process",
              desc: "We involve you at each step to ensure it’s your vision brought to life.",
            },
            {
              icon: "📈",
              title: "Performance Tracking",
              desc: "We offer insights on how your video is performing across channels.",
            },
            {
              icon: "💡",
              title: "Versatile Formats",
              desc: "Vertical reels, explainer animations, interviews — all under one roof.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeInUp}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold text-blue-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 px-6 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-blue-800 text-center mb-8"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow p-4"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={fadeInUp}
            >
              <button
                className="w-full flex items-center justify-between text-left font-semibold text-blue-700"
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              >
                <span>
                  <FaQuestion className="inline mr-2" />
                  {faq.question}
                </span>
                <span>{openFAQ === i ? "−" : "+"}</span>
              </button>
              {openFAQ === i && (
                <motion.p
                  className="mt-2 text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-800 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Let’s Make Your Message Visual
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6 max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          Get in touch to explore video content that connects, educates, and
          converts.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          Request a Video Strategy
        </motion.a>
      </section>

      <div className="py-12"></div>
    </div>
  );
};

export default VideoContent;
