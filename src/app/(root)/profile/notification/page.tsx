'use client'

import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

export default function NotificationPreferences() {
    const [notifications, setNotifications] = useState({
        newProductReleases: true,
        platformUpdates: false,
    });

    const handleToggle = (event) => {
        const { name } = event.target;
        setNotifications((prevNotifications) => ({
            ...prevNotifications,
            [name]: !prevNotifications[name],
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Preferences saved:', notifications);
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Email notifications</h2>
            <p className="text-gray-600 mb-6">
                Trigger email notifications based on the following events:
            </p>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700">New product releases</span>
                    <Switch
                        name="newProductReleases"
                        checked={notifications.newProductReleases}
                        onCheckedChange={handleToggle}
                        className="bg-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-700">Platform news and updates</span>
                    <Switch
                        name="platformUpdates"
                        checked={notifications.platformUpdates}
                        onCheckedChange={handleToggle}
                        className="bg-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Save preferences
                </button>
            </form>
        </div>
    );
}
