"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { ResetSchema } from "@/schemas";
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
import { reset } from "@/actions/reset";
import Link from "next/link";
import ConfirmationMessageComponent from "./confirmation-message-component";
import { ChevronLeft } from "lucide-react";

export const ResetForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [mailSent, setMailSent] = useState<boolean>(false);

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            reset(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);
                        setMailSent(true)
                    }
                });
        });
    };

    return (
           <>
           {
            mailSent ? (
                <ConfirmationMessageComponent heading="Your password has been reset successfully" subheading="Check your Email" />
            ) : (
                <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-white rounded-[20px] p-12 space-y-9 text-center w-[450px]"
                >
                    <h3 className="text-3xl font-medium">Forgot your password?</h3>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormLabel  className=" bg-white text-neutral-400 text-md absolute left-4 -top-3 px-1 z-20">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                            className="w-full px-4 py-7 placeholder-neutral-200 rounded-md focus:outline-brand border-2 text-lg font-medium  border-brand text-brand"
                                        />
                                    </FormControl>
                                    <FormMessage className="w-full text-left"/>
                                    <Link href="auth/login" className="w-full font-thin text-neutral-400 flex justify-start">
                                        <ChevronLeft className="text-brand"/> Back to Log in
                                    </Link>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full bg-brand text-lg py-6 font-medium text-white hover:bg-blue-800"
                    >
                        Reset Password
                    </Button>
                </form>
            </Form>
            )
           }
           </>
    );
};
