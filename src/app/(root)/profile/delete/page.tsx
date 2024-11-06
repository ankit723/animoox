'use client'

import { useState } from 'react';

export default function DetailsForm() {
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        displayName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Details saved:', details);
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={details.firstName}
                        onChange={handleChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={details.lastName}
                        onChange={handleChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={details.email}
                        onChange={handleChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        name="displayName"
                        placeholder="Display name"
                        value={details.displayName}
                        onChange={handleChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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
