import { Mail, MessageSquareHeart } from "lucide-react";

function ContactView() {
  return (
    <section className="view-card" aria-label="Contact">
      <div className="view-header">
        <span className="view-eyebrow">Let&apos;s Connect</span>
        <h2 className="view-title">Contact</h2>
      </div>

      <div
        style={{
          padding: "1.3rem",
          borderRadius: "18px",
          background: "var(--bg-peach-soft)",
          border: "1px solid var(--border-peach)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            color: "var(--accent-peach-deep)",
            fontWeight: 700,
            fontSize: "0.85rem",
            marginBottom: "0.65rem",
          }}
        >
          <MessageSquareHeart size={17} />
          <span>Open to Opportunities &amp; Collaborations</span>
        </div>

        <p
          style={{
            fontSize: "0.96rem",
            lineHeight: 1.7,
            color: "var(--text-ink)",
            marginBottom: "1.2rem",
          }}
        >
          I&apos;m always interested in connecting with people who are
          passionate about technology, design, and building meaningful digital
          products. Whether it&apos;s an exciting project, a development
          opportunity, a creative collaboration, or simply exchanging ideas,
          I&apos;d love to connect and explore possibilities together.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <a
            href="mailto:at@tsoftdevelper.com"
            className="btn-primary"
            style={{ textDecoration: "none" }}
          >
            <Mail size={16} />
            <span>Send an Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactView;
