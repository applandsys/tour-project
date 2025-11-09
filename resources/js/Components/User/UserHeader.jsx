import { FaArrowCircleRight, FaMailBulk, FaPhone } from 'react-icons/fa';
import { TiTickOutline } from 'react-icons/ti';

export default function UserHeader({
    user,
    walletBalance,
    purchaseSubscription,
    userProfile,
}) {
    return (
        <div className="p-4">
            {/* Breadcrumb */}
            <h2 className="text-center text-lg font-semibold leading-tight text-white sm:text-left sm:text-xl">
                Home &#8594; My Account
            </h2>

            {/* User info container */}
            <div className="mt-6 flex flex-col justify-between gap-6 text-white sm:mt-10 sm:flex-row sm:gap-0">
                {/* Left: Profile info */}
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
                    {/* Profile image */}
                    <div className="relative h-20 w-20 flex-shrink-0 p-2">
                        {purchaseSubscription &&
                        purchaseSubscription.length !== 0 ? (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                {' '}
                                <TiTickOutline size={20} />{' '}
                            </div>
                        ) : (
                            <div> </div>
                        )}

                        {userProfile?.photo && true ? (
                            <img
                                src={userProfile?.photo}
                                alt="Profile"
                                className="h-full w-full rounded-full border border-gray-600 object-cover"
                            />
                        ) : (
                            <img
                                src="/images/add_photo_icon.png"
                                alt="Profile"
                                className="h-full w-full rounded-full border border-gray-600 object-cover"
                            />
                        )}
                    </div>

                    {/* Name + Contact */}
                    <div>
                        <h2 className="break-words text-2xl font-bold sm:text-3xl">
                            {user?.name}
                        </h2>
                        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                            <div className="flex items-center justify-center gap-2 text-sm sm:justify-start">
                                <FaPhone /> {user?.phone}
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm sm:justify-start">
                                <FaMailBulk /> {user?.email}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Wallet */}
                <div className="flex justify-center sm:justify-end">
                    <div className="flex h-10 items-center justify-center rounded-md bg-black bg-opacity-80 px-4 py-2 text-sm sm:h-8 sm:text-base">
                        <img
                            src="/images/wallet_icon.png"
                            alt="Wallet"
                            className="mx-1 h-5 w-5 sm:h-6 sm:w-6"
                        />
                        Wallet&nbsp;${walletBalance?.balance ?? 0}
                        <FaArrowCircleRight className="mx-2 text-yellow-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}
