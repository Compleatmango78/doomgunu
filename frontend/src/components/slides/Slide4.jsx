import { Heart } from "lucide-react";

export default function Slide4() {
  return (
    <section className="slide" data-testid="slide-4">
      <div className="center">
        <div className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          <span className="dot" /> Final · Perde Kapanırken <span className="dot" />
        </div>
        <h2 className="h-hero glow-text" style={{ marginTop: 20 }}>
          İyi ki <em>doğdun</em>, Aysucuk
        </h2>
        <p className="script" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", color: "var(--nebula-gold)", marginTop: 8 }}>
          dünya buradan çok güzel — seninle izleyince bir başka güzel
        </p>
      </div>

      <div className="final-card" style={{ marginTop: 44 }} data-testid="final-message-card">
        <p className="final-message">
          Evet burası şovun sonu, geldiğin için teşekkür ederim. Umarım bu yaş,
          hedeflerini gerçekleştirdiğin bir yaş olur; sevdiklerinle birlikte
          ve mutlu bir şekilde geçirirsin. Başından sonuna birlikte onca anı
          biriktirdik ve bunları seninle biriktirdiğim için kendimle gurur
          duyuyorum. Müthiş bir şeysin çocuk — çok kaliteli bir arkadaş, çok iyi
          bir dostsun. Sen olmasan kim bilir nerede ne yapıyordum, düşünmek bile
          istemiyorum djjsjdjf. Gün gelir hediyeni elimle teslim etmek isterim
          ama şimdilik ben denizden bu kadar. Dünya buradan çok güzel; seninle
          izleyince bir başka güzel. Ama şimdi eve dönme vakti. İstediğin zaman
          geri gelebilirsin, merak etme (sanırım). Ve iyi ki varsın — seviliyorsun.
        </p>
      </div>

      <div className="center" style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 14, alignItems: "center", color: "var(--ink-muted)", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        <Heart size={14} fill="currentColor" /> sevgiyle yapıldı <Heart size={14} fill="currentColor" />
      </div>
    </section>
  );
}
