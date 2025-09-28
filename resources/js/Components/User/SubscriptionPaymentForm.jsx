import { useState } from "react";

export default function SubscriptionPaymentForm() {

    const [formData, setFormData] = useState({
        senderId: "",
        comment: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="p-6  w-96"
            >
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                    Subscription Payment Form
                </h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                         Binance Sender Id
                    </label>
                    <input
                        type="text"
                        name="sender_id"
                        value={formData.senderId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter sender Id"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Comment
                    </label>
                    <input
                        type="text"
                        name="comments"
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write detail in short"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
