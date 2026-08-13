import React, { useEffect, useState } from "react";
import { formatWidgetCount } from "./widgets";
import AuditLog from "./components/AuditLog";

// This is the NEW app, served by backend/ at /app/* — real users hit
// this URL during the migration window while /legacy/* (Angular) still
// serves everyone else. Same shared backend API as the legacy app.
export default function App() {
  const [widgets, setWidgets] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/widgets")
      .then((r) => r.json())
      .then((data) => setWidgets(data.widgets))
      .catch(() => setWidgets([]));
    fetch("/api/audit")
      .then((r) => r.json())
      .then((data) => setEvents(data.events))
      .catch(() => setEvents([]));
  }, []);

  return (
    <div>
      <h1>New App (React) — served at /app</h1>
      <p>{formatWidgetCount(widgets.length)}</p>
      <ul>
        {widgets.map((w) => (
          <li key={w.id}>{w.label}</li>
        ))}
      </ul>
      <h2>Migration audit log</h2>
      <AuditLog events={events} />
    </div>
  );
}
