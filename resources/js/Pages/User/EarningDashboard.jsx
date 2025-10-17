import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import { CircleDollarSign, UserIcon, PackageOpen ,BanknoteArrowUp} from 'lucide-react';
import StatCard from '@/Components/User/StatCard.jsx';

export default function EarningDashboard({affiliateCommission,roiEarning,purchasePackage}) {

    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home &#8594; All Earnings
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Earnings"
                    value={`$ ${parseFloat(affiliateCommission+roiEarning).toFixed(4)}`}
                    icon={<CircleDollarSign  className="w-6 h-6" />}
                    color={{ bg: "bg-blue-100", text: "text-blue-600" }}
                />
                <StatCard
                    title="Package Purchase"
                    value={`$ ${parseFloat(purchasePackage).toFixed(4)}`}
                    icon={<PackageOpen  className="w-6 h-6" />}
                    color={{ bg: "bg-blue-100", text: "text-blue-600" }}
                />
                <StatCard
                    title="ROI  Earnings"
                    value={`$ ${parseFloat(roiEarning).toFixed(4)}`}
                    icon={<BanknoteArrowUp className="w-6 h-6" />}
                    color={{ bg: "bg-blue-100", text: "text-blue-600" }}
                />

                <StatCard
                    title="Affilaite  Commision"
                    value={`$ ${parseFloat(affiliateCommission).toFixed(4)}`}
                    icon={<CircleDollarSign className="w-6 h-6" />}
                    color={{ bg: "bg-blue-100", text: "text-blue-600" }}
                />
            </div>
        </AuthenticatedLayout>
    );
}
