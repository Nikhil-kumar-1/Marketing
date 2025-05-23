import React from "react";
import { FaEnvelope, FaPaperPlane, FaInbox, FaBullhorn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const Email = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white text-gray-800 overflow-hidden relative">
      <Helmet>
        <title>Email Marketing | Adonomics Technologies</title>
        <meta
          name="keywords"
          content="Email Marketing, Email Campaigns, Digital Marketing, Adonomics Technologies,digital marketing
marketing services, email marketing platforms,email marketing services, digital marketing agency, digital marketing company,
digital marketing services, Bihar, Patna"
        />
        <meta name="author" content="Adonomics Technologies" />
        <meta
          name="description"
          content="Unlock the power of Email Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted email campaigns."
        />
        <link rel="canonical" href="https://adonomicstechnologies.com/email" />
        <meta
          property="og:title"
          content="Email Marketing | Adonomics Technologies"
        />
        <meta
          property="og:description"
          content="Unlock the power of Email Marketing with Adonomics Technologies. Drive traffic, generate leads, and boost sales through targeted email campaigns."
        />
        <meta
          property="og:image"
          content="https://adonomicstechnologies.com/Logo.png"
        />
        <meta
          property="og:url"
          content="https://adonomicstechnologies.com/email"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, nofollow" />
      </Helmet>
      <motion.div
        className="absolute top-20 left-10 text-yellow-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaInbox />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-yellow-200 text-5xl z-0"
        {...floatAnimation}
      >
        <FaPaperPlane />
      </motion.div>

      <section
        className="relative z-10 text-center px-6 py-24 text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1683117927786-f146451082fb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-80 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaEnvelope className="text-6xl mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Direct, Personal & Powerful <br />
            Email Marketing
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Nurture leads, retain customers, and boost ROI.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-yellow-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started with Email Campaigns
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1713946598664-b753ed24f9a9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="What is Email Marketing"
            className="rounded-xl shadow-lg md:h-[400px] object-cover mb-6 md:mb-0"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Email Marketing?
            </h2>
            <p className="text-lg text-gray-700 leading-7">
              Email marketing is a direct form of communication with your
              audience. Whether it’s newsletters, promotions, or transactional
              updates, emails drive conversions and engagement cost-effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-yellow-100 to-yellow-50 py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-900 mb-10 text-center">
            Why Email Marketing?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800 text-lg">
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaEnvelope className="text-3xl mb-4 text-yellow-600" />
              <h4 className="font-bold mb-2">High ROI</h4>
              <p>Among the highest returns in digital marketing channels.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaPaperPlane className="text-3xl mb-4 text-yellow-600" />
              <h4 className="font-bold mb-2">Direct Engagement</h4>
              <p>
                Reach users directly in their inbox with personalized messages.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 hover:shadow-xl transition">
              <FaBullhorn className="text-3xl mb-4 text-yellow-600" />
              <h4 className="font-bold mb-2">Automation & Nurturing</h4>
              <p>
                Automate journeys to guide prospects from awareness to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-yellow-900 text-center">
          Our Email Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg">
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📥 List Building & Segmentation
            </h3>
            <p>
              We build clean, engaged lists and segment them for better
              targeting.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              ✉️ Campaign Design & Writing
            </h3>
            <p>
              Design eye-catching emails with persuasive, conversion-focused
              copy.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              📈 Performance Optimization
            </h3>
            <p>
              We A/B test subject lines, CTAs, and layouts for maximum
              performance.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">
              🔄 Drip Campaigns & Automations
            </h3>
            <p>
              We set up automated email sequences for onboarding, upsells, and
              retention.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-16 px-6 text-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Make Every Email Count</h2>
          <p className="text-lg mb-6">
            Let’s create campaigns that get opened and clicked.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-yellow-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Schedule a Free Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Email;
