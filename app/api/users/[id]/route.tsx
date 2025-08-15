import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import schema from "../schema";

// GET /api/users/:id
export async function GET(request: NextRequest, { params }: any) {
    const id = params.id; // keep as string

    if (!id) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { id }, // Prisma expects a string
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
}

// PUT /api/users/:id
export async function PUT(request: NextRequest, { params }: any) {
    const id = params.id; // keep as string

    if (!id) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(
            { errors: validation.error.issues },
            { status: 400 }
        );
    }

    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
            name: body.name,
            email: body.email,
        },
    });

    return NextResponse.json(updatedUser);
}

// DELETE /api/users/:id
export async function DELETE(request: NextRequest, { params }: any) {
    const id = params.id; // keep as string

    if (!id) {
        return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({ where: { id } });

    return NextResponse.json(
        { message: "User deleted successfully" },
        { status: 200 }
    );
}
