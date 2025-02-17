
import grid1 from '../assets/47819025-2fcb-4b2e-9270-e4e3a613ce55-removebg-preview.png'
const Hero = () => {
    return (
        <div className="relative">
             <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      {/* Logo Section */}
      <div className="text-[100px] font-bold mb-8 text-gray-800">
  <span className="text-gray-500 opacity-50 hover:opacity-100 transition-opacity duration-500">
    ad
  </span>
  <span className="text-white opacity-50 hover:opacity-100 transition-opacity duration-500">
    Task
  </span>
  <span className="text-gray-500 opacity-50 hover:opacity-100 transition-opacity duration-500">
    .ai
  </span>
</div>


      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-white ">
        Are you ready to boost <br />
        <span className="bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">your Digital Presence?</span>
      </h1>
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-72 h-96 bg-[#5168a2] opacity-50 blur-3xl"></div>
      <div className="absolute">
        <img className="w-80 opacity-10" src={grid1} alt="" />
      </div>

      {/* Buttons */}
      <div className="flex gap-6 flex-col">
      <button className="bg-[#7687B54A] rounded-3xl px-6 py-2 text-white relative overflow-hidden">
  Start Free Trial
  <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent rounded-3xl animate-border"></div>
</button>

<style >{`
  @keyframes borderMove {
    0% {
      border-top: 2px solid #7687B5;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      border-left: 2px solid transparent;
    }
    25% {
      border-top: 2px solid #7687B5;
      border-right: 2px solid #7687B5;
      border-bottom: 2px solid transparent;
      border-left: 2px solid transparent;
    }
    50% {
      border-top: 2px solid #7687B5;
      border-right: 2px solid #7687B5;
      border-bottom: 2px solid #7687B5;
      border-left: 2px solid transparent;
    }
    75% {
      border-top: 2px solid #7687B5;
      border-right: 2px solid #7687B5;
      border-bottom: 2px solid #7687B5;
      border-left: 2px solid #7687B5;
    }
    100% {
      border-top: 2px solid transparent;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      border-left: 2px solid transparent;
    }
  }

  .animate-border {
    animation: borderMove 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  }
`}</style>
        <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white text-lg">
          Schedule a Call
        </button>
      </div>
    </div>
            
        </div>
    );
};

export default Hero;