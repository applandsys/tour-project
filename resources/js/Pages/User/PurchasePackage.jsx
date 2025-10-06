import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import BuyPackageOption from "@/Components/User/BuyPackageOption.jsx";
import PaytoCompany from "@/Components/User/PaytoCompany.jsx";

export default function PurchasePackage({packages}) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594;  Purchase Package
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
                                <div className="bg-black bg-opacity-80  rounded-md flex items-center justify-center h-8 p-2"><img src="/images/my_wallet_icon.png" className="h-6 w-6 mx-1"/> Wallet BDT. 3000 <FaArrowCircleRight className="text-blue-500 mx-2"/></div>
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
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Sidebar */}
                            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-gray-300">
                                <AccountSidebar />
                            </div>

                            {/* Main Content */}
                            <div className="md:col-span-3 border-gray-300">
                                <div className="flex flex-col md:flex-row">
                                    {/* Left Section */}
                                    <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-gray-300">
                                        <BuyPackageOption user={user} packages={packages} />
                                    </div>

                                    {/* Right Section */}
                                    <div className="md:w-1/2">
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
