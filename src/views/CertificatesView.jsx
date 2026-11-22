import { Award } from "lucide-react";

const CERTIFICATES = [
  "Diploma in Python Technology",
  "Java Full Stack Development",
  "Introduction to Artificial Intelligence",
  "Data Science with Python",
];

function CertificatesView() {
  return (
    <section className="view-card" aria-label="Certifications">
      <div className="view-header">
        <span className="view-eyebrow">Credentials</span>
        <h2 className="view-title">Certifications</h2>
      </div>

      <p
        style={{
          fontSize: "0.93rem",
          lineHeight: 1.65,
          color: "var(--text-muted)",
          marginBottom: "1.1rem",
        }}
      >
        To strengthen my technical foundation and expand my knowledge across
        different areas of technology, I have completed certifications in
        Diploma in Python Technology, Java Full Stack Development, Introduction
        to Artificial Intelligence, and Data Science with Python. These learning
        experiences helped me explore programming concepts, application
        development, artificial intelligence fundamentals, and data analysis
        while building a broader understanding of the technology ecosystem.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "0.85rem",
        }}
      >
        {CERTIFICATES.map((cert) => (
          <div
            key={cert}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.95rem 1rem",
              borderRadius: "16px",
              background: "var(--bg-peach-soft)",
              border: "1px solid var(--border-peach)",
            }}
          >
            <div
              style={{
                padding: "0.48rem",
                borderRadius: "12px",
                background: "var(--surface-card)",
                color: "var(--accent-peach-deep)",
                flexShrink: 0,
              }}
            >
              <Award size={19} />
            </div>
            <h3 style={{ fontSize: "0.92rem", fontWeight: 700 }}>{cert}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificatesView;
