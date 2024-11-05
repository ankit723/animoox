"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { Eye, EyeOffIcon } from "lucide-react";
import { GoogleIcon } from "../icons/google-icon";
import { Social } from "./social";

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use with different provider!"
        : "";

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            login(values, callbackUrl)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                    }

                    if (data?.twoFactor) {
                        setShowTwoFactor(true);
                    }
                })
                .catch(() => setError("Something went wrong"));
        });
    };

    return (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-white rounded-[20px] p-12 space-y-9 text-center"
                >
                    <h3 className="text-3xl font-medium">Log in to your account</h3>
                    <div className="space-y-9">
                        {showTwoFactor && (
                            <FormField
                                control={form.control}
                                name="code"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel  className=" bg-white text-neutral-500 text-md absolute left-4 -top-3 px-1">Two Factor Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="123456"
                                                className="w-full px-4 py-7 placeholder-neutral-300 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"

                                            />
                                        </FormControl>
                                        <FormMessage className="w-full text-left" />
                                    </FormItem>
                                )}
                            />
                        )}
                        {!showTwoFactor && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormLabel className=" bg-white text-neutral-500 text-md absolute left-4 -top-3 px-1">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="john.doe@example.com"
                                                    type="email"
                                                    className="w-full px-4 py-7 placeholder-neutral-300 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"
                                                />
                                            </FormControl>
                                            <FormMessage className="w-full text-left"/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="relative">
                                            <FormLabel  className=" bg-white text-neutral-500 text-md absolute left-4 -top-3 px-1">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="password"
                                                    type='password'
                                                    className="w-full px-4 py-7 placeholder-neutral-300 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"
                                                />
                                            </FormControl>
                                            <FormMessage className="w-full text-left" />
                                            <Link href="/auth/reset" className="w-full font-semibold text-neutral-500 flex justify-end">
                                            Forgot your password?
                                            </Link>
                                            
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                    </div>
                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full bg-brand text-lg py-6 font-bold hover:bg-blue-800"
                    >
                        {showTwoFactor ? "Confirm" : "Log in"}
                    </Button>
                    
                    <div>
                        <Social title="Log in with Google" />
                    </div>

                    <p className=" text-neutral-500 font-medium">
                        Don&apos;t have an account?{" "}
                        <Link className="text-brand" href="/auth/sign-up">
                        Sign Up
                        </Link>
                    </p>
                </form>
            </Form>
    );
};
