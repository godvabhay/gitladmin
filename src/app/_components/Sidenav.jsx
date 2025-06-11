'use client';
import { usePathname } from 'next/navigation';
import Typography from './Typography';
import Link from 'next/link';

export default function Sidenav() {
    const pathname = usePathname();
    const data = [
        { id: '1', text: 'Dashboard', url: '/admin/dashboard', isActive: '' },
        { id: '2', text: 'Blog', url: '/admin/blog', isActive: '' },
        { id: '3', text: 'Case studies', url: '/admin/case-studies', isActive: '' },
        { id: '4', text: 'Add user', url: '/admin/add-user', isActive: '' },
    ];

    return (
        <>
            <div className='Sidenav w-60 h-[calc(100vh-64px)] bg-secondary sticky top-16'>
                <ul className="menu my-2">
                    {data.map((item) => {
                        const isActive = pathname.startsWith(item?.url);
                        return (
                            <li key={item?.id}>
                                <Link className={isActive ?
                                    "active" :
                                    ""
                                } href={item?.url}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <Typography varient='h5' className={isActive ?
                                        "active " :
                                        "text-text"}>{item?.text}</Typography>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}