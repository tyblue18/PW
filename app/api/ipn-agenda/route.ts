import { NextRequest, NextResponse } from 'next/server';

interface AgendaItem {
  id?: string;
  title?: string;
  time?: string;
  startTime?: string;
  endTime?: string;
  date?: string;
  description?: string;
  speaker?: string;
  location?: string;
  sessionType?: string;
  [key: string]: any;
}

// Helper function to parse time string to minutes for sorting
function parseTimeToMinutes(timeStr: string | undefined): number {
  if (!timeStr) return Infinity;
  
  // Handle formats like "9:00 AM", "14:30", "09:00", etc.
  const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!timeMatch) return Infinity;
  
  let hours = parseInt(timeMatch[1], 10);
  const minutes = parseInt(timeMatch[2], 10);
  const period = timeMatch[3]?.toUpperCase();
  
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes;
}

// Sort agenda items by time
function sortAgendaByTime(items: AgendaItem[]): AgendaItem[] {
  return [...items].sort((a, b) => {
    const timeA = parseTimeToMinutes(a.time || a.startTime);
    const timeB = parseTimeToMinutes(b.time || b.startTime);
    return timeA - timeB;
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const eventId = searchParams.get('eventId') || '686ff74f3e007390d9969481';
  const sort = searchParams.get('sort') !== 'false'; // Default to sorting

  try {
    // Fetch saved agenda endpoint
    const apiUrl = `https://ipnonline.net/event/summit/agenda/savedAgenda?eventId=${eventId}`;
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://ipnonline.net/',
        // Add authentication if you have session cookie
        // 'Cookie': request.headers.get('cookie') || '',
      },
    });

    if (!response.ok) {
      // If 401/403, provide helpful error message
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          { 
            error: 'Authentication required',
            message: 'This endpoint requires login. Please provide authentication credentials.',
            hint: 'You may need to pass session cookies or authentication tokens.',
          },
          { status: 401 }
        );
      }
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Handle different response structures
    let agendaItems: AgendaItem[] = [];
    if (Array.isArray(data)) {
      agendaItems = data;
    } else if (data.data && Array.isArray(data.data)) {
      agendaItems = data.data;
    } else if (data.items && Array.isArray(data.items)) {
      agendaItems = data.items;
    } else if (data.agenda && Array.isArray(data.agenda)) {
      agendaItems = data.agenda;
    } else if (data.savedAgenda && Array.isArray(data.savedAgenda)) {
      agendaItems = data.savedAgenda;
    } else {
      // Try to find any array in the response
      const keys = Object.keys(data);
      for (const key of keys) {
        if (Array.isArray(data[key])) {
          agendaItems = data[key];
          break;
        }
      }
    }

    // Sort by time if requested
    if (sort && agendaItems.length > 0) {
      agendaItems = sortAgendaByTime(agendaItems);
    }
    
    return NextResponse.json({
      success: true,
      count: agendaItems.length,
      items: agendaItems,
      raw: process.env.NODE_ENV === 'development' ? data : undefined, // Include raw data in dev
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching IPN agenda:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch agenda data',
        message: error instanceof Error ? error.message : 'Unknown error',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}



