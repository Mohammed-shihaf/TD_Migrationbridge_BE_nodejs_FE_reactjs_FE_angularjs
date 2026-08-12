import PropTypes from "prop-types";
import RouteBadge from "./RouteBadge";
import { formatEventTimestamp, sortEventsByTimestamp } from "../audit";

export default function AuditLog({ events }) {
  return (
    <ul>
      {sortEventsByTimestamp(events).map((e) => (
        <li key={e.id}>
          {e.route} — <RouteBadge action={e.action} /> ({formatEventTimestamp(e.timestamp)})
        </li>
      ))}
    </ul>
  );
}

AuditLog.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, route: PropTypes.string, action: PropTypes.string, timestamp: PropTypes.string })
  ).isRequired,
};
