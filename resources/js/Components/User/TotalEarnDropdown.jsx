import { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";

const TotalEarnDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-full">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-blue-50 text-gray-900 font-medium"
            >
                <FaMoneyBill />
                <span className="flex-1 text-left">Total Earn</span>
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {open && (
                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul className="divide-y divide-gray-100">
                        <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                            Subscribed
                        </li>
                        <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                            Earn By Package
                        </li>
                        <li className="px-3 py-2 hover:bg-gray-50 cursor-pointer">
                            Earn By ROI
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TotalEarnDropdown;
