"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { GoogleIcon } from "../icons/google-icon";

export const Social = ({title}) => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full bg-black flex space-x-4 hover:bg-zinc-700 py-6"
                variant="outline"
                onClick={() => onClick("google")}
            >
                <GoogleIcon width={24} height={24} /> <span className="text-lg font-bold text-white">{title}</span>
            </Button>
        </div>
    );
};
