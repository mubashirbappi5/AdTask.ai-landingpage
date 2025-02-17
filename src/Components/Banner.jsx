import { WiStars } from "react-icons/wi";
import img1 from "../assets/Property 1=Default.png";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex gap-5 pt-16 items-center flex-col">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-72 h-96 bg-[#5168a2] opacity-50 blur-3xl"></div>

      {/* Animated Heading */}
      <div className="bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[rgba(40,40,40,0.15)] py-1 px-2 rounded-2xl relative overflow-hidden">
        <h1 className="relative text-white text-sm flex gap-1 items-center overflow-hidden">
          <WiStars className="text-xl" />
          <span className="relative inline-block">
            Transform Your Digital Presence with AI Agents
          </span>
          {/* Moving Shadow */}
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-30 blur-md animate-slide"></span>
        </h1>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col items-center text-center p-8">
        <img className="relative z-10 w-[500px]" src={img1} alt="Banner" />
      </div>

      <p className="z-20 text-white text-center">
        Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates <br /> personalized strategies, and helps you execute them - all in real-time.
      </p>
      <button className="bg-[#7687B54A] rounded-3xl px-6 py-2 text-white relative overflow-hidden">
  Start Free Trial
  <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent rounded-3xl animate-border"></div>
</button>

<style jsx>{`
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





      <p className="text-[#C5CDE3] text-xs">Try AdTask AI free for 30 days</p>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-slide {
            animation: slide 2.5s infinite linear;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
