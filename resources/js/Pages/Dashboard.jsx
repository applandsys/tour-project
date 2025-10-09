import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";
import ReferralLink from "@/Components/User/ReferralLink.jsx";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594; My Account
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <ProfileForm user={user}/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
