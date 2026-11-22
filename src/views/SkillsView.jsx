const SKILL_GROUPS = [
  {
    category: "Frontend Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "React Router DOM",
      "Responsive Design",
      "Component-Based Architecture",
    ],
  },
  // {
  //   category: "UI/UX Design",
  //   items: [
  //     "UI/UX Principles",
  //     "Visual Hierarchy",
  //     "Interaction Design",
  //     "Layout Composition",
  //     "Intuitive User Experiences",
  //   ],
  // },
  {
    category: "Backend & Databases",
    items: [
      "Python",
      "Java",
      "FastAPI",
      "PostgreSQL",
      "REST API Integration",
      "Intuitive User Experiences",
    ],
  },
  {
    category: "Tools & Motion",
    items: ["Git", "GitHub", "VS Code", "Vite", "Framer Motion"],
  },
];

function SkillsView() {
  return (
    <section className="view-card" aria-label="Skills">
      <div className="view-header">
        <span className="view-eyebrow">Capabilities</span>
        <h2 className="view-title">Skills</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(235px, 1fr))",
          gap: "0.9rem",
        }}
      >
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            style={{
              padding: "1rem",
              borderRadius: "16px",
              background: "var(--bg-peach-soft)",
              border: "1px solid var(--border-peach)",
            }}
          >
            <h3
              style={{
                fontSize: "0.93rem",
                fontWeight: 700,
                marginBottom: "0.65rem",
                color: "var(--accent-peach-deep)",
              }}
            >
              {group.category}
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "0.3rem 0.72rem",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: "var(--surface-card)",
                    border: "1px solid var(--border-peach)",
                    color: "var(--text-ink)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsView;
