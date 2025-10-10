import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import ReferralLink from "@/Components/User/ReferralLink.jsx";
import CommonTable from "@/Components/UI/CommonTable.jsx";
import {formatDate} from "@/utils.js";

export default function Generation({myReferrals,directRefer}) {
    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;
    const columns = ['Level','GT id','Name', 'Package','Amount','View'];

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594; Generation
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
            <Head title="Generation" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mt-4">
                        <h5 className="font-bold">Referred Team</h5>
                        <CommonTable tableData={directRefer} columns={columns}>
                            {directRefer.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Direct</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.unique_id}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">$ {JSON.stringify(item.purchase_packages[0]?.amount || 0)}</td>

                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Link href={`/payments/${item.id}`} className="text-sm px-2 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100">View</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </CommonTable>
                    </div>

                    <div className="mt-4">
                        <h5 className="font-bold">Referred Team</h5>
                        <CommonTable tableData={myReferrals} columns={columns}>
                            {myReferrals.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Level - {item.level}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.unique_id}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">$ {JSON.stringify(item.purchase_packages[0]?.amount || 0)}</td>

                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                                        <div className="flex items-center justify-center space-x-2">
                                            <Link href={`/payments/${item.id}`} className="text-sm px-2 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100">View</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </CommonTable>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
