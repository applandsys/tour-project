import { FaPhone, FaMailBulk, FaArrowCircleRight } from "react-icons/fa";

export default function UserHeader({ user, walletBalance }) {
    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <h2 className="text-lg sm:text-xl font-semibold leading-tight text-white text-center sm:text-left">
                Home &#8594; My Account
            </h2>

            {/* User info container */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-10 text-white gap-6 sm:gap-0">
                {/* Left: Profile info */}
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4">
                    {/* Profile image */}
                    <div className="w-20 h-20 p-2 flex-shrink-0">
                        <img
                            src="/images/add_photo_icon.png"
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full border border-gray-600"
                        />
                    </div>

                    {/* Name + Contact */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold break-words">
                            {user?.name}
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:items-center">
                            <div className="flex items-center text-sm gap-2 justify-center sm:justify-start">
                                <FaPhone /> {user?.phone}
                            </div>
                            <div className="flex items-center text-sm gap-2 justify-center sm:justify-start">
                                <FaMailBulk /> {user?.email}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Wallet */}
                <div className="flex justify-center sm:justify-end">
                    <div className="bg-black bg-opacity-80 rounded-md flex items-center justify-center h-10 sm:h-8 px-4 py-2 text-sm sm:text-base">
                        <img
                            src="/images/my_wallet_icon.png"
                            alt="Wallet"
                            className="h-5 w-5 sm:h-6 sm:w-6 mx-1"
                        />
                        Wallet&nbsp;US${walletBalance?.balance ?? 0}
                        <FaArrowCircleRight className="text-blue-500 mx-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
