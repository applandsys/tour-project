import React, {useState} from "react";

const PaytoCompany = ({user}) => {

    const [selected, setSelected] = useState("");

    const countries = [
        {
            id: 1,
            name: 'United States (USA)'
        },
        {
            id: 2,
            name: 'London (UK)'
        },
        {
            id: 3,
            name: 'Germany'
        },
        {
            id: 4,
            name: 'Italy'
        },
        {
            id: 5,
            name: 'Singapore'
        },
        {
            id: 6,
            name: 'Malaysia'
        },
        {
            id: 7,
            name: 'UAE'
        },
        {
            id: 8,
            name: 'India'
        },
        {
            id: 9,
            name: 'Bangladesh'
        }
    ]

    return (
        <div className="max-w-5xl mx-auto p-10">

            <div className="flex items-center justify-between mb-6">
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
                        {
                            countries.map((country) => (
                                <option value={country.id} key={country.id}>
                                    {country.name}
                                </option>
                            ))
                        }
                    </select>

                    {selected && (
                        <p className="mt-4 text-gray-700">
                            You selected: <span className="font-medium">{countries.filter(item=>item.id===parseInt(selected))[0].name}</span>
                        </p>
                    )}

                </div>
            </div>

            <div>
                {
                    parseInt(selected)===9 && (
                        <div className="flex">
                            <div className="flex">
                                <div>
                                    <img src="/images/bank_logo.png"/>
                                </div>
                                <div>
                                    Purhase through Bank
                                </div>
                            </div>
                            <div>BANK</div>
                            <div>BANK</div>
                            <div>BANK</div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default PaytoCompany;
