import React from "react";
import { useForm } from "@inertiajs/react";

const WesternUnionForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        receiverName: "",
        country: "",
        mtcn: "",
        amount: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("western.union.pay"), {
            onSuccess: () => reset("receiverName", "country", "mtcn", "amount"),
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Pay via Western Union
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Receiver Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Receiver Name
                    </label>
                    <input
                        type="text"
                        value={data.receiverName}
                        onChange={(e) => setData("receiverName", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        placeholder="Enter receiver full name"
                    />
                    {errors.receiverName && (
                        <p className="text-red-500 text-sm mt-1">{errors.receiverName}</p>
                    )}
                </div>

                {/* Country */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Country</label>
                    <input
                        type="text"
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        placeholder="Enter receiver country"
                    />
                    {errors.country && (
                        <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                    )}
                </div>

                {/* MTCN */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        MTCN (Tracking Number)
                    </label>
                    <input
                        type="text"
                        value={data.mtcn}
                        onChange={(e) => setData("mtcn", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        placeholder="Enter 10-digit MTCN"
                    />
                    {errors.mtcn && (
                        <p className="text-red-500 text-sm mt-1">{errors.mtcn}</p>
                    )}
                </div>

                {/* Amount */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Amount</label>
                    <input
                        type="number"
                        min="1"
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                        placeholder="Enter transfer amount"
                    />
                    {errors.amount && (
                        <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-yellow-600 text-white py-2 rounded-lg font-medium hover:bg-yellow-700 transition disabled:opacity-50"
                >
                    {processing ? "Processing..." : "Submit Payment"}
                </button>
            </form>
        </div>
    );
};

export default WesternUnionForm;
