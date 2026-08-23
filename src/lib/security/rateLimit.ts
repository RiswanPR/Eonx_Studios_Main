export interface RateLimitResult {
  success: boolean;
  remaining: number;
}

// In-memory sliding window baseline for single-node / development environments
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

export async function checkRateLimit(
  key: string,
  max: number = RATE_LIMIT_MAX,
  windowMs: number = RATE_LIMIT_WINDOW_MS,
): Promise<RateLimitResult> {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || record.expiresAt < now) {
    rateLimitMap.set(key, { count: 1, expiresAt: now + windowMs });
    return { success: true, remaining: max - 1 };
  }

  if (record.count >= max) {
    return { success: false, remaining: 0 };
  }

  record.count += 1;
  return { success: true, remaining: max - record.count };
}
