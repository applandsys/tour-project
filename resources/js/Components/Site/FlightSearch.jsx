import React, {useState} from 'react';
import BasicDataRangePicker from "@/Components/UI/BasicDataRangePicker.jsx";
import NumberSelect from "@/Components/UI/NumberSelect.jsx";

const HotelSearch = ({handleClickLocation,showLocationBox,showDatePicker,setShowDatePicker,setShowGetBox,showGuestBox}) => {
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
    tomorrow.setDate(today.getDate() + 30)
    today.setDate(today.getDate() + 35);

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
            <div className="flex justify-between mx-8 pt-24">
                <div className="">
                    <div className="flex items-center space-x-6 text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="option" className="form-radio text-blue-500"/>
                            <span>One Way</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="option" className="form-radio text-blue-500"/>
                            <span>Round Trip</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="option" className="form-radio text-blue-500"/>
                            <span>Multi way</span>
                        </label>
                    </div>
                </div>
                <div className="font-bold">
                    Cheap Flights
                </div>
            </div>

            <div className="mt-4">
                <div className="flex flex-col md:flex-row justify-between items-stretch bg-white shadow-md rounded-lg border border-[#19140035] mx-4 md:mx-8 p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4">
                    {/* Location box */}
                    <div className="col-1 hover:bg-[#EAF5FF] w-full md:w-1/3 p-2 md:p-4">
                        <p className="text-sm text-gray-500" onClick={handleClickLocation}>
                            City, Property Name Or Location
                        </p>
                        <h2 className="text-2xl font-semibold text-black">Dubai</h2>
                        <p className="text-sm text-gray-500">United Arab Emirates</p>
                        {/* dropdown stays the same */}
                    </div>

                    {/* Date picker */}
                    <div className="col-2 flex justify-between md:space-x-4 w-full md:w-1/3 hover:bg-[#EAF5FF] p-2 md:p-4">
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
                            {showDatePicker && (
                                <BasicDataRangePicker
                                    dateRange={dateRange}
                                    handleChangeDateRange={handleChangeDateRange}
                                />
                            )}
                        </div>
                    </div>

                    {/* Guest Box */}
                    <div className="col-3 flex-col relative w-full md:w-1/3 hover:bg-[#EAF5FF] h-auto p-2 md:p-4">
                        <div onClick={() => setShowGetBox(prev => !prev)}>
                            <p className="text-sm text-gray-500">Rooms & Guests</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-black">1 Room 2 Adults</p>
                        </div>
                        {showGuestBox && (
                            <div className="absolute bg-white rounded-md border z-[9999] w-80 p-4 shadow-lg">
                                {/* guest box content */}
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
