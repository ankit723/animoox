'use client'

import { useState } from 'react';
// import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default function UpdatePasswordForm() {
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmNewPassword: false,
    });

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prevPasswords) => ({
            ...prevPasswords,
            [name]: value,
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevShowPassword) => ({
            ...prevShowPassword,
            [field]: !prevShowPassword[field],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password update logic here
        console.log('Password updated:', passwords);
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Update your password</h2>
            <p className="text-gray-600 mb-6">
                You can update your password below. If you forgot your current password, please contact support for assistance.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 relative">
                    <input
                        type={showPassword.currentPassword ? 'text' : 'password'}
                        name="currentPassword"
                        placeholder="Current password"
                        value={passwords.currentPassword}
                        onChange={handlePasswordChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility('currentPassword')}
                        className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                    >
                        {/* {showPassword.currentPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />} */}
                    </button>
                </div>
                <div className="mb-4 relative">
                    <input
                        type={showPassword.newPassword ? 'text' : 'password'}
                        name="newPassword"
                        placeholder="New password"
                        value={passwords.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility('newPassword')}
                        className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                    >
                        {/* {showPassword.newPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />} */}
                    </button>
                </div>
                <div className="mb-6 relative">
                    <input
                        type={showPassword.confirmNewPassword ? 'text' : 'password'}
                        name="confirmNewPassword"
                        placeholder="Confirm new password"
                        value={passwords.confirmNewPassword}
                        onChange={handlePasswordChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility('confirmNewPassword')}
                        className="absolute top-2 right-2 text-gray-500 focus:outline-none"
                    >
                        {/* {showPassword.confirmNewPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />} */}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Save changes
                </button>
            </form>
        </div>
    );
}
