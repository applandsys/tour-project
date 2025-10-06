import React, {useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import ErrorAlert from "@/Components/UI/ErrorAlert.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {InputLabel} from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import axios from "axios";
// import route from "ziggy-js";
const BuyPackageOption = ({user,packages}) => {

    const { walletBalance } = usePage().props;

    const [selected, setSelected] = useState("");
    const [gtUsername,setGtUsername] = useState("");
    const [gtError,setGtError] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        userId: '',
        transactionPassword:'',
        packageId: '',
        amount: ''
    });


    const handleChangePackage =  (packageId) =>{
        setSelected(packageId);
        setData('packageId',packageId);
    }

    const handleChangeUser = async (gtUser) =>{
        setData('userId',gtUser);
        if(gtUser.length >= 7){
            try {
                const response = await axios.post(route("member.gtuser"), {
                    gtUser: gtUser,
                });
                console.log(response.data);

                setGtUsername(response.data.user.name);
                setGtError(false);
            } catch (error) {
                setGtError(true);
                console.error(error.response?.data || error.message);
            }
        }
    }
    const submit = (e) => {
        e.preventDefault();

        post(route('member.package-buy-process'));
    };

    return (
        <div className="mx-auto p-10">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Buy Package</h2>
            </div>

            <div>
                <div>
                    <select
                        id="options"
                        value={selected}
                        onChange={(e) => handleChangePackage(e.target.value)}
                        className="block w-64 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="" disabled>
                            -- Select a Package --
                        </option>
                        {packages.map((item) => (
                            <option
                                value={item.id}
                                key={item.id}
                                className="text-blue-500 text-sm" // ✅ Tailwind works in modern browsers
                            >
                                {item.name} ($ {item.amount})
                            </option>
                        ))}
                    </select>

                    {selected && (
                        <div className="mt-4 text-gray-700">
                           <div>
                               You selected: <span className=" font-bold text-blue-500">{packages.filter(item=>item.id===parseInt(selected))[0].name}</span>
                           </div>
                            {/*<div className="">*/}
                            {/*    Price: <span className="font-bold">BDT. {packages.filter(item=>item.id===parseInt(selected))[0].amount * 120}</span>*/}
                            {/*</div>*/}
                        </div>
                    )}
                </div>
            </div>

            {
                selected  &&
                (
                    <>
                    <form onSubmit={submit}>
                        <input type="hidden" name="packageId" value={selected}/>

                        <div className=" border border-gray-300 p-2 rounded-md  bg-blue-100 mt-4">
                            <div>
                                 Available Balance: <span className="font-bold "> BDT. {walletBalance.balance} </span>
                            </div>

                        </div>

                        <div className="mt-4">
                            <InputLabel>GT User Id</InputLabel>
                            <TextInput
                                required
                                id="userId"
                                type="text"
                                name="userId"
                                value={data.userId}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => handleChangeUser(e.target.value)}
                            />

                            {
                               !gtError && gtUsername ? (
                                    <div className="my-4">
                                        <div className="my-4 bg-gray-100 p-2 rounded-md ">
                                            <div>{gtUsername} </div>
                                        </div>
                                        <div className="flex flex-end">
                                            <div className="bg-green-200 p-1 rounded-lg w-24 text-center">Confirm </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        {
                                            gtError && (
                                                <div className="my-4">
                                                    <div className="my-4 bg-gray-100 p-2 rounded-md ">
                                                        <div> No Name Found </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="bg-red-200 p-1 rounded-lg w-24 text-center"> Wrong </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }

                            <InputLabel>Amount ($)</InputLabel>
                            <TextInput
                                required
                                id="amount"
                                type="text"
                                name="amount"
                                value={data.amount}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('amount', e.target.value)}
                            />


                            <InputLabel>Transaction Password</InputLabel>
                            <TextInput
                                required
                                id="transactionPassword"
                                type="text"
                                name="transactionPassword"
                                value={data.transactionPassword}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) => setData('transactionPassword', e.target.value)}
                            />
                        </div>

                        {/* ✅ Validation Errors */}
                        {Object.keys(errors).length > 0 && (
                            <div className="mb-4 p-3 ">
                                <ul>
                                    {Object.values(errors).map((error, i) => (
                                        <li key={i}><ErrorAlert>{error}</ErrorAlert></li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {
                            parseInt(walletBalance.balance) <  packages.filter(item=>item.id===parseInt(selected))[0].amount ? (
                                <div className="mt-8">
                                    <ErrorAlert>You dont have sufficient balance</ErrorAlert>
                                </div>
                            ): (
                            <div className="flex item-center justify-center mt-8">
                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                       Submit
                                    </PrimaryButton>
                                </div>
                            </div>
                            )
                        }
                    </form>
                    </>
                )
            }
        </div>
    );
};

export default BuyPackageOption;
