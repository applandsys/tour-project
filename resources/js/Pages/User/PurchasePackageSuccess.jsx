import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import ProfileForm from "@/Components/User/ProfileForm.jsx";
import {formatDate} from "@/utils.js";


export default function PurchasePackageSuccess({gtUser,packageDetail,purchase}) {

    const user = gtUser;
    const { walletBalance } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div>
                    <h2 className="text-xl font-semibold leading-tight text-white">
                        Home 	&#8594; Purchase Tour Package Success
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

                       <div className="mt-8">
                           To
                           <h5>{user.unique_id}</h5>
                           <h5>{user.name}</h5>
                           <h5 className="font-bold text-amber-500">{packageDetail.name} (${packageDetail.amount})</h5>
                           <h1 className="text-4xl font-bold text-center">Hotel Welcome Letter</h1>

                       </div>

                       <div className="mt-12">
                           <div> <span className="font-bold">From date :</span>  {formatDate(purchase.to_date)}</div>
                           <div> <span className="font-bold">To date :</span>  {formatDate(purchase.from_date)}</div>
                       </div>

                       <div className="mt-8 py-8 li">
                           <p>
                               Dear Mr. {user.name}
                           </p>
                           <br/>

                           <p>
                               We are delighted to welcome you to Global Trips 24. It is our privilege to host you, and we are committed to making your stay both enjoyable and memorable.
                           </p>
                           <br/>
                           <p>
                               From the moment you step into our lobby, you will experience the high standards of service and hospitality that define our hotel. Our staff is dedicated to attending to your needs promptly and courteously, ensuring that every aspect of your visit is taken care of.
                           </p>
                           <br/>
                           <p>
                               Your room has been meticulously prepared for your arrival, complete with all the amenities designed to offer comfort and convenience. Whether you are visiting for business or pleasure, we hope you will find your accommodations exceed your expectations.
                           </p>
                           <br/>
                           <p>
                               Should you need any assistance during your stay or have any inquiries, please do not hesitate to contact me directly. My primary goal is to ensure that your experience with us is nothing short of exceptional.
                           </p>
                       </div>

                   </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
