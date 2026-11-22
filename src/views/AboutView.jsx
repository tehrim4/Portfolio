function AboutView() {
  return (
    <section className="view-card" aria-label="About Me">
      <div className="view-header">
        <span className="view-eyebrow">Profile</span>
        <h2 className="view-title">About Me</h2>
      </div>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          color: "var(--text-muted)",
          lineHeight: 1.72,
          fontSize: "0.96rem",
        }}
      >
        <p style={{ color: "var(--text-ink)", fontWeight: 500 }}>
          I&apos;m Tehrim, a frontend developer with a strong interest in UI/UX
          design and creating meaningful digital experiences. I enjoy combining
          creativity with technical problem-solving to transform ideas into
          intuitive, visually engaging, and responsive web applications.
        </p>

        <p>
          My approach focuses on understanding the purpose behind every
          interface, paying attention to visual hierarchy, usability, and
          interaction while writing clean and maintainable code. I believe great
          digital products are created when thoughtful design and functional
          development work together.
        </p>

        <p>
          I&apos;m continuously exploring new technologies, building projects,
          and challenging myself to become a better developer.
        </p>
      </div>
    </section>
  );
}

export default AboutView;
