import img1 from '../assets/Frame 1366.png'
import line1 from '../assets/Line 7.png'
import line from '../assets/Frame 1371.png'
const SERVICES = () => {
  return (
    <div className="relative">
      <p className=" py-2 border border-[#FFFFFF0D] bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[hsla(0,0%,16%,0)] text-white font-semibold rounded-2xl text-center w-40 mx-auto">
        SERVICES
      </p>
      <div className="relative text-center text-white mt-10">
        <div className="flex items-center justify-center">
          <div className="hidden md:block w-20 h-px bg-gray-500"></div>
          <h2 className="text-2xl md:text-4xl font-bold mx-4">
            Innovative Services <br />
            <span className="bg-gradient-to-r from-[#7687B5] to-[#91B0FF] bg-clip-text text-transparent">
              for Growth.
            </span>
          </h2>
          <div className="hidden md:block w-20 h-px bg-gray-500"></div>
        </div>
        <p className="mt-4 text-gray-400">
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
      </div>

   
      <section className='grid grid-cols-3 gap-6 my-10'>
     

  <div className='flex relative'>
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img className='' src={line1} alt="" />
  <img className='border-b-2 border-l-2  ' src={img1} alt="" />
  </div>
  <div className='flex'>
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img src={line1} alt="" />
  <img src={img1} alt="" />
  </div>
  <div className='flex'>
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img src={line1} alt="" />
  <img src={img1} alt="" />
  <img className='border absolute  -right-3 ' src={line} alt="" />
  <img src={line1} alt="" />
  </div>
  <div className='flex '>
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img className='border absolute  -right-3  ' src={line} alt="" />
  <img src={line1} alt="" />
  <img src={img1} alt="" />
  </div>
  <div className='flex'>
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img src={line1} alt="" />
  <img src={img1} alt="" />
  </div>
  <div className='flex'>
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img src={line1} alt="" />
  <img src={img1} alt="" />
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  <img src={line1} alt="" />
  <img className='border absolute  -mt-6 -ml-2 ' src={line} alt="" />
  
  </div>
 
 
      </section>
    </div>
  );
};

export default SERVICES;
