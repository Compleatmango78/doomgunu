import { useEffect, useState, useCallback } from "react";
import Slide1 from "../components/slides/Slide1";
import Slide2 from "../components/slides/Slide2";
import Slide3 from "../components/slides/Slide3";
import Slide4 from "../components/slides/Slide4";
import CosmosBackground from "../components/CosmosBackground";
import Confetti from "../components/Confetti";
import { ArrowLeft, RotateCcw } from "lucide-react";

const TOTAL = 4;

export default function Slideshow() {
  const [step, setStep] = useState(1);

  const next = useCallback(() => setStep((s) => Math.min(TOTAL, s + 1)), []);
  const back = useCallback(() => setStep((s) => Math.max(1, s - 1)), []);
  const restart = useCallback(() => setStep(1), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, back]);

  return (
    <div data-testid="birthday-slideshow">
      <CosmosBackground />
      {step === 4 && <Confetti />}

      {step > 1 && (
        <button
          data-testid="nav-back-button"
          className="btn-ghost nav-back"
          onClick={back}
          aria-label="Geri"
        >
          <ArrowLeft size={14} /> Geri
        </button>
      )}
      {step > 1 && (
        <button
          data-testid="nav-restart-button"
          className="btn-ghost nav-restart"
          onClick={restart}
          aria-label="Baştan başla"
        >
          <RotateCcw size={14} /> Baştan
        </button>
      )}

      <main className="stage">
        {step === 1 && <Slide1 onNext={next} />}
        {step === 2 && <Slide2 onNext={next} />}
        {step === 3 && <Slide3 onNext={next} />}
        {step === 4 && <Slide4 />}
      </main>

      <div className="progress" data-testid="progress-indicator" aria-hidden="true">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div key={i} className={`pip ${i + 1 === step ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
}
