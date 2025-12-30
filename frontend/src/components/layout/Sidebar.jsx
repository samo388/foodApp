export default function Sidebar({ open, onClose }) {
  return (
    <aside
      style={{
        width: 240,
        background: "#fff",
        borderRight: "1px solid #eee",
        position: "fixed",
        top: 0,
        left: open ? 0 : -240,
        height: "100%",
        transition: "left 0.3s ease",
        zIndex: 1000
      }}
    >
      <button onClick={onClose} style={{ margin: 16 }}>✕</button>
      <nav>
        <a href="/">Dashboard</a><br />
        <a href="/orders">Orders</a><br />
        <a href="/food">Food</a>
      </nav>
    </aside>
  );
}
