import React, { useEffect, useState } from "react";

// This is the NEW app, served by backend/ at /app/* — real users hit
// this URL during the migration window while /legacy/* (Angular) still
// serves everyone else. Same shared backend API as the legacy app.
export default function App() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    fetch("/api/widgets")
      .then((r) => r.json())
      .then((data) => setWidgets(data.widgets))
      .catch(() => setWidgets([]));
  }, []);

  return (
    <div>
      <h1>New App (React) — served at /app</h1>
      <ul>
        {widgets.map((w) => (
          <li key={w.id}>{w.label}</li>
        ))}
      </ul>
    </div>
  );
}
