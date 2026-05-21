import { useEffect, useState } from "react";

function getNextBirthday() {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, 4, 28, 0, 0, 0); // May = 4
  if (target <= now) target = new Date(year + 1, 4, 28, 0, 0, 0);
  return target;
}

function diff(target) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [target] = useState(getNextBirthday);
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "gün", value: t.days },
    { label: "saat", value: t.hours },
    { label: "dakika", value: t.minutes },
    { label: "saniye", value: t.seconds },
  ];

  return (
    <div className="countdown" data-testid="birthday-countdown">
      <div className="countdown-grid">
        {units.map((u) => (
          <div className="cd-unit" key={u.label}>
            <div className="cd-value" data-testid={`cd-${u.label}`}>
              {String(u.value).padStart(2, "0")}
            </div>
            <div className="cd-label">{u.label}</div>
          </div>
        ))}
      </div>
      <div className="cd-tagline">seneye görüşmek üzere</div>
    </div>
  );
}
