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
        account_title:'',
        account_number: '',
        account_type: '',
        beneficiary_code: '',
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
                    <InputLabel htmlFor="payId">Bank Name</InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Bank Name"
                        id="bank_name"
                        type="text"
                        name="bank_name"
                        value={data.bank_name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('bank_name', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="amount">Bank Branch</InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Bank Branch"
                        id="branch"
                        type="text"
                        name="branch"
                        value={data.branch}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('branch', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="note">Account Title</InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Account Title"
                        id="accout_title"
                        type="text"
                        name="account_title"
                        value={data.account_title}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('account_title', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="note">Account Number</InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Account Number"
                        id="account_number"
                        type="text"
                        name="account_title"
                        value={data.account_number}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('account_number', e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="note">Beneficiary Code</InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Beneficiary Code"
                        id="beneficiary_code"
                        type="text"
                        name="beneficiary_code"
                        value={data.beneficiary_code}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('beneficiary_code', e.target.value)}
                    />
                </div>

                <div>
                    <select
                        id="options"
                        value={data.account_type}
                        onChange={(e) => setData('account_type',e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">
                            -- Select Account Type --
                        </option>
                        {['Savings','Current'].map((item) => (
                            <option value={item} key={item} className="text-blue-500 text-sm">
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <InputLabel htmlFor="note">Amount</InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Withdraw Amount"
                        id="amount"
                        type="number"
                        name="amount"
                        value={data.amount}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('amount', e.target.value)}
                    />
                </div>



                <div>
                  <textarea
                      id="note"
                      name="note"
                      rows="4"
                      value={data.note || ""}
                      onChange={(e) => setData('note', e.target.value)}
                      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Extra Notes"
                  ></textarea>
                </div>

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
