'use client';
import Header from '../_components/Header';
import Sidenav from '../_components/Sidenav';
import { useAuth } from '../lib/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Layout({ children }) {
    const { isAuthenticated, login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        console.log(router)
        if (!isAuthenticated) {
            router.push('/');
        }
    }, [isAuthenticated, login]);
    return (<>
        <Header />
        <div className='flex flex-row '>
            <Sidenav />
            <div className='flex-grow px-5 mt-4 h-[calc(100vh-82px)] overflow-auto'>
                {!isAuthenticated && <h1>loading</h1>}
                {isAuthenticated && [children]}
            </div>
        </div>
    </>);
}

export default Layout;