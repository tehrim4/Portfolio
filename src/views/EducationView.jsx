function EducationView() {
  return (
    <section className="view-card" aria-label="Education">
      <div className="view-header">
        <span className="view-eyebrow">Academic Background</span>
        <h2 className="view-title">Education</h2>
      </div>

      <div
        style={{
          padding: "1.25rem",
          borderRadius: "18px",
          background: "var(--bg-peach-soft)",
          border: "1px solid var(--border-peach)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.4rem",
          }}
        >
          <h3 style={{ fontSize: "1.15rem", fontWeight: 800 }}>
            Bachelor of Science in Chemistry
          </h3>
          <span
            style={{
              padding: "0.28rem 0.75rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 700,
              background: "var(--surface-card)",
              border: "1px solid var(--border-peach)",
              color: "var(--accent-peach-deep)",
            }}
          >
            April 2024 • 80% • Second Rank
          </span>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--text-ink)",
            marginBottom: "0.75rem",
          }}
        >
          University of Mumbai
        </p>

        <p
          style={{
            fontSize: "0.93rem",
            lineHeight: 1.68,
            color: "var(--text-muted)",
          }}
        >
          I completed my Bachelor of Science in Chemistry from the University of
          Mumbai in April 2024, securing 80% academically and achieving Second
          Rank in my college. My academic journey strengthened my analytical
          thinking, discipline, consistency, and problem-solving abilities.
          These qualities continue to influence my approach to learning,
          technology, and software development.
        </p>
      </div>
    </section>
  );
}

export default EducationView;
