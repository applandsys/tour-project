import React, {useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import BankPayment from '@/Components/User/Withdraw/BankPayment.jsx';
import DigitalPayment from '@/Components/User/Withdraw/DigitalPayment.jsx';
import CryptoPayment from '@/Components/User/Withdraw/CryptoPayment.jsx';

const WithdrawForm = () => {

    const { walletBalance } = usePage().props;
    const [selectedMethod, setSelectedMethod] = useState(0);
    const { errors } = usePage().props;

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
    ];

    const handleChangeMethod = (method) => {
        setSelectedMethod(Number(parseInt(method)));
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 ">
            {errors.balance && (
                <div className="bg-red-500 p-4 rounded-md">
                    {errors.balance}
                </div>
            )}
            <h5 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Withdraw Wallet</h5>

            <div>
                <div className=" border border-gray-300 p-2 rounded-md  bg-blue-100 mt-4 my-8">
                    <div>
                        Available Balance: <span className="font-bold "> $ {walletBalance.balance} </span>
                    </div>
                </div>

            </div>

            <div className="mt-4">
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
                            {selectedMethod === 2 && <DigitalPayment />}
                            {selectedMethod === 3 && <CryptoPayment />}
                        </div>
                    </>
            </div>
        </div>
    );
};

export default WithdrawForm;
