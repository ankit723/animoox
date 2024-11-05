"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";
import { Social } from "./social";
import Link from "next/link";

export const SignUpForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        console.log(values)

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
    };

    return (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-white rounded-[20px] p-12 space-y-9 text-center"
                >
                    <h3 className="text-3xl font-medium">Create new account</h3>
                    <div className="space-y-9">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel  className=" bg-white text-neutral-500 text-md absolute left-4 -top-3 px-1"> Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-7 placeholder-neutral-300 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"
                                        />
                                    </FormControl>
                                    <FormMessage className="w-full text-left" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel  className=" bg-white text-neutral-500 text-md absolute left-4 -top-3 px-1">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                            className="w-full px-4 py-7 placeholder-neutral-300 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"
                                        />
                                    </FormControl>
                                    <FormMessage className="w-full text-left" />
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
                                            type="password"
                                            className="w-full px-4 py-7 placeholder-neutral-300 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"
                                        />
                                    </FormControl>
                                    <FormMessage className="w-full text-left" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full bg-brand text-lg py-6 font-bold hover:bg-blue-800"
                    >
                        Sign up
                    </Button>
                    <Social title={"Sign up with Google"} />
                    <p className=" text-neutral-500 font-medium">
                        Already have an account?{" "}
                        <Link className="text-brand" href="/auth/login">
                        Log in
                        </Link>
                    </p>
                </form>
            </Form>
    );
};
