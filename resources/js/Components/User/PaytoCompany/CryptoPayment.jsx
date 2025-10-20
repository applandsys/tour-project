import React from 'react';
import { CopyPlus } from 'lucide-react';

const CryptoPayment = () => {

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            // small visual feedback could be added (toast/snackbar) in your app
            // but we keep this component dependency-free and minimal.
            // You can replace these with your preferred toast library.
            // For now we'll use a simple alert (unobtrusive in dev) — remove if undesired.
             alert(`Copied: ${text}`);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };

    return (
        <div>
            <div>
                <div className="max-w-md mx-auto p-4">
                    <div className=" shadow-lg rounded-2xl overflow-hidden">
                        <div className=" items-center gap-4 p-4 border-b dark:border-gray-700">
                            <div className="flex items-center justify-center rounded-mdbg-gradient-to-tr from-blue-500 to-indigo-500  font-semibold text-lg">
                                USDT PAYMENT
                            </div>
                            <div className="text-gray-700 text-center flex justify-around">
                                <div>
                                    <div className="p-2"> TRC20 : </div>
                                    <div>
                                        <div className="flex gap=4 px-4"> TMVMPCXpFYqEDcJ1A92j9DqKMfrrtgNXNQ
                                            <CopyPlus className="mx-4"  onClick={() => copyToClipboard("TMVMPCXpFYqEDcJ1A92j9DqKMfrrtgNXNQ")}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-gray-700 text-center flex justify-around mt-4">
                                <div>
                                    <div className="p-2"> BEP20 : </div>
                                    <div>
                                        <div className="flex gap=4 px-4"> 0x9988d02a6fba7d57a0f8c26817cf9622ec946e66
                                            <CopyPlus className="mx-4"  onClick={() => copyToClipboard("0x9988d02a6fba7d57a0f8c26817cf9622ec946e66")}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoPayment;
