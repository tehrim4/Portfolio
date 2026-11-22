import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, Eye, FolderGit2 } from "lucide-react";

const PROJECTS = [
  {
    id: "daymin-ai",
    title: "DayMin AI",
    subtitle: "AI-Powered Daily Planning Assistant",
    summary:
      "Turns daily tasks and priorities into structured plans using AI agents and persistent storage.",
    stack: ["Python", "PostgreSQL", "Strands Agents", "Ollama"],
    image: "/projects/dayMin-ai.png",
    liveUrl: "https://daymin-ai.vercel.app/",
    repoUrl: "https://github.com/tehrim4/daymin-ai",
    description:
      "DayMin AI is an AI-powered personal planning assistant designed to help users organize their daily responsibilities, manage tasks, and make better decisions about their time. The project explores AI agents, intelligent task management, personalized planning, and contextual recommendations to transform everyday tasks into actionable plans. Working with Python, PostgreSQL, Strands Agents, and Ollama, I explored how AI capabilities can be integrated with practical application workflows to create a more intelligent productivity experience.",
  },
  {
    id: "wind-intelligence",
    title: "Wind Intelligence",
    subtitle: "Renewable Energy Forecasting",
    summary:
      "Compares forecasted vs. actual wind generation data from Elexon BMRS through a FastAPI backend.",
    stack: ["Python", "FastAPI", "Elexon BMRS API"],
    image: "/projects/wind-intelligence.png",
    liveUrl: "https://frontend-8tbr.vercel.app/",
    repoUrl: "https://github.com/tehrim4/wind-intelligence",
    description:
      "Wind Intelligence is a data-driven backend project focused on renewable energy forecasting and evaluating predicted wind generation against actual energy production. Developed using Python and FastAPI, the project involved integrating the Elexon BMRS API, retrieving forecast and actual generation datasets, processing time-based information, and normalizing data for meaningful comparison. This project strengthened my understanding of external API integration, data processing, backend development, and solving challenges involving real-world datasets.",
  },
  {
    id: "ember-plate",
    title: "Ember Plate",
    subtitle: "Interactive Restaurant Experience",
    summary:
      "Interactive dining showcase pairing expressive visuals, smooth transitions, and responsive layouts.",
    stack: ["React", "JavaScript", "CSS"],
    image: "/projects/ember.png",
    liveUrl: "https://ember-plate-six.vercel.app/",
    repoUrl: "https://github.com/tehrim4/ember-plate",
    description:
      "Ember Plate is an interactive restaurant website designed to create an engaging digital dining experience through expressive visuals, modern layouts, and smooth interface transitions. The project focuses on combining visual storytelling with intuitive navigation, responsive layouts, and carefully considered interactions. Built using React, JavaScript, and CSS, it allowed me to explore how frontend development, animation, and visual design can work together to create a distinctive brand experience.",
  },
  {
    id: "aura",
    title: "AURA",
    subtitle: "Creative Digital Experience",
    summary:
      "Editorial-inspired web experience focused on refined typography, balanced spacing, and fluid motion.",
    stack: ["React", "CSS", "Typography & UI"],
    image: "/projects/aura-hero.png",
    liveUrl: "https://aura-topaz-three.vercel.app/",
    repoUrl: "https://github.com/tehrim4/aura",
    description:
      "AURA is a design-focused digital experience that explores the relationship between visual aesthetics, typography, layout composition, and interaction. The project emphasizes a cohesive visual identity through thoughtful spacing, refined typography, consistent styling, and subtle transitions. Developed using React and CSS, it reflects my interest in creating interfaces that feel visually balanced while maintaining clarity and usability.",
  },
  {
    id: "market-os",
    title: "Market OS",
    subtitle: "Dashboard Interface",
    summary:
      "Structured dashboard layout organizing dense information with clear hierarchy and modular components.",
    stack: ["React", "Component Architecture", "UI/UX"],
    image: "/projects/market-os.png",
    liveUrl: "https://market-os-chi.vercel.app/",
    repoUrl: "https://github.com/tehrim4/market-os",
    description:
      "Market OS is a dashboard interface concept focused on organizing information into a structured and accessible digital environment. The project explores information hierarchy, content organization, visual consistency, and dashboard layouts that help users navigate information more efficiently. Through this project, I explored how component-based frontend development and thoughtful UI decisions can make information-heavy interfaces easier to understand and interact with.",
  },
  {
    id: "glow-skin",
    title: "Glow Skin",
    subtitle: "Beauty Brand Website",
    summary:
      "Clean beauty storefront concept combining soft visual storytelling, product highlights, and mobile polish.",
    stack: ["React", "CSS", "Responsive Design"],
    image: "/projects/glow.png",
    liveUrl: "https://glow-skin-beauty-studio-rojo.vercel.app/",
    repoUrl: "https://github.com/tehrim4/glow-skin",
    description:
      "Glow Skin is a beauty brand website concept designed to establish a clean, elegant, and visually consistent digital identity. The experience focuses on product presentation, visual storytelling, typography, and responsive layouts that complement the brand's aesthetic. Through this project, I explored how design elements such as color, imagery, spacing, and composition can work together to create a cohesive and engaging brand experience.",
  },
];

