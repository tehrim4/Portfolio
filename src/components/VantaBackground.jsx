import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import "./VantaBackground.css";

const THEME_CONFIG = {
  light: {
    backgroundColor: 0xf9dad8, // Misty Rose
    color: 0xb04856, // Slightly richer rose for clear 3D net depth
    points: 10.0,
    maxDistance: 22.0,
    spacing: 16.5,
  },
  dark: {
    backgroundColor: 0xc65c6a, // Old Rose
    color: 0xf9dad8, // Misty Rose
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

    let vantaEffect = null;

    try {
      vantaEffect = NetEffect({
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
    } catch (err) {
      console.warn("Vanta WebGL fallback:", err);
    }

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [theme]);

  return <div ref={bgRef} className="vanta-bg" />;
}

export default VantaBackground;
