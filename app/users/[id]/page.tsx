import { notFound } from "next/navigation";
import React from "react";

interface Props {
    params: Promise<{ id: string }>;
}

const UserDetailPage = async ({ params }: Props) => {
    const { id } = await params; // id is string
    const numericId = Number(id); // convert to number if needed
    if (numericId > 10) notFound();
    return <div>UserDetailPage: {numericId}</div>;
};

export default UserDetailPage;
