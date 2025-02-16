import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center w-full">
      <Link className="text-white px-4 py-2 mx-3 transition-colors duration-300 transform rounded-md hover:font-semibold">
        Product
      </Link>
      <Link to={'/feed'} className="text-white px-4 py-2 mx-3 transition-colors duration-300 transform rounded-md hover:font-semibold">
        Tools
      </Link>
      <Link to={'/about'} className="text-white px-4 py-2 mx-3 transition-colors duration-300 transform rounded-md hover:font-semibold">
        Contact Us
      </Link>
    </div>
  );

  return (
    <div>
      <nav className="relative shadow border-2 border-[#FFFFFF1A] bg-[#5C60691A] rounded-[16px]">
        <div className="container px-6 py-4 mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-white">ad<span className="text-2xl font-bold">Task</span>.ai</h2>
          </div>

          {/* Links Section */}
          <div className="hidden lg:flex flex-grow justify-center">{links}</div>

          {/* Buttons Section */}
          <div className="hidden lg:flex gap-4">
            
            <button className="bg-[#7687B54A] border border-[#7687B5] text-[#E2E8F8] px-4 py-2 rounded-2xl">Log in</button>
            <button className="bg-[#7687B54A] border border-[#7687B5] text-[#E2E8F8] px-4 py-2 rounded-2xl">Schedule a Call</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center w-full py-4 bg-gray-800">
            {links}
            <div className="mt-4 flex flex-col gap-2">
              <button className="bg-white text-black px-4 py-2 rounded-md w-full">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
