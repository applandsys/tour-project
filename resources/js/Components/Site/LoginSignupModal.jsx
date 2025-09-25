import React from "react";
import BasicModal from "@/Components/UI/BasicModal.jsx";

const LoginSignupModal = ({setIsLoginOpen}) => {
    return (
        <>
            <BasicModal setIsOpen={setIsLoginOpen}
            >
                <div className=" mx-auto  p-1 ">

                    <div>
                        <div className=" flex items-center justify-center ">
                            <div className="w-full ">

                                <h2 className="text-xl font-semibold text-center text-gray-800">
                                    Login/Signup for Best Prices
                                </h2>

                                <button
                                    className="mt-6 flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-50"
                                >
                                    <img
                                        src="https://www.svgrepo.com/show/355037/google.svg"
                                        alt="Google"
                                        className="w-5 h-5 mr-2"
                                    />
                                    <span className="text-gray-700 font-medium">Continue with Google</span>
                                </button>

                                <div className="flex items-center my-4">
                                    <hr className="flex-grow border-gray-300" />
                                    <span className="px-2 text-gray-500 text-sm">Or Login/Signup With</span>
                                    <hr className="flex-grow border-gray-300" />
                                </div>


                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email or Mobile Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter email or mobile"
                                    value="phenxlab@gmail.com"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />

                                <button
                                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full"
                                >
                                    CONTINUE
                                </button>


                                <div className="mt-4 space-y-2 text-sm text-gray-600">
                                    <label className="flex items-start space-x-2">
                                        <input type="checkbox" className="mt-1 text-blue-600" checked />
                                        <span>
                                          By signing in or creating an account, you agree to MakeMyTrip's
                                          <a href="#" className="text-blue-600 underline">Privacy Policy</a>,
                                          <a href="#" className="text-blue-600 underline">User Agreement</a> and
                                          <a href="#" className="text-blue-600 underline">T&amp;Cs</a>
                                        </span>
                                                                    </label>

                                                                    <label className="flex items-start space-x-2">
                                                                        <input type="checkbox" className="mt-1 text-blue-600" checked />
                                                                        <span>
                                          I hereby allow MakeMyTrip to contact me regarding travel services, that may be of interest to me
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button
                        type="button"
                        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md transition"
                    >
                        Signup
                    </button>
                </div>
            </BasicModal>
        </>

    );
};

export default LoginSignupModal;
