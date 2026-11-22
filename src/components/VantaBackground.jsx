import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import "./VantaBackground.css";

const THEME_CONFIG = {
  light: {
    backgroundColor: 0xf9dad8, // Misty Rose[cite: 2]
    color: 0xc65c6a, // Old Rose[cite: 2]
    points: 9.0,
    maxDistance: 21.0,
    spacing: 17.0,
  },
  dark: {
    backgroundColor: 0xc65c6a, // Old Rose[cite: 2]
    color: 0xf9dad8, // Misty Rose[cite: 2]
    points: 9.0,
    maxDistance: 21.0,
    spacing: 17.0,
  },
};

function VantaBackground({ theme = "light" }) {
  const bgRef = useRef(null);

  useEffect(() => {
    window.THREE = THREE;
    const NetEffect =
      typeof NET === "function" ? NET : window.VANTA && window.VANTA.NET;

    if (!NetEffect || !bgRef.current) return;

    const activeConfig = THEME_CONFIG[theme] || THEME_CONFIG.light;

    const vantaEffect = NetEffect({
      el: bgRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      ...activeConfig,
    });

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [theme]);

  return <div ref={bgRef} className="vanta-bg" />;
}

export default VantaBackground;
