import React from "react";
import {
  FaPenFancy,
  FaBookOpen,
  FaFeatherAlt,
  FaBullhorn,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Content = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>Content Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Content Marketing, SEO, Blogging, Digital Marketing, Adonomics Technologies, digital marketing
content manager
digital marketing agency
digital marketing company
digital marketing services"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of Content Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted content strategies."
        />
        <link
          rel="canonical"
          href="https://adonomicstechnologies.com/content"
        />
        <meta
          property="og:title"
          content="Content Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of Content Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted content strategies."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/content"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <motion.div
        className="absolute top-20 left-10 text-purple-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaFeatherAlt />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-purple-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaBookOpen />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaPenFancy className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Authority through Words <br />
            Content Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Attract, inform, and inspire with powerful storytelling.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Craft Your Content Plan
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What is Content Marketing"
            className="rounded-xl shadow-lg md:h-[400px] object-cover mb-6 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Content Marketing?
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              Content marketing is the strategic creation and sharing of
              valuable, relevant, and consistent content to attract and retain a
              clearly defined audience — and, ultimately, to drive profitable
              action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-100 to-purple-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-10 text-center">
            Why Content Marketing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaFeatherAlt className="text-3xl mb-4 text-purple-700" />
              <h4 className="font-bold mb-2">SEO Boost</h4>
              <p>Publish keyword-rich content that ranks and drives traffic.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaBookOpen className="text-3xl mb-4 text-purple-700" />
              <h4 className="font-bold mb-2">Educate & Engage</h4>
              <p>Deliver real value and insights to your audience.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaBullhorn className="text-3xl mb-4 text-purple-700" />
              <h4 className="font-bold mb-2">Brand Authority</h4>
              <p>Position your brand as a leader in your industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-purple-900 text-center">
          Our Content Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🧠 Topic Research & Planning
            </h3>
            <p>
              We align content with search intent, trends, and audience pain
              points.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              ✍️ Blog Posts & Articles
            </h3>
            <p>Engaging and informative long-form content to build trust.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📹 Visual & Video Content
            </h3>
            <p>
              Infographics, explainers, and video reels to amplify your reach.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📊 Reporting & Optimization
            </h3>
            <p>Track what works and refine content for better performance.</p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="mt-24 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={floatAnimation}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              q: "How long does it take to write a blog?",
              a: "We typically deliver within 2–4 business days depending on length and complexity.",
            },
            {
              q: "Can I request edits after receiving the draft?",
              a: "Absolutely! We offer unlimited revisions to make sure you're 100% happy.",
            },
            {
              q: "Do you provide images and meta descriptions?",
              a: "Yes, we can provide royalty-free images and SEO-optimized meta descriptions on request.",
            },
            {
              q: "What industries do you write for?",
              a: "We cover a wide range including tech, health, lifestyle, education, and finance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={floatAnimation}
            >
              <h4 className="font-semibold text-purple-700 mb-2">{item.q}</h4>
              <p className="text-gray-700">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-purple-700 to-purple-600 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Create Compelling Stories
          </h2>
          <p className="text-lg mb-6">
            Ready to attract your ideal audience through content?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Book a Content Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Content;
