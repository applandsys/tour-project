import React, { useState } from "react";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import axios from "axios";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import {Link} from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox.jsx";

const LoginForm = ({ setIsLoginOpen }) => {

    const [formData, setFormData] = useState({
        login: "",
        password: "",
        remember: false,
    });

    const [errors, setErrors] = useState({});
    const [saveCookie, setSaveCookie] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(route("login"), formData);
            setIsLoginOpen(false);
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
        <>
            {/* Email Field */}
            <div>
                <TextInput
                    id="login"
                    name="login"
                    value={formData.email}
                    className="mt-1 block w-full"
                    placeholder="Email or User Id"
                    autoComplete="login"
                    onChange={(e) => handleChange("login", e.target.value)}
                    required
                />
                <InputError message={errors.email} className="mt-2" />
            </div>

            {/* Password Field with Eye Icon */}
            <div className="relative">
                <TextInput
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    className="mt-1 block w-full pr-10"
                    placeholder="Account Login Password"
                    autoComplete="current-password"
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

            {/* Save Password Checkbox */}
            <div className="flex justify-between mt-4 space-y-2 text-sm text-gray-600">
                <div className=" ">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={formData.remember}
                            onChange={(e) =>
                                setFormData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>
                <div>
                    <label className="flex items-start space-x-2">
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Reset your password?
                        </Link>
                    </label>
                </div>
            </div>


            {/* Submit Button */}
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
