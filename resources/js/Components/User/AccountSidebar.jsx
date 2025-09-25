import {FaDollarSign, FaGift, FaUser} from "react-icons/fa";

export default function AccountSidebar() {
    return (
        <div className="w-full  p-4  ">
            {/* Heading */}
            <h3 className="text-xs font-semibold text-gray-500 mb-4">
                MY ACCOUNT
            </h3>

            {/* Profile */}
            <div className="space-y-2">
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaUser/>
                    <span className="flex-1 text-left">My Profile</span>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Co-Travellers */}
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
                    <FaGift/>
                    <span>Package Purchased</span>
                </button>

                {/* Logged In Devices */}
                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">
                   <FaDollarSign/>
                    <span>Profit & Earnings</span>
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
