import { Globe2 } from "lucide-react";

// Placeholder space/dreamy photos — replace `src` with your own photos later.
const PHOTOS = [
  {
    src: "https://customer-assets.emergentagent.com/job_cosmic-birthday-13/artifacts/gq56eam5_image.png",
    caption: "sana ilk yaptığım şey olabilir",
    tilt: "tilt-1",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_cosmic-birthday-13/artifacts/b1jlh1ho_image.png",
    caption: "Zoom toplantımız ve senin profil fotoğrafın",
    tilt: "tilt-2",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_cosmic-birthday-13/artifacts/uurckl60_image.png",
    caption: "eski bilardo zamanları",
    tilt: "tilt-3",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_cosmic-birthday-13/artifacts/k1z05ovk_image.png",
    caption: "bana yaptığın logo",
    tilt: "tilt-4",
  },
];

export default function Slide3({ onNext }) {
  return (
    <section className="slide" data-testid="slide-3">
      <div className="center">
        <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          <span className="dot" /> Bölüm 03 · Anılar Galaksisi <span className="dot" />
        </div>
        <h2 className="h-hero glow-text" style={{ marginTop: 20, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
          Birlikte topladığımız <em>küçük yıldızlar</em>
        </h2>
        <p className="lead" style={{ marginTop: 18, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
          Her biri ayrı bir hatıra. Üzerine gelirsen biraz daha yakına gelirler.
        </p>
      </div>

      <div
        style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "36px 28px",
        }}
        data-testid="photo-grid"
      >
        {PHOTOS.map((p, i) => (
          <div key={i} className={`polaroid ${p.tilt}`} data-testid={`photo-${i + 1}`}>
            <div className="tape" />
            <div className="frame">
              <img src={p.src} alt={p.caption} loading="lazy" />
            </div>
            <div className="caption">{p.caption}</div>
          </div>
        ))}
      </div>

      <div className="center" style={{ marginTop: 56 }}>
        <button
          data-testid="slide-3-next-button"
          className="btn-cosmic"
          onClick={onNext}
        >
          Dünya buradan ne kadar güzel
          <span className="arrow">
            <Globe2 size={12} />
          </span>
        </button>
      </div>
    </section>
  );
}
