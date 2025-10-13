import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import {formatDate} from "@/utils.js";


export default function PurchaseSubscriptionSuccess({purchase,GtUser}) {

    const user = usePage().props.auth.user;
    const { walletBalance } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594; Purchase Subscription Success
                    </h2>
                </div>
            }
        >
            <Head title="Balance Transfer" />
            <div className="py-12 leading-relaxed">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8 p-8  bg-white ">
                   <div className="border-amber-300 mx-auto p-8">
                       <div className="mx-auto flex item-center justify-center">
                           <img src="/images/logo.jpg" className="w-24 "/></div>


                       <div className="mt-8 py-8 li">
                           <p>
                               Dear Mr. {GtUser.name}
                           </p>
                           <br/>
                           <p>
                               Your Purchase Subscription is Successfull
                           </p>

                       </div>

                   </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
