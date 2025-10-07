import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import axios from "axios";
import OtpVerification from "@/Components/Site/OtpVerification .jsx";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const SignupForm = () => {
    const { url } = usePage();
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const referral = queryParams.get("ref") || "";

    const [agreePrivacy, setAgreePrivacy] = useState(false);
    const [allowContact, setAllowContact] = useState(false);
    const [otpWaiting, setOtpWaiting] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        referral: referral,
        password: "",
        passwordConfirmation: "",
        transPass: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showTransPass, setShowTransPass] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(route("signup.step.one"), formData);
            setOtpWaiting(response?.data?.otp);
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response?.data?.errors);
            } else {
                console.error(error.response?.data || error.message);
            }
        }
    };

    return (
        <>
            {otpWaiting === 0 && (
                <>
                    <div className="bg-gray-100 rounded-md p-4 my-4">
                        Referred By : {referral}
                    </div>
                    <InputError message={errors.referral} className="mt-2" />

                    {/* Name */}
                    <div>
                        <TextInput
                            id="name"
                            name="name"
                            value={formData.name}
                            className="mt-1 block w-full"
                            placeholder="Your Full Name"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* Email */}
                    <div>
                        <TextInput
                            id="email"
                            name="email"
                            value={formData.email}
                            className="mt-1 block w-full"
                            placeholder="Your Email"
                            autoComplete="email"
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* Password with Eye Icon */}
                    <div className="relative">
                        <TextInput
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            className="mt-1 block w-full pr-10"
                            placeholder="Account Login Password"
                            autoComplete="new-password"
                            onChange={(e) => handleChange("password", e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    {/* Transaction Password with Eye Icon */}
                    <div className="relative">
                        <TextInput
                            id="transPass"
                            name="transPass"
                            type={showTransPass ? "text" : "password"}
                            value={formData.transPass}
                            className="mt-1 block w-full pr-10"
                            placeholder="Transaction Password"
                            autoComplete="off"
                            onChange={(e) => handleChange("transPass", e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowTransPass(!showTransPass)}
                            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                        >
                            {showTransPass ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                        <InputError message={errors.transPass} className="mt-2" />
                    </div>

                    {/* Checkboxes */}
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                        <label className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                className="mt-1 text-blue-600"
                                checked={agreePrivacy}
                                onChange={() => setAgreePrivacy(!agreePrivacy)}
                            />
                            <span className="text-xs">
                                By signing in or creating an account, you agree to GlobalTrips24's
                                <a href="#" className="text-blue-600 underline"> Privacy Policy</a>,
                                <a href="#" className="text-blue-600 underline"> User Agreement</a>, and
                                <a href="#" className="text-blue-600 underline"> T&amp;Cs</a>
                            </span>
                        </label>

                        <label className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                className="mt-1 text-blue-600"
                                checked={allowContact}
                                onChange={() => setAllowContact(!allowContact)}
                            />
                            <span className="text-xs">
                                I hereby allow GlobalTrips24 to contact me regarding travel services that may be of interest to me
                            </span>
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        onClick={submit}
                        type="submit"
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full"
                    >
                        CONTINUE
                    </button>
                </>
            )}

            {otpWaiting > 0 && <OtpVerification errors={errors} />}
        </>
    );
};

export default SignupForm;
