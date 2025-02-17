import { motion } from "framer-motion";
import img1 from "../assets/Frame 2.png";
import gear1 from "../assets/Vector.png";
import gear2 from "../assets/Vector (1).png";
import cart from '../assets/tabler_chart-pie-filled.png';
import img4 from "../assets/Component 16.png";
import flow1 from '../assets/Frame 1345.png';
import flow2 from '../assets/Frame 1345 (1).png';
import flow3 from '../assets/Frame 1345 (2).png';

const Feature = () => {
  return (
    <div className="relative">
      <p className="py-2 border border-[#FFFFFF0D] bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[hsla(0,0%,16%,0)] text-white font-semibold rounded-2xl text-center w-40 mx-auto">
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
      <section className="grid grid-cols-3 my-16">
        <img src={img1} alt="" />
        <div className="space-y-8">
          <div className="w-[352px] h-[280px] bg-gradient-to-r from-gray-900 to-[#5a6c99] relative border border-[#7687B5] rounded-2xl flex justify-center pt-7">
            <div className="w-[128px] h-[123px] border border-[#7687B5] rounded-2xl flex justify-center items-center">
              <div className="w-[112px] relative h-[107px] bg-[#78819936] border border-[#7687B5] rounded-2xl">
                <motion.img
                  className="absolute left-4 top-3"
                  src={gear1}
                  alt=""
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
                <motion.img
                  className="absolute right-2 bottom-3"
                  src={gear2}
                  alt=""
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
              </div>
            </div>
            <div className="w-[120px] h-0 absolute right-0 top-[96px] border-2 border-[#7687B5]"></div>

            <div className="absolute text-white bottom-5 left-5">
              <h2 className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE]">
                Makes Marketing Easier
              </h2>
              <p className="text-xs font-light">Save time and simplify campaign management. <br /> Let automated workflows handle the heavy <br /> lifting, so you can focus on creativity.</p>
            </div>
          </div>

          {/* Hoverable Section with Animation */}
          <motion.div
            className="w-[352px] h-[280px] bg-gradient-to-r from-gray-900 to-[#5a6c99] relative border border-[#7687B5] rounded-2xl flex justify-center pt-7"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-[128px] relative h-[123px] border border-[#7687B5] rounded-2xl flex justify-center items-center">
              {/* Default show flow1 */}
              <motion.img
                src={flow1}
                alt=""
                className="absolute"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              {/* On hover show flow2 */}
              <motion.img
                src={flow2}
                alt=""
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.3 }
                }}
              />
              {/* On hover show flow3 */}
              <motion.img
                src={flow3}
                alt=""
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.6 }
                }}
              />
            </div>
            <img className="w-[100px] h-[100px] mt-4" src={cart} alt="" />
            <div className="absolute text-white bottom-5 left-5">
              <h2 className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE]">
              Smart Marketing Insights
              </h2>
              <p className="text-xs font-light">Leverage AI-powered analytics to optimize your <br /> service marketing. Get real-time <br /> recommendations for better engagement.</p>
            </div>
          </motion.div>
        </div>
        <img src={img4} alt="" />
      </section>
    </div>
  );
};

export default Feature;
