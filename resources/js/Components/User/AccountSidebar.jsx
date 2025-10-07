import {FaBusinessTime, FaCrown, FaDollarSign, FaGift, FaHome, FaMoneyBill, FaUser, FaVideo} from "react-icons/fa";
import TotalEarnDropdown from "@/Components/User/TotalEarnDropdown.jsx";

export default function AccountSidebar() {
    return (
        <div className="w-full  p-4  ">
            {/* Heading */}
            <h3 className="text-xs font-semibold text-gray-500 mb-4">
                Member Area
            </h3>

            {/* Profile */}
            <div className="space-y-2">
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaHome/>
                    <span className="flex-1 text-left">Back Office</span>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaUser/>
                    <span className="flex-1 text-left">Profile Setting</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaGift/>
                    <span className="flex-1 text-left">Gift Card</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaGift/>
                    <span className="flex-1 text-left">Purchase Tour Package</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaMoneyBill/>
                    <span className="flex-1 text-left">Withdraw Fund</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaMoneyBill/>
                    <span className="flex-1 text-left">Generation</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                    <TotalEarnDropdown/>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaCrown/>
                    <span className="flex-1 text-left">Rank Achievement</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaVideo/>
                    <span className="flex-1 text-left">Video Tutorial</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaBusinessTime/>
                    <span className="flex-1 text-left">Business Presentation</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaBusinessTime/>
                    <span className="flex-1 text-left">Support Tickets</span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

            </div>

            {/* Divider */}
            <div className="my-6 border-t"></div>

            {/* Reset Password */}
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m0 4a9 9 0 100-18 9 9 0 000 18z"
                    />
                </svg>
                <span>Reset Password</span>
            </button>

            {/* Logout */}
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                </svg>
                <span>Logout</span>
            </button>
        </div>
    );
}
