import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import UserHeader from "@/Components/User/UserHeader.jsx";
import ReferralLink from "@/Components/User/ReferralLink.jsx";
import AccountSidebar from "@/Components/User/AccountSidebar.jsx";
import {FaArrowCircleRight, FaMailBulk, FaPhone} from "react-icons/fa";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const { walletBalance } = usePage().props;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    function getFirstName(fullName) {
        if (!fullName) return "";
        return fullName.trim().split(" ")[0];
    }
    return (
        <>
            <header>
                {/* ✅ Show header only if NOT authenticated */}
                    {user && (
                        <div className="bg-[#F1E0FA] flex items-center justify-center p-4">
                            <ReferralLink user={user}/>
                        </div>
                    )
                }
            </header>

            <div className="min-h-screen bg-gray-100">
                <nav className="border-b border-gray-100 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex shrink-0 items-center">
                                    <div onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    } >
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                        <div
                                            className={`fixed inset-y-0 left-0 z-50 w-64  shadow-lg transform ${
                                                showingNavigationDropdown ? 'translate-x-0' : '-translate-x-full'
                                            } transition-transform duration-300 ease-in-out bg-white`}
                                        >
                                            <AccountSidebar onClick={() =>
                                                setShowingNavigationDropdown(false)
                                            }/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center px-2">
                                        <div className="items-center flex">
                                            <img src="/images/plane_icon_gray.png" className="h-8 w-8"/>
                                        </div>
                                        <div>
                                            Flights
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center px-2">
                                        <div className="items-center flex">
                                            <img src="/images/hotel_icon_gray.png" className="h-8 w-8"/>
                                        </div>
                                        <div>
                                            Hotels
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-sm hidden sm:ms-6 sm:flex sm:items-center font-semibold text-gray-600">
                                {/*Balance : <span className="font-bold">US$ {walletBalance.balance}</span>*/}
                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <div className="relative ms-3 flex">
                                        <div className="px-4 flex">
                                            <img src="/images/wallet_icon.png"/>
                                            <div>
                                                <div className="font-bold">$  {walletBalance?.balance || 0}</div>
                                                <div className="text-xs">Your Wallet</div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white text-xl font-bold p-2">
                                            T
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex  rounded-md border border-transparent  text-white px-3 py-2  font-medium leading-4  transition duration-150 ease-in-out hover:text-gray-200 focus:outline-none"
                                                    >
                                                        <div className="flex-col">
                                                            <div className=""><span className='bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text font-bold '>Hi,  {getFirstName(user.name)}</span> <span className="font-bold text-yellow-400">({user.unique_id})</span></div>
                                                            {/*<div className="text-xs"></div>*/}
                                                        </div>
                                                        <svg
                                                            className="-me-0.5 ms-2 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route('dashboard')}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route('member.reset-password')}
                                                >
                                                    Reset Password
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route('member.transaction-password')}
                                                >
                                                    Trans Password
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route('logout')}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {header && (
                    <header className="bg-white shadow bg-[url('/images/dashboard_bg.png')] bg-no-repeat bg-cover min-h-[260px]">
                        <UserHeader user={user} walletBalance={walletBalance} />
                    </header>
                )}
                <main>{children}</main>
            </div>
        </>

    );
}
