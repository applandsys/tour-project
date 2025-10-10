import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";

import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import BuyPackageOption from "@/Components/User/BuyPackageOption.jsx";
import PaytoCompany from "@/Components/User/PaytoCompany.jsx";
import CommonTable from "@/Components/UI/CommonTable.jsx";
import {formatDate} from "@/utils.js";

export default function PurchasePackage({purchaseHistory,packages}) {

    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;

    const columns = ['Package Name','Amount','Purchase Date','From Date','To Date','View'];

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
                                        <BuyPackageOption user={user} packages={packages} />
                                    </div>

                                    {/* Right Section - 50% on desktop */}
                                    <div className="w-full md:w-1/2 border border-gray-200 rounded-lg p-4 shadow-sm">
                                        <PaytoCompany />
                                    </div>
                                </div>

                                <div className="px-2 mt-4">
                                    <h2 className="font-bold px-2">Purchase History</h2>
                                    <hr className="px-2"/>
                                    <CommonTable tableData={purchaseHistory} columns={columns}>
                                        {purchaseHistory.map((p) => (
                                            <tr key={p.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{p.package.name}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">${Number(p.amount).toLocaleString()}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(p.created_at)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(p.to_date)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(p.from_date)}</td>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <Link href={`/payments/${p.id}`} className="text-sm px-2 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100">View</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </CommonTable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
