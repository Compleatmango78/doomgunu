import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Müzik dosyası buraya: kullanıcının yüklediği MP3 link'ini koy
const TRACK_URL = "https://customer-assets.emergentagent.com/job_cosmic-birthday-13/artifacts/gz92giwf_this-i-love.mp3";
const TRACK_TITLE = "Guns N' Roses — This I Love";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  // Try autoplay on mount; if blocked, wait for first user interaction
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.45;

    const tryPlay = async () => {
      try {
        await a.play();
        setPlaying(true);
        setNeedsTap(false);
      } catch {
        // Autoplay blocked — wait for first user gesture
        setNeedsTap(true);
        const unlock = async () => {
          try {
            await a.play();
            setPlaying(true);
            setNeedsTap(false);
          } catch {}
          window.removeEventListener("pointerdown", unlock);
          window.removeEventListener("keydown", unlock);
        };
        window.addEventListener("pointerdown", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
      }
    };

    if (a.readyState >= 2) tryPlay();
    else a.addEventListener("canplay", tryPlay, { once: true });

    const onErr = () => setReady(false);
    const onCanPlay = () => setReady(true);
    a.addEventListener("error", onErr);
    a.addEventListener("canplay", onCanPlay);
    return () => {
      a.removeEventListener("error", onErr);
      a.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
        setPlaying(true);
      } catch {}
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACK_URL}
        loop
        preload="auto"
        data-testid="bg-music-audio"
      />
      <button
        type="button"
        className="music-toggle"
        onClick={toggle}
        aria-label={playing ? "Müziği duraklat" : "Müziği çal"}
        title={TRACK_TITLE}
        data-testid="music-toggle-button"
      >
        {playing ? <Volume2 size={14} /> : <VolumeX size={14} />}
        <span className="music-label">
          {playing ? "♪ çalıyor" : needsTap ? "dokun & başlat" : "müzik"}
        </span>
      </button>
    </>
  );
}
