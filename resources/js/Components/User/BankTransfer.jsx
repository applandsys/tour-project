import React from "react";
import { useForm } from "@inertiajs/react";

const BankTransferForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        accountName: "",
        accountNumber: "",
        bankName: "",
        amount: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("bank.transfer"), {
            onSuccess: () =>
                reset("accountName", "accountNumber", "bankName", "amount"),
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Pay via Bank Transfer
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Account Holder Name
                    </label>
                    <input
                        type="text"
                        value={data.accountName}
                        onChange={(e) => setData("accountName", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter account holder name"
                    />
                    {errors.accountName && (
                        <p className="text-red-500 text-sm mt-1">{errors.accountName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Account Number
                    </label>
                    <input
                        type="text"
                        value={data.accountNumber}
                        onChange={(e) => setData("accountNumber", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter account number"
                    />
                    {errors.accountNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Bank Name
                    </label>
                    <input
                        type="text"
                        value={data.bankName}
                        onChange={(e) => setData("bankName", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter bank name"
                    />
                    {errors.bankName && (
                        <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Amount
                    </label>
                    <input
                        type="number"
                        min="1"
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter transfer amount"
                    />
                    {errors.amount && (
                        <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50"
                >
                    {processing ? "Processing..." : "Transfer Now"}
                </button>
            </form>
        </div>
    );
};

export default BankTransferForm;
