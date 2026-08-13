export function formatEventTimestamp(isoString) {
  return new Date(isoString).toISOString().slice(0, 10);
}

export function sortEventsByTimestamp(events) {
  return [...events].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}
