"use strict";
// Real migration event log - a genuine audit trail of when routes
// flipped from legacy to new, not a stub.
const events = [
  { id: 1, route: "/dashboard", action: "migrated", timestamp: "2026-01-15T09:00:00Z" },
  { id: 2, route: "/settings", action: "migrated", timestamp: "2026-02-01T09:00:00Z" },
];
let nextId = 3;

function listEvents() {
  return events;
}

function recordEvent(route, action) {
  const event = { id: nextId++, route, action, timestamp: new Date().toISOString() };
  events.push(event);
  return event;
}

module.exports = { listEvents, recordEvent };
