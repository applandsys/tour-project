import React from 'react';
import {FaArrowCircleDown} from "react-icons/fa";
import Dropdown from "@/Components/Dropdown.jsx";
import {usePage} from "@inertiajs/react";
const ShortNav = ({user}) => {

    const { walletBalance } = usePage().props;

    function getFirstName(fullName) {
        if (!fullName) return "";
        return fullName.trim().split(" ")[0];
    }

    return (
        <div className="flex">
                <div className="">
                    <img src="/images/crown.png" className="h-8"/>
                </div>
                <div className="flex text-[#FFD700]">
                    <div className="bg-gray-100 bg-opacity-50 rounded-full h-8 w-8 mx-2">
                        <img src="/images/wallet_icon.png" className=""/>
                    </div>
                    <div>
                        <div className="text-xs text-[#FFD700] font-bold">$ {walletBalance?.balance || 0}</div>
                        <div className="text-xs bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-600 text-transparent bg-clip-text ">Wallet Balance</div>
                    </div>
                </div>
                <div className="flex item-center justify-center">
                    <div className="bg-gray-100 bg-opacity-50 rounded-full h-8 w-8 mx-2">
                        <img src="/images/wallet_icon.png" className=""/>
                    </div>
                    <div>
                        <div className="text-xs text-[#FFD700] font-bold">$0000</div>
                        <div className="text-xs bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-600 text-transparent bg-clip-text">My Tour Package</div>
                    </div>
                </div>
                <div className="flex item-center justify-center">
                    {/*<div className=" rounded-full h-6 w-6 ">*/}
                    {/*    <div*/}
                    {/*        className=" w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold p-1">*/}
                    {/*        T*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="flex item-center justify-center mt-1 text-white">*/}
                    {/*    <div className="px-1">Hi, {user.name}</div> <FaArrowCircleDown className="mt-1"/>*/}
                    {/*</div>*/}
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
                                href={route('password.request')}
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
    );
};

export default ShortNav;
