import { NextResponse } from "next/server";
import { getVisitors, addVisitor } from "@/prisma-db";
import { withCorsHeaders } from "@/lib/cors";

export async function GET(req: Request) {
  const origin = req.headers.get("origin");

  try {
    const visitors = await getVisitors();
    const res = NextResponse.json(
      { success: true, data: visitors },
      { status: 200 }
    );
    return withCorsHeaders(res, origin);
  } catch (err) {
    const res = NextResponse.json(
      { error: "Something went wrong.", data: [] },
      { status: 500 }
    );
    return withCorsHeaders(res, origin);
  }
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");

  try {
    const body = await req.json();
    const visitor = await addVisitor(body);
    const res = NextResponse.json(
      { success: true, data: visitor },
      { status: 201 }
    );
    return withCorsHeaders(res, origin);
  } catch (err) {
    const res = NextResponse.json(
      { error: "Invalid Request", data: null },
      { status: 400 }
    );
    return withCorsHeaders(res, origin);
  }
}

// For preflight requests
export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  const res = new Response(null, { status: 204 });
  return withCorsHeaders(res, origin);
}
