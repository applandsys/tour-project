import CommonTable from '@/Components/UI/CommonTable.jsx';
import BuyPackageOption from '@/Components/User/BuyPackageOption.jsx';
import PaytoCompany from '@/Components/User/PaytoCompany.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { formatDate } from '@/utils.js';
import { Head, Link, usePage } from '@inertiajs/react';
import { FaArrowCircleRight, FaMailBulk, FaPhone } from 'react-icons/fa';

export default function PurchasePackage({ purchaseHistory, packages }) {
    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;

    const columns = [
        'Package Name',
        'Amount',
        'Purchase Date',
        'From Date',
        'To Date',
        'View',
    ];

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home &#8594; Purchase Package
                    </h2>
                    <div className="mt-10 flex justify-between text-white">
                        <div className="flex items-center">
                            <div className="h-20 w-20 p-2">
                                <img src="/images/add_photo_icon.png" />
                            </div>
                            <div className="">
                                <h2 className="text-3xl font-bold">
                                    {user.name}
                                </h2>
                                <div className="item-center mt-2 flex gap-2">
                                    <div className="flex gap-2 text-sm">
                                        <FaPhone />
                                        {user?.phone}
                                    </div>
                                    <div className="flex gap-2 text-sm">
                                        <FaMailBulk />
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex">
                                <div className="flex h-8 items-center justify-center rounded-md bg-black bg-opacity-80 p-2">
                                    <img
                                        src="/images/my_wallet_icon.png"
                                        className="mx-1 h-6 w-6"
                                    />
                                    Wallet $ {walletBalance.balance}{' '}
                                    <FaArrowCircleRight className="mx-2 text-blue-500" />
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
                        <div className="gap-4">
                            {/* Main Content */}
                            <div className="border-gray-300">
                                <div className="flex flex-col gap-4 p-4 md:flex-row">
                                    {/* Left Section - 50% on desktop */}
                                    <div className="w-full rounded-lg border border-gray-200 p-4 shadow-sm md:w-1/2">
                                        <BuyPackageOption
                                            user={user}
                                            packages={packages}
                                        />
                                    </div>

                                    {/* Right Section - 50% on desktop */}
                                    <div className="w-full rounded-lg border border-gray-200 p-4 shadow-sm md:w-1/2">
                                        <PaytoCompany user={user}/>
                                    </div>
                                </div>

                                <div className="mt-4 px-2">
                                    <h2 className="px-2 font-bold">
                                        Purchase History
                                    </h2>
                                    <hr className="px-2" />
                                    <CommonTable
                                        tableData={purchaseHistory}
                                        columns={columns}
                                    >
                                        {purchaseHistory.map((p) => (
                                            <tr
                                                key={p.id}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                                                    {p.package.name}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-3 text-right text-sm text-gray-700">
                                                    $
                                                    {Number(
                                                        p.amount,
                                                    ).toLocaleString()}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">
                                                    {formatDate(p.created_at)}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">
                                                    {formatDate(p.to_date)}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-500">
                                                    {formatDate(p.from_date)}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-3 text-center text-sm">
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <Link
                                                            href={`/payments/${p.id}`}
                                                            className="rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            View
                                                        </Link>
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
