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
    <div className="flex flex-col items-center min-h-screen bg-black text-white">
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

        {[
          { Icon: SiGoogleads, name: "Google Ads" },
          { Icon: FaTiktok, name: "TikTok" },
          { Icon: FaMeta, name: "Meta" },
          { Icon: FaLinkedin, name: "LinkedIn" },
          { Icon: FaAmazon, name: "Amazon" },
          { Icon: FaXTwitter, name: "X Twitter" },
        ].map(({ Icon, name }, index) => (
          <div
            key={index}
            className="relative p-4 border border-[#7687B5] rounded-2xl bg-[#78819936] group transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl hover:border-[#4C5A6A]"
          >
            <Icon
              size={50} // Base icon size
              style={{ fill: "url(#gradientId)" }}
              className="transition-all duration-300 transform group-hover:scale-110 group-hover:brightness-150" // Increase brightness on hover
            />
            <span className="absolute bottom-[-20px] left-0 right-0 text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
