import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import "./HomeView.css";

function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

const MASCOT_LINES = [
  "Hi there! 👋 I'm Tehrim's AI buddy!",
  "Check out the 6 projects in the dock! ✨",
  "Try switching Misty Rose & Old Rose themes! 🎨",
  "Let's build something meaningful together! 🚀",
];

function HomeView({ onNavigate }) {
  const greeting = getTimeGreeting();
  const [lineIndex, setLineIndex] = useState(0);
  const [isHopping, setIsHopping] = useState(false);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const stageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = Math.max(-4, Math.min(4, (e.clientX - centerX) / 65));
      const dy = Math.max(-3, Math.min(3, (e.clientY - centerY) / 65));
      setEyeOffset({ x: dx, y: dy });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMascotClick = () => {
    setLineIndex((prev) => (prev + 1) % MASCOT_LINES.length);
    setIsHopping(false);
    requestAnimationFrame(() => setIsHopping(true));
  };

  return (
    <section
      className="view-card home-hero"
      aria-label="Greeting and Introduction"
    >
      <div>
        <div className="greeting-pill">
          <Sparkles size={15} />
          <span>{greeting}! Welcome to my portfolio</span>
        </div>

        <h1 className="hero-name">Hi, I&apos;m Tehrim</h1>
        <p className="hero-role">Frontend Developer &amp; UI/UX Enthusiast</p>

        <p className="hero-summary">
          I combine creativity with technical problem-solving to transform ideas
          into intuitive, visually engaging, and responsive web
          applications—where thoughtful design and clean code work together.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => onNavigate("projects")}
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => onNavigate("about")}
          >
            More About Me
          </button>
        </div>
      </div>

      <div ref={stageRef} className="mascot-stage">
        <div className="mascot-speech-bubble" role="status" aria-live="polite">
          {MASCOT_LINES[lineIndex]}
        </div>

        <button
          type="button"
          className={`mascot-btn ${isHopping ? "bounce" : ""}`}
          onClick={handleMascotClick}
          onAnimationEnd={() => setIsHopping(false)}
          aria-label="Say hello to robot mascot"
        >
          <svg
            className="mascot-svg"
            viewBox="0 0 200 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Antenna */}
            <line
              x1="100"
              y1="18"
              x2="100"
              y2="42"
              stroke="var(--accent-peach)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle
              className="mascot-antenna-glow"
              cx="100"
              cy="14"
              r="7"
              fill="var(--accent-peach)"
              style={{ transformOrigin: "100px 14px" }}
            />

            {/* Ear Nodes */}
            <rect
              x="38"
              y="66"
              width="10"
              height="22"
              rx="5"
              fill="var(--accent-peach)"
            />
            <rect
              x="152"
              y="66"
              width="10"
              height="22"
              rx="5"
              fill="var(--accent-peach)"
            />

            {/* Head */}
            <rect
              x="48"
              y="42"
              width="104"
              height="68"
              rx="24"
              fill="var(--surface-card)"
              stroke="var(--accent-peach)"
              strokeWidth="4"
            />

            {/* Visor Screen */}
            <rect x="60" y="54" width="80" height="44" rx="14" fill="#38181d" />

            {/* Cursor-Tracking Eyes */}
            <ellipse
              className="mascot-eye"
              cx={82 + eyeOffset.x}
              cy={73 + eyeOffset.y}
              rx="6"
              ry="6"
              fill="#f9dad8"
            />
            <ellipse
              className="mascot-eye"
              cx={118 + eyeOffset.x}
              cy={73 + eyeOffset.y}
              rx="6"
              ry="6"
              fill="#f9dad8"
            />

            {/* Rosy Cheeks */}
            <circle cx="71" cy="83" r="4" fill="#c65c6a" opacity="0.65" />
            <circle cx="129" cy="83" r="4" fill="#c65c6a" opacity="0.65" />

            {/* Smile */}
            <path
              d="M91 84 Q100 92 109 84"
              stroke="#f9dad8"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Left Resting Arm */}
            <rect
              x="28"
              y="124"
              width="16"
              height="42"
              rx="8"
              fill="var(--accent-peach)"
            />

            {/* Right Waving Arm */}
            <g className="mascot-wave-arm">
              <rect
                x="154"
                y="96"
                width="16"
                height="42"
                rx="8"
                fill="var(--accent-peach)"
              />
              <circle cx="162" cy="92" r="9" fill="var(--accent-peach-deep)" />
            </g>

            {/* Torso */}
            <rect
              x="52"
              y="118"
              width="96"
              height="66"
              rx="22"
              fill="var(--surface-card)"
              stroke="var(--accent-peach)"
              strokeWidth="4"
            />

            {/* Core Emblem */}
            <circle cx="100" cy="150" r="15" fill="var(--bg-peach-soft)" />
            <circle cx="100" cy="150" r="6.5" fill="var(--accent-peach)" />

            {/* Base Hover Thruster */}
            <rect
              x="74"
              y="190"
              width="52"
              height="10"
              rx="5"
              fill="var(--accent-peach)"
              opacity="0.75"
            />
          </svg>
        </button>

        <span className="mascot-hint">Click the bot to chat!</span>
      </div>
    </section>
  );
}

export default HomeView;
