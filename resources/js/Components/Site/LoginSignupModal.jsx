import React, { useState } from "react";
import BasicModal from "@/Components/UI/BasicModal.jsx";
import SignupForm from "@/Components/Site/SignupForm.jsx";
import LoginForm from "@/Components/Site/LoginForm.jsx";

const LoginSignupModal = ({ setIsLoginOpen, referral }) => {

    const [activeForm,setActiveForm] = useState('signup');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Example: You can send this data to a Laravel Inertia route

    };

    return (
        <BasicModal setIsOpen={setIsLoginOpen}>
            <form onSubmit={handleSubmit}>
                <div className="mx-auto p-4 max-w-md">
                    <h2 className="text-xl font-semibold text-center text-gray-800">
                        Login/Signup for Best Prices
                    </h2>

                    <button
                        type="button"
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

                        <div className="flex gap-4">
                            <div className={`p-2 rounded-md ${activeForm==='signup' ? 'text-blue-600 font-bold bg-green-400  border-l border-gray-500': 'bg-gray-200'}`} onClick={()=>setActiveForm('signup')}> Signup </div>

                            <div className={`p-2 rounded-md ${activeForm==='login' ? 'text-blue-600 font-bold bg-green-400  border-l border-gray-500': 'bg-gray-200'}`} onClick={()=>setActiveForm('login')}> Login </div>
                        </div>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div>
                        {
                            activeForm==='signup' ?
                                (<SignupForm setIsLoginOpen={setIsLoginOpen}  />):(<><LoginForm setIsLoginOpen={setIsLoginOpen}/></>)
                        }
                    </div>



                    <button
                        type="button"
                        onClick={() => setIsLoginOpen(false)}
                        className="mt-2 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md transition"
                    >
                        Close
                    </button>
                </div>
            </form>
        </BasicModal>
    );
};

export default LoginSignupModal;
