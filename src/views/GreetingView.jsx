import { useEffect, useState, useCallback, useRef } from "react";
import { Volume2, ArrowRight, RotateCcw } from "lucide-react";
import "./GreetingView.css";

function getTimeGreeting(hour = new Date().getHours()) {
  if (hour >= 5 && hour < 12) return "Good morning!";
  if (hour >= 12 && hour < 17) return "Good afternoon!";
  if (hour >= 17 && hour <= 23) return "Good evening!";
  return "Welcome!";
}

function GreetingView({ onEnterPortfolio }) {
  const fullMessage = `${getTimeGreeting()} I am Tehrim Ansari. Welcome to my website!`;

  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  const typeIntervalRef = useRef(null);
  const doneTimeoutRef = useRef(null);

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const clearTimers = useCallback(() => {
    if (typeIntervalRef.current) {
      clearInterval(typeIntervalRef.current);
      typeIntervalRef.current = null;
    }
    if (doneTimeoutRef.current) {
      clearTimeout(doneTimeoutRef.current);
      doneTimeoutRef.current = null;
    }
  }, []);

  const finishTypingNow = useCallback(() => {
    clearTimers();
    setBubbleVisible(true);
    setTypedText(fullMessage);
    setTypingDone(true);
  }, [clearTimers, fullMessage]);

  const speakGreeting = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(fullMessage);
    utterance.rate = 1.02;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  }, [fullMessage, stopSpeech]);

  const handleEnter = useCallback(() => {
    clearTimers();
    stopSpeech();
    onEnterPortfolio?.();
  }, [clearTimers, stopSpeech, onEnterPortfolio]);

  const handleReplay = useCallback(() => {
    clearTimers();
    stopSpeech();
    setReplayKey((prev) => prev + 1);
  }, [clearTimers, stopSpeech]);

  useEffect(() => {
    setBubbleVisible(false);
    setTypedText("");
    setTypingDone(false);

    const startTimeout = setTimeout(() => {
      setBubbleVisible(true);

      let index = 0;
      typeIntervalRef.current = setInterval(() => {
        index += 1;
        setTypedText(fullMessage.slice(0, index));

        if (index >= fullMessage.length) {
          clearInterval(typeIntervalRef.current);
          typeIntervalRef.current = null;
          doneTimeoutRef.current = setTimeout(() => {
            setTypingDone(true);
          }, 180);
        }
      }, 20);
    }, 450);

    return () => {
      clearTimeout(startTimeout);
      clearTimers();
      stopSpeech();
    };
  }, [fullMessage, replayKey, clearTimers, stopSpeech]);

  return (
    <section className="greeting-intro-overlay" aria-label="Welcome Greeting">
      <div className="intro-stage" key={replayKey}>
        {/* Speech Bubble (click to show full greeting immediately) */}
        <div
          className={`speech-bubble ${bubbleVisible ? "visible" : ""}`}
          onClick={finishTypingNow}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              finishTypingNow();
            }
          }}
          title="Click to complete message"
        >
          <p className="greeting-text" aria-live="polite">
            {typedText}
            {!typingDone && (
              <span className="typing-cursor" aria-hidden="true">
                |
              </span>
            )}
          </p>
        </div>

        {/* Robot Entering from Left Side */}
        <div className="robot-wrapper">
          <img
            src="/Waving-robot.png"
            alt="Tehrim Ansari Robot Mascot"
            className="robot-img"
            decoding="async"
          />
        </div>

        {/* Action Buttons */}
        <div
          className={`intro-controls ${typingDone ? "visible is-ready" : ""}`}
        >
          <button
            type="button"
            className="enter-home-btn"
            onClick={handleEnter}
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
            onClick={handleReplay}
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
