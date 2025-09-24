import React, {useState} from 'react';
import BasicDataRangePicker from "@/Components/UI/BasicDataRangePicker.jsx";
import NumberSelect from "@/Components/UI/NumberSelect.jsx";
import {DateRangePicker} from "rsuite";

const HotelSearch = ({
                         handleClickLocation,
                         showLocationBox,
                         showDatePicker,
                         setShowDatePicker,
                         setShowGetBox,
                         showGuestBox
                     }) => {

    // Demo arrays
    const popularCities = [
        { city: "Kuala Lumpur", country: "Malaysia", properties: 5298 },
        { city: "Paris", country: "France", properties: 12000 },
    ];

    const suggestions = [
        { city: "Dubai", properties: 2113 },
        { city: "London", properties: 8013 },
        { city: "Bangkok", properties: 5500 },
        { city: "New York", properties: 7321 },
    ];

    // Today
    const today = new Date();

// Tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1)

    const [fromDate,toDate] = useState([today,tomorrow]);

    const [dateRange, setDateRange] = useState([today,tomorrow]);

    // Convert each ISO string into a Date object
    const dates = dateRange.map(dateStr => new Date(dateStr));

// Extract day and formatted date
    const result = dates.map(d => {
        const day = d.toLocaleDateString("en-US", { weekday: "long" });
        const formatted = d.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "2-digit"
        });
        return { day, formatted };
    });

    const handleChangeDateRange = (value) => {
        setDateRange(value);
    };

    return (
        <>
            <div className="mt-20">
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg border border-[#19140035] mx-8">
                    {/* Location box */}
                    <div className="hover:bg-[#EAF5FF] w-1/3">
                        <p className="text-sm text-gray-500" onClick={handleClickLocation}>
                            City, Property Name Or Location
                        </p>

                        {showLocationBox && (
                            <div className="absolute left-16 w-64 z-100 p-4">
                                <div className="relative w-64">
                                    <input
                                        type="text"
                                        placeholder="Enter city/ Hotel/ Area/ Building"
                                        className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />

                                    <div className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-10">
                                        <div className="px-4 py-2 text-gray-700 font-medium">
                                            Search: <span className="font-semibold">"Beach"</span>
                                        </div>

                                        {/* Recent Searches */}
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-600">
                                            <span className="text-xs text-gray-400">Popular Cities</span>
                                            <ul className="mt-2">
                                                {popularCities.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                                    >
                                                        {item.city}, {item.country} - {item.properties} properties
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Suggestions */}
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-600">
                                            <span className="text-xs text-gray-400">Suggestions</span>
                                            <ul className="mt-2">
                                                {suggestions.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="cursor-pointer py-1 hover:bg-gray-100"
                                                    >
                                                        {item.city} - {item.properties} properties
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <h2 className="text-2xl font-semibold text-black">Dubai</h2>
                        <p className="text-sm text-gray-500">United Arab Emirates</p>
                    </div>

                    {/* Date picker */}
                    <div className="flex space-x-4 w-1/3 hover:bg-[#EAF5FF]">
                        <div onClick={() => setShowDatePicker(prev => !prev)}>
                            <p className="text-sm text-gray-500">Check-In</p>
                            <p className="text-xl font-semibold text-black">{result[0].formatted}</p>
                            <p className="text-sm text-gray-500">{result[0].day}</p>
                        </div>
                        <div onClick={() => setShowDatePicker(prev => !prev)}>
                            <p className="text-sm text-gray-500">Check-Out</p>
                            <p className="text-xl font-semibold text-black">{result[1].formatted}</p>
                            <p className="text-sm text-gray-500">{result[1].day}</p>
                        </div>
                        <div className="z-50 absolute">
                            {showDatePicker && <BasicDataRangePicker dateRange={dateRange} handleChangeDateRange={handleChangeDateRange}/>}
                        </div>
                    </div>

                    {/* Guest Box */}
                    <div className="flex-col relative w-1/3 hover:bg-[#EAF5FF] h-16">
                        <div onClick={() => setShowGetBox(prev => !prev)}>
                            <p className="text-sm text-gray-500">Rooms & Guests</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-black">1 Room 2 Adults</p>
                        </div>

                        {showGuestBox && (
                            <div className="absolute bg-white rounded-md border z-[9999] w-80 p-4 shadow-lg">
                                <div className="flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-xl font-bold">Room</div>
                                        <NumberSelect defaultValue={1} />
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-xl font-bold">Adult</div>
                                        <NumberSelect defaultValue={1} />
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-xl font-bold">Child</div>
                                            <div className="text-xs text-gray-500">0 - 17 Years Old</div>
                                        </div>
                                        <NumberSelect defaultValue={0} />
                                    </div>
                                    <div className="my-4 text-sm text-gray-600">
                                        Please provide the correct number of children along with their ages
                                        for best options and prices.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Last Search */}
                <div className="flex text-center items-center justify-center mx-auto mt-2 py-4">
                    <div className="flex">
                        <div className="text-sm flex items-center mt-2">Last Search:</div>
                        <div className="bg-gray-100 w-[300px] rounded-md p-2 text-xs">
                            Dubai, United Arab E... 25 Sep 25 - 30 Sep 25
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelSearch;
