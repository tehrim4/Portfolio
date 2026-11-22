import { useEffect, useState } from "react";
import {
  Home,
  User,
  Compass,
  FolderKanban,
  Wrench,
  GraduationCap,
  Award,
  Mail,
} from "lucide-react";
import GreetingView from "./views/GreetingView";
import Navbar from "./components/Navbar";
import SocialDock from "./components/SocialDock";
import VantaBackground from "./components/VantaBackground";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ApproachView from "./views/ApproachView";
import ProjectsView from "./views/ProjectsView";
import SkillsView from "./views/SkillsView";
import EducationView from "./views/EducationView";
import CertificatesView from "./views/CertificatesView";
import ContactView from "./views/ContactView";
import "./App.css";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    color: "#E11D48",
    darkColor: "#FFE4E6",
  },
  {
    id: "about",
    label: "About",
    icon: User,
    color: "#7C3AED",
    darkColor: "#EDE9FE",
  },
  {
    id: "approach",
    label: "Approach",
    icon: Compass,
    color: "#0284C7",
    darkColor: "#E0F2FE",
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderKanban,
    color: "#D97706",
    darkColor: "#FEF3C7",
  },
  {
    id: "skills",
    label: "Skills",
    icon: Wrench,
    color: "#059669",
    darkColor: "#D1FAE5",
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    color: "#4F46E5",
    darkColor: "#E0E7FF",
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Award,
    color: "#DB2777",
    darkColor: "#FCE7F3",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    color: "#EA580C",
    darkColor: "#FFEDD5",
  },
];

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <VantaBackground theme={theme} />
      {!hasEntered ? (
        <GreetingView onEnterPortfolio={() => setHasEntered(true)} />
      ) : (
        <div className="app-shell">
          <Navbar
            items={NAV_ITEMS}
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />

          <main className="main-stage">
            {activeTab === "home" && <HomeView onNavigate={setActiveTab} />}
            {activeTab === "about" && <AboutView />}
            {activeTab === "approach" && <ApproachView />}
            {activeTab === "projects" && <ProjectsView />}
            {activeTab === "skills" && <SkillsView />}
            {activeTab === "education" && <EducationView />}
            {activeTab === "certificates" && <CertificatesView />}
            {activeTab === "contact" && <ContactView />}
          </main>

          <SocialDock theme={theme} />
        </div>
      )}
    </>
  );
}

export default App;
