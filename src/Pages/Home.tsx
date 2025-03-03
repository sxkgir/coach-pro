export function Home (){
  const plans = [
    {
      name: "Basic",
      price: "$9.99/M or $49/Y",
      features: [
        "Video/Image Analysis Suite",
        "Cloud Library",
        "50 items",
        "50 Gb",
        "Slow Motion Playback",
        "Annotation Tools",
        "Content Tags",
        "Lists",
        "Templates"
      ]
    },
    {
      name: "Premium",
      price: "$39.99/M or $349/Y",
      features: [
        "Video/Image Analysis Suite",
        "Cloud Library",
        "150 items",
        "150 Gb",
        "Slow Motion Playback",
        "Annotation Tools",
        "CoachCam",
        "AI-Enabled Skeleton Tracking",
        "Content Tags",
        "Unlimited Spaces and Groups",
        "Lists",
        "Smart Lists",
        "Templates",
        "Post Scheduling",
        "View tracking and Read Receipts"
      ]
    },
    {
      name: "Pro",
      price: "$49.99/M or $499/Y",
      features: [
        "Video/Image Analysis Suite",
        "Cloud Library",
        "250 items",
        "300 Gb",
        "Slow Motion Playback",
        "Annotation Tools",
        "CoachCam",
        "AI-Enabled Skeleton Tracking",
        "Automatic Angle Detection",
        "Unlimited Voice Overs",
        "Content Tags",
        "Unlimited Spaces and Groups",
        "Lists",
        "Smart Lists",
        "Templates",
        "Automated Template Builder",
        "Post Scheduling",
        "Advanced Group Controls",
        "View tracking and Read Receipts",
        "Copy and Move Posts"
      ]
    }
  ];




    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Header */}
          <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold text-indigo-600">CoachPro</h1>
                </div>
                <nav className="hidden md:flex space-x-8">
                  <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Communication</a>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Video Analysis</a>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Blog</a>
                  <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Memberships</a>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50">Book Demo</button>
                  <button className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50">Sign In</button>
                  <button 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700">
                    Get Free Trial

                  </button>
                </div>

              </div>
            </div>
          </header>
    
          {/* Hero Section */}
          <div className="bg-indigo-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-evenly items-center max-sm:flex-col max-sm:gap-y-12">
              <div className="w-[50%] h-[fit-content] max-sm:w-full text-center">
                <h2 className="text-4xl font-extrabold text-gray-900">Coaching, but simplified</h2>
                <p className="mt-4 text-xl text-gray-600">Experience an all-in-one solution that empowers coaches to seamlessly connect, analyze performance, and achieve exceptional outcomes.</p>
              </div>
              <video className="h-[50vh]" autoPlay muted loop>
                <source src="/HomeVid.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>

          <div className="m-auto text-center text-gray-700 font-extrabold text-[30px] max-w-[1040px] my-[60px]">
            Supported by various companies/individuals and serviced companies around the globe.
          </div>


          <div className="slider max-sm:max-w-[100vw]">
            <div className="slide-track">
              <div className="slide">
                <img src="/Logo1.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo2.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo3.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo4.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo5.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo6.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo1.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo2.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo3.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo4.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo5.png" alt="" />
              </div>
              <div className="slide">
                <img src="/Logo6.png" alt="" />
              </div>
            </div>
          </div>

    
          {/* Feature Containers */}
          <main className="py-20">
            <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-12 max-w-[1040px] flex flex-col items-center justify-center" >
                {/* Container 1 */}
                <div className="bg-white p-18 rounded-[32px] shadow-md flex items-center justify-between max-sm:flex-col-reverse">
                  <div className="max-w-[50%] max-sm:max-w-[100%]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Feedback Loop</h3>
                    <p className="text-gray-600 mb-6">
                      Leverage AI-powered tools that track progress in real time, identify key improvements, and highlight potential areas of growth—so you can refine your coaching and deliver the most relevant feedback.
                    </p>
                    <button className="bg-indigo-600 text-white px-7 py-2.5 rounded-[12px] font-medium hover:bg-indigo-700">Learn More</button>
                  </div>
                  <img className="max-w-[35%] max-sm:max-w-[100%]"src="/Loop.png" alt=""/>
                </div>
    
                {/* Container 2 */}
                <div className="bg-white p-18 rounded-[32px] shadow-md flex items-center justify-between max-sm:flex-col-reverse">
                  <div className="max-w-[50%] max-sm:max-w-[100%]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Immersive Multimedia Experience
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Record and share videos, high-res images, audio clips, and even 3D motion captures for a richer, more interactive coaching experience. Elevate your sessions with visual annotations, slow-motion replays, and side-by-side comparisons.
                    </p>
                    <button className="bg-indigo-600 text-white px-7 py-2.5 rounded-[12px] font-medium hover:bg-indigo-700">Learn More</button>
                  </div>
                  <img className="max-w-[35%] max-sm:max-w-[100%]" src="/Immerse.jpg" alt="" />
                </div>
    
                {/* Container 3 */}
                <div className="bg-white p-18 rounded-[32px] shadow-md flex items-center justify-between max-sm:flex-col-reverse">
                  <div className="max-w-[50%] max-sm:max-w-[100%]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Streamline Communication</h3>
                    <p className="text-gray-600 mb-6">
                      No more email or text. Finally, all of your most important media/data and people are in ONE coaching software.
                    </p>
                    <button className="bg-indigo-600 text-white px-7 py-2.5 rounded-[12px] font-medium hover:bg-indigo-700">Learn More</button>
                  </div>
                  <img className="max-w-[35%] max-sm:max-w-[100%]" src="/Communication.png" alt="" />
                </div>
              </div>
            </div>
          </main>


          <div className="flex flex-col p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h2>
            <div className="flex flex-col md:flex-row gap-6">
              {plans.map((plan, index) => (
                <div key={index} className="flex-1 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 h-fit">
                  <div className="p-6 bg-blue-600 text-white">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-2xl font-bold">{plan.price}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Select {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-600 py-12 mt-[60px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-sm:">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Ready to transform your coaching experience?
              </h2>
              <div className="mt-8 flex justify-center">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-100">
                  Start Your Free Trial Today
                </button>
              </div>
            </div>
          </div>


    
          {/* Footer */}
          <footer className="bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Demo</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Guides</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p className="text-gray-400">© 2025 CoachPro. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
};
    


