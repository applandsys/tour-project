import React, {useState} from "react";
import {usePage} from "@inertiajs/react";
import ErrorAlert from "@/Components/UI/ErrorAlert.jsx";

const BuyPackageOption = ({user,packages}) => {

    const { walletBalance } = usePage().props;

    const [selected, setSelected] = useState("");


    return (
        <div className="max-w-5xl mx-auto p-10">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Buy Package</h2>
            </div>
            {/*{JSON.stringify(packages)}*/}
            <div>
                <div>
                    <select
                        id="options"
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="block w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="" disabled>
                            -- Select a Package --
                        </option>
                        {
                            packages.map((item) => (
                            <option value={item.id} key={item.id}>
                                {item.name}
                            </option>
                        ))
                        }
                    </select>

                    {selected && (
                        <div className="mt-4 text-gray-700">
                           <div>
                               You selected: <span className=" font-bold text-blue-500">{packages.filter(item=>item.id===parseInt(selected))[0].name}</span>
                           </div>
                            <div className="">
                                Price: <span className="font-bold">BDT. {packages.filter(item=>item.id===parseInt(selected))[0].amount * 120}</span>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {
                selected  &&
                (
                    <>
                        <div className=" border border-gray-300 p-2 rounded-md mt-2 bg-blue-100 mt-4">
                            <div>
                                Your available balance: <span className="font-bold "> BDT. {walletBalance.balance} </span>
                            </div>
                        </div>

                        {
                            parseInt(walletBalance.balance) <  packages.filter(item=>item.id===parseInt(selected))[0].amount ? (
                                <div className="mt-8">
                                    <ErrorAlert>You dont have sufficient balance</ErrorAlert>
                                </div>
                            ): (
                            <div className="flex item-center justify-center mt-8">
                                <button
                                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
                                    Confirm
                                </button>
                            </div>
                            )
                        }
                    </>
                )
            }
        </div>
    );
};

export default BuyPackageOption;
