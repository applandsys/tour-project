import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import ProfileForm from "@/Components/User/ProfileForm.jsx";

export default function EarningDashboard() {

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
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    All Earning Card when click the amount
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
