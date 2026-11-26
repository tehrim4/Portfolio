import { useEffect, useState, useCallback } from "react";
import { Volume2, ArrowRight, RotateCcw } from "lucide-react";
import "./GreetingView.css";

const PREFERRED_FEMALE_VOICES = [
  "google uk english female",
  "google us english",
  "microsoft zira",
  "microsoft aria",
  "microsoft jenny",
  "samantha",
  "victoria",
  "karen",
  "moira",
  "tessa",
  "fiona",
  "female",
  "woman",
];

function pickFemaleVoice() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  for (const preferred of PREFERRED_FEMALE_VOICES) {
    const match = voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith("en") &&
        v.name.toLowerCase().includes(preferred),
    );
    if (match) return match;
  }

  return voices.find((v) => v.lang.toLowerCase().startsWith("en")) || voices[0];
}

function getFullMessage() {
  const hour = new Date().getHours();
  let timeGreeting = "Good evening";
  if (hour < 12) {
    timeGreeting = "Good morning";
  } else if (hour < 18) {
    timeGreeting = "Good afternoon";
  }
  return `${timeGreeting}! I am Tehrim Ansari. Welcome to my website!`;
}

function GreetingStage({ onEnterPortfolio, onReplay }) {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [controlsVisible, setControlsVisible] = useState(false);

  // Preload browser speech voices (Chrome loads them asynchronously)
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.getVoices();
    const handleVoicesChanged = () => window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener(
      "voiceschanged",
      handleVoicesChanged,
    );
    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoicesChanged,
      );
    };
  }, []);

  const speakGreeting = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(getFullMessage());
    const femaleVoice = pickFemaleVoice();
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 0.98;
    utterance.pitch = 1.18;
    window.speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    const fullMessage = getFullMessage();
    let typeInterval;
    let controlsTimeout;

    const startTimeout = setTimeout(() => {
      setBubbleVisible(true);
      speakGreeting();

      let index = 0;
      typeInterval = setInterval(() => {
        index += 1;
        setTypedText(fullMessage.slice(0, index));

        if (index >= fullMessage.length) {
          clearInterval(typeInterval);
          controlsTimeout = setTimeout(() => {
            setControlsVisible(true);
          }, 300);
        }
      }, 36);
    }, 1450);

    return () => {
      clearTimeout(startTimeout);
      if (typeInterval) clearInterval(typeInterval);
      if (controlsTimeout) clearTimeout(controlsTimeout);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [speakGreeting]);

  return (
    <div className="intro-stage">
      {/* Speech Bubble */}
      <div className={`speech-bubble ${bubbleVisible ? "visible" : ""}`}>
        <p className="greeting-text" aria-live="polite">
          {typedText}
          <span className="typing-cursor" aria-hidden="true">
            |
          </span>
        </p>
      </div>

      {/* Robot Entering from Left Side */}
      <div className="robot-wrapper">
        <img
          src="/Waving-robot.png"
          alt="Tehrim Ansari Robot Mascot"
          className="robot-img"
        />
      </div>

      {/* Action Buttons (Hidden until typing completes) */}
      <div className={`intro-controls ${controlsVisible ? "visible" : ""}`}>
        <button
          type="button"
          className="enter-home-btn"
          onClick={onEnterPortfolio}
        >
          <span>Go to Home Page</span>
          <ArrowRight size={18} />
        </button>

        <button
          type="button"
          className="intro-icon-btn"
          onClick={speakGreeting}
          title="Listen to greeting"
          aria-label="Listen to greeting"
        >
          <Volume2 size={19} />
        </button>

        <button
          type="button"
          className="intro-icon-btn"
          onClick={onReplay}
          title="Replay greeting"
          aria-label="Replay greeting"
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}

function GreetingView({ onEnterPortfolio }) {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <section className="greeting-intro-overlay" aria-label="Welcome Greeting">
      <GreetingStage
        key={replayKey}
        onEnterPortfolio={onEnterPortfolio}
        onReplay={() => setReplayKey((prev) => prev + 1)}
      />
    </section>
  );
}

export default GreetingView;
