import React from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import TextInput from '@/Components/TextInput.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import InputLabel from '@/Components/InputLabel';
const BankPayment = () => {

    const { data, setData, post, processing, errors } = useForm({
        pay_method: 'Bank',
        bank_name:'',
        branch: '',
        account_name:'',
        account_number: '',
        routing_number: '',
        amount: '',
        note: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('member.withdraw-process'));
    };

    return (
        <div className="mt-4 border border-blue-300 p-4">
            <form onSubmit={submit} className="space-y-4">
            <div>
                <InputLabel htmlFor="payId">Account Nae</InputLabel>
                <TextInput
                    required
                    id="pay_id"
                    type="text"
                    name="pay_id"
                    value={data.pay_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('payId', e.target.value)}
                />
            </div>

            {/* Amount */}
            <div>
                <InputLabel htmlFor="amount">Amount ($)</InputLabel>
                <TextInput
                    required
                    id="amount"
                    type="text"
                    name="amount"
                    value={data.amount}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('amount', e.target.value)}
                />
            </div>

            {/* Note (Textarea) */}
            <div>
                <InputLabel htmlFor="note">Note (optional)</InputLabel>
                <textarea
                    id="note"
                    name="note"
                    rows="4"
                    value={data.note || ""}
                    onChange={(e) => setData('note', e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter additional details..."
                ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center pt-4">
                <PrimaryButton disabled={processing}>
                    Proceed
                </PrimaryButton>
            </div>
            </form>
        </div>
    );
};

export default BankPayment;
