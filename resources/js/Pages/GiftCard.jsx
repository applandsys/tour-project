import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import ReferralLink from "@/Components/User/ReferralLink.jsx";

export default function GiftCard() {
    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594; My Account
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
                            </div>
                            <div className="bg-black bg-opacity-80  rounded-md flex items-center justify-center h-8 p-2"><img src="/images/my_wallet_icon.png" className="h-6 w-6 mx-1"/> Wallet US$ {walletBalance.balance} <FaArrowCircleRight className="text-blue-500 mx-2"/></div>
                        </div>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex ">
                             <div className="w-1/4 border-r border-gray-300 hidden md:block">
                                 <AccountSidebar/>
                             </div>
                            <div className=" border-r">
                                <ProfileForm user={user}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
