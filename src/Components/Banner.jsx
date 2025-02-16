import { WiStars } from 'react-icons/wi';
import img1 from '../assets/Property 1=Default.png';

const Banner = () => {
  return (
    <div className="relative min-h-screen flex gap-5 pt-16 items-center flex-col ">
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-72 h-96 bg-[#5168a2] opacity-50 blur-3xl"></div>
        <div className='bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[rgba(40,40,40,0.15)] py-1 px-2 rounded-2xl'>
        <h1 className='text-white text-sm flex gap-1 items-center'><WiStars className='text-xl'/> Transform Your Digital Presence with AI Agents</h1>
        </div>
    
      {/* Triangular Light Shadow */}
      <div className="relative  flex flex-col items-center text-center p-8">
        
     

      {/* Image with Glow */}
      <img className="relative z-10  w-[500px] " src={img1} alt="Banner" />
    </div>
    <p className='z-20 text-white text-center'>Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates <br /> personalized strategies, and helps you execute them - all in real-time.</p>

     <button className='bg-[#7687B54A] border-b-2 border-[#7687B5] rounded-3xl px-6 py-2 text-white'>Start Free Trail</button>
     <p className='text-[#C5CDE3] text-xs'>Try AdTask AI free for 30 days</p>
    </div>
  );
};
 
export default Banner;
