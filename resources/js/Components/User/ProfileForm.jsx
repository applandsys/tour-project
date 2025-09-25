import React from "react";

const ProfileForm = ({user}) => {
    return (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow">
            {/* Header */}

            {/*{JSON.stringify(user)}*/}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">My Profile</h2>
                <button className="px-4 py-2 bg-gray-300 rounded-md text-sm font-medium">
                    SAVE
                </button>
            </div>

            {/* Profile Completion Banner */}

            <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 via-yellow-100 to-yellow-50 border border-gray-200 rounded-md p-4 mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full border-4 border-gray-300 flex items-center justify-center text-sm font-bold text-gray-600">
                        30%
                    </div>
                    <div>
                        <p className="text-gray-800 font-medium">Complete your profile</p>
                        <p className="text-gray-600 text-sm">
                            Share your mobile number to receive booking updates and other
                            critical information.
                        </p>
                    </div>
                </div>
                <button className="text-blue-600 font-medium text-sm">
                    Add Mobile Number
                </button>
            </div>

            {/* General Information */}
            <h3 className="text-lg font-semibold mb-4">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="First & Middle Name"
                    defaultValue={user.name}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />


                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Gender</option>
                </select>
                <input
                    type="date"
                    placeholder="Date of Birth"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Nationality</option>
                </select>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Marital Status</option>
                </select>

                <input
                    type="date"
                    placeholder="Anniversary"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="City of Residence"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default ProfileForm;
