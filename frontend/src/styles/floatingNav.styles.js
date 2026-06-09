export const floatingNav = {
  // ─── Conteneur racine ─────────────────────────────────────────────────────
 mainNav: "fixed left-[50px] top-1/2 -translate-y-1/2 flex flex-col items-center z-50",

  // ─── SVG décoratif ────────────────────────────────────────────────────────
  svg: "absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none",

  // ─── Liste ────────────────────────────────────────────────────────────────
  list: "flex flex-col items-center gap-3 relative z-10",

  // ─── Wrapper item ─────────────────────────────────────────────────────────
  itemBase:
    "relative flex items-center group transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
  itemVisible: "opacity-100 pointer-events-auto",
  itemHidden:  "opacity-0 pointer-events-none",

  translateClasses: [
    "translate-x-0",
    "-translate-x-[18px]",
    "-translate-x-[32px]",
    "-translate-x-[18px]",
    "translate-x-0",
  ],
  delayClasses: [
    "delay-[0ms]",
    "delay-[60ms]",
    "delay-[120ms]",
    "delay-[180ms]",
    "delay-[240ms]",
  ],

  // ─── Tooltip ──────────────────────────────────────────────────────────────
   tooltip: [
    "absolute left-full ml-[10px]",
    "pl-[10px] pr-[10px]",
    "text-xs font-medium whitespace-nowrap",
    "text-[#e0e7ff]",
    "bg-[rgba(15,23,42,0.9)]",
    "border border-[rgba(129,140,248,0.4)]",
    "backdrop-blur-sm",
    "opacity-0 group-hover:opacity-100",
    "transition-opacity duration-200",
    "pointer-events-none",
    "rounded-full",
  ].join(" "),

  // ─── Bouton ───────────────────────────────────────────────────────────────
  btnBase:        "relative flex items-center justify-center rounded-full transition-all duration-300",
  btnSizeFirst:   "w-[52px] h-[52px]",
  btnSizeDefault: "w-[44px] h-[44px]",

  // État inactif
  btnDefault: [
    "bg-[rgba(15,23,42,0.85)]",
    "border border-[rgba(99,102,241,0.25)] border-[1.5px]",
    "text-slate-100",
    "shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
    "backdrop-blur-md",
  ].join(" "),

  // État actif
  btnActive: [
    "border-[1.5px] border-[rgba(139,92,246,0.8)]",
    "text-white",
    "bg-[linear-gradient(135deg,rgba(99,102,241,0.25)_0%,rgba(139,92,246,0.15)_100%)]",
    "shadow-[0_0_18px_rgba(139,92,246,0.35),inset_0_0_12px_rgba(99,102,241,0.1)]",
    "backdrop-blur-md",
  ].join(" "),

  // ─── Anneaux décoratifs ───────────────────────────────────────────────────
  activeRing: "absolute inset-0 rounded-full animate-ping bg-[rgba(167,139,250,0.2)]",
  firstRing:  "absolute inset-[-5px] rounded-full pointer-events-none border border-[rgba(99,102,241,0.2)]",


 /* ══════════════════════════════════════════════
     MOBILE  –  barre fixe en bas
  ══════════════════════════════════════════════ */

  // Conteneur principal
  mobileNav: [
    "fixed bottom-0 left-0 right-0 z-50",
    "flex items-center justify-around",
    "px-2 pb-[env(safe-area-inset-bottom,0px)]",
    "h-[64px]",
    "bg-[rgba(10,5,32,0.92)]",
    "backdrop-blur-xl",
    "border-t border-[rgba(99,102,241,0.2)]",
  ].join(" "),

  // Ligne dégradée tout en haut du conteneur
  mobileLine: [
    "absolute top-0 left-4 right-4 h-[1px]",
    "bg-[linear-gradient(to_right,transparent,rgba(139,92,246,0.6),rgba(103,232,249,0.6),transparent)]",
    "pointer-events-none",
  ].join(" "),

  // Bouton individuel
  mobileBtnBase: [
    "relative flex flex-col items-center justify-center gap-[3px]",
    "flex-1 h-full",
    "transition-all duration-300",
    "active:scale-90",
  ].join(" "),

  mobileBtnDefault: "text-slate-200",

  mobileBtnActive: [
    "text-white",
  ].join(" "),

  // Label sous l'icône
  mobileBtnLabel: "text-[10px] font-medium leading-none tracking-wide",

  // Halo animate-ping sur le bouton actif
  mobileActiveRing: [
    "absolute inset-[6px] rounded-full",
    "bg-[radial-gradient(circle,rgba(139,92,246,0.25)_0%,transparent_70%)]",
    "animate-ping",
    "pointer-events-none",
  ].join(" "),
};
