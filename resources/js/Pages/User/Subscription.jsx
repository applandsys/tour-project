import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';

import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import BuyPackageOption from "@/Components/User/BuyPackageOption.jsx";
import PaytoCompany from "@/Components/User/PaytoCompany.jsx";
import BuySubscription from "@/Components/User/BuySubscription.jsx";

export default function Subscription() {

    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;


    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594;  Subscription
                    </h2>
                    <div className="flex justify-between mt-10 text-white">
                        <div className="flex items-center">
                            <div className="w-20 h-20 p-2">
                                <img src="/images/add_photo_icon.png"/>
                            </div>
                            <div className="">
                                <h2 className="text-3xl font-bold">{user.name}</h2>
                                <div className="flex gap-2 item-center mt-2">
                                    <div className="flex  text-sm gap-2"><FaPhone/>{user?.phone}</div>
                                    <div className="flex text-sm gap-2"><FaMailBulk/>{user.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex">
                                <div className="bg-black bg-opacity-80  rounded-md flex items-center justify-center h-8 p-2">
                                    <img src="/images/my_wallet_icon.png" className="h-6 w-6 mx-1"/>
                                    Wallet $ {walletBalance.balance} <FaArrowCircleRight className="text-blue-500 mx-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        >
            <Head title="Purchase Package" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className=" gap-4">
                            {/* Main Content */}
                            <div className="border-gray-300">
                                <div className="flex flex-col md:flex-row gap-4 p-4">
                                    {/* Left Section - 50% on desktop */}
                                    <div className="w-full md:w-1/2 border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <BuySubscription user={user}  />
                                    </div>

                                    {/* Right Section - 50% on desktop */}
                                    <div className="w-full md:w-1/2 border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <PaytoCompany />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
