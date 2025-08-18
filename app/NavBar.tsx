"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <div className="flex mr-5 py-4 px-5 bg-slate-200">
            <Link
                href="/users"
                className="p-2 px-4 bg-blue-500 text-white rounded-md"
            >
                Home
            </Link>
            <Link href="/users" className="p-2 px-4 mx-4">
                Users
            </Link>

            {status === "authenticated" && (
                <div className="flex items-center space-x-3 p-2 px-4 mx-4">
                    <span>{session.user!.name}</span>
                    <Link
                        className="p-2 px-4 bg-red-500 rounded-md text-white"
                        href="/api/auth/signout"
                    >
                        Sign Out
                    </Link>
                </div>
            )}

            {status === "unauthenticated" && (
                <div className="flex space-x-4">
                    <Link
                        href="/api/auth/signin"
                        className="p-2 px-4 bg-blue-500 text-white rounded-md"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="p-2 px-4 bg-green-500 text-white rounded-md"
                    >
                        Sign Up
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
