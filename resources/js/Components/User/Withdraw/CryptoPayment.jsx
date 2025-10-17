import React from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import TextInput from '@/Components/TextInput.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import InputLabel from '@/Components/InputLabel';
const DigitalPayment = () => {

    const { data, setData, post, processing, errors } = useForm({
        pay_method: 'Crypto',
        account_number: '',
        smart_contact:'',
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
                    <select
                        id="options"
                        value={data.smart_contact}
                        onChange={(e) => setData('smart_contact',e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="">
                            -- Select Block Type --
                        </option>
                        {['ERC=20','ERC-777','BEP-20'].map((item) => (
                            <option value={item} key={item} className="text-blue-500 text-sm">
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <InputLabel htmlFor="note">Withdraw Receiver  Hash </InputLabel>
                    <TextInput
                        required
                        placeholder="Enter Receiver Hash for USDT"
                        id="account_number"
                        type="text"
                        name="account_number"
                        value={data.account_number}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('account_number', e.target.value)}
                    />
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

export default DigitalPayment;
