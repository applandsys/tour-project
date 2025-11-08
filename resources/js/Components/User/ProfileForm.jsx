import InputLabel from '@/Components/InputLabel.jsx';
import CountryList from '@/Components/Site/CountryList.jsx';
import TextInput from '@/Components/TextInput.jsx';
import ReferralLink from '@/Components/User/ReferralLink.jsx';
import { useForm, usePage } from '@inertiajs/react'; // ← Add usePage here
import { route } from 'ziggy-js';

const ProfileForm = ({ user, userProfile }) => {

    const { props } = usePage();
    const { success } = props.flash || {};
    const { errors } = props;


    const { data, setData, post } = useForm({
        name: user.name,
        address: userProfile?.address,
        gender: userProfile?.gender,
        date_of_birth: userProfile?.date_of_birth,
        photo: userProfile?.photo,
        doc: userProfile?.doc,
        doc_type: userProfile?.doc_type,
        country: userProfile?.country,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('member.update-profile'), {
            forceFormData: true,
        });
    };

    return (
        <div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow">

            {success && (
                <div className="rounded-md bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4">
                    {success}
                </div>
            )}

            {Object.keys(errors).length > 0 && (
                <div className="rounded-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4">
                    Please fix the errors and try again.
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                <div className="mt-4">
                    {' '}
                    <ReferralLink user={user} />
                </div>
                {/* Header */}

                {/*{JSON.stringify(user)}*/}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">My Profile</h2>
                    <button className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium">
                        Update
                    </button>
                </div>
                {/* Profile Completion Banner */}
                <div className="mb-6 flex items-center justify-between rounded-md border border-gray-200 bg-gradient-to-r from-pink-100 via-yellow-100 to-yellow-50 p-4">
                    <div className="flex items-center space-x-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-300 text-sm font-bold text-gray-600">
                            30%
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">
                                Complete your profile
                            </p>
                            <p className="text-sm text-gray-600">
                                Share your mobile number to receive booking
                                updates and other critical information.
                            </p>
                        </div>
                    </div>
                    {/*<button className="text-blue-600 font-medium text-sm">*/}
                    {/*    Upload your Photo*/}
                    {/*</button>*/}
                </div>

                {/* General Information */}
                <h3 className="mb-4 text-lg font-semibold">
                    General Information
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <InputLabel htmlFor="name">Your Full Name</InputLabel>
                        <TextInput
                            required
                            placeholder="Enter Your Full Name"
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Your Gender</label>
                        <select
                            name="gender"
                            value={data.gender || ''}
                            onChange={(e) => setData('gender', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        >
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <InputLabel htmlFor="address">Address</InputLabel>
                        <textarea
                            id="address"
                            name="address"
                            rows="4"
                            value={data.address || ''}
                            onChange={(e) => setData('address', e.target.value)}
                            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Write your Address"
                        ></textarea>
                    </div>

                    <div>
                        <label>Your Nationality</label>
                        <select
                            name="country"
                            value={data.country || ''}
                            onChange={(e) => setData('country', e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        >
                            <option value="">Nationality</option>
                            <CountryList />
                        </select>
                    </div>

                    <div>
                        <InputLabel htmlFor="name">
                            Your Date of Birth
                        </InputLabel>
                        <TextInput
                            required
                            placeholder="Enter Your Date of Birth"
                            id="date_of_birth"
                            type="date"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData('date_of_birth', e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="photo">
                            Your Profile Photo
                        </InputLabel>
                        <TextInput
                            required
                            id="photo"
                            type="file"
                            name="photo"
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData('photo', e.target.files[0])
                            }
                        />
                    </div>

                    <div>
                        <label>Type of Document</label>
                        <select
                            name="doc_type"
                            value={data.doc_type || ''}
                            onChange={(e) =>
                                setData('doc_type', e.target.value)
                            }
                            className="w-full rounded-md border border-gray-300 px-3 py-2"
                        >
                            <option value="">Select Document Type</option>
                            <option value="Passport">Passport</option>
                            <option value="Driving License">
                                Driving License
                            </option>
                            <option value="National ID">National ID</option>
                        </select>
                    </div>

                    <div>
                        <InputLabel htmlFor="photo">
                            Verification Document
                        </InputLabel>
                        <TextInput
                            required
                            id="doc"
                            type="file"
                            className="mt-1 block w-full"
                            onChange={(e) => setData('doc', e.target.files[0])}
                        />
                    </div>

                    <div>
                        <span>.</span>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-green-400 p-2"
                        >
                            {' '}
                            Update{' '}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
