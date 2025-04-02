
'use client';
import Image from "next/image";
import { useEffect } from "react";
import Typography from "../_components/Typography";
import { useAuth } from "../lib/useAuth";
import { useRouter } from 'next/navigation';

function Login() {
    const router = useRouter();
    const { isAuthenticated, login } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/admin/dashboard');
        }
    }, [])
    return (
        <>
            <div className="navbar bg-base-200">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><Image src={"/godrejLogoNew.svg"} alt="logo" width={70} height={70}></Image></a>
                </div>
                <div className="flex-none mr-4">
                    infotech
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary h-screen flex justify-center"><Image src={'/godrej-infotech-logo-light.svg'} alt="logo-light" width={300} height={300}></Image></div>
                <div className="flex flex-col justify-center  items-center h-screen">
                    <Typography varient="h1" className={'text-text mb-10 font-semibold'}>Godrej Infotech Admin</Typography>
                    <button className="w-64 bg-primary p-4 rounded-xl" onClick={login}><Typography varient="span" className={'text-white'}>Login</Typography></button>
                </div>
            </div>
        </>
    )
}


export default Login;