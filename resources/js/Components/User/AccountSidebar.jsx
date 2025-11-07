import {
    FaBusinessTime,
    FaCrown,
    FaGift,
    FaHome,
    FaMoneyBill,
    FaUser,
    FaVideo,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, usePage } from "@inertiajs/react";
import TotalEarnDropdown from "@/Components/User/TotalEarnDropdown.jsx";

export default function AccountSidebar({ onClick }) {
    const user = usePage().props.auth.user;

    // Menu items (clean and reusable)
    const menuItems = [
        { icon: FaHome, label: "Back Office", route: "home" },
        { icon: FaUser, label: "Profile Setting", route: "dashboard" },
        { icon: FaGift, label: 'Gift Card', route: 'member.gift-cards' },
        { icon: FaGift, label: "Purchase Tour Package", route: "member.purchase-tour-package" },
        { icon: FaMoneyBill, label: "Withdraw Fund", route: "member.withdraw-fund" },
        { icon: FaMoneyBill, label: "Generation", route: "member.generation" },
        { icon: FaCrown, label: "Rank Achievement", route: "member.rank-achieved" },
        { icon: FaVideo, label: "Video Tutorial" , route: 'member.video-tutorial' },
        { icon: FaBusinessTime, label: "Business Presentation" , route: 'member.business-presentation'},
        { icon: FaBusinessTime, label: "Support Tickets" , route: 'member.support-tickets'},
    ];

    // Add conditional menu
    if (user?.is_franchaise === "yes") {
        menuItems.splice(6, 0, {
            icon: FaMoneyBill,
            label: "Transfer Balance",
            route: "member.transfer-balance",
        });
    }

    return (
        <div className="w-full p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-semibold text-gray-500">Member Area</h3>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick?.();
                    }}
                    className="text-gray-600 hover:text-gray-900"
                >
                    <FaXmark />
                </button>
            </div>

            {/* Menu */}
            <div className="space-y-2 text-xs">
                {menuItems.map(({ icon: Icon, label, route }, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium"
                    >
                        <Icon />
                        <span className="flex-1 text-left">
                            {route ? (
                                <Link
                                    href={route ? route && window.route ? window.route(route) ?? "#" : "#" : "#"}
                                    className="block px-3 py-2 rounded text-gray-700 hover:text-blue-600 transition"
                                >
                                    {label}
                                </Link>
                            ) : (
                                label
                            )}
                        </span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    </div>
                ))}

                {/* Special dropdown */}
                <TotalEarnDropdown />
            </div>

            {/* Divider */}
            <div className="my-6 border-t"></div>
        </div>
    );
}
