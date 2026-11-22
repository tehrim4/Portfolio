function ApproachView() {
  const STEPS = [
    {
      step: "01",
      title: "Understand & Define",
      desc: "Identify the core problem and clarify the purpose of the product before jumping into code.",
    },
    {
      step: "02",
      title: "Plan & Design",
      desc: "Craft intuitive user experiences through thoughtful layouts, clear visual hierarchy, and meaningful interactions.",
    },
    {
      step: "03",
      title: "Build & Iterate",
      desc: "Write clean, reusable, and maintainable frontend code while continuously testing, learning, and refining design decisions.",
    },
  ];

  return (
    <section className="view-card" aria-label="My Approach">
      <div className="view-header">
        <span className="view-eyebrow">Workflow &amp; Philosophy</span>
        <h2 className="view-title">My Approach</h2>
      </div>

      <p
        style={{
          fontSize: "0.94rem",
          lineHeight: 1.68,
          color: "var(--text-muted)",
          marginBottom: "1.15rem",
        }}
      >
        My development approach begins with understanding the problem and
        identifying the purpose of the product before moving into planning,
        designing, and implementation. I focus on creating intuitive user
        experiences through thoughtful layouts, clear visual hierarchy, and
        meaningful interactions while maintaining clean, reusable, and
        maintainable frontend code. I believe development is an iterative
        process, where testing, learning, refining, and questioning design
        decisions are essential to building better digital experiences.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(215px, 1fr))",
          gap: "0.9rem",
        }}
      >
        {STEPS.map((item) => (
          <div
            key={item.step}
            style={{
              padding: "1rem",
              borderRadius: "16px",
              background: "var(--bg-peach-soft)",
              border: "1px solid var(--border-peach)",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--accent-peach-deep)",
              }}
            >
              STEP {item.step}
            </span>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                margin: "0.25rem 0 0.35rem",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "0.84rem",
                lineHeight: 1.55,
                color: "var(--text-muted)",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApproachView;
