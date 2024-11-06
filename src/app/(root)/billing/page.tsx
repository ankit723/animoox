export default function Billing() {
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-lg w-full">
                <h2 className="text-3xl font-semibold text-center mb-1">Billing</h2>
                <p className="text-gray-500 text-center mb-8">Billing information</p>

                <div className="border border-blue-300 rounded-lg p-6 space-y-4">
                    <div className="border border-blue-300 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">My Subscription</h3>
                        <div className="flex items-center">
                            <span className="text-gray-700">My Current Plan</span>
                            <span className="ml-auto text-blue-600 font-semibold">Premium</span>
                        </div>
                    </div>

                    <div className="border border-blue-300 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Upgrade</h3>
                        <p className="text-gray-600 mb-4">Want to upgrade your current plan?</p>
                        <button
                            className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
