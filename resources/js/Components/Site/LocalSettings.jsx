import React from "react";
import BasicModal from "@/Components/UI/BasicModal.jsx";

const LocalSettings = ({setIsOpen}) => {
    return (
        <>
            <BasicModal setIsOpen={setIsOpen}
            >
                <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow border">
                    <div className="bg-orange-50 border border-orange-200 rounded-md p-3 text-sm mb-4">
                        <p className="text-gray-700">
                            <span className="font-semibold text-xs">Select your country to access the best available local rates.</span><br />
                            Trains, buses, cabs, holiday packages, and forex cards are only offered
                            on the India site. Also, to pay in INR (Indian Rupees), select 'India'
                            from the country menu in the settings section. Changing your country
                            may switch your account, currency, and loyalty program.
                        </p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Country</label>
                        <div className="relative">
                            <select className="w-full border rounded-md py-2 pl-3 pr-8 text-sm focus:ring focus:ring-blue-200">
                                <option>🇦🇪 United Arab Emirates</option>
                                <option>🇮🇳 India</option>
                                <option>🇧🇩 Bangladesh</option>
                            </select>
                        </div>
                    </div>

                    {/* Currency Dropdown */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Currency</label>
                        <div className="relative">
                            <select className="w-full border rounded-md py-2 pl-3 pr-8 text-sm focus:ring focus:ring-blue-200">
                                <option>BDT Bangladeshi Taka</option>
                                <option>AED UAE Dirham</option>
                                <option>INR Indian Rupee</option>
                            </select>
                        </div>
                    </div>

                    {/* Language Dropdown */}
                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm mb-1">Language</label>
                        <div className="relative">
                            <select className="w-full border rounded-md py-2 pl-3 pr-8 text-sm focus:ring focus:ring-blue-200">
                                <option>ENG English</option>
                                <option>BN Bangla</option>
                                <option>AR Arabic</option>
                            </select>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <button
                        type="button"
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md transition"
                    >
                        APPLY
                    </button>
                </div>
            </BasicModal>
        </>

    );
};

export default LocalSettings;
