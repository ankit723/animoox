'use client';
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button, InputWithLabel } from "../ui";
import { toast } from "sonner";


export const ProfileTab = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", displayName: "" });
    const [error, setError] = useState("");

    // Set initial form data once session is loaded
    useEffect(() => {
        if (session) {
            setFormData({
                firstName: session?.user?.name?.split(" ")[0] || "",
                lastName: session?.user?.name?.split(" ")[1] || "",
                email: session?.user?.email || "",
                displayName: session?.user?.name || "",
            });
        }
    }, [session]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast.info("functionality in dev")
    };

    return (
        <div className="ml-10 bg-white py-8 px-14 rounded-3xl shadow-md w-full max-w-lg">
            <p className="text-2xl font-medium mb-4">Details</p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="space-y-9">            
                <InputWithLabel
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                <InputWithLabel
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                <InputWithLabel
                    label="Email"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <InputWithLabel
                    label="Display Name"
                    placeholder="Display Name"
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                />
            
                <Button className="w-full" size="lg" type="button" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </div>
        </div>
    );
};
