import React, { useState } from "react";
import InputError from "@/Components/InputError.jsx";
import TextInput from "@/Components/TextInput.jsx";
import axios from "axios";

const OtpVerification = ({setIsLoginOpen}) => {
    const [otp, setOtp] = useState("");
    const [errors, setErrors] = useState({});

    const submit = async (e) => {
        e.preventDefault();
        try {
             await axios.post(route("signup.otp.verify"), {otp});
            window.location.reload();
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response?.data?.errors);
            } else {
                console.error(error.response?.data || error.message);
            }
        }
    };

    return (
        <div className="flex  items-center justify-center bg-white">
            <div className="w-full max-w-md px-6 py-4">
                <h2 className="text-2xl font-bold text-gray-800">Enter OTP</h2>
                <p className="text-gray-500 text-sm mb-6">
                    OTP has been sent to EMAIL
                </p>
                <div className="flex items-center border rounded-lg overflow-hidden mb-6">
                    <TextInput
                        id="otp"
                        name="otp"
                        value={otp}
                        className="mt-1 block w-full"
                        placeholder="Code Number"
                        autoComplete="otp"
                        isFocused={true}
                        onChange={(e) => setOtp( e.target.value)}
                        required
                    />

                </div>

                <button      onClick={submit}  className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                    VERIFY & CREATE ACCOUNT
                </button>
            </div>

            <InputError message={errors.otp} className="mt-2" />
        </div>
    );
};

export default OtpVerification;
