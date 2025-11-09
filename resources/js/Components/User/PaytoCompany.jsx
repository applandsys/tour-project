import BangladeshPayment from '@/Components/User/PaytoCompany/BangladeshPayment.jsx';
import IndiaPayment from '@/Components/User/PaytoCompany/IndiaPayment.jsx';
import CryptoPayment from '@/Components/User/Withdraw/CryptoPayment.jsx';
import { useState } from 'react';

const PaytoCompany = () => {
    const [selected, setSelected] = useState('');

    const countries = [
        {
            id: 1,
            name: 'United States (USA)',
        },
        {
            id: 2,
            name: 'London (UK)',
        },
        {
            id: 3,
            name: 'Germany',
        },
        {
            id: 4,
            name: 'Italy',
        },
        {
            id: 5,
            name: 'Singapore',
        },
        {
            id: 6,
            name: 'Malaysia',
        },
        {
            id: 7,
            name: 'UAE',
        },
        {
            id: 8,
            name: 'India',
        },
        {
            id: 9,
            name: 'Bangladesh',
        },
        {
            id: 10,
            name: 'Saudia Arabia',
        },
        {
            id: 11,
            name: 'Oman',
        },
        {
            id: 12,
            name: 'Kuwait',
        },
        {
            id: 13,
            name: 'Qatar',
        },
        {
            id: 14,
            name: 'Thailand',
        },
        {
            id: 15,
            name: 'Vietnam',
        },
        {
            id: 16,
            name: 'Nepal ',
        },
    ];

    return (
        <div className="mx-auto max-w-5xl p-10">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Pay to Company</h2>
            </div>

            <div>
                <div>
                    <select
                        id="options"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="block w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="" disabled>
                            -- Select a Country --
                        </option>
                        {countries.map((country) => (
                            <option value={country.id} key={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>

                    {selected && (
                        <p className="mt-4 text-gray-700">
                            You selected:{' '}
                            <span className="font-medium">
                                {
                                    countries.filter(
                                        (item) =>
                                            item.id === parseInt(selected),
                                    )[0].name
                                }
                            </span>
                        </p>
                    )}
                </div>
            </div>

            <div>
                {parseInt(selected) === 8 && (
                    <>
                        <div className="">
                            <IndiaPayment />
                        </div>
                    </>
                )}
            </div>

            <div>
                {parseInt(selected) === 9 && (
                    <>
                        <div className="">
                            <BangladeshPayment />
                        </div>
                        <div>
                            <CryptoPayment />
                        </div>
                    </>
                )}
            </div>


            <div>
                {parseInt(selected) > 0 && (
                    <>
                        <div>
                            <CryptoPayment/>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaytoCompany;
