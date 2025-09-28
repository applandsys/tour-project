import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, usePage} from "@inertiajs/react";
import SubscriptionPaymentForm from "@/Components/User/SubscriptionPaymentForm.jsx";

export default function Subscription(){

    const user = usePage().props.auth.user;

    return(
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594;  Subscribe
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

            <Head title="Subscription Payment" />
            <div className="py-12 px-4">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg flex items-center justify-between gap-4">
                        <div className="w-1/2">
                            <img src="/images/binance.png" className="w-100" alt=""/>
                        </div>
                        <div className="px-8">
                            <SubscriptionPaymentForm/>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
