'use client'

import { useState } from 'react';

export default function AddCardForm() {
    const [cardInfo, setCardInfo] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Card Information Saved:', cardInfo);
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Add new card</h2>
            <p className="text-gray-600 mb-6">
                Add a new card for future purchases and enable a more seamless shopping experience.
                Your card details are secured and encrypted by Stripe.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-1" htmlFor="name">
                        Card information
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={cardInfo.name}
                        onChange={handleChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4 relative">
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 1234 1234 1234"
                        value={cardInfo.cardNumber}
                        onChange={handleChange}
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute top-2 right-2 bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-xs">
                        visa
                    </span>
                </div>
                <div className="flex space-x-4 mb-4">
                    <input
                        type="text"
                        name="expiry"
                        placeholder="MM / YY"
                        value={cardInfo.expiry}
                        onChange={handleChange}
                        className="w-1/2 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={cardInfo.cvv}
                        onChange={handleChange}
                        className="w-1/2 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add a new card
                </button>
            </form>
            <p className="text-blue-500 font-semibold mt-4">
                Your Card Information Successfully Saved
            </p>
        </div>
    );
}
