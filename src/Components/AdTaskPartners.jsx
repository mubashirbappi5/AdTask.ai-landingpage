import {
  FaTiktok,
  FaMeta,
  FaLinkedin,
  FaAmazon,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";

export default function AdTaskPartners() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-black text-white">
      <h2 className="text-lg font-semibold mb-6">Adtask AI works with:</h2>
      <div className="flex gap-4">
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#333B4F" /> {/* blue-500 */}
              <stop offset="50%" stopColor="#7687B5" /> {/* purple-500 */}
              <stop offset="100%" stopColor="#333B4F" /> {/* pink-500 */}
            </linearGradient>
          </defs>
        </svg>

        <div className="p-4 border  border-[#7687B5] rounded-2xl  bg-[#78819936]  ">
        <SiGoogleads size={40} style={{ fill: "url(#gradientId)" }} />

        </div>
        <div className="p-4 border  border-[#7687B5] rounded-2xl  bg-[#78819936]  ">
        <FaTiktok size={40} style={{ fill: "url(#gradientId)" }} />
        </div>
        <div className="p-4 border  border-[#7687B5]  rounded-2xl  bg-[#78819936]  ">
        <FaMeta size={40} style={{ fill: "url(#gradientId)" }} />
        </div>
        <div className="p-4 border  border-[#7687B5] rounded-2xl  bg-[#78819936]  ">
        <FaLinkedin size={40} style={{ fill: "url(#gradientId)" }} />
        </div>
        <div className="p-4 border  border-[#7687B5]  rounded-2xl  bg-[#78819936]  ">
        <FaAmazon size={40} style={{ fill: "url(#gradientId)" }} />
        </div>
        <div className="p-4 border  border-[#7687B5]  rounded-2xl  bg-[#78819936]  ">
        <FaXTwitter size={40} style={{ fill: "url(#gradientId)" }} />
        </div>
      </div>
    </div>
  );
}
