import { Rocket } from "lucide-react";

export default function Slide1({ onNext }) {
  return (
    <section className="slide center" data-testid="slide-1">
      <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
        <span className="dot" /> Bölüm 01 · Şovun Başlangıcı <span className="dot" />
      </div>

      <h1 className="h-hero glow-text" style={{ marginTop: 28 }}>
        Merhaba <em>Aysucuk</em>,
        <br />
        Şov başlasın mı?
      </h1>

      <p className="lead" style={{ marginTop: 24, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
        Bu gece sahne senin, yıldızlar fonun. Kemerini bağla — bir
        yörüngeye birlikte çıkıyoruz.
      </p>

      <div style={{ marginTop: 48 }}>
        <button
          data-testid="slide-1-next-button"
          className="btn-cosmic"
          onClick={onNext}
        >
          Hadi uzaya çıkalım
          <span className="arrow">
            <Rocket size={12} />
          </span>
        </button>
      </div>

      <div className="script" style={{ marginTop: 56, color: "var(--ink-muted)", fontSize: "1.25rem" }}>
        ↓ veya boşluk tuşuna bas
      </div>
    </section>
  );
}
