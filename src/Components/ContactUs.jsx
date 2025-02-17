

const ContactUs = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <button className="px-4 py-2 mb-4 bg-gray-800 text-white rounded-md border border-gray-600 hover:bg-gray-700">
        CONTACT US
      </button>
      <div className="w-full   p-6 rounded-lg bg-gradient-to-r from-gray-900 to-black">
      
        <div className="grid md:grid-cols-2 gap-6">
        <div className="absolute top-5 z-20 left-1/2 transform -translate-x-1/2 w-72 h-96 bg-[#5168a2] opacity-50 blur-3xl"></div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ask whatever you have <br />
              <span className="bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">in your mind now</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Whether you have questions or are ready to discuss your business, we are here to help. Reach out today.
            </p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                ✉️ <a href="mailto:contact@actask.ai" className="text-blue-400">contact@actask.ai</a>
              </p>
              <p className="flex items-center space-x-2">
                📞 <span>(969) 819-8061</span>
              </p>
              <p className="flex items-center space-x-2">
                📍 <span>San Francisco Bay Area</span>
              </p>
            </div>
          </div>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-[#7687B54A] border border-[#7687B5] rounded-2xl text-white font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default ContactUs;