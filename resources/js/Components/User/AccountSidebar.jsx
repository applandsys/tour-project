import {
    FaBusinessTime,
    FaCross,
    FaCrown,
    FaDollarSign,
    FaGift,
    FaHome,
    FaMoneyBill,
    FaUser,
    FaVideo
} from "react-icons/fa";
import TotalEarnDropdown from "@/Components/User/TotalEarnDropdown.jsx";
import { Link } from '@inertiajs/react';
import {FaXmark} from "react-icons/fa6";

export default function AccountSidebar({onClick}) {
    return (
        <div className="w-full  p-4  ">
            {/* Heading */}
            <div className="flex justify-between">
                <h3 className="text-xs font-semibold text-gray-500 mb-4">
                    Member Area
                </h3>
                <div
                    className="flex flex-end text-right cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                    }}
                >
                    <FaXmark />
                </div>
            </div>

            {/* Profile */}
            <div className="space-y-2">

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaHome/>
                    <span className="flex-1 text-left">
                        <Link
                        href={route('member.back-office')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >
                            Back Office
                        </Link>
                    </span>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaUser/>
                    <span className="flex-1 text-left">   <Link
                        href={route('member.profile-settings')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >Profile Setting</Link></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaGift/>
                    <span className="flex-1 text-left"><Link
                        href={route('member.gift-cards')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >Gift Card</Link></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaGift/>
                    <span className="flex-1 text-left"><Link
                        href={route('member.purchase-tour-package')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >Purchase Tour Package</Link></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaMoneyBill/>
                    <span className="flex-1 text-left"><Link
                        href={route('member.withdraw-fund')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >Withdraw Fund</Link></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaMoneyBill/>
                    <span className="flex-1 text-left">
                        <Link
                        href={route('member.withdraw-fund')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >Generation</Link>
                    </span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                </button>

                    <TotalEarnDropdown/>

                <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium">
                    <FaCrown/>
                    <span className="flex-1 text-left">  <Link
                        href={route('member.rank-achieved')}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }
                    >Rank Achievement</Link></span>
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
            {/*<button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">*/}
            {/*    <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        className="h-5 w-5 text-gray-500"*/}
            {/*        fill="none"*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        stroke="currentColor"*/}
            {/*    >*/}
            {/*        <path*/}
            {/*            strokeLinecap="round"*/}
            {/*            strokeLinejoin="round"*/}
            {/*            strokeWidth={2}*/}
            {/*            d="M12 15v2m0 4a9 9 0 100-18 9 9 0 000 18z"*/}
            {/*        />*/}
            {/*    </svg>*/}
            {/*    <span>Reset Password</span>*/}
            {/*</button>*/}

            {/* Logout */}
            {/*<button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50">*/}
            {/*    <svg*/}
            {/*        xmlns="http://www.w3.org/2000/svg"*/}
            {/*        className="h-5 w-5 text-gray-500"*/}
            {/*        fill="none"*/}
            {/*        viewBox="0 0 24 24"*/}
            {/*        stroke="currentColor"*/}
            {/*    >*/}
            {/*        <path*/}
            {/*            strokeLinecap="round"*/}
            {/*            strokeLinejoin="round"*/}
            {/*            strokeWidth={2}*/}
            {/*            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"*/}
            {/*        />*/}
            {/*    </svg>*/}
            {/*    <span>Logout</span>*/}
            {/*</button>*/}
        </div>
    );
}
