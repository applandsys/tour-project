import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const WalletPayment = ({ walletBalance, packageDetail }) => {
    const [error, setError] = useState("");

    // Inertia form setup
    const { post, processing } = useForm({
        amount: packageDetail.amount,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (parseFloat(packageDetail.amount) > walletBalance.balance) {
            setError("Insufficient wallet balance.");
            return;
        }

        // Send request to Laravel controller
        post(route("member.package.paymentProcess"), {
            preserveScroll: true,
            onSuccess: () => {
                console.log("Payment successful");
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Pay with Wallet
            </h2>

            <div className="mb-4 flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
                <span className="text-gray-600 font-medium">Wallet Balance:</span>
                <span className="text-green-600 font-bold">
                    US$ {walletBalance.balance}
                </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="amount" value={packageDetail.amount} />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                    {processing ? "Processing..." : `Pay US$ ${packageDetail.amount}`}
                </button>
            </form>
        </div>
    );
};

export default WalletPayment;
