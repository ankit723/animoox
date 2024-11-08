'use client'
import { useSession } from "next-auth/react"

export const DeleteAccountTab=()=>{
    const {data:session}=useSession()
    return(
        <div className="ml-10 bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Details</h2>
            <p className="text-gray-500 mb-6">
                Permanently deleting your account and all data associated with it is a manual process performed on our end.
            </p>
            <p className="text-gray-500 mb-6">
                Please contact support with the email address associated with the account you wish to delete for assistance.
            </p>
            <button className="py-3 px-6 bg-blue-600 text-white font-medium rounded-lg">Contact support</button>
        </div>
    )
}