import React, { useState } from 'react';

const NumberSelector = ({defaultValue=1}) => {
    const [value, setValue] = useState(defaultValue);

    const handleIncrease = () => {
        if (value < 10) {
            setValue(value + 1);
        }
    };

    const handleDecrease = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={handleDecrease}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none"
            >
                -
            </button>
            <input
                type="number"
                value={value}
                onChange={(e) => setValue(Math.min(10, Math.max(1, e.target.value)))}
                className="w-20 text-center py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                min="1"
                max="10"
            />
            <button
                onClick={handleIncrease}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none"
            >
                +
            </button>
        </div>
    );
};

export default NumberSelector;
