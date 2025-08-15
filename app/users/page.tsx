import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/dist/client/link";

interface Props {
    searchParams: Promise<{
        sortOrder?: string;
    }>;
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams; // await the Promise

    console.log(sortOrder);

    return (
        <>
            <h1 className="p-3 bg-slate-200 text-xl font-bold">Users</h1>
            <Link href="/users/new" className="btn">
                New User
            </Link>
            <div className="p-3">
                <Suspense fallback={<div>Loading...</div>}>
                    <UserTable sortOrder={sortOrder ?? "default"} />
                </Suspense>
            </div>
        </>
    );
};

export default UsersPage;
