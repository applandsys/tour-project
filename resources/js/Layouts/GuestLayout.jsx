import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>
            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                <header>
                    <div className="bg-[#F1E0FA] flex items-center justify-center">
                        <div>
                            <img src="/images/newuserreward.webp" className="h-16 w-16" alt=""/>
                        </div>
                        <div className="font-bold">
                            Get up to 25% Direct BONUS on your SUBSCRIPTION
                        </div>
                        <div className=" mx-4">
                            USE INTRODUCER CODE
                            Ex : GT25183
                        </div>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}
