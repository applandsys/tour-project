import React from 'react';
import {FaArrowCircleDown} from "react-icons/fa";
const ShortNav = ({user}) => {
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
                    <div className=" rounded-full h-6 w-6 ">
                        <div
                            className=" w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold p-1">
                            T
                        </div>
                    </div>
                    <div className="flex item-center justify-center mt-1 text-white">
                        <div className="px-1">{user.name}</div> <FaArrowCircleDown className="mt-1"/>
                    </div>
                </div>


        </>
    );
};

export default ShortNav;
