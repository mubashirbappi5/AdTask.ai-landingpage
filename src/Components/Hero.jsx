

const Hero = () => {
    return (
        <div>
             <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      {/* Logo Section */}
      <div className="text-5xl font-bold mb-8 text-gray-800">
        <span className="text-gray-500">ad</span>
        <span className="text-white">Task</span>
        <span className="text-gray-500">.ai</span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-white ">
        Are you ready to boost <br />
        <span className="bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">your Digital Presence?</span>
      </h1>

      {/* Buttons */}
      <div className="flex gap-6 flex-col">
        <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white text-lg">
          Start Free Trial
        </button>
        <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white text-lg">
          Schedule a Call
        </button>
      </div>
    </div>
            
        </div>
    );
};

export default Hero;