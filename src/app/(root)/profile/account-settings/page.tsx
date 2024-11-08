'use client'
import { ReactHTMLElement, useState } from 'react'
import { Button } from '@/components/ui'
import React from 'react'
import { ProfileTab } from '@/components/account-settings/profile-tab'
import { SecurityTab } from '@/components/account-settings/security-tab'
import { PaymentMethodsTab } from '@/components/account-settings/payment-methods-tab'
import { NotificationTab } from '@/components/account-settings/notification-tab'
import { DeleteAccountTab } from '@/components/account-settings/delete-account-tab'

export default function Page() {
    const [selectedTab, setSelectedTab] = useState("profile")

    // Mapping of tab names to components
    const tabs:any= {
        profile: <ProfileTab />,
        security: <SecurityTab />,
        payment: <PaymentMethodsTab />,
        notification: <NotificationTab />,
        deleteAccount: <DeleteAccountTab />,
    }

    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <h2>Account</h2>
            <p className='text-secondary-text text-md font-extralight my-2'>
                Manage your profile, security, payment and notification settings.
            </p>

            <div className="flex bg-gray-100 p-8 my-10">
                <div className="flex flex-col space-y-4 bg-white p-6 rounded-3xl shadow-md w-1/3 max-w-xs">
                    <Button 
                        onClick={() => setSelectedTab("profile")} 
                        className={`py-3 px-6 text-brand font-extralight rounded-full border-brand 
                            ${selectedTab === "profile" ? "bg-brand text-white" : "hover:bg-brand hover:text-white"}`}
                        variant={"ghost"}
                    >
                        Profile
                    </Button>
                    <Button 
                        onClick={() => setSelectedTab("security")} 
                        className={`py-3 px-6 text-brand font-extralight rounded-full border-brand 
                            ${selectedTab === "security" ? "bg-brand text-white" : "hover:bg-brand hover:text-white"}`}
                        variant={"ghost"}
                    >
                        Security
                    </Button>
                    <Button 
                        onClick={() => setSelectedTab("payment")} 
                        className={`py-3 px-6 text-brand font-extralight rounded-full border-brand 
                            ${selectedTab === "payment" ? "bg-brand text-white" : "hover:bg-brand hover:text-white"}`}
                        variant={"ghost"}
                    >
                        Payment Methods
                    </Button>
                    <Button 
                        onClick={() => setSelectedTab("notification")} 
                        className={`py-3 px-6 text-brand font-extralight rounded-full border-brand 
                            ${selectedTab === "notification" ? "bg-brand text-white" : "hover:bg-brand hover:text-white"}`}
                        variant={"ghost"}
                    >
                        Notification
                    </Button>
                    <Button 
                        onClick={() => setSelectedTab("deleteAccount")} 
                        className={`py-3 px-6 text-brand font-extralight rounded-full border-brand 
                            ${selectedTab === "deleteAccount" ? "bg-brand text-white" : "hover:bg-brand hover:text-white"}`}
                        variant={"ghost"}
                    >
                        Delete Account
                    </Button>
                </div>

                {/* Render the component corresponding to the selected tab */}
                <div className="flex-1 ml-6">
                    {tabs[selectedTab] || <ProfileTab />} {/* Default to ProfileTab if none selected */}
                </div>
            </div>
        </section>
    )
}
