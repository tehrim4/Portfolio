import { useEffect, useState, useCallback } from "react";
import { Volume2, ArrowRight, RotateCcw } from "lucide-react";
import "./GreetingView.css";

function GreetingView({ onEnterPortfolio }) {
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [controlsVisible, setControlsVisible] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const getFullMessage = useCallback(() => {
    const hour = new Date().getHours();
    let timeGreeting = "Good evening";
    if (hour < 12) {
      timeGreeting = "Good morning";
    } else if (hour < 18) {
      timeGreeting = "Good afternoon";
    }
    return `${timeGreeting}! I am Tehrim Ansari. Welcome to my website!`;
  }, []);

  const speakGreeting = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(getFullMessage());
    utterance.rate = 0.98;
    utterance.pitch = 1.12;
    window.speechSynthesis.speak(utterance);
  }, [getFullMessage]);

  useEffect(() => {
    const fullMessage = getFullMessage();
    setBubbleVisible(false);
    setTypedText("");
    setControlsVisible(false);

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
  }, [getFullMessage, speakGreeting, replayKey]);

  return (
    <section className="greeting-intro-overlay" aria-label="Welcome Greeting">
      <div className="intro-stage" key={replayKey}>
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
            onClick={() => setReplayKey((prev) => prev + 1)}
            title="Replay greeting"
            aria-label="Replay greeting"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GreetingView;
