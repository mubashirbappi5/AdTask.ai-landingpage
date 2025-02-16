

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-300 py-6 px-20 border-t-2 border-[#333B4F] ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-100">ad<span className="text-gray-400">Task</span>.ai</h2>
          <p className="mt-2 flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-400">✉</span> <a href="mailto:contact@adtask.ai" className="hover:text-blue-400">contact@adtask.ai</a>
          </p>
          <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
            <span className="text-blue-400">📍</span> San Francisco Bay Area
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-center md:text-left">
          <h3 className="text-gray-100 font-semibold">Utilities</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Products</a></li>
            <li><a href="#" className="hover:text-blue-400">Tools</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h3 className="text-gray-100 font-semibold">Socials</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-blue-400">X</a></li>
            <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
            <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        All rights reserved &copy; 2025 adTask
      </div>
    </footer>
            
        </div>
    );
};

export default Footer;