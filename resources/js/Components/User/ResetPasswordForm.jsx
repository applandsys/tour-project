import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Eye, EyeOff, Lock } from "lucide-react";

export default function ResetPasswordForm({passType}) {
    const { flash } = usePage().props; // To access Laravel flash messages
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const { data, setData, post, processing, errors, reset } = useForm({
        oldPassword: "",
        newPassword: "",
        newPassword_confirmation: "",
        type:passType
    });

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Reset Password
            </h2>

            {/* Success Message */}
            {flash?.success && (
                <p className="text-green-600 text-sm text-center bg-green-50 py-2 rounded-lg">
                    {flash.success}
                </p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Old Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Old Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                            type={showPassword.old ? "text" : "password"}
                            name="oldPassword"
                            value={data.oldPassword}
                            onChange={(e) => setData("oldPassword", e.target.value)}
                            required
                            className={`w-full pl-10 pr-10 py-2 border ${
                                errors.oldPassword ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                        />
                        <button
                            type="button"
                            onClick={() => togglePassword("old")}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.oldPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>
                    )}
                </div>

                {/* New Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                            type={showPassword.new ? "text" : "password"}
                            name="newPassword"
                            value={data.newPassword}
                            onChange={(e) => setData("newPassword", e.target.value)}
                            required
                            className={`w-full pl-10 pr-10 py-2 border ${
                                errors.newPassword ? "border-red-500" : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                        />
                        <button
                            type="button"
                            onClick={() => togglePassword("new")}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.newPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Transaction Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                        <input
                            type={showPassword.confirm ? "text" : "password"}
                            name="newPassword_confirmation"
                            value={data.newPassword_confirmation}
                            onChange={(e) =>
                                setData("newPassword_confirmation", e.target.value)
                            }
                            required
                            className={`w-full pl-10 pr-10 py-2 border ${
                                errors.newPassword_confirmation
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                        />
                        <button
                            type="button"
                            onClick={() => togglePassword("confirm")}
                            className="absolute right-3 top-3 text-gray-500"
                        >
                            {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.newPassword_confirmation && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.newPassword_confirmation}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all disabled:opacity-50"
                >
                    {processing ? "Updating..." : "Update Password"}
                </button>
            </form>
        </div>
    );
}
