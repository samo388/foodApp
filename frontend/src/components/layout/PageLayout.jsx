import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PageLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header onMenuClick={() => setOpen(true)} />

        <main style={{ flex: 1, padding: 24, background: "#f7f7f7" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
