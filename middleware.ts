// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Initialize the rate limiter
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "5s"), // 5 requests per 5 seconds
});

export async function middleware(req: NextRequest) {
  // Apply rate limit only to API routes
  if (req.nextUrl.pathname.startsWith("/api")) {
    const ip = req.ip ?? "anonymous"; // fallback identifier

    const result = await ratelimit.limit(ip);

    const res = result.success
      ? NextResponse.next()
      : NextResponse.json(
          {
            success: false,
            message: "Too many requests. Please try again later.",
            rateLimitState: result,
          },
          { status: 429 }
        );

    // Optionally add rate limit headers
    res.headers.set("X-RateLimit-Limit", result.limit.toString());
    res.headers.set("X-RateLimit-Remaining", result.remaining.toString());

    return res;
  }

  return NextResponse.next();
}

// 3. Matcher configuration
export const config = {
  matcher: ["/api/:path*"], // Middleware will run on all API routes
};
