import React from 'react';
import BasicDataRangePicker from "@/Components/UI/BasicDataRangePicker.jsx";
import NumberSelect from "@/Components/UI/NumberSelect.jsx";

const HotelSearch = ({handleClickLocation,showLocationBox,showDatePicker,setShowDatePicker,setShowGetBox,showGuestBox}) => {
    return (
        <>
            <div className="mt-20">
                <div className="flex justify-between items-center  bg-white shadow-md rounded-lg border border-[#19140035] mx-8">
                    <div className="hover:bg-[#EAF5FF] w-1/3">
                        <p className="text-sm text-gray-500" onClick={handleClickLocation}>City, Property Name Or Location</p>
                        {showLocationBox && (
                            <div
                                className="absolute  left-16 w-64  z-100 p-4 ">
                                <div className="relative w-64">
                                    <input type="text" placeholder="Enter city/ Hotel/ Area/ Building"
                                           className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                                    <div
                                        className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-10">
                                        <div className="px-4 py-2 text-gray-700 font-medium">
                                            Search: <span className="font-semibold">"Beach"</span>
                                        </div>
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-600">
                                            <span className="text-xs text-gray-400">Recent Searches</span>
                                            <ul className="mt-2">
                                                <li className="cursor-pointer py-1 hover:bg-gray-100">Kuala
                                                    Lumpur, Malaysia - 5298 properties
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="px-4 py-2 text-sm font-semibold text-gray-600">
                                            <span className="text-xs text-gray-400">Suggestions</span>
                                            <ul className="mt-2">
                                                <li className="cursor-pointer py-1 hover:bg-gray-100">Dubai -
                                                    2113 properties
                                                </li>
                                                <li className="cursor-pointer py-1 hover:bg-gray-100">London -
                                                    8013 properties
                                                </li>
                                                <li className="cursor-pointer py-1 hover:bg-gray-100">Bangkok -
                                                    5500 properties
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <h2 className="text-2xl font-semibold text-black">Dubai</h2>
                        <p className="text-sm text-gray-500">United Arab Emirates</p>
                    </div>

                    <div className="flex space-x-4 w-1/3 hover:bg-[#EAF5FF]">

                        <div className="">
                            <div onClick={()=>setShowDatePicker(prev=> !prev)}>
                                <p className="text-sm text-gray-500">Check-In</p>
                                <p className="text-xl font-semibold text-black">25 Sep '25</p>
                                <p className="text-sm text-gray-500">Thursday</p>
                            </div>
                        </div>
                        <div className="" onClick={()=>setShowDatePicker(prev=> !prev)}>
                            <p className="text-sm text-gray-500">Check-Out</p>
                            <p className="text-xl font-semibold text-black">30 Sep '25</p>
                            <p className="text-sm text-gray-500">Tuesday</p>
                        </div>
                        <div className="z-50 absolute">
                            {
                                showDatePicker && ( <BasicDataRangePicker/>)
                            }
                        </div>
                    </div>

                    <div className="flex-col relative  w-1/3 hover:bg-[#EAF5FF] h-16">
                        <div className="" onClick={()=>setShowGetBox(prev=>!prev)}>
                            <p className="text-sm text-gray-500">Rooms & Guests</p>
                        </div>
                        <div className="">
                            <p className="text-xl font-semibold text-black">1 Room 2 Adults</p>
                        </div>

                        {/* Guest Box */}
                        {showGuestBox && (
                            <div className="absolute bg-white rounded-md border  z-[9999] w-80 p-4 shadow-lg 1st-red">
                                <div className="flex-col">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-xl font-bold">Room</div>
                                        <NumberSelect defaultValue={1}/>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="text-xl font-bold">Adult</div>
                                        <NumberSelect defaultValue={1}/>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-xl font-bold">Child</div>
                                            <div className="text-xs text-gray-500">0 - 17 Years Old</div>
                                        </div>
                                        <NumberSelect defaultValue={0}/>
                                    </div>
                                    <div className="my-4 text-sm text-gray-600">
                                        Please provide the correct number of children along with their ages for best options and prices.
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex text-center items-center justify-center mx-auto  mt-2 py-4">
                    <div className="flex">
                        <div className="text-sm item-center flex item-center justify-center mt-2">
                            Last Search:
                        </div>
                        <div className="bg-gray-100  w-[300px] rounded-md p-2 text-xs">
                            Dubai, United Arab E...
                            25 Sep 25 - 30 Sep 25
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelSearch;
