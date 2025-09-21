import { Head, Link } from '@inertiajs/react';
import {useState} from "react";

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

    const handleClickLocation = () =>{

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

                <div className="bg-white -m-16 rounded-md mx-8">
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
                    <div>


                        <div className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg border border-[#19140035] mx-8">

                            <div>
                                <p className="text-sm text-gray-500" onClick={()=>handleClickLocation}>City, Property Name Or Location</p>
                                <h2 className="text-2xl font-semibold text-black">Dubai</h2>
                                <p className="text-sm text-gray-500">United Arab Emirates</p>
                            </div>

                            <div className="flex space-x-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">Check-In</p>
                                    <p className="text-xl font-semibold text-black">25 Sep '25</p>
                                    <p className="text-sm text-gray-500">Thursday</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-500">Check-Out</p>
                                    <p className="text-xl font-semibold text-black">30 Sep '25</p>
                                    <p className="text-sm text-gray-500">Tuesday</p>
                                </div>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-gray-500">Rooms & Guests</p>
                                <p className="text-xl font-semibold text-black">1 Room 2 Adults</p>
                            </div>
                        </div>

                        <div className="text-center items-center ">
                            <div className="">
                                <div className="">
                                    Last Search:
                                </div>
                                <div className="bg-gray-5000">
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
