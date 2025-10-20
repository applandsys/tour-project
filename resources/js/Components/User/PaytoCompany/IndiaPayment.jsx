import React from "react";
import { CopyPlus } from 'lucide-react';


export default function IndiaPayment({
                                            bank = "ICICI BANK",
                                            accountName = "Pkart Online.com",
                                            accountNo = "397005500153",
                                            ifsc = "ICICI0003970",
                                            accountType = "Current Account",
                                        }) {
    const fields = [
        { label: "Bank Name", value: bank },
        { label: "A/c Name", value: accountName },
        { label: "A/c No", value: accountNo },
        { label: "IFSC CODE", value: ifsc },
        { label: "A/c Type", value: accountType },
    ];

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // small visual feedback could be added (toast/snackbar) in your app
            // but we keep this component dependency-free and minimal.
            // You can replace these with your preferred toast library.
            // For now we'll use a simple alert (unobtrusive in dev) — remove if undesired.
            // alert(`Copied: ${text}`);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    const copyAll = () => {
        const allText = fields.map((f) => `${f.label}: ${f.value}`).join("\n");
        copyToClipboard(allText);
    };

    return (
        <div className="">
            <div className=" shadow-lg rounded-2xl overflow-hidden">
                <div className="flex items-center gap-4 p-4 border-b dark:border-gray-700">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white font-semibold text-lg">
                        IC
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">Bank account details</h3>
                        <p className="text-sm text-gray-500 ">Use these details for direct transfers</p>
                    </div>
                    <div>
                        <button
                            onClick={copyAll}
                            className="px-3 py-1.5 bg-blue-200  text-sm rounded-md hover:bg-gray-200 "
                        >
                            Copy All
                        </button>
                    </div>
                </div>

                <div className="p-4 space-y-3">
                    {fields.map((f) => (
                        <div key={f.label} className="flex items-start justify-between gap-4">
                            <div>
                                <div className="text-xs text-gray-600">{f.label}</div>
                                <div className="mt-1 text-sm font-medium">{f.value}</div>
                            </div>

                            <div className="flex-shrink-0 self-center">
                                <button
                                    onClick={() => copyToClipboard(f.value)}
                                    aria-label={`Copy ${f.label}`}
                                    className="inline-flex items-center gap-2 px-3 py-1  border bg-blue-200  text-sm rounded-md hover:bg-gray-200 "
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-4 py-3 border-t text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                        <div>Reference</div>
                        <div className="font-medium">For payments to GlobalTrips24.com</div>
                    </div>
                </div>
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Tip: Pay Using any one of the Method will Effect Balance very soot.</p>

            <div>
                <div className="max-w-md mx-auto p-4">
                    <div className=" shadow-lg rounded-2xl overflow-hidden">
                        <div className=" items-center gap-4 p-4 border-b dark:border-gray-700">
                            <div className="flex items-center justify-center rounded-mdbg-gradient-to-tr from-blue-500 to-indigo-500  font-semibold text-lg">
                                Digital UPI ID
                            </div>
                            <div className="text-gray-700 text-center flex justify-around">
                                <div>
                                    pkartonlinecom.ibz@icici
                                </div>
                                <div>
                                    <CopyPlus  onClick={() => copyToClipboard("pkartonlinecom.ibz@icici")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
