import { useState } from "react";
import { floatingNav as s } from "../styles/floatingNav.styles.js";

const navItems = [
  { id: "home",    iconClass: "fa-solid fa-house",    label: "Accueil" },
  { id: "profile", iconClass: "fa-solid fa-user",     label: "Profil"  },
  { id: "code",    iconClass: "fa-solid fa-code",     label: "Code"    },
  { id: "work",    iconClass: "fa-solid fa-briefcase",label: "Projets" },
  { id: "mail",    iconClass: "fa-solid fa-envelope", label: "Contact" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(true);

  return (
    <div className={s.root}>
      {/* ── Ligne décorative SVG ────────────────────────────────────────── */}
      {open && (
        <svg
          className={s.svg}
          width="60"
          height={navItems.length * 68}
          viewBox={`0 0 60 ${navItems.length * 68}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={`M30 24 Q48 ${68} 30 ${68 * 2 - 24} Q12 ${68 * 2 + 44} 30 ${68 * 3 - 24} Q48 ${68 * 3 + 44} 30 ${68 * 4 - 24}`}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#818cf8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* ── Liste des items ──────────────────────────────────────────────── */}
      <div className={s.list}>
        {navItems.map((item, i) => {
          const isActive  = active === item.id;
          const isFirst   = i === 0;
          const translateClass = open ? s.translateClasses[i] : "translate-x-0";
          const delayClass     = s.delayClasses[i];
          const opacityClass   = open || isFirst ? s.itemVisible : s.itemHidden;

          return (
            <div
              key={item.id}
              className={`${s.itemBase} ${translateClass} ${delayClass} ${opacityClass}`}
            >
              {/* Tooltip */}
              {open && (
                console.log("tooltip class:", s.tooltip),
                <span className={s.tooltip}>
                  
                  {item.label}
                </span>
              )}

              {/* Bouton */}
              <button
                onClick={() => {
                  setActive(item.id);
                  if (isFirst) setOpen((prev) => !prev);
                }}
                className={[
                  s.btnBase,
                  isFirst   ? s.btnSizeFirst   : s.btnSizeDefault,
                  isActive  ? s.btnActive       : s.btnDefault,
                ].join(" ")}
                type="button"
              >
                {isActive && <span className={s.activeRing} />}
                {isFirst  && <span className={s.firstRing}  />}
                <i className={`${item.iconClass} text-lg`} aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
