'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const tabs = [
    { name: 'Profile', href: '/profile' },
    { name: 'Security', href: '/security' },
    { name: 'Payment Methods', href: '/payment-methods' },
    { name: 'Notifications', href: '/notifications' },
    { name: 'Delete Account', href: '/delete' },
];

export default function TabNavigation() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col space-x-4 bg-white p-4 rounded-lg shadow-md">
            {tabs.map((tab) => (
                <Link key={tab.name} href={tab.href}>
                    <span
                        className={`py-2 px-4 rounded-lg font-medium ${pathname === tab.href
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-800 hover:bg-gray-100'
                            }`}
                    >
                        {tab.name}
                    </span>
                </Link>
            ))}
        </div>
    );
}
