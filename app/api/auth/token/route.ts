import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Convert NextRequest to NextAuth-compatible format
  const token = await getToken({
    req: {
      headers: request.headers,
      cookies: Object.fromEntries(request.cookies.getAll().map(cookie => [cookie.name, cookie.value])), // plain object
    } as any, // temporary TS fix
    secret: process.env.NEXTAUTH_SECRET, // make sure this env exists
  });

  return NextResponse.json(token);
}
