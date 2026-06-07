const StatusBadge = ({ label, color = "gray" }) => {
  return (
    <span style={{ background: color, color: "white", padding: "3px 12px", borderRadius: 12, marginRight: 6 }}>
      {label}
    </span>
  );
};

export default StatusBadge;
