import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import LoginForm from "@/Components/Site/LoginForm.jsx";
import React from "react";

export default function Login({ status, canResetPassword }) {

    const setIsLoginOpen = ()=>{

    }

    return (
        <GuestLayout>
            <Head title="Log in" />
            <LoginForm setIsLoginOpen={setIsLoginOpen}/>
        </GuestLayout>
    );
}
