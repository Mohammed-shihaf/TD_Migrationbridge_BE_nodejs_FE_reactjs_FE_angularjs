import PropTypes from "prop-types";

export default function RouteBadge({ action }) {
  const color = action === "migrated" ? "#16a34a" : "#6b7280";
  return <span style={{ color, fontWeight: "bold" }}>{action}</span>;
}

RouteBadge.propTypes = {
  action: PropTypes.string.isRequired,
};
