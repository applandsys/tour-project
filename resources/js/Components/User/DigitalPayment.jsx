import React, {useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import BankPayment from '@/Components/User/Withdraw/BankPayment.jsx';

const WithdrawForm = () => {

    const { walletBalance } = usePage().props;

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedMethod, setSelectedMethod] = useState(0);

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
            name: 'Bank Payment'
        },
        {
            id: 2,
            name: 'Digital Payment'
        },
        {
            id: 3,
            name: 'Crypto Payment'
        }
    ]

    const handleChangeCountry =  (country) =>{
        setSelectedCountry(country);
    }
    const handleChangeMethod = (method) => {
        setSelectedMethod(Number(parseInt(method)));
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
                        <>
                            <div>
                                <select
                                    id="options"
                                    value={selectedMethod}
                                    onChange={(e) => handleChangeMethod(Number(e.target.value))}
                                    className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                >
                                    <option value="">
                                        -- Select Pay Method --
                                    </option>
                                    {methods.map((item) => (
                                        <option value={item.id} key={item.id} className="text-blue-500 text-sm">
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                {selectedMethod === 1 && <BankPayment />}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default WithdrawForm;
