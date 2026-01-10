export default function Card({ title, subtitle, children }) {
  return (
    <section
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(47,47,51,0.10)",
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(47,47,51,0.06)",
        padding: 28,
        margin: "0 auto 22px",
        maxWidth: 760,
        backdropFilter: "blur(6px)",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 22 }}>{title}</h2>
      {subtitle ? (
        <p style={{ marginTop: 8, marginBottom: 16, color: "rgba(47,47,51,0.7)" }}>
          {subtitle}
        </p>
      ) : null}

      <div>{children}</div>
    </section>
  );
}
