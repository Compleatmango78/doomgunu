import { Sparkles } from "lucide-react";

export default function Slide2({ onNext }) {
  return (
    <section className="slide" data-testid="slide-2">
      <div className="center">
        <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          <span className="dot" /> Bölüm 02 · Yıldızlara Bir Şiir <span className="dot" />
        </div>
        <h2 className="h-hero glow-text" style={{ marginTop: 20, fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
          Senin için <em>küçük bir şarkı</em>
        </h2>
      </div>

      <div className="poem-card" style={{ marginTop: 40 }} data-testid="poem-card">
        <div className="poem">
          <div className="stanza">
            Bu gece gökyüzüne bir mesaj bıraktım,<br />
            yıldızların arasına adını yazdım.<br />
            Aysu, sen bir nebula kadar muhteşemsin,<br />
            bir kuyrukluyıldız kadar nadirsin.
          </div>
          <div className="stanza">
            Yaşın bugün bir gezegen daha kazandı,<br />
            yörüngende kahkaha, sevgi ve düşler.<br />
            Hadi gel, bu evrenin kahramanı sensin,<br />
            şov başlasın — pelerini sen takarsın.
          </div>
          <div className="stanza">
            Bazıları yıldızları sayar, kim daha çok diye;<br />
            ben senin gözlerinde sayıyorum onları.<br />
            Çünkü en parlağı orada, senin içinde,<br />
            ve ben hep o ışığın yörüngesindeyim.
          </div>
        </div>
        <div className="signature">— sevgiyle, hep yanından</div>
      </div>

      <p className="lead center" style={{ marginTop: 36, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
        Aysu, seni tanıdığım ilk günden beri etrafında küçük bir ışık var —
        odaya girdiğinde bile yıldızlar kıskançlıktan kıpırdar. Bugün
        senin günün; gülmen, dilek tutman, fazlasıyla şımarman lazım.
        Önümüzdeki yörüngede daha çok kahkaha, daha çok “iyi ki”
        biriktirelim. Şimdi nefesini topla — parti yeni başlıyor.
      </p>

      <div className="center" style={{ marginTop: 44 }}>
        <button
          data-testid="slide-2-next-button"
          className="btn-cosmic"
          onClick={onNext}
        >
          Parti devam ediyor
          <span className="arrow">
            <Sparkles size={12} />
          </span>
        </button>
      </div>
    </section>
  );
}