function ProjectThumbnail({ src, title, large = false }) {
  const [loaded, setLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const height = large ? "190px" : "120px";

  if (imgError) {
    return (
      <div
        style={{
          width: "100%",
          height,
          borderRadius: "14px",
          background:
            "linear-gradient(135deg, var(--accent-peach), var(--bg-peach-soft))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--active-icon-text)",
          fontWeight: 800,
          fontSize: large ? "1.2rem" : "0.95rem",
          letterSpacing: "0.04em",
          border: "1px solid var(--border-peach)",
        }}
      >
        {title}
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid var(--border-peach)",
        background: "var(--surface-card)",
      }}
    >
      {!loaded && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, var(--bg-peach-soft) 25%, var(--surface-card) 50%, var(--bg-peach-soft) 75%)",
          }}
        />
      )}

      <img
        src={src}
        alt={`${title} website preview`}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setImgError(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      />
    </div>
  );
}

function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    PROJECTS.forEach((project) => {
      const img = new Image();
      img.decoding = "async";
      img.src = project.image;
    });
  }, []);

  if (selectedProject) {
    return (
      <section className="view-card" aria-label={selectedProject.title}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 0.9rem",
              borderRadius: "999px",
              border: "1px solid var(--border-peach)",
              background: "var(--bg-peach-soft)",
              color: "var(--text-ink)",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={15} />
            <span>Back to Projects</span>
          </button>

          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "var(--accent-peach-deep)",
            }}
          >
            {selectedProject.subtitle}
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            alignItems: "start",
          }}
        >
          <div>
            <ProjectThumbnail
              src={selectedProject.image}
              title={selectedProject.title}
              large
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginTop: "0.85rem",
              }}
            >
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "0.28rem 0.65rem",
                    borderRadius: "999px",
                    background: "var(--bg-peach-soft)",
                    border: "1px solid var(--border-peach)",
                    color: "var(--text-ink)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="view-title" style={{ marginBottom: "0.65rem" }}>
              {selectedProject.title}
            </h2>

            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: "1.2rem",
              }}
            >
              {selectedProject.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                <span>Open Project Link</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: "none" }}
              >
                <FolderGit2 size={15} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="view-card" aria-label="Projects">
      <div className="view-header">
        <span className="view-eyebrow">Selected Work</span>
        <h2 className="view-title">Projects</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
        }}
      >
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0.95rem",
              borderRadius: "18px",
              background: "var(--bg-peach-soft)",
              border: "1px solid var(--border-peach)",
            }}
          >
            <div>
              <div style={{ marginBottom: "0.7rem" }}>
                <ProjectThumbnail src={project.image} title={project.title} />
              </div>

              <span
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  color: "var(--accent-peach-deep)",
                }}
              >
                {project.subtitle}
              </span>

              <h3
                style={{
                  fontSize: "1.06rem",
                  fontWeight: 800,
                  margin: "0.2rem 0 0.45rem",
                  color: "var(--text-ink)",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.83rem",
                  lineHeight: 1.5,
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                }}
              >
                {project.summary}
              </p>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.35rem",
                  marginBottom: "0.75rem",
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "999px",
                      background: "var(--surface-card)",
                      border: "1px solid var(--border-peach)",
                      color: "var(--text-ink)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.38rem 0.75rem",
                    borderRadius: "999px",
                    border: "1px solid var(--border-peach)",
                    background: "var(--surface-card)",
                    color: "var(--text-ink)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Eye size={13} />
                  <span>Details</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.38rem 0.8rem",
                    borderRadius: "999px",
                    background: "var(--accent-peach)",
                    color: "var(--active-icon-text)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <span>Visit Site</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsView;
