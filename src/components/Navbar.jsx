import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

function Navbar({ items, activeTab, onSelectTab, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <nav className="nav-dock" aria-label="Primary navigation">
        {items.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;

          const iconColor = isActive
            ? "#1e1713"
            : isDark
              ? item.darkColor
              : item.color;

          return (
            <button
              key={item.id}
              type="button"
              className={`nav-icon-btn ${isActive ? "active" : ""}`}
              data-tooltip={item.label}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onSelectTab(item.id)}
              style={{ color: iconColor }}
            >
              <IconComponent size={20} strokeWidth={2.1} />
            </button>
          );
        })}

        <span className="nav-divider" aria-hidden="true" />

        <button
          type="button"
          className="nav-icon-btn theme-toggle"
          data-tooltip={isDark ? "Light Mode" : "Dark Mode"}
          aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          onClick={onToggleTheme}
        >
          {isDark ? <Sun strokeWidth={2} /> : <Moon strokeWidth={2} />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
