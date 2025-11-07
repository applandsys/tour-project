import {Head, Link, usePage} from '@inertiajs/react';
import {useState} from "react";
import PromoGrid from "@/Components/Site/PromoGrid.jsx";
import {FaArrowCircleDown, FaBeer, FaGift, FaPercent} from "react-icons/fa";
import InfoBox from "@/Components/Site/InfoBox.jsx";
import HotelSearch from "@/Components/Site/HotelSearch.jsx";
import FlightSearch from "@/Components/Site/FlightSearch.jsx";
import LocalSettings from "@/Components/Site/LocalSettings.jsx";
import ShortNav from "@/Components/User/ShortNav.jsx";
import LoginSignupModal from "@/Components/Site/LoginSignupModal.jsx";
import {US} from "country-flag-icons/react/1x1";
import ReferralLink from "@/Components/User/ReferralLink.jsx";
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";
import MemberCards from "@/Components/Site/MemberCards.jsx";
import { TiTickOutline } from "react-icons/ti";

export default function Welcome({ auth }) {

    const user = usePage().props.auth.user;

    const { walletBalance, purchaseSubscription } = usePage().props;

    const { url } = usePage();
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const referral = queryParams.get("ref") || '';

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
    const [showGuestBox, setShowGetBox] = useState(false);

    const [isLoginOpen,setIsLoginOpen] = useState(referral!=='');
    const [isOpenLocal,setIsOpenLocal] = useState(false);

    const handleClickLocation = () =>{
        setShowLocationBox(!showLocationBox);
    }

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <Head title="Welcome" />
            <header>
                {/* ✅ Show header only if NOT authenticated */}
                {!user && (
                <div className="bg-[#F1E0FA] flex items-center justify-center">
                    <div>
                        <img src="/images/newuserreward.webp" className="h-16 w-16" alt=""/>
                    </div>
                    <div className="font-bold">
                        Get up to 25% Direct BONUS on your SUBSCRIPTION
                    </div>
                    <div className=" mx-4">
                        USE INTRODUCER CODE
                        Ex : GT25183
                    </div>
                </div>
                    )
                }

                {/* ✅ Show header only if NOT authenticated */}
                {user && (
                    <div className="bg-[#F1E0FA] flex items-center justify-center p-4">
                        <ReferralLink user={user}/>
                    </div>
                )
                }
            </header>

            <main className="flex-col">
                <section className="relative w-full h-[700px] bg-[url('/images/top-bg.png')] bg-cover bg-center bg-no-repeat  ">
                    <div className="flex justify-between mx-auto px-2 p-2">
                        <div className="w-1/5">
                            <img src="/images/logo.jpg" className="w-[110px]" onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState,
                                )
                            } />
                            <div
                                className={`fixed inset-y-0 left-0 z-50 w-64  shadow-lg transform ${
                                    showingNavigationDropdown ? 'translate-x-0' : '-translate-x-full'
                                } transition-transform duration-300 ease-in-out bg-white`}
                            >
                                <AccountSidebar onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }/>
                            </div>
                        </div>
                        <div className="">
                        {
                            user ? (
                                <>
                                   <ShortNav user={user}/>
                                </>
                            ):(
                                <>
                                    <button
                                        onClick={() => setIsLoginOpen(true)}
                                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-4 py-2 rounded-md shadow hover:from-blue-600 hover:to-blue-700 flex items-center justify-between h-12">
                                        <span>Login or Create Account</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </button>
                                </>
                            )
                        }
                            {/*<div*/}
                            {/*    className="flex items-center justify-center hover:bg-gray-400 bg-gray-500 p-2 text-white rounded-md h-12 cursor-pointer"*/}
                            {/*    onClick={() => setIsOpenLocal(true)}*/}
                            {/*>*/}
                            {/*    <div className="flex items-center justify-center mr-1">*/}
                            {/*        <US title="United States" className="h-6 w-6 mx-1" />*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center">USD | English</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    <div className="flex item-center justify-center my-4">
                        <div className="text-white text-wxl font-bold bg-gray-100 p-3 rounded-md">

                            {
                                purchaseSubscription && purchaseSubscription.length ?
                                    (
                                    <>
                                        <div className="text-gray-600 flex">    <TiTickOutline /> Congratulations !! Your are a Subscribed Member</div>
                                    </>
                                    ):(

                                        <Link  href={route('member.pre-subscription')}>You must be a Subscribed Member to get all the features</Link>
                                    )
                            }

                        </div>
                    </div>

                    <div className="flex items-center justify-center z-50">
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

                    <div className="bg-white rounded-md mx-8 p-4 mt-4">
                        {}
                        {selectedService==='hotels' &&(
                            <HotelSearch
                                handleClickLocation={handleClickLocation}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                setShowGetBox={setShowGetBox}
                                showGuestBox={showGuestBox}
                                showLocationBox={showLocationBox}/>
                        )}

                        {selectedService==='flights' &&(
                            <FlightSearch
                                handleClickLocation={handleClickLocation}
                                showDatePicker={showDatePicker}
                                setShowDatePicker={setShowDatePicker}
                                setShowGetBox={setShowGetBox}
                                showGuestBox={showGuestBox}
                                showLocationBox={showLocationBox}/>
                        )}
                        <div className="flex item-center w-full justify-center mt-10">
                            <button className="bg-sky-500 px-6 py-4 rounded-3xl text-white">SEARCH</button>
                        </div>
                    </div>
                </section>

                <section className="md:w-1/2  mx-auto px-8 relative ">
                   <MemberCards/>
                </section>

                <section className="w-full  mx-auto px-8 relative ">
                    <div className="rounded-md  p-8 my-20 border">
                        <div className="flex">
                            <h2 className="font-bold">Super Offers</h2>
                            <div className="flex mt-4 mx-8 gap-4 font-bold">
                                <div>All Offers</div>
                                <div>Flights</div>
                                <div>Hotels</div>
                            </div>
                        </div>
                        <PromoGrid/>
                    </div>
                </section>

                <section className="w-full border bg-[#EAF5FF] mt-10 px-16 pt-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <div>
                            <img src="/images/mobile_device.png" alt="Mobile device" />
                        </div>

                        <div>
                            <h3>App Coming soon</h3>
                            <img src="/images/playstore_icon.png" alt="Scanner"  className="max-w-[200px]"/>
                        </div>
                    </div>
                </section>

                <section className="w-full border bg-gray-300 mt-10 px-16 py-4">
                    {/*<InfoBox title="Top Flight Routes" content="  Abu Dhabi to Kutaisi Flight, Aqaba to Abu Dhabi Flight, Al Ain to Peshawar Flight, Kutaisi to Abu Dhabi Flight, Dubai to Quetta Flight, Dammam to Dubai Flight, Dubai to Dammam Flight, Alexandria to Abu Dhabi Flight, Doha to Abu Dhabi Flight, Abu Dhabi to Lahore Flight, Abu Dhabi to Bangkok Flight, Abu Dhabi to Islamabad Flight, Abu Dhabi to Peshawar Flight, Manila to Abu Dhabi Flight, Islamabad to Sharjah Flight, Islamabad to Dubai Flight, Dubai to Bahrain Flight, Beirut to Dubai Flight, Dubai to Bangkok Flight, Abu Dhabi to Beirut Flight, Abu Dhabi to Manila Flight, Amman to Dubai Flight, Dubai to Alexandria Flight, Dubai to Amsterdam Flight, Dubai to Cairo Flight, Dubai to Hong Kong Flight, Dubai to Istanbul Flight, Dubai to Jakarta Flight, Dubai to London Flight, Dubai to Mauritius Flight, Dubai to New York Flight, Dubai to Paris Flight, Dubai to Riyadh Flight, Dubai to Rome Flight, Dubai to Toronto Flight, Dubai to Zurich Flight, Dubai to Faisalabad Flight, Dubai to Lagos Flight, Dubai to Los Angeles Flight, Dubai to Phuket Flight, Manila to Dubai Flight, Abu Dhabi to Cairo Flight, Dubai to Athens Flight, Dubai to Casablanca Flight, Casablanca to Dubai Flight, Dubai to Beirut Flight, Dubai to Lahore Flight, Dubai to Seychelles Flight, Dubai to Amman Flight, Dubai to Entebbe Flight, Dubai to Peshawar Flight, Dubai to Tunis Flight, Abu Dhabi to Casablanca Flight"/>*/}
                    <InfoBox title=" International Flight Routes" content="Abu Dhabi To Amman Flight, Abu Dhabi To Dhaka Flight, Abu Dhabi To Doha Flight, Abu Dhabi To Kathmandu Flight, Cairo To Sharjah Flight, Dhaka To Sharjah Flight, Kathmandu To Abu Dhabi Flight, Kathmandu To Sharjah Flight, Sharjah To Dhaka Flight, Sharjah To Islamabad Flight, Sharjah To Beirut Flight, Sharjah To Dhaka Flight, Sharjah To Kathmandu Flight, Karachi To Sharjah Flight, Sharjah To Istanbul Flight, Sharjah To Doha Flight, Dubai to Manila Flight, Dubai to Kuwait Flight, Dubai to Islamabad Flight, Dubai to Karachi Flight, Dubai to Kathmandu Flight, Dubai to Delhi Flight, Dubai to Mumbai Flight, Dubai to Chennai Flight, Dubai to Hyderabad Flight, Dubai to Mangalore Flight, Dubai to Kochi Flight, Mumbai to Dubai Flight, Mumbai to Trivandrum Flight, Sharjah to Trivandrum Flight, Ahmedabad to Dubai Flight, Kochi to Dubai Flight, Dubai to Kozhikode Flight, Amritsar to Dubai Flight, Sharjah to Kochi Flight, Trivandrum to Dubai Flight, Calicut to Dubai Flight, Kochi to Sharjah Flight, Dubai to Thiruvananthapuram Flight, Thiruvananthapuram to Sharjah Flight, Dubai to Abu Dhabi Flight, Dubai to Sialkot Flight"/>

                    <InfoBox title="International Hotels" content="Hotels In Dubai, Hotels In Abu Dhabi, Hotels In Sharjah, Hotels In Ras Al Khaimah, Hotels In Ajman, Hotels In Fujairah, Hotels In Al Ain, Hotels In Kalba, Hotels In Singapore, Hotels In Bangkok, Hotels In Pattaya, Hotels In London, Hotels In Phuket, Hotels In Bali, Hotels In Hong Kong, Hotels In Paris, Hotels In Koh Samui, Hotels In New York, Hotels In Las Vegas, Hotels In Colombo, Hotels In Macau, Hotels In Kuala Lumpur, Hotels In Sydney, Hotels In Kathmandu, Hotels In Maldives, Hotels In Langkawi, Hotels In Istanbul, Hotels In Rome, Hotels in Tbilisi, Hotels in Baku, Hotels in Cairo, Hotels in Islamabad, Hotels in Muscat, Hotels in Mykonos, Hotels in Santorini, Hotels in Mykonos, Hotels in Yerevan, Hotels in Zanzibar, Hotels in Moscow"/>
                    <InfoBox title="Top Hotels" content="  Paramount Hotel Dubai, Grand Hyatt Dubai, Jw Marriott Marquis Hotel Dubai, Gevora Hotel, Jumeirah Beach Hotel, Citymax Hotel Bur Dubai, Atana Hotel, Sheraton Grand Hotel Dubai, Millennium Airport Hotel Dubai, Media One Hotel, Grand Excelsior Hotel Bur Dubai, Ghaya Grand Hotel, Marco Polo Hotel, Copthorne Hotel Dubai, Kempinski Hotel Mall Of The Emirates, The Meydan Hotel, Park Regis Kris Kin Hotel, Armani Hotel Dubai, York International Hotel, Signature 1 Hotel Tecom"/>
                    <InfoBox title=" Airlines" content="  Indigo, Emirates, Spicejet, Air India, Air India Express, Vistara, Biman Bangladesh, Gulf Air, Qatar Airways, Etihad Airways, Flydubai, Kuwait Airways, Oman Air, Thai Airways, Royal Nepal Airlines, Turkish Airlines, Srilankan Airlines, Air Arabia, Airblue"/>
                    <InfoBox title="Product Offering" content="  Book Flights From UAE, Book Hotels From UAEIndigo, Emirates, Spicejet, Air India, Air India Express, Vistara, Biman Bangladesh, Gulf Air, Qatar Airways, Etihad Airways, Flydubai, Kuwait Airways, Oman Air, Thai Airways, Royal Nepal Airlines, Turkish Airlines, Srilankan Airlines, Air Arabia, Airblue"/>
                    <InfoBox title=" About the Site" content=" Contact Us, Privacy Policy, Cookie Policy, User Agreement, Terms of Service"/>
                </section>
            </main>

            <footer>
                <section className="bg-[#E7E7E7]  px-16 py-4">
                    <div className="flex gap-16">
                        <div>
                            <h5>Q. How to book a hotel online with GlobalTrips24 In UAE?</h5>
                            <p className="text-xs mt-4">
                                A. Booking a hotel online is easy through GlobalTrips24. All you need to do first is to download our app on your Android or iOS device or simply use your computer. On the app, tap on the Hotels section on the top left corner and enter the details of the city, the area or the hotel. Fill out the check-in and check-out dates, along with the other details and tap Search. Use the Sort & Filter options so that you can book one as per your convenience. You can also choose hotels according to user reviews and ratings. The same follows on our site.
                            </p>
                        </div>
                        <div>
                            <h5>Q. How to find the best hotels near me?</h5>
                            <p className="text-xs mt-4">
                                A. If you are travelling to a city for the first time and are looking for hotels in the best areas, it is easy to find them on our website and our app. Let’s say, you are going to Pattaya and planning to book one near the most happening beaches. Once you have hit the Search option, you will find a list of all the hotels in  Pattaya, Thailand near the famed beach areas including Phuket and Pattaya. You can even find out which of the areas are ideal for couples and families. Similarly, if you are looking for booking hotels in Dubai, you can either book ones that are near the city’s major business districts, tourist areas and transportation hubs.
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

            {/* Overlay Local*/}
            {isOpenLocal && (
              <div>
               <LocalSettings setIsOpen={setIsOpenLocal}/>
              </div>
            )}

            {/* Overlay Local*/}
            {isLoginOpen && (
                <div>
                    <LoginSignupModal setIsLoginOpen={setIsLoginOpen} referral={referral}/>
                </div>
            )}

        </>
    );
}
