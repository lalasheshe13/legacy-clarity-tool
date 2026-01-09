export default function Card({ title, subtitle, children }) {
  return (
    <section
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
        padding: 18,
        marginBottom: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <span style={{ color: "var(--sage)", fontWeight: 600 }}>•</span>
      </div>

      {subtitle ? <p style={{ marginTop: 6 }}>{subtitle}</p> : null}

      <div style={{ marginTop: 10 }}>{children}</div>
    </section>
  );
}
