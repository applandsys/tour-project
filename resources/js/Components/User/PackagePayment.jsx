import React, { useMemo, useState } from "react";
import { Landmark, IdCard } from "lucide-react";
import WalletPayment from "@/Components/User/WalletPayment.jsx";
import {usePage} from "@inertiajs/react";
import BankTransfer from "@/Components/User/BankTransfer.jsx";
import WesternUnion from "@/Components/User/WesternUnion.jsx";
import CreditCardForm from "@/Components/User/CreditCardForm.jsx";

export default function PackagePayment({packageDetail}) {

    const [selectedMethod,setSelectedMethod] = useState('credit-card');

    const { walletBalance } = usePage().props;

    return (
        <div className="min-h-screen w-full bg-gradient-to-br  text-slate-900">
            <div className="max-w-4xl mx-auto p-6  mt-10">
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    {packageDetail?.name}
                </h1>
                <p className="my-4">
                    {packageDetail.description}
                </p>

                    <div className="flex justify-center space-x-6 mb-6">
                        <button type="button"
                                className="w-32 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md text-center"
                                onClick={()=>setSelectedMethod('wallet-balance')}
                        >
                            Wallet Balance
                        </button>
                        <button type="button"
                                className="w-32 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md text-center"
                            onClick={()=>setSelectedMethod('credit-card')}
                        >
                            Credit Card
                        </button>
                        <button type="button "
                                className=" flex iten-center justify-center w-32 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-md text-center"
                                onClick={()=>setSelectedMethod('bank-transfer')}
                        >
                            <Landmark /> <span>Bank Transfer</span>
                        </button>
                        <button type="button"
                                className=" w-32 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md text-center"
                                onClick={()=>setSelectedMethod('western-union')}
                        >
                                 <span> Western Union</span>
                        </button>
                    </div>


                    {
                        selectedMethod==='wallet-balance' && (
                            <WalletPayment walletBalance={walletBalance} packageDetail={packageDetail}/>
                        )
                    }

                    {
                        selectedMethod==='credit-card' && (
                            <CreditCardForm/>
                        )
                    }

                    {
                        selectedMethod==='bank-transfer' && (
                           <BankTransfer/>
                        )
                    }

                    {
                        selectedMethod==='western-union' && (
                            <WesternUnion/>
                        )
                    }

                    {/*<div id="paypal-form" className="hidden">*/}
                    {/*    <p className="text-gray-600">You will be redirected to PayPal to complete your payment.</p>*/}
                    {/*</div>*/}

                    {/*<div id="google-pay-form" className="hidden">*/}
                    {/*    <p className="text-gray-600">You will be redirected to Google Pay to complete your payment.</p>*/}
                    {/*</div>*/}

                    <div className="flex justify-between items-center mt-8">
                        <div className="text-lg font-semibold text-gray-800">
                            Total: US$ {packageDetail.amount}
                        </div>
                        <button type="submit"
                                className="py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Proceed to Payment
                        </button>
                    </div>
            </div>
        </div>
    );
}
