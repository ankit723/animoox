import Shell from '@/components/shell'
import React from 'react'

export default function page() {
  return (
      <Shell
            heading="Profile"
          subHeading="Manage your profile, security, payment and notification settings."
            heading2="Profile"
      >
          <div className="flex bg-gray-100 p-8">
              {/* Sidebar */}
              <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-1/3 max-w-xs">
                  <button className="py-3 px-6 text-gray-800 font-medium rounded-lg border hover:bg-gray-100">Profile</button>
                  <button className="py-3 px-6 text-gray-800 font-medium rounded-lg border hover:bg-gray-100">Security</button>
                  <button className="py-3 px-6 text-gray-800 font-medium rounded-lg border hover:bg-gray-100">Payment methods</button>
                  <button className="py-3 px-6 text-gray-800 font-medium rounded-lg border hover:bg-gray-100">Notification</button>
                  <button className="py-3 px-6 bg-blue-600 text-white font-medium rounded-lg">Delete account</button>
              </div>

              {/* Delete Account Confirmation */}
              <div className="ml-10 bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                  <h2 className="text-2xl font-semibold mb-4">Delete account</h2>
                  <p className="text-gray-500 mb-6">
                      Permanently deleting your account and all data associated with it is a manual process performed on our end.
                  </p>
                  <p className="text-gray-500 mb-6">
                      Please contact support with the email address associated with the account you wish to delete for assistance.
                  </p>
                  <button className="py-3 px-6 bg-blue-600 text-white font-medium rounded-lg">Contact support</button>
              </div>
          </div>
          
    </Shell>
  )
}
