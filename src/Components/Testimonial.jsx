import { motion } from 'framer-motion';

const Testimonial = () => {
    const testimonials = [
        {
          text: "We used to struggle with consistent branding across platforms. adTask’s unified dashboard ensures our message stays on point every single time.",
          author: "Brand Director at a Tech Startup"
        },
        {
          text: "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted—without guesswork!",
          author: "Head of Growth at Tech Startup"
        },
        {
          text: "We’ve tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
          author: "Ecommerce Manager at Home Décor Brand"
        },
        {
          text: "What impressed me most was the real-time optimization. adTask’s intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
          author: "Digital Strategist at SaaS Company"
        },
        {
          text: "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
          author: "Social Media Lead at Non-Profit Organization"
        },
        {
          text: "We’ve seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
          author: "Social Media Manager at a Fitness Brand"
        }
      ];
    return (
        <div className='relative'>
            <p className=' py-2 border border-[#FFFFFF0D] bg-gradient-to-r from-[rgba(142,141,141,0.15)] to-[hsla(0,0%,16%,0)] text-white font-semibold rounded-2xl text-center w-40 mx-auto'>
            testimonial
      </p>
      <div className="relative text-center text-white mt-10">
        <div className="flex items-center justify-center">
          <div className="hidden md:block w-20 h-px bg-gray-500"></div>
          <h2 className="text-2xl md:text-4xl font-bold mx-4">
          Trusted by <br />
            <span className="bg-gradient-to-r from-[#7687B5] to-[#91B0FF] bg-clip-text text-transparent">
            satisfied clients
            </span>
          </h2>
          <div className="hidden md:block w-20 h-px bg-gray-500"></div>
        </div>
        <p className="mt-4 text-gray-400">
        Discover how we’ve driven growth and innovation.
        </p>
      </div>
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-72 h-96 bg-[#5168a2] opacity-50 blur-3xl"></div>
            <div className=" text-white py-16 px-6 flex flex-col items-center">
    
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          // eslint-disable-next-line react/jsx-no-undef
          <motion.div
            key={index}
            className=" p-6 rounded-lg shadow-lg border border-[#7687B5]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg italic">{testimonial.text}</p>
            <p className="mt-4 text-sm font-semibold">— {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
            
        </div>
    );
};

export default Testimonial;