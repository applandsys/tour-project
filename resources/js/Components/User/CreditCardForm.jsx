import React from 'react';

const CreditCardForm = () => {
    return (
        <div>
            <div id="credit-card-form" className="space-y-4">
                <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card
                        Number</label>
                    <input type="text" id="card-number" name="card_number" placeholder="1234 5678 9876 5432"
                           className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>

                <div className="flex space-x-6">
                    <div className="flex-1">
                        <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry
                            Date</label>
                        <input type="text" id="expiry-date" name="expiry_date" placeholder="MM/YY"
                               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="123"
                               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardForm;
