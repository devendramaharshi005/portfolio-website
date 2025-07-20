const allowedOrigins = [
  "https://portfolio-website-two-xi-82.vercel.app",
  "http://localhost:3000",
];

export function getCorsHeaders(origin: string | null) {
  if (!origin || !allowedOrigins.includes(origin)) {
    return {};
  }

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin",
  };
}

export function withCorsHeaders(res: Response, origin: string | null) {
  const headers = getCorsHeaders(origin);
  for (const [key, value] of Object.entries(headers)) {
    res.headers.set(key, value);
  }
  return res;
}
