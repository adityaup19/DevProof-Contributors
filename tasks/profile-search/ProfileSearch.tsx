import { useState } from "react";
import { profiles } from "./mock-profiles";

export default function ProfileSearch() {
  const [query, setQuery] = useState("");

  const filtered = profiles.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.role.toLowerCase().includes(q) ||
      p.skills.some((skill) => skill.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Profile Search</h1>

      <input
        type="text"
        placeholder="Search by name, role, or skill..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      {filtered.length === 0 && <p>No results found.</p>}

      <div style={{ display: "grid", gap: "16px" }}>
        {filtered.map((p, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <h3>{p.name}</h3>
            <p style={{ opacity: 0.8 }}>{p.role}</p>
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Skills: {p.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
