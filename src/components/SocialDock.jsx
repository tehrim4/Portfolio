import { Mail, PhoneCall } from "lucide-react";
import "./SocialDock.css";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: GithubIcon,
    external: true,
    lightColor: "#181717",
    darkColor: "#FFFFFF",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: LinkedinIcon,
    external: true,
    lightColor: "#0A66C2",
    darkColor: "#70B5FF",
  },
  {
    id: "email",
    label: "Email Me",
    href: "mailto:your.email@example.com",
    icon: Mail,
    external: false,
    lightColor: "#EA4335",
    darkColor: "#FF8A80",
  },
  {
    id: "contact",
    label: "Approach / Call",
    href: "tel:+910000000000",
    icon: PhoneCall,
    external: false,
    lightColor: "#16A34A",
    darkColor: "#6EE7B7",
  },
];

function SocialDock({ theme = "light" }) {
  return (
    <footer className="social-footer">
      <div className="social-dock" aria-label="Contact and social links">
        {SOCIAL_LINKS.map((item) => {
          const IconComponent = item.icon;
          const iconColor = theme === "dark" ? item.darkColor : item.lightColor;

          return (
            <a
              key={item.id}
              href={item.href}
              className="social-link-btn"
              data-tooltip={item.label}
              aria-label={item.label}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              style={{ "--icon-color": iconColor }}
            >
              <IconComponent strokeWidth={2.15} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default SocialDock;
