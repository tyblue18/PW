import { NextRequest, NextResponse } from 'next/server';
import { getStreamlitUrls } from '../../../config/streamlit-apps';

/**
 * Keep-alive endpoint that pings all Streamlit apps to prevent them from sleeping
 * 
 * This endpoint can be called:
 * 1. By Vercel Cron Jobs (recommended)
 * 2. By external services like UptimeRobot, cron-job.org
 * 3. Manually via GET request
 * 
 * Usage:
 * - GET /api/keep-alive - Ping all apps
 * - GET /api/keep-alive?app=0 - Ping specific app by index
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const appIndex = searchParams.get('app');
  const streamlitUrls = getStreamlitUrls();

  // If specific app index requested
  if (appIndex !== null) {
    const index = parseInt(appIndex, 10);
    if (isNaN(index) || index < 0 || index >= streamlitUrls.length) {
      return NextResponse.json(
        { error: 'Invalid app index', availableIndices: streamlitUrls.length },
        { status: 400 }
      );
    }
    const result = await pingStreamlitApp(streamlitUrls[index], index);
    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }

  // Ping all apps in parallel
  const results = await Promise.allSettled(
    streamlitUrls.map((url, index) => pingStreamlitApp(url, index))
  );

  const summary = {
    total: streamlitUrls.length,
    successful: results.filter((r) => r.status === 'fulfilled').length,
    failed: results.filter((r) => r.status === 'rejected').length,
    results: results.map((result, index) => ({
      index,
      url: streamlitUrls[index],
      status: result.status === 'fulfilled' ? 'success' : 'failed',
      ...(result.status === 'fulfilled' 
        ? { response: result.value }
        : { error: result.reason }
      ),
    })),
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(summary, {
    status: summary.failed === 0 ? 200 : 207, // 207 Multi-Status if some failed
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}

/**
 * Ping a single Streamlit app
 */
async function pingStreamlitApp(
  url: string, 
  index: number
): Promise<{
  index: number;
  url: string;
  success: boolean;
  status?: number;
  statusText?: string;
  error?: string;
  responseTime: string;
  timestamp: string;
}> {
  const startTime = Date.now();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Portfolio-KeepAlive/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);

    const responseTime = Date.now() - startTime;
    const success = response.ok || response.status < 500;

    return {
      index,
      url,
      success,
      status: response.status,
      statusText: response.statusText,
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    clearTimeout(timeoutId);
    const responseTime = Date.now() - startTime;
    return {
      index,
      url,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
    };
  }
}

