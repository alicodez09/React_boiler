const Box = ({ title, children }) => {
  return (
    <div style={{ border: "2px solid steelblue", borderRadius: 8, padding: 12, margin: "8px 0" }}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default Box;
