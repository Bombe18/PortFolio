import { useState, useEffect } from "react";
import { floatingNav as s } from "../styles/floatingNav.styles.js";

const navItems = [
  { id: "home",    target: "home",        iconClass: "fa-solid fa-house",     label: "Accueil" },
  { id: "profile", target: "about",       iconClass: "fa-solid fa-user",      label: "Profil"  },
  { id: "code",    target: "competences", iconClass: "fa-solid fa-code",      label: "Skills"  },
  { id: "work",    target: "projects",    iconClass: "fa-solid fa-briefcase", label: "Projets" },
  { id: "mail",    target: "contact",     iconClass: "fa-solid fa-envelope",  label: "Contact" },
];

function scrollTo(target) {
  const el = document.getElementById(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function FloatingNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen]     = useState(true);

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.target)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const item = navItems.find((n) => n.target === visible[0].target.id);
          if (item) setActive(item.id);
        }
      },
      { root: null, rootMargin: "0px", threshold: [0.25, 0.5, 0.75] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* ── DESKTOP : nav latérale gauche (identique à l'original) ───────────── */
  const DesktopNav = (
    <div className={s.mainNav}>
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
            d={`M30 24 Q48 ${68} 30 ${68*2-24} Q12 ${68*2+44} 30 ${68*3-24} Q48 ${68*3+44} 30 ${68*4-24}`}
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

      <div className={s.list}>
        {navItems.map((item, i) => {
          const isActive      = active === item.id;
          const isFirst       = i === 0;
          const translateClass = open ? s.translateClasses[i] : "translate-x-0";
          const delayClass    = s.delayClasses[i];
          const opacityClass  = open || isFirst ? s.itemVisible : s.itemHidden;
          const iconClass     = isFirst ? (open ? "fa-solid fa-house" : "fa-solid fa-bars") : item.iconClass;

          return (
            <div key={item.id} className={`${s.itemBase} ${translateClass} ${delayClass} ${opacityClass}`}>
              {open && <span className={s.tooltip}>{item.label}</span>}
              <button
                type="button"
                onClick={() => {
                  if (isFirst) {
                    if (!open) { setOpen(true); return; }
                    if (active === item.id) { setOpen(false); return; }
                  }
                  scrollTo(item.target);
                  setActive(item.id);
                }}
                className={[s.btnBase, isFirst ? s.btnSizeFirst : s.btnSizeDefault, isActive ? s.btnActive : s.btnDefault].join(" ")}
              >
                {isActive && <span className={s.activeRing} />}
                {isFirst  && <span className={s.firstRing}  />}
                <i className={`${iconClass} text-lg`} aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* MOBILE : barre fixe en bas  */
  const MobileNav = (
    <nav className={s.mobileNav}>
      {/* ligne décorative top */}
      <div className={s.mobileLine} />

      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => { scrollTo(item.target); setActive(item.id); }}
            className={[s.mobileBtnBase, isActive ? s.mobileBtnActive : s.mobileBtnDefault].join(" ")}
          >
            {isActive && <span className={s.mobileActiveRing} />}
            <i className={`${item.iconClass} text-[18px] leading-none`} aria-hidden="true" />
            <span className={s.mobileBtnLabel}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop uniquement (md+) */}
      <div className="hidden md:block">{DesktopNav}</div>

      {/* Mobile uniquement (< md) */}
      <div className="block md:hidden">{MobileNav}</div>
    </>
  );
}
