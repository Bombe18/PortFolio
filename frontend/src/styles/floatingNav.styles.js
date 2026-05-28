/**
 * floatingNav.styles.js
 * 100% Tailwind — aucun fichier CSS custom requis.
 * Import : import { floatingNav as s } from "../styles/floatingNav.styles.js";
 */

export const floatingNav = {
  // ─── Conteneur racine ─────────────────────────────────────────────────────
  root: "fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center z-50",

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
  // left:100% + margin → left-full ml-2.5
  // backdrop-filter blur(8px) → backdrop-blur-sm
  // sélecteur .group:hover géré par Tailwind : group-hover:opacity-100
  tooltip: [
    "absolute left-full ml-2.5",
    
    "text-xs font-medium whitespace-nowrap",
    "text-[#e0e7ff]",
    "bg-[rgba(15,23,42,0.9)]",
    "border border-[rgba(129,140,248,0.4)]",
    "backdrop-blur-sm",
    "opacity-0 group-hover:opacity-100",
    "transition-opacity duration-200",
    "pointer-events-none",
    "px-2 py-1 rounded-xl",
  ].join(" "),

  // ─── Bouton ───────────────────────────────────────────────────────────────
  btnBase:        "relative flex items-center justify-center rounded-full transition-all duration-300",
  btnSizeFirst:   "w-[52px] h-[52px]",
  btnSizeDefault: "w-[44px] h-[44px]",

  // État inactif
  // box-shadow: 0 4px 12px rgba(0,0,0,0.4) → shadow-[0_4px_12px_rgba(0,0,0,0.4)]
  // backdrop-filter blur(12px) → backdrop-blur-md
  btnDefault: [
    "bg-[rgba(15,23,42,0.85)]",
    "border border-[rgba(99,102,241,0.25)] border-[1.5px]",
    "text-[#818cf8]",
    "shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
    "backdrop-blur-md",
  ].join(" "),

  // État actif
  // background-image gradient → bg-[linear-gradient(...)]
  // box-shadow multi-couches → shadow-[0_0_18px_...,inset_0_0_12px_...]
  btnActive: [
    "border-[1.5px] border-[rgba(139,92,246,0.8)]",
    "text-[#a5b4fc]",
    "bg-[linear-gradient(135deg,rgba(99,102,241,0.25)_0%,rgba(139,92,246,0.15)_100%)]",
    "shadow-[0_0_18px_rgba(139,92,246,0.35),inset_0_0_12px_rgba(99,102,241,0.1)]",
    "backdrop-blur-md",
  ].join(" "),

  // ─── Anneaux décoratifs ───────────────────────────────────────────────────
  activeRing: "absolute inset-0 rounded-full animate-ping bg-[rgba(167,139,250,0.2)]",
  firstRing:  "absolute inset-[-5px] rounded-full pointer-events-none border border-[rgba(99,102,241,0.2)]",
};
