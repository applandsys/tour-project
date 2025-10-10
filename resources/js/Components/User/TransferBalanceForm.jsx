import { useForm, usePage } from '@inertiajs/react';

export default function TransferBalanceForm() {

    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        gt_user: '',
        amount: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('member.balance-transfer-process'), {
            onSuccess: () => reset()
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wallet Balance Transfer</h2>
            {/* ✅ Success Message */}
            {flash?.success && (
                <div className="mb-4 rounded-lg bg-green-100 text-green-700 px-4 py-2 border border-green-300">
                    {flash.success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* GT User Input */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">GTID</label>
                    <input
                        type="text"
                        name="gt_user"
                        value={data.gt_user}
                        onChange={(e) => setData('gt_user', e.target.value)}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                        placeholder="Enter GT User ID"
                    />
                    {errors.gt_user && <div className="text-red-500 text-sm mt-1">{errors.gt_user}</div>}
                </div>

                {/* Amount Input */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={data.amount}
                        onChange={(e) => setData('amount', e.target.value)}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                        placeholder="Enter amount"
                    />
                    {errors.amount && <div className="text-red-500 text-sm mt-1">{errors.amount}</div>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                    {processing ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
