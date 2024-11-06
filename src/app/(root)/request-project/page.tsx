'use client'

import { useState } from 'react';

export default function InquiryForm() {
    const [selectedProject, setSelectedProject] = useState('Illustration');
    const [selectedBudget, setSelectedBudget] = useState('2000-5000 USD');

    const handleProjectChange = (project) => {
        setSelectedProject(project);
    };

    const handleBudgetChange = (budget) => {
        setSelectedBudget(budget);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-50 p-6 space-x-4 max-w-6xl mx-auto">
            {/* Contact Information Section */}
            <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3 space-y-4 text-center md:text-left">
                <img
                    src="/images/person-dog-walking.svg" // Replace with actual image path
                    alt="Illustration"
                    className="w-3/4 mx-auto mb-4"
                />
                <p>Whatsapp: +8801723559106</p>
                <p>Dhaka, Bangladesh</p>
                <p>animoxostudio@gmail.com</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    {/* Social Icons */}
                    <span className="text-blue-500">[FB Icon]</span>
                    <span className="text-blue-500">[IG Icon]</span>
                    <span className="text-blue-500">[Behance Icon]</span>
                </div>
            </div>

            {/* Project Inquiry Form Section */}
            <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-2/3">
                <h2 className="text-3xl font-semibold mb-2">Let's build an awesome project together.</h2>
                <p className="text-gray-600 mb-8">
                    Describe your project and leave us your contact info, we’ll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Type */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">What is your project about?</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Lottie', 'Rive', 'Illustration', 'Animation', 'Web Design', 'UI Design', 'Branding', 'Explainer Video'].map((project) => (
                                <button
                                    key={project}
                                    type="button"
                                    onClick={() => handleProjectChange(project)}
                                    className={`px-4 py-2 rounded-full border ${selectedProject === project ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'}`}
                                >
                                    {project}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Budget Estimation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Budget estimation (USD)</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Under 500 USD', '500-1000 USD', '1000-2000 USD', '2000-5000 USD', '5000+ USD'].map((budget) => (
                                <button
                                    key={budget}
                                    type="button"
                                    onClick={() => handleBudgetChange(budget)}
                                    className={`px-4 py-2 rounded-full border ${selectedBudget === budget ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500'}`}
                                >
                                    {budget}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="flex flex-wrap gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full md:w-1/2 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full md:w-1/2 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Message Field */}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    {/* File Attachment */}
                    <div className="flex items-center space-x-2">
                        <label className="text-blue-500 cursor-pointer">
                            <input type="file" className="hidden" />
                            <span>📎 Attach a file</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Request
                    </button>

                    {/* Privacy Notice */}
                    <p className="text-xs text-gray-500 mt-4">
                        This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a> apply.
                    </p>
                </form>
            </div>
        </div>
    );
}
