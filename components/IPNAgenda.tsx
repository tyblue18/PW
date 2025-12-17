"use client";

import { useEffect, useState } from "react";

interface AgendaItem {
  id?: string;
  title?: string;
  time?: string;
  startTime?: string;
  endTime?: string;
  date?: string;
  description?: string;
  speaker?: string;
  speakers?: string[];
  location?: string;
  sessionType?: string;
  track?: string;
  [key: string]: any;
}

export default function IPNAgenda({ eventId = '686ff74f3e007390d9969481' }: { eventId?: string }) {
  const [data, setData] = useState<AgendaItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [groupedByDate, setGroupedByDate] = useState<Record<string, AgendaItem[]>>({});

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/ipn-agenda?eventId=${eventId}&sort=true`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch agenda');
        }

        const result = await response.json();
        
        if (result.error) {
          throw new Error(result.message || result.error);
        }

        const items = result.items || result.data || [];
        setData(items);

        // Group by date if dates are available
        if (items.length > 0 && items.some((item: AgendaItem) => item.date)) {
          const grouped: Record<string, AgendaItem[]> = {};
          items.forEach((item: AgendaItem) => {
            const date = item.date || 'Unknown Date';
            if (!grouped[date]) {
              grouped[date] = [];
            }
            grouped[date].push(item);
          });
          setGroupedByDate(grouped);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        console.error('Error fetching IPN agenda:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgenda();
  }, [eventId]);

  const formatTime = (timeStr: string | undefined) => {
    if (!timeStr) return 'TBD';
    // Clean up time format
    return timeStr.trim();
  };

  const formatSpeakers = (speaker: string | string[] | undefined) => {
    if (!speaker) return null;
    if (Array.isArray(speaker)) {
      return speaker.join(', ');
    }
    return speaker;
  };

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="text-gray-400 animate-pulse">Loading agenda...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center bg-white/5 border border-white/10 rounded-lg p-6">
        <div className="text-red-400 mb-2 font-semibold">Error loading agenda</div>
        <div className="text-sm text-gray-500 mb-4">{error}</div>
        <div className="text-xs text-gray-600 space-y-2">
          <p>This API requires authentication. To fix this:</p>
          <ol className="list-decimal list-inside space-y-1 text-left max-w-md mx-auto">
            <li>Log into ipnonline.net in your browser</li>
            <li>Open browser DevTools (F12) → Network tab</li>
            <li>Visit the agenda page and find the API request</li>
            <li>Copy the Cookie header from the request</li>
            <li>Add it to the API route in <code className="bg-black/30 px-1 rounded">app/api/ipn-agenda/route.ts</code></li>
          </ol>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-gray-400">No agenda items found</div>
      </div>
    );
  }

  // Render grouped by date if dates are available
  if (Object.keys(groupedByDate).length > 0) {
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-white">IPN Summit Agenda</h2>
        {Object.entries(groupedByDate)
          .sort(([dateA], [dateB]) => dateA.localeCompare(dateB))
          .map(([date, items]) => (
            <div key={date} className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-400 border-b border-teal-500/30 pb-2">
                {date}
              </h3>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="flex-shrink-0">
                        <div className="text-teal-400 text-sm font-mono font-semibold">
                          {formatTime(item.time || item.startTime)}
                          {item.endTime && (
                            <span className="text-gray-500"> - {formatTime(item.endTime)}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        {item.title && (
                          <h4 className="text-lg font-semibold text-white mb-2 break-words">
                            {item.title}
                          </h4>
                        )}
                        {formatSpeakers(item.speaker || item.speakers) && (
                          <div className="text-gray-400 text-sm mb-2">
                            <span className="text-teal-400">Speaker{Array.isArray(item.speakers) && item.speakers.length > 1 ? 's' : ''}:</span>{' '}
                            {formatSpeakers(item.speaker || item.speakers)}
                          </div>
                        )}
                        {item.location && (
                          <div className="text-gray-400 text-sm mb-2">
                            <span className="text-teal-400">Location:</span> {item.location}
                          </div>
                        )}
                        {item.sessionType && (
                          <div className="text-gray-400 text-sm mb-2">
                            <span className="text-teal-400">Type:</span> {item.sessionType}
                          </div>
                        )}
                        {item.description && (
                          <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  }

  // Render flat list if no dates
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-6 text-white">IPN Summit Agenda</h2>
      <div className="text-sm text-gray-400 mb-4">
        {data.length} item{data.length !== 1 ? 's' : ''} (sorted by time)
      </div>
      {data.map((item, index) => (
        <div
          key={item.id || index}
          className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex-shrink-0">
              <div className="text-teal-400 text-sm font-mono font-semibold">
                {formatTime(item.time || item.startTime)}
                {item.endTime && (
                  <span className="text-gray-500"> - {formatTime(item.endTime)}</span>
                )}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              {item.title && (
                <h3 className="text-lg font-semibold text-white mb-2 break-words">
                  {item.title}
                </h3>
              )}
              {formatSpeakers(item.speaker || item.speakers) && (
                <div className="text-gray-400 text-sm mb-2">
                  <span className="text-teal-400">Speaker{Array.isArray(item.speakers) && item.speakers.length > 1 ? 's' : ''}:</span>{' '}
                  {formatSpeakers(item.speaker || item.speakers)}
                </div>
              )}
              {item.location && (
                <div className="text-gray-400 text-sm mb-2">
                  <span className="text-teal-400">Location:</span> {item.location}
                </div>
              )}
              {item.description && (
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}



