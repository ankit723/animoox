'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button, InputWithLabel, PasswordInput } from "@/components/ui";
import { GoogleIcon } from "@/assets/icons";

export const SignUpForm = (): JSX.Element => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)

    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      await signIn("credentials", { email: formData.email, password: formData.password });
      // router.push("/"); // Redirect user upon successful signup
    } else {
      // Handle error, display message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2.5xl p-12 space-y-9 text-center">
      <h3>Create new account</h3>
      <InputWithLabel
        label="Full Name"
        placeholder="Adam Nas"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <InputWithLabel
        label="Email"
        placeholder="designer@example.com"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <PasswordInput
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <Button className="w-full" size="lg" type="submit">
        Sign up
      </Button>
      <Button className="w-full !bg-black space-x-4" size="lg" onClick={() => signIn("google")}>
        <GoogleIcon height={24} width={24} />
        <span>Sign up with Google</span>
      </Button>
      <p className="text-sm text-secondary-text">
        Already have an account?{" "}
        <Link className="text-brand" href="/login">
          Log in
        </Link>
      </p>
    </form>
  );
};
