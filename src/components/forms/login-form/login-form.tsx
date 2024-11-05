'use client'
import Link from "next/link";
import { Button, InputWithLabel, PasswordInput } from "@/components/ui";
import { GoogleIcon } from "@/assets/icons";
import { signIn } from "next-auth/react";
import { useState } from "react";

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Sign in with credentials
    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      // Handle successful login, e.g., redirect or show a success message
      // You can redirect to the home page or another page after login
      window.location.href = "/";
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  return (
    <form className="bg-white rounded-2.5xl p-12 space-y-9 text-center" onSubmit={handleLogin}>
      <h3>Log in to your account</h3>

      {error && <p className="text-red-500">{error}</p>}

      <InputWithLabel
        label="Email"
        placeholder="designer@example.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex flex-col gap-2 text-end">
        <PasswordInput
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/forgot-password" className="text-sm text-secondary-text">
          Forgot your password?
        </Link>
      </div>

      <Button type="submit" className="w-full">Log in</Button>
      <Button type="button" className="w-full !bg-black space-x-4" onClick={handleGoogleSignIn}>
        <GoogleIcon height={24} width={24} />
        <span>Log in with Google</span>
      </Button>

      <p className="text-sm text-secondary-text">
        Don&apos;t have an account?{" "}
        <Link className="text-brand" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </form>
  );
};
