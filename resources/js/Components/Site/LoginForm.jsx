import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import axios from "axios";
import OtpVerification from "@/Components/Site/OtpVerification .jsx";

const LoginForm = ({setIsLoginOpen}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const [errors, setErrors] = useState({});
    const [saveCookie, setSaveCookie] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(route("login"), formData);
            setIsLoginOpen(false);
            window.location.reload()
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

                        <div>
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                className="mt-1 block w-full"
                                placeholder="Account Login Password"
                                autoComplete="new-password"
                                onChange={(e) => handleChange("password", e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                            <label className="flex items-start space-x-2">
                                <input
                                    type="checkbox"
                                    className="mt-1 text-blue-600"
                                    checked={saveCookie}
                                    onChange={() => setSaveCookie(!saveCookie)}
                                />
                                <span>
                                    Save password
                                </span>
                            </label>
                        </div>

                        <button
                            onClick={submit}
                            type="submit"
                            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full"
                        >
                            CONTINUE
                        </button>


        </>
    );
};

export default LoginForm;
