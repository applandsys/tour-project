import React, {useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import ErrorAlert from "@/Components/UI/ErrorAlert.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {InputLabel} from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import axios from "axios";

const WithdrawForm = () => {

    const { walletBalance } = usePage().props;

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedMethod, setSelectedMethod] = useState("");

    const countries = [
        {
            id: 1,
            name: 'United States'
        },
        {
            id: 2,
            name: 'United Kingdom'
        },
        {
            id: 3,
            name: 'United Arab Emirates'
        },
        {
            id: 4,
            name: 'India'
        },
        {
            id: 5,
            name: 'Bangladesh'
        }
    ];

    const methods = [
        {
            id: 1,
            name: 'Bank'
        },
        {
            id: 2,
            name: 'Bkash'
        },
        {
            id: 3,
            name: 'Nagad'
        },
        {
            id: 4,
            name: 'Rocket'
        }
    ]

    const { data, setData, post, processing, errors } = useForm({
        pay_method: '',
        pay_idd:'',
        pay_info: '',
        amount: '',
        note: ''
    });

    const handleChangeCountry =  (country) =>{
        setSelectedCountry(country);
    }
    const handleChangeMethod =  (method) =>{
        setSelectedMethod(method);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('member.withdraw-process'));
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 ">
            <h5 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Withdraw Wallet</h5>

            <div>
                <div className=" border border-gray-300 p-2 rounded-md  bg-blue-100 mt-4 my-8">
                    <div>
                        Available Balance: <span className="font-bold "> $ {walletBalance.balance} </span>
                    </div>
                </div>
                <div>
                    <select
                        id="options"
                        value={selectedCountry}
                        onChange={(e) => handleChangeCountry(e.target.value)}
                        className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="" disabled>
                            -- Select your Country --
                        </option>
                        {countries.map((item) => (
                            <option
                                value={item.id}
                                key={item.id}
                                className="text-blue-500 text-sm" // ✅ Tailwind works in modern browsers
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-4">
                {
                    (selectedCountry === 5 || selectedCountry === "5") && (
                        <form onSubmit={submit} className="space-y-4">
                            {/* Payment Method */}
                            <div>
                                <select
                                    id="options"
                                    value={selectedMethod}
                                    onChange={(e) => handleChangeMethod(e.target.value)}
                                    className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                >
                                    <option value="" disabled>
                                        -- Select Pay Method --
                                    </option>
                                    {methods.map((item) => (
                                        <option
                                            value={item.id}
                                            key={item.id}
                                            className="text-blue-500 text-sm"
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Payment ID */}
                            <div>
                                <InputLabel htmlFor="payId">Payment ID</InputLabel>
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
                    )
                }

            </div>

        </div>
    );
};

export default WithdrawForm;
