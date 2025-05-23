import React from 'react';

const InfographicsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Overlay Image */}
      <div className="relative bg-gray-900 text-white overflow-hidden h-96 md:h-screen max-h-[800px]">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Data visualization" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turning Data Into Decisions
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              At Adonomics Technologies, we transform complex data into clear, memorable infographics that drive action.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>

       {/* Why Infographics Section */}
      <div className="max-w-7xl  mx-auto p-20 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Infographics: Turning Data Into Decisions at Adonomics Technologies
          </h2>
          <p className="mt-5 max-w-full text-xl text-gray-900 mx-auto">
           In a world overwhelmed with data, the companies that win aren’t just the ones who collect it—they’re the ones who make it easy to understand. At Adonomics Technologies, we use infographics to do exactly that. Infographics help us turn technical insights, campaign metrics, and market trends into clear, visual stories that stick.
          </p>
        </div>
        </div>


      {/* Why Infographics Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Infographics Work?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Let's face it: people don't always have time to read a detailed report. But they will glance at a well-designed infographic—and they'll remember it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "They simplify complexity",
              description: "We break down things like ad performance, data pipelines, or customer journeys in seconds.",
              image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80"
            },
            {
              title: "They boost engagement",
              description: "Visual content gets shared more often on social and keeps people scrolling.",
              image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            },
            {
              title: "They support decision-making",
              description: "Infographics help stakeholders see the bigger picture and act faster.",
              image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How We Use Infographics */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How We Use Infographics?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Transforming data into actionable insights across multiple business functions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Client Reports",
                desc: "Turn analytics into visual summaries that are easy to digest and act on.",
                icon: "📊"
              },
              {
                title: "Sales Enablement",
                desc: "Use data visuals to support pitches and show the value of our solutions.",
                icon: "💼"
              },
              {
                title: "Product Education",
                desc: "Explain how our platforms work—step by step—in a clear, graphic format.",
                icon: "📚"
              },
              {
                title: "Social Media & Blogs",
                desc: "Enhance written content with visual takeaways that catch attention.",
                icon: "📱"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Designed With Purpose */}
      <div className="relative py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Design process"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Designed With Purpose
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Every infographic we design is crafted for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Audience-first",
                description: "Whether for marketers, C-suites, or developers, we tailor the message and format.",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Data-driven",
                description: "We use real numbers, not filler, and back every graphic with insight.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              },
              {
                name: "On-brand",
                description: "Clean, consistent design that reflects the Adonomics voice and visual identity.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conclusion with Infographic Example */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
                Infographics aren't just eye candy
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                At Adonomics Technologies, they're a core part of how we communicate complex tech in simple, human ways. Because when your insights are easy to understand, they're easier to trust—and act on.
              </p>
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Infographic example" 
                className="rounded-lg shadow-2xl max-h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicsPage;