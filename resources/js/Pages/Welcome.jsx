import { Head, Link } from '@inertiajs/react';
import {useState} from "react";
import BasicDateRangePicker from "@/Components/UI/BasicDataRangePicker.jsx";
import ResponsiveDateRangePickers from "@/Components/UI/BasicDataRangePicker.jsx";
import BasicDataRangePicker from "@/Components/UI/BasicDataRangePicker.jsx";
import NumberSelect from "@/Components/UI/NumberSelect.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const [selectedService,setSelectedService] = useState('hotels');
    const [showLocationBox, setShowLocationBox] = useState(false);
    const [showDatePicker,setShowDatePicker] = useState(false);

    const handleClickLocation = () =>{
        setShowLocationBox(!showLocationBox);
        console.log("fuck");
    }

    return (
        <>
            <Head title="Welcome" />
            <header>
                <div className="bg-[#F1E0FA] flex items-center justify-center">
                    <div>
                        <img src="/images/newuserreward.webp" className="h-16 w-16"/>
                    </div>
                    <div className="font-bold">
                        Get up to 25% OFF on your first booking
                    </div>
                    <div className=" mx-4">
                        USE CODE: MMTWELCOME
                    </div>
                    <div className="ml-10 text-blue-500">
                        Copy Code
                    </div>
                    <div className="absolute right-0 top-50 mr-10 text-gray-500">
                        X
                    </div>
                </div>
            </header>

            <section className="relative w-full h-96 bg-[url('/images/top-bg.png')] bg-cover bg-center bg-no-repeat ">
                <div className="flex justify-between mx-auto px-12 p-2">
                    <div className="">
                        <img src="/images/logo.jpg" className="w-16"/>
                    </div>
                    <div className="flex">
                        <div className="">
                            <img src="/images/crown.png" className="h-6"/>
                        </div>
                        <div className="">
                            <img src="/images/crown.png" className="h-6"/>
                        </div>
                        <div className="">
                            <img src="/images/crown.png" className="h-6"/>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="bg-white p-4 border  rounded-lg flex font-bold">
                        <div className={`flex-col px-8 ${selectedService==='flights' ? 'text-blue-500': ''}`} onClick={()=>setSelectedService('flights')}>
                            <img src="/images/airoplane.png" className="h-12"/>
                            Flight
                        </div>
                        <div className={`flex-col px-8 ${selectedService==='hotels' ? 'text-blue-500': ''}`} onClick={()=>setSelectedService('hotels')}>
                            <img src="/images/hotels.png" className="h-12"/>
                            Hotels
                        </div>
                    </div>
                </div>

                <div className="bg-white -m-16 rounded-md mx-8 p-4">
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
                    <div className="">

                        <div className="flex justify-between items-center  bg-white shadow-md rounded-lg border border-[#19140035] mx-8">
                            <div className="hover:bg-[#EAF5FF] w-1/3">
                                <p className="text-sm text-gray-500" onClick={handleClickLocation}>City, Property Name Or Location</p>
                                {showLocationBox && (
                                    <div
                                        className="absolute  left-16 w-64  z-10 p-4">
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
                                <div className="">
                                    <p className="text-sm text-gray-500">Rooms & Guests</p>
                                </div>
                                <div className="">
                                    <p className="text-xl font-semibold text-black">1 Room 2 Adults</p>
                                </div>
                                <div
                                    className="absolute bg-white rounded-md border border-gray-200 z-10  h-100  w-100  p-4">
                                    <div className="relative w-80  flex-col">
                                        <div>
                                            <div className="flex justify-between item-center">
                                                <div className="text-xl font-bold items-center">Room </div>
                                                <div>
                                                    <NumberSelect defaultValue={1}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <div className="text-xl font-bold items-center">Adult</div>
                                                <div>
                                                    <NumberSelect defaultValue={1}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <div>
                                                    <div className="text-xl font-bold items-center">Child</div>
                                                    <div className="text-xs text-gray-500">0 - 17 Years Old</div>
                                                </div>
                                                <div>
                                                    <NumberSelect defaultValue={0}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-4">
                                           <p>Please provide right number of children along with their right age for best options and prices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex text-center items-center justify-center mx-auto border mt-2">
                            <div className="flex">
                                <div className="text-sm item-center flex item-center justify-center mt-2">
                                    Last Search:
                                </div>
                                <div className="bg-gray-100 w-[200px] rounded-md p-2 text-xs">
                                    Dubai, United Arab E...
                                    25 Sep 25 - 30 Sep 25
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="">
                    jljklj
                </div>
            </section>

        </>
    );
}
