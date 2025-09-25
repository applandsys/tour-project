import React from 'react';
import {FaArrowCircleDown} from "react-icons/fa";
import Dropdown from "@/Components/Dropdown.jsx";
const ShortNav = ({user}) => {

    function getFirstName(fullName) {
        if (!fullName) return "";
        return fullName.trim().split(" ")[0];
    }

    return (
        <>
                <div className="">
                    <img src="/images/crown.png" className="h-6"/>
                </div>
                <div className="flex">
                    <div className="bg-gray-100 bg-opacity-50 rounded-full h-6 w-6 mx-2">
                        <img src="/images/wallet_icon.png" className=""/>
                    </div>
                    <div>
                        <div className="text-xs text-white">BDT 3000</div>
                        <div className="text-xs text-gray-300 ">In your wallet</div>
                    </div>
                </div>
                <div className="flex item-center justify-center">
                    <div className="bg-gray-100 bg-opacity-50 rounded-full h-6 w-6 mx-2">
                        <img src="/images/wallet_icon.png" className=""/>
                    </div>
                    <div>
                        <div className="text-xs text-white">My Trips</div>
                        <div className="text-xs text-gray-300">Manage your booking</div>
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
                                                className="inline-flex items-center rounded-md border border-transparent  text-white px-3 py-2 text-sm font-medium leading-4  transition duration-150 ease-in-out hover:text-gray-200 focus:outline-none"
                                            >
                                              Hi,  {getFirstName(user.name)}

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
                                href={route('profile.edit')}
                            >
                                Profile
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


        </>
    );
};

export default ShortNav;
