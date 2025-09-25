import { Head, Link } from '@inertiajs/react';
import {useState} from "react";
import PromoGrid from "@/Components/Site/PromoGrid.jsx";
import {FaBeer, FaGift, FaPercent} from "react-icons/fa";
import InfoBox from "@/Components/Site/InfoBox.jsx";
import HotelSearch from "@/Components/Site/HotelSearch.jsx";
import FlightSearch from "@/Components/Site/FlightSearch.jsx";

export default function Promo({ auth }) {


    return (
        <>
            <Head title="Promo" />

            <main className="flex-col">
                {
                    auth ? (
                        <>
                            <Link href="/purchase">
                                <img src="/images/promo_big.png"/>
                            </Link>
                        </>
                        ) :
                        (
                            <>
                                <Link href="/login">
                                    <img src="/images/promo_big.png"/>
                                </Link></>
                        )
                }

            </main>

            <footer>
                <section className="bg-[#E7E7E7]  px-16 py-4">
                    <div className="flex gap-16">
                        <div>
                            <h5>Q. How to book a hotel online with MakeMyTrip In UAE?</h5>
                            <p className="text-xs mt-4">
                                A. Booking a hotel online is easy through MakeMyTrip. All you need to do first is to download our app on your Android or iOS device or simply use your computer. On the app, tap on the Hotels section on the top left corner and enter the details of the city, the area or the hotel. Fill out the check-in and check-out dates, along with the other details and tap Search. Use the Sort & Filter options so that you can book one as per your convenience. You can also choose hotels according to user reviews and ratings. The same follows on our site.
                            </p>
                        </div>
                        <div>
                            <h5>Q. How to find the best hotels near me?</h5>
                            <p className="text-xs mt-4">
                                A. If you are travelling to a city for the first time and are looking for hotels in the best areas, it is easy to find them on our website and our app. Let’s say, you are going to Goa and planning to book one near the most happening beaches. Once you have hit the Search option, you will find a list of all the hotels in North Goa near the famed beach areas including Baga and Calangute. You can even find out which of the areas are ideal for couples and families. Similarly, if you are looking for booking hotels in Mumbai, you can either book ones that are near the city’s major business districts, tourist areas and transportation hubs.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-black  px-16 py-4 h-24">
                    <div className="flex justify-between">
                        <div>
                            Left
                        </div>
                        <div>
                            Right
                        </div>
                    </div>
                </section>
            </footer>

        </>
    );
}
