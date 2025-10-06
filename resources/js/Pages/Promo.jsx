import { Head, Link } from '@inertiajs/react';
import PromoGrid from "@/Components/Site/PromoGrid.jsx";
import { FaBeer, FaGift, FaPercent } from "react-icons/fa";
import InfoBox from "@/Components/Site/InfoBox.jsx";
import HotelSearch from "@/Components/Site/HotelSearch.jsx";
import FlightSearch from "@/Components/Site/FlightSearch.jsx";

export default function Promo({ auth }) {
    return (
        <>
            <Head title="Promo" />

            <main className="flex-col">
                {auth ? (
                    <>
                        <Link href="/purchase">
                            {/* Desktop Image */}
                            <img
                                src="/images/promo_big.png"
                                alt="Promo"
                                className="hidden md:block w-full"
                            />
                            {/* Mobile Image */}
                            <img
                                src="/images/promo_mobile.png"
                                alt="Promo Mobile"
                                className="block md:hidden w-full"
                            />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            {/* Desktop Image */}
                            <img
                                src="/images/promo_big.png"
                                alt="Promo"
                                className="hidden md:block w-full"
                            />
                            {/* Mobile Image */}
                            <img
                                src="/images/promo_mobile.png"
                                alt="Promo Mobile"
                                className="block md:hidden w-full"
                            />
                        </Link>
                    </>
                )}
            </main>
        </>
    );
}
