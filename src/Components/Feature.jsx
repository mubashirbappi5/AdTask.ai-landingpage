import img1 from '../assets/Frame 2.png'
import img2 from '../assets/Component 14.png'
import img3 from '../assets/Component 15.png'
import img4 from '../assets/Component 16.png'
const Feature = () => {
  return (
    <div className='relative'>
      <p className=' py-2 border border-[#FFFFFF0D] bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[hsla(0,0%,16%,0)] text-white font-semibold rounded-2xl text-center w-40 mx-auto'>
      features
      </p>
      <div className="relative text-center text-white mt-10">
        <div className="flex items-center justify-center">
          <div className="hidden md:block w-20 h-px bg-gray-500"></div>
          <h2 className="text-2xl md:text-4xl font-bold mx-4">
            Feature packed to make <br />
            <span className="bg-gradient-to-r from-[#7687B5] to-[#91B0FF] bg-clip-text text-transparent">
              Digital marketing easier and affordable.
            </span>
          </h2>
          <div className="hidden md:block w-20 h-px bg-gray-500"></div>
        </div>
        <p className="mt-4 text-gray-400">
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
      </div>
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-72 h-96 bg-[#5168a2] opacity-50 blur-3xl"></div>
      <section className='grid grid-cols-3 my-16'>
       <img src={img1} alt="" />
       <div className='space-y-8'>
      <div className='w-[352px] h-[280px] border border-[#7687B5] rounded-2xl flex justify-center pt-7'>
            <div className='w-[112px] h-[107px] border border-[#7687B5] rounded-2xl'>

            </div>
      </div>
       <img src={img3} alt="" />
       </div>
       <img src={img4} alt="" />
      </section>
    </div>
  );
}

export default Feature;
