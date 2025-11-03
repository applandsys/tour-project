import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PreSubscription() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Subscribe Now
                </h2>
            }
        >
            <Head title="Payment" />
            <div className="w-full">
                <Link  href={route('member.subscription')}>
                <img
                    src="/images/pre-subscription.jpg"
                    alt="Pre Subscription"
                    className="w-full h-auto object-cover rounded-lg"
                />
                </Link>
            </div>
        </AuthenticatedLayout>
    );
}
