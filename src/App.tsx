/* eslint-disable */
// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  Navigation,
  MapPin,
  Package,
  Camera,
  CheckCircle2,
  AlertTriangle,
  Wallet,
  User,
  Home,
  ChevronRight,
  Clock,
  ShieldCheck,
  Power,
  Crosshair,
  Bike,
  Truck,
  ArrowRight,
  HelpCircle,
  Upload,
  ArrowLeft,
  Check,
  Info,
  X,
  Settings,
  Scan,
  ChevronDown,
  ChevronUp,
  Landmark,
  Loader2,
  Phone,
  Star,
  BarChart2,
  Route,
  Award,
  Box,
  MessageCircle,
  QrCode,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Car,
  Hash,
  Calendar,
  Users,
  Building2,
  FileCheck,
  FileText,
  Timer,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════ */
const C = {
  // Brand
  purple: "#A767A7",
  purpleDark: "#7D3F7D",
  purpleDeep: "#5C2D5C",
  purpleLight: "#C894C8",
  purplePale: "#F5ECF5",
  purpleMid: "#EAD5EA",
  yellow: "#F7BD1E",
  yellowDark: "#D9A416",
  yellowPale: "#FFF8E1",
  // Neutrals
  ink: "#1E1A2E",
  charcoal: "#3D3550",
  slate: "#6E6783",
  mist: "#A89EBA",
  silver: "#D8D3E3",
  pearl: "#EDE9F5",
  snow: "#F8F7FC",
  white: "#FFFFFF",
  // Semantic
  green: "#16A34A",
  greenPale: "#DCFCE7",
  greenLight: "#4ADE80",
  red: "#DC2626",
  redPale: "#FEE2E2",
  amber: "#D97706",
  amberPale: "#FEF3C7",
  blue: "#2563EB",
  bluePale: "#EFF6FF",
  orange: "#EA580C",
  orangePale: "#FFF0E6",
};

/* ═══════════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════════ */
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *,*::before,*::after{font-family:'Plus Jakarta Sans',sans-serif!important;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
    .sh::-webkit-scrollbar{display:none;}.sh{-ms-overflow-style:none;scrollbar-width:none;}
    .enter{animation:enter .28s ease both;}
    @keyframes enter{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}
    .rise{animation:rise .32s cubic-bezier(.34,1.1,.64,1) both;}
    @keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
    .sheet{animation:sheet .35s cubic-bezier(.32,.72,0,1) both;}
    @keyframes sheet{from{transform:translateY(100%)}to{transform:none}}
    .fade{animation:fade .24s ease both;}
    @keyframes fade{from{opacity:0}to{opacity:1}}
    .press{cursor:pointer;transition:transform .14s,opacity .14s;}
    .press:active{transform:scale(.96);opacity:.85;}
    .breathe{animation:breathe 2.4s ease-in-out infinite;}
    @keyframes breathe{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.07);opacity:.9}}
    .pulse{animation:pulse 2s ease infinite;}
    @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(22,163,74,.55)}65%{box-shadow:0 0 0 11px rgba(22,163,74,0)}100%{box-shadow:0 0 0 0 rgba(22,163,74,0)}}
    .spin{animation:spin 1s linear infinite;}
    @keyframes spin{to{transform:rotate(360deg)}}
    .pop{animation:pop .4s cubic-bezier(.34,1.5,.64,1) both;}
    @keyframes pop{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}
    input,select{font-size:15px!important;}
    input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;}
  `}</style>
);

/* ═══════════════════════════════════════════════════════════
   PRIMITIVES
═══════════════════════════════════════════════════════════ */
const Screen = ({ children, bg = C.white }) => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: bg,
      overflow: "hidden",
      position: "relative",
    }}
  >
    {children}
  </div>
);

const SBar = ({ dark = false }) => (
  <div
    style={{
      padding: "10px 22px 5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
    }}
  >
    <span
      style={{ fontSize: 13, fontWeight: 700, color: dark ? C.white : C.ink }}
    >
      9:41
    </span>
    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
      {[4, 6, 8, 10].map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: h,
            borderRadius: 2,
            background: dark ? "rgba(255,255,255,.8)" : C.slate,
          }}
        />
      ))}
      <svg
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        style={{ margin: "0 2px" }}
      >
        <circle
          cx="7"
          cy="9"
          r="1.2"
          fill={dark ? "rgba(255,255,255,.8)" : C.slate}
        />
        <path
          d="M4.5 6.5C5.3 5.7 6.1 5.2 7 5.2s1.7.5 2.5 1.3"
          stroke={dark ? "rgba(255,255,255,.8)" : C.slate}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M2 4C3.5 2.5 5.1 1.5 7 1.5S10.5 2.5 12 4"
          stroke={dark ? "rgba(255,255,255,.8)" : C.slate}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <div
          style={{
            width: 21,
            height: 10,
            borderRadius: 3,
            border: `1.5px solid ${dark ? "rgba(255,255,255,.6)" : C.slate}`,
            padding: "1.5px 2px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "72%",
              height: "100%",
              borderRadius: 1.5,
              background: dark ? "rgba(255,255,255,.8)" : C.slate,
            }}
          />
        </div>
        <div
          style={{
            width: 2,
            height: 5,
            background: dark ? "rgba(255,255,255,.4)" : C.silver,
          }}
        />
      </div>
    </div>
  </div>
);

const TBar = ({ title, onBack, right, dark = false, borderless = false }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 20px 12px",
      background: dark ? "transparent" : C.white,
      borderBottom: borderless || dark ? "none" : `1px solid ${C.silver}`,
      flexShrink: 0,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {onBack && (
        <button
          onClick={onBack}
          className="press"
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            background: dark ? "rgba(255,255,255,.15)" : C.snow,
            border: dark
              ? "1px solid rgba(255,255,255,.2)"
              : `1px solid ${C.silver}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: dark ? C.white : C.charcoal,
          }}
        >
          <ArrowLeft size={17} />
        </button>
      )}
      <h1
        style={{
          fontSize: 17,
          fontWeight: 800,
          color: dark ? C.white : C.ink,
          margin: 0,
          letterSpacing: "-.02em",
        }}
      >
        {title}
      </h1>
    </div>
    {right || <div style={{ width: 36 }} />}
  </div>
);

const Logo = ({ white = false, size = 22 }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      userSelect: "none",
    }}
  >
    <span
      style={{
        fontSize: size,
        fontWeight: 900,
        letterSpacing: "-.04em",
        color: white ? C.white : C.purple,
      }}
    >
      av<span style={{ color: C.yellow }}>aa</span>n
    </span>
    <span
      style={{
        background: white ? "rgba(255,255,255,.18)" : C.ink,
        border: white ? "1px solid rgba(255,255,255,.25)" : "none",
        color: C.white,
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: ".1em",
        padding: "3px 7px",
        borderRadius: 6,
        textTransform: "uppercase",
      }}
    >
      Partner
    </span>
  </div>
);

const Field = ({
  label,
  placeholder,
  type = "text",
  value,
  icon,
  note,
  right,
}) => {
  const [show, setShow] = useState(false);
  const isPwd = type === "password";
  return (
    <div>
      {label && (
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: C.slate,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            margin: "0 0 7px",
          }}
        >
          {label}
        </p>
      )}
      <div style={{ position: "relative" }}>
        {icon && (
          <div
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: C.mist,
              display: "flex",
              pointerEvents: "none",
            }}
          >
            {icon}
          </div>
        )}
        <input
          type={isPwd ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          defaultValue={value}
          style={{
            width: "100%",
            background: C.snow,
            border: `1.5px solid ${C.silver}`,
            borderRadius: 14,
            padding: `13px ${isPwd || right ? "44px" : "15px"} 13px ${icon ? "42px" : "15px"}`,
            fontSize: 15,
            fontWeight: 500,
            color: C.ink,
            outline: "none",
            transition: "border-color .2s",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = C.purple;
            e.target.style.background = C.white;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = C.silver;
            e.target.style.background = C.snow;
          }}
        />
        {isPwd && (
          <button
            onClick={() => setShow((s) => !s)}
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: C.mist,
              cursor: "pointer",
              padding: 0,
              display: "flex",
            }}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
        {right && !isPwd && (
          <div
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {right}
          </div>
        )}
      </div>
      {note && (
        <p style={{ fontSize: 11, color: C.mist, margin: "5px 0 0 2px" }}>
          {note}
        </p>
      )}
    </div>
  );
};

const Select = ({ label, options }) => (
  <div>
    {label && (
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: C.slate,
          textTransform: "uppercase",
          letterSpacing: ".08em",
          margin: "0 0 7px",
        }}
      >
        {label}
      </p>
    )}
    <div style={{ position: "relative" }}>
      <select
        style={{
          width: "100%",
          background: C.snow,
          border: `1.5px solid ${C.silver}`,
          borderRadius: 14,
          padding: "13px 40px 13px 15px",
          fontSize: 15,
          fontWeight: 500,
          color: C.ink,
          outline: "none",
          appearance: "none",
          WebkitAppearance: "none",
        }}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown
        size={16}
        color={C.mist}
        style={{
          position: "absolute",
          right: 14,
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  </div>
);

const Pill = ({ label, color, bg, dot = false }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 10,
      fontWeight: 700,
      color,
      background: bg,
      padding: "4px 10px",
      borderRadius: 999,
      textTransform: "uppercase",
      letterSpacing: ".07em",
    }}
  >
    {dot && (
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
    )}
    {label}
  </span>
);

/* Primary action button */
const Btn = ({
  label,
  onClick,
  variant = "primary",
  icon,
  disabled = false,
  small = false,
}) => {
  const v =
    {
      primary: {
        background: disabled ? C.silver : C.purple,
        color: C.white,
        border: "none",
        boxShadow: disabled ? "none" : `0 6px 20px ${C.purple}44`,
      },
      dark: {
        background: C.ink,
        color: C.white,
        border: "none",
        boxShadow: `0 4px 14px rgba(30,26,46,.3)`,
      },
      yellow: {
        background: C.yellow,
        color: C.ink,
        border: "none",
        boxShadow: `0 6px 20px ${C.yellow}55`,
      },
      outline: {
        background: "transparent",
        color: C.purple,
        border: `1.5px solid ${C.purple}`,
      },
      ghost: {
        background: "none",
        color: C.mist,
        border: "none",
        boxShadow: "none",
      },
      danger: {
        background: C.redPale,
        color: C.red,
        border: `1px solid #FECACA`,
      },
      green: {
        background: C.green,
        color: C.white,
        border: "none",
        boxShadow: `0 6px 20px ${C.green}44`,
      },
    }[variant] || {};
  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className="press"
      style={{
        width: "100%",
        borderRadius: 18,
        padding: small ? "12px" : "16px",
        fontWeight: 700,
        fontSize: small ? 13 : 15,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        ...v,
      }}
    >
      {icon}
      {label}
    </button>
  );
};

/* Slide-to-confirm button */
const SlideBtn = ({ label, onComplete, color = C.purple }) => {
  const [done, setDone] = useState(false);
  const handle = () => {
    setDone(true);
    setTimeout(onComplete, 700);
  };
  return (
    <div
      onClick={handle}
      className="press"
      style={{
        background: done ? C.green : C.ink,
        borderRadius: 22,
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        position: "relative",
        overflow: "hidden",
        transition: "background .4s",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          background: done ? "rgba(255,255,255,.25)" : color,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background .3s",
          flexShrink: 0,
        }}
      >
        {done ? (
          <Check size={22} color={C.white} />
        ) : (
          <ChevronRight size={22} color={C.white} />
        )}
      </div>
      <p
        style={{
          flex: 1,
          textAlign: "center",
          color: C.white,
          fontWeight: 800,
          fontSize: 14,
          margin: 0,
          letterSpacing: ".02em",
          paddingRight: 48,
        }}
      >
        {done ? "Confirmed!" : label}
      </p>
    </div>
  );
};

/* FAQ accordion */
const FAQ = ({ q, a }) => {
  const [o, set] = useState(false);
  return (
    <div
      style={{
        border: `1.5px solid ${o ? C.purple : C.silver}`,
        borderRadius: 16,
        overflow: "hidden",
        background: o ? C.purplePale : C.white,
        transition: "all .2s",
      }}
    >
      <button
        onClick={() => set((p) => !p)}
        style={{
          width: "100%",
          padding: "14px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: C.ink,
            paddingRight: 12,
            lineHeight: 1.45,
          }}
        >
          {q}
        </span>
        {o ? (
          <ChevronUp size={16} color={C.purple} style={{ flexShrink: 0 }} />
        ) : (
          <ChevronDown size={16} color={C.mist} style={{ flexShrink: 0 }} />
        )}
      </button>
      {o && (
        <p
          style={{
            padding: "0 16px 14px",
            fontSize: 13,
            color: C.charcoal,
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   ANIMATED MAP
═══════════════════════════════════════════════════════════ */
const MockMap = ({ from, to, color = C.purple, height = 210 }) => {
  const [pos, setPos] = useState(0);
  const pathRef = useRef(null);
  const [dot, setDot] = useState({ x: 55, y: 190 });
  useEffect(() => {
    const id = setInterval(() => setPos((p) => (p >= 1 ? 0 : p + 0.005)), 55);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (!pathRef.current) return;
    try {
      const l = pathRef.current.getTotalLength();
      const pt = pathRef.current.getPointAtLength(l * pos);
      setDot({ x: pt.x, y: pt.y });
    } catch (e) {}
  }, [pos]);
  const W = 390,
    H = height;
  const road = `M 55 ${H - 20} C 80 ${H - 70}, 160 ${H - 55}, 200 ${H - 105} S 310 ${H - 155}, ${W - 35} 35`;
  return (
    <div
      style={{
        width: "100%",
        height: H,
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        border: `1.5px solid ${C.silver}`,
      }}
    >
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ display: "block" }}
      >
        <rect width={W} height={H} fill="#EAF0F5" />
        {[35, 80, 125, 170].map((y) => (
          <rect
            key={y}
            x="0"
            y={y}
            width={W}
            height="10"
            rx="2"
            fill="#D8E1E8"
          />
        ))}
        {[55, 120, 190, 260, 330].map((x) => (
          <rect
            key={x}
            x={x}
            y="0"
            width="8"
            height={H}
            rx="2"
            fill="#D8E1E8"
          />
        ))}
        {[
          [8, 45, 40, 28],
          [68, 45, 44, 28],
          [125, 8, 38, 22],
          [170, 8, 50, 22],
          [240, 8, 42, 22],
          [308, 8, 44, 22],
          [8, 100, 40, 20],
          [68, 100, 44, 20],
          [125, 93, 44, 20],
          [178, 100, 40, 20],
          [230, 100, 50, 20],
          [8, 145, 42, 20],
          [68, 145, 44, 20],
          [125, 138, 44, 22],
          [178, 145, 42, 22],
        ].map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="4"
            fill="#C9D4DC"
            opacity=".8"
          />
        ))}
        <path
          d={road}
          fill="none"
          stroke="rgba(0,0,0,.08)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d={road}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="10 5"
        />
        <path ref={pathRef} d={road} fill="none" stroke="none" />
        <circle
          cx="55"
          cy={H - 20}
          r="11"
          fill={C.white}
          stroke={C.green}
          strokeWidth="3"
        />
        <circle cx="55" cy={H - 20} r="5" fill={C.green} />
        <circle cx={W - 35} cy="35" r="13" fill={color} />
        <text x={W - 35} y="41" textAnchor="middle" fontSize="14" fill="white">
          📍
        </text>
        <circle cx={dot.x} cy={dot.y} r="17" fill={color} opacity=".15" />
        <circle
          cx={dot.x}
          cy={dot.y}
          r="10"
          fill={C.white}
          stroke={color}
          strokeWidth="3"
        />
        <circle cx={dot.x} cy={dot.y} r="4.5" fill={color} />
      </svg>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 12,
          background: C.white,
          borderRadius: 10,
          padding: "5px 10px",
          boxShadow: "0 2px 8px rgba(0,0,0,.12)",
          maxWidth: "47%",
        }}
      >
        <p
          style={{
            fontSize: 9,
            color: C.mist,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".06em",
            margin: 0,
          }}
        >
          From
        </p>
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: C.ink,
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {from}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: color,
          borderRadius: 10,
          padding: "5px 10px",
          maxWidth: "47%",
        }}
      >
        <p
          style={{
            fontSize: 9,
            color: "rgba(255,255,255,.7)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".06em",
            margin: 0,
          }}
        >
          To
        </p>
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: C.white,
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {to}
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: C.white,
          borderRadius: 10,
          padding: "5px 11px",
          boxShadow: "0 2px 10px rgba(0,0,0,.14)",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Navigation size={12} color={color} />
        <span style={{ fontSize: 11, fontWeight: 800, color: C.ink }}>
          ~12 min
        </span>
      </div>
    </div>
  );
};

/* Full-screen map with slider */
const FullMap = ({
  from,
  to,
  color = C.purple,
  sliderLabel,
  onSlide,
  onBack,
}) => (
  <div
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      background: "#EAF0F5",
    }}
  >
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      <MockMap from={from} to={to} color={color} height={760} />
      {/* Nav overlay */}
      {onBack && (
        <button
          onClick={onBack}
          className="press"
          style={{
            position: "absolute",
            top: 60,
            left: 16,
            width: 40,
            height: 40,
            background: "rgba(255,255,255,.92)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,.15)",
            border: "none",
            color: C.ink,
          }}
        >
          <ArrowLeft size={18} />
        </button>
      )}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(10px)",
          borderRadius: 14,
          padding: "8px 16px",
          boxShadow: "0 2px 10px rgba(0,0,0,.12)",
          display: "flex",
          alignItems: "center",
          gap: 7,
        }}
      >
        <Navigation size={13} color={color} />
        <span style={{ fontSize: 12, fontWeight: 800, color: C.ink }}>
          En route · ~12 min
        </span>
      </div>
      {/* Map action buttons */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {["🗺️", "⊕", "⊖"].map((e, i) => (
          <div
            key={i}
            style={{
              width: 40,
              height: 40,
              background: "rgba(255,255,255,.92)",
              borderRadius: 11,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,.12)",
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
    {/* Slide-to-confirm */}
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "0 20px 36px",
        background: `linear-gradient(transparent,rgba(255,255,255,.97) 35%)`,
      }}
    >
      <SlideBtn label={sliderLabel} onComplete={onSlide} color={color} />
    </div>
  </div>
);

/* Sheet wrapper */
const Sheet = ({ children, onClose, showHandle = true }) => (
  <div
    className="fade"
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(20,16,38,.58)",
      backdropFilter: "blur(5px)",
      display: "flex",
      flexDirection: "column",
      zIndex: 20,
    }}
  >
    <div style={{ flex: 1 }} onClick={onClose} />
    <div
      className="sheet"
      style={{
        background: C.white,
        borderRadius: "30px 30px 0 0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        maxHeight: "92%",
      }}
    >
      {showHandle && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "12px 0 4px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 40,
              height: 4,
              borderRadius: 2,
              background: C.silver,
            }}
          />
        </div>
      )}
      {children}
    </div>
  </div>
);

/* Countdown timer hook */
const useCountdown = (minutes) => {
  const total = minutes * 60;
  const [sec, setSec] = useState(total);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(sec / 60),
    s = sec % 60;
  const pct = (sec / total) * 100;
  const urgent = sec < 300;
  return { m, s, pct, urgent, formatted: `${m}:${String(s).padStart(2, "0")}` };
};

/* ═══════════════════════════════════════════════════════════
   DASHBOARD TAB (Screen 7)
═══════════════════════════════════════════════════════════ */
const DashboardScreen = ({ onBack }) => {
  const [period, setPeriod] = useState("Today");
  const data = {
    Today: {
      earn: 2500,
      week: 8750,
      month: 28450,
      pickups: 12,
      bags: 58,
      kgs: 485,
      km: 87,
      cr: 98.5,
      otp: 96.2,
    },
    "This Week": {
      earn: 8750,
      week: 8750,
      month: 28450,
      pickups: 58,
      bags: 240,
      kgs: 2100,
      km: 380,
      cr: 97.8,
      otp: 95.1,
    },
    "This Month": {
      earn: 28450,
      week: 8750,
      month: 28450,
      pickups: 215,
      bags: 890,
      kgs: 7800,
      km: 1450,
      cr: 98.1,
      otp: 96.8,
    },
    "All Time": {
      earn: 142000,
      week: 8750,
      month: 28450,
      pickups: 980,
      bags: 3200,
      kgs: 28000,
      km: 5600,
      cr: 97.9,
      otp: 95.9,
    },
  };
  const d = data[period];
  return (
    <div
      className="enter"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div style={{ flexShrink: 0, background: C.white }}>
        <SBar />
        <TBar title="Dashboard" onBack={onBack} />
      </div>
      <div
        style={{ flex: 1, overflowY: "auto", padding: "16px" }}
        className="sh"
      >
        {/* Earnings hero */}
        <div
          style={{
            background: `linear-gradient(150deg,${C.purpleDeep},${C.purple})`,
            borderRadius: 26,
            padding: "22px",
            marginBottom: 16,
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 10px 32px ${C.purple}44`,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -50,
              top: -50,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "rgba(255,255,255,.05)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -30,
              bottom: -30,
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "rgba(255,255,255,.04)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "rgba(255,255,255,.5)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              margin: "0 0 6px",
            }}
          >
            Today's Earnings
          </p>
          <p
            style={{
              fontSize: 46,
              fontWeight: 900,
              color: C.yellow,
              margin: "0 0 20px",
              letterSpacing: "-.04em",
              lineHeight: 1,
            }}
          >
            ₹{d.earn.toLocaleString()}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              borderTop: "1px solid rgba(255,255,255,.12)",
              paddingTop: 16,
            }}
          >
            {[
              { l: "This Week", v: `₹${d.week.toLocaleString()}` },
              { l: "This Month", v: `₹${d.month.toLocaleString()}` },
            ].map((s) => (
              <div key={s.l}>
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,.42)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".09em",
                    margin: "0 0 5px",
                  }}
                >
                  {s.l}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.white,
                    margin: 0,
                    letterSpacing: "-.02em",
                  }}
                >
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Period filter */}
        <p
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: C.ink,
            margin: "0 0 12px",
          }}
        >
          Summary
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
            overflowX: "auto",
          }}
          className="sh"
        >
          {["Today", "This Week", "This Month", "All Time"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="press"
              style={{
                padding: "9px 18px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                whiteSpace: "nowrap",
                border: "none",
                cursor: "pointer",
                transition: "all .2s",
                flexShrink: 0,
                background: period === p ? C.purple : C.snow,
                color: period === p ? C.white : C.slate,
                boxShadow: period === p ? `0 4px 12px ${C.purple}44` : "none",
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Stats 2×2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {[
            {
              I: <Box size={22} color={C.purple} />,
              bg: C.purplePale,
              val: d.pickups,
              lbl: "Pickups",
            },
            {
              I: <Package size={22} color={C.orange} />,
              bg: C.orangePale,
              val: d.bags,
              lbl: "Total Bags",
            },
            {
              I: <Award size={22} color={C.purple} />,
              bg: C.purplePale,
              val: d.kgs,
              lbl: "Total Kgs",
            },
            {
              I: <Route size={22} color={C.orange} />,
              bg: C.orangePale,
              val: d.km,
              lbl: "Kms Covered",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="rise"
              style={{
                background: C.white,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 22,
                padding: "17px 15px",
                animationDelay: `${i * 0.06}s`,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  background: s.bg,
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 11,
                }}
              >
                {s.I}
              </div>
              <p
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: C.ink,
                  margin: "0 0 3px",
                  letterSpacing: "-.03em",
                  lineHeight: 1,
                }}
              >
                {s.val.toLocaleString()}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: C.slate,
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {s.lbl}
              </p>
            </div>
          ))}
        </div>

        {/* Performance */}
        <p
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: C.ink,
            margin: "0 0 12px",
          }}
        >
          Performance
        </p>
        <div
          style={{
            background: C.white,
            border: `1.5px solid ${C.silver}`,
            borderRadius: 22,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          {[
            { l: "Completion Rate", v: d.cr, good: d.cr >= 97 },
            { l: "On-Time Pickups", v: d.otp, good: d.otp >= 95 },
          ].map((m, i, arr) => (
            <div
              key={m.l}
              style={{
                padding: "16px 18px",
                borderBottom:
                  i < arr.length - 1 ? `1px solid ${C.pearl}` : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 13, color: C.slate, fontWeight: 600 }}>
                  {m.l}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: m.good ? C.green : C.amber,
                  }}
                >
                  {m.v}%
                </span>
              </div>
              <div
                style={{
                  height: 6,
                  background: C.snow,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${m.v}%`,
                    background: m.good
                      ? `linear-gradient(90deg,${C.green},${C.greenLight})`
                      : `linear-gradient(90deg,${C.amber},#FCD34D)`,
                    borderRadius: 3,
                    transition: "width .7s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Weekly bars */}
        <p
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: C.ink,
            margin: "0 0 12px",
          }}
        >
          Weekly Trend
        </p>
        <div
          style={{
            background: C.white,
            border: `1.5px solid ${C.silver}`,
            borderRadius: 22,
            padding: "18px",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              height: 84,
              justifyContent: "space-between",
            }}
          >
            {[
              { d: "Mon", v: 65 },
              { d: "Tue", v: 80 },
              { d: "Wed", v: 55 },
              { d: "Thu", v: 90 },
              { d: "Fri", v: 70 },
              { d: "Sat", v: 100 },
              { d: "Sun", v: 45 },
            ].map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: 7,
                    background: i === 5 ? C.purple : C.purplePale,
                    height: `${b.v * 0.8}%`,
                    minHeight: 5,
                    transition: "height .5s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: 9,
                    color: i === 5 ? C.purple : C.mist,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {b.d}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 11,
              color: C.mist,
              margin: "10px 0 0",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Trips per day — this week
          </p>
        </div>

        {/* Top earning days */}
        <p
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: C.ink,
            margin: "0 0 12px",
          }}
        >
          Top Earning Days
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingBottom: 110,
          }}
        >
          {[
            { d: "Saturday, 8 Mar", e: "₹1,240", t: 14 },
            { d: "Friday, 7 Mar", e: "₹980", t: 11 },
            { d: "Thursday, 6 Mar", e: "₹860", t: 10 },
          ].map((r, i) => (
            <div
              key={i}
              style={{
                background: C.white,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 18,
                padding: "13px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: i === 0 ? C.purplePale : C.snow,
                    border: `1px solid ${i === 0 ? C.purpleMid : C.silver}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: i === 0 ? C.purple : C.mist,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.ink,
                      margin: "0 0 2px",
                    }}
                  >
                    {r.d}
                  </p>
                  <p style={{ fontSize: 11, color: C.mist, margin: 0 }}>
                    {r.t} trips
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 900,
                  color: C.green,
                  margin: 0,
                }}
              >
                {r.e}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   WALLET MODAL (Screen 5.2)
═══════════════════════════════════════════════════════════ */
const WithdrawModal = ({ balance, setBalance, close }) => {
  const [amt, setAmt] = useState("");
  const [step, setStep] = useState(1);
  const go = () => {
    const n = parseFloat(amt);
    if (isNaN(n) || n < 100 || n > balance) return;
    setStep(2);
    setTimeout(() => {
      setBalance((p) => p - n);
      setStep(3);
    }, 2200);
  };
  return (
    <div
      className="fade"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 30,
        background: "rgba(20,16,38,.6)",
        backdropFilter: "blur(7px)",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        className="sheet"
        style={{
          width: "100%",
          background: C.white,
          borderRadius: "28px 28px 0 0",
          padding: "8px 24px 38px",
        }}
      >
        <div
          style={{
            width: 40,
            height: 4,
            background: C.silver,
            borderRadius: 2,
            margin: "8px auto 20px",
          }}
        />
        {step === 1 && (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: C.ink,
                  margin: 0,
                }}
              >
                Withdraw Funds
              </h3>
              <button
                onClick={close}
                className="press"
                style={{
                  width: 34,
                  height: 34,
                  background: C.snow,
                  border: `1px solid ${C.silver}`,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.slate,
                }}
              >
                <X size={16} />
              </button>
            </div>
            {/* Bank tile */}
            <div
              style={{
                background: C.snow,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 18,
                padding: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    background: C.purplePale,
                    borderRadius: 13,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Landmark size={20} color={C.purple} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.mist,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      margin: 0,
                    }}
                  >
                    State Bank of India
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: C.ink,
                      margin: "2px 0 0",
                    }}
                  >
                    **** **** 1234
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: C.greenPale,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Check size={14} color={C.green} />
              </div>
            </div>
            {/* Amount input */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.slate,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                margin: "0 0 8px",
              }}
            >
              Amount to Withdraw
            </p>
            <div style={{ position: "relative", marginBottom: 6 }}>
              <span
                style={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: C.purple,
                }}
              >
                ₹
              </span>
              <input
                type="number"
                value={amt}
                onChange={(e) => setAmt(e.target.value)}
                placeholder="0"
                style={{
                  width: "100%",
                  background: C.snow,
                  border: `1.5px solid ${C.silver}`,
                  borderRadius: 16,
                  padding: "15px 16px 15px 48px",
                  fontSize: 32,
                  fontWeight: 800,
                  color: C.ink,
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = C.purple)}
                onBlur={(e) => (e.target.style.borderColor = C.silver)}
              />
            </div>
            <p style={{ fontSize: 12, color: C.mist, margin: "0 0 22px" }}>
              Available: ₹{balance.toFixed(2)} · Minimum ₹100
            </p>
            <Btn
              label="Transfer to Bank"
              onClick={go}
              disabled={!amt || Number(amt) < 100 || Number(amt) > balance}
            />
          </>
        )}
        {step === 2 && (
          <div style={{ padding: "40px 0", textAlign: "center" }}>
            <Loader2
              size={52}
              color={C.purple}
              className="spin"
              style={{ marginBottom: 16 }}
            />
            <h3
              style={{
                fontSize: 19,
                fontWeight: 800,
                color: C.ink,
                margin: "0 0 8px",
              }}
            >
              Processing…
            </h3>
            <p style={{ fontSize: 13, color: C.slate, margin: 0 }}>
              Routing to your bank account
            </p>
          </div>
        )}
        {step === 3 && (
          <div
            className="rise"
            style={{ padding: "16px 0", textAlign: "center" }}
          >
            <div
              className="pop"
              style={{
                width: 76,
                height: 76,
                background: C.greenPale,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
              }}
            >
              <Check size={38} color={C.green} strokeWidth={2.5} />
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: C.ink,
                margin: "0 0 6px",
              }}
            >
              Transfer Successful!
            </h3>
            <p
              style={{
                fontSize: 13,
                color: C.slate,
                margin: "0 0 8px",
                lineHeight: 1.6,
              }}
            >
              ₹{amt} is on its way to your bank.
            </p>
            <p style={{ fontSize: 12, color: C.mist, margin: "0 0 28px" }}>
              Funds reflect within 24 hours
            </p>
            <Btn label="Done" onClick={close} />
          </div>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   BOOKING CARD with countdown
═══════════════════════════════════════════════════════════ */
const BookingCard = ({ b, onClick }) => {
  const cd = useCountdown(b.minutesLeft || 35);
  return (
    <div
      onClick={onClick}
      className="press"
      style={{
        background: C.white,
        border: `1.5px solid ${cd.urgent ? C.red + "44" : C.silver}`,
        borderRadius: 24,
        padding: 16,
        boxShadow: `0 2px 12px rgba(30,26,46,.06)`,
        transition: "border-color .3s",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", flex: 1 }}>
          <Pill
            label={b.type}
            color={b.subtype === "delivery" ? C.orange : C.blue}
            bg={b.subtype === "delivery" ? C.orangePale : C.bluePale}
          />
          <Pill
            label={b.subtype === "delivery" ? "Delivery" : "Pickup"}
            color={C.slate}
            bg={C.snow}
          />
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 10 }}>
          <p
            style={{
              fontSize: 26,
              fontWeight: 900,
              color: C.purple,
              margin: 0,
              letterSpacing: "-.03em",
              lineHeight: 1,
            }}
          >
            ₹{b.earn}
          </p>
          <p
            style={{
              fontSize: 11,
              color: C.slate,
              margin: "3px 0 0",
              fontWeight: 600,
            }}
          >
            {b.dist}
          </p>
        </div>
      </div>
      {/* Booking ID + timer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <p style={{ fontSize: 13, fontWeight: 800, color: C.ink, margin: 0 }}>
          {b.id}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: cd.urgent ? C.redPale : C.amberPale,
            borderRadius: 10,
            padding: "4px 10px",
            border: `1px solid ${cd.urgent ? C.red + "33" : C.amber + "33"}`,
          }}
        >
          <Timer size={12} color={cd.urgent ? C.red : C.amber} />
          <span
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: cd.urgent ? C.red : C.amber,
            }}
          >
            {cd.formatted}
          </span>
        </div>
      </div>
      {/* Pickup address */}
      <div
        style={{
          background: C.snow,
          borderRadius: 12,
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <MapPin size={13} color={C.mist} style={{ flexShrink: 0 }} />
        <span
          style={{
            fontSize: 12,
            color: C.charcoal,
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {b.pickup}
        </span>
      </div>
      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
            fontSize: 11,
            color: C.slate,
            fontWeight: 600,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Package size={12} />
            {b.pkgs} pkgs
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Clock size={12} />
            {b.timeSlot}
          </span>
        </div>
        <button
          className="press"
          style={{
            background: C.purple,
            color: C.white,
            fontSize: 11,
            fontWeight: 700,
            padding: "7px 14px",
            borderRadius: 11,
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          VIEW <ArrowRight size={11} />
        </button>
      </div>
      {/* Progress bar for timer */}
      <div
        style={{
          height: 3,
          background: C.silver,
          borderRadius: 2,
          marginTop: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${cd.pct}%`,
            background: cd.urgent ? C.red : C.amber,
            borderRadius: 2,
            transition: "width 1s linear",
          }}
        />
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════════════ */
function App() {
  /* ── State ── */
  const [screen, setScreen] = useState("splash");
  const [userType, setUserType] = useState(null);
  const [authMode, setAuthMode] = useState("otp"); // otp | creds | email
  const [obStep, setObStep] = useState(0);
  const [tab, setTab] = useState("home");
  const [online, setOnline] = useState(false);
  const [balance, setBalance] = useState(1250);
  const [earned, setEarned] = useState(340);
  const [trips, setTrips] = useState(4);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [profilePage, setProfilePage] = useState(null);
  const [earnFilter, setEarnFilter] = useState("all");

  /* Job flow */
  const [job, setJob] = useState(null); // active booking data
  const [jType, setJType] = useState(null); // 'pickup' | 'delivery'
  const [jStep, setJStep] = useState(null); // step name

  /* Splash auto-redirect */
  useEffect(() => {
    if (screen === "splash") setTimeout(() => setScreen("login"), 2000);
  }, [screen]);

  /* ── Data ── */
  const bookings = [
    {
      id: "AVN-9012",
      type: "First Mile",
      subtype: "pickup",
      customer: "Suresh Reddy",
      phone: "+91 98001 23456",
      pickup: "Cyber Towers, Hitec City",
      drop: "Avaan Hub, Madhapur",
      dist: "3.5 km",
      pkgs: 2,
      weight: "4.2 kg",
      earn: 75,
      eta: "18 min",
      timeSlot: "10:00–10:40 AM",
      minutesLeft: 38,
    },
    {
      id: "AVN-9015",
      type: "Last Mile",
      subtype: "delivery",
      customer: "Anita Gupta",
      phone: "+91 98002 34567",
      pickup: "Avaan Hub, Madhapur",
      drop: "Inorbit Mall, Hitec City",
      dist: "1.2 km",
      pkgs: 1,
      weight: "1.8 kg",
      earn: 45,
      eta: "10 min",
      timeSlot: "11:00–11:40 AM",
      minutesLeft: 22,
    },
    {
      id: "AVN-9021",
      type: "First Mile",
      subtype: "pickup",
      customer: "Karan Mehra",
      phone: "+91 98003 45678",
      pickup: "Jubilee Hills, Road 45",
      drop: "Avaan Hub, Madhapur",
      dist: "4.8 km",
      pkgs: 3,
      weight: "7.5 kg",
      earn: 110,
      eta: "25 min",
      timeSlot: "12:00–12:40 PM",
      minutesLeft: 41,
    },
    {
      id: "AVN-9030",
      type: "Last Mile",
      subtype: "delivery",
      customer: "Priya Sharma",
      phone: "+91 98004 56789",
      pickup: "Avaan Hub, Kondapur",
      drop: "Gachibowli Stadium",
      dist: "2.4 km",
      pkgs: 2,
      weight: "3.2 kg",
      earn: 60,
      eta: "15 min",
      timeSlot: "01:00–01:40 PM",
      minutesLeft: 29,
    },
  ];

  const history = [
    {
      id: "AVN-0812",
      type: "First Mile Pickup",
      earn: 85,
      date: "Today, 10:42 AM",
      pkgs: 3,
    },
    {
      id: "AVN-0811",
      type: "Last Mile Delivery",
      earn: 120,
      date: "Today, 08:15 AM",
      pkgs: 1,
    },
    {
      id: "AVN-0805",
      type: "First Mile Pickup",
      earn: 90,
      date: "Yesterday, 04:30 PM",
      pkgs: 2,
    },
    {
      id: "BONUS-3",
      type: "Weekly Incentive",
      earn: 500,
      date: "Yesterday, 12:00 PM",
      bonus: true,
    },
  ];

  const shownHistory = history.filter((j) => {
    if (earnFilter === "today") return j.date.includes("Today");
    if (earnFilter === "week") return true;
    if (earnFilter === "bonus") return j.bonus;
    return true;
  });

  const openJob = (b) => {
    setJob(b);
    setJType(b.subtype);
    setJStep("preview");
  };
  const finishJob = () => {
    setBalance((p) => p + (job?.earn || 0));
    setEarned((p) => p + (job?.earn || 0));
    setTrips((p) => p + 1);
    setJob(null);
    setJType(null);
    setJStep(null);
  };

  /* ── ONBOARDING STEPS CONFIG ── */
  const obSteps = [
    { title: "Preferred Area", sub: "Where do you want to operate?" },
    { title: "Personal Details", sub: "Required for background verification." },
    { title: "Vehicle Details", sub: "Tell us about your vehicle." },
    { title: "Bank Details", sub: "Where should we send your earnings?" },
    {
      title: "Upload Documents",
      sub: "Clear photos of all required documents.",
    },
  ];

  /* ══════════════════════════════════════════
     SCREEN 1.0 — SPLASH
  ══════════════════════════════════════════ */
  if (screen === "splash")
    return (
      <Screen bg={C.purpleDeep}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="breathe"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Logo white size={40} />
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,.45)",
                margin: 0,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Logistics Partner
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 52,
              display: "flex",
              gap: 7,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: i === 1 ? 22 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === 1 ? C.yellow : "rgba(255,255,255,.28)",
                  transition: "all .3s",
                }}
              />
            ))}
          </div>
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -100,
              left: -80,
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,.06)",
              pointerEvents: "none",
            }}
          />
        </div>
      </Screen>
    );

  /* ══════════════════════════════════════════
     SCREEN 1.1 — LOGIN
  ══════════════════════════════════════════ */
  if (screen === "login")
    return (
      <Screen>
        <SBar />
        <div
          style={{ flex: 1, overflowY: "auto", padding: "14px 24px 0" }}
          className="sh"
        >
          <Logo />
          <h1
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: C.ink,
              lineHeight: 1.1,
              letterSpacing: "-.03em",
              margin: "20px 0 8px",
            }}
          >
            Good to see you.
          </h1>
          <p
            style={{
              fontSize: 14,
              color: C.slate,
              margin: "0 0 24px",
              lineHeight: 1.65,
            }}
          >
            Sign in to your partner account.
          </p>

          {/* User type toggle */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: C.slate,
              textTransform: "uppercase",
              letterSpacing: ".08em",
              margin: "0 0 10px",
            }}
          >
            I am a
          </p>
          <div
            style={{
              background: C.snow,
              border: `1.5px solid ${C.silver}`,
              borderRadius: 18,
              padding: 5,
              display: "flex",
              gap: 5,
              marginBottom: 24,
            }}
          >
            {[
              { t: "gig", l: "Gig Worker", I: <Users size={15} /> },
              { t: "fhm", l: "FHM Associate", I: <Building2 size={15} /> },
            ].map((opt) => (
              <button
                key={opt.t}
                className="press"
                onClick={() => {
                  setUserType(opt.t);
                  setAuthMode(opt.t === "fhm" ? "creds" : "otp");
                }}
                style={{
                  flex: 1,
                  padding: "12px 8px",
                  borderRadius: 13,
                  fontWeight: 700,
                  fontSize: 12,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  transition: "all .2s",
                  background: userType === opt.t ? C.purple : C.white,
                  color: userType === opt.t ? C.white : C.slate,
                  boxShadow:
                    userType === opt.t ? `0 4px 14px ${C.purple}44` : "none",
                }}
              >
                {opt.I}
                {opt.l}
              </button>
            ))}
          </div>

          {/* FHM: credentials only */}
          {userType === "fhm" && (
            <div
              className="rise"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div
                style={{
                  background: C.bluePale,
                  border: "1px solid #BFDBFE",
                  borderRadius: 14,
                  padding: 14,
                  display: "flex",
                  gap: 10,
                }}
              >
                <Info
                  size={15}
                  color={C.blue}
                  style={{ flexShrink: 0, marginTop: 1 }}
                />
                <p
                  style={{
                    fontSize: 12,
                    color: "#1E40AF",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Your login credentials are provided by the CRM Admin. Contact
                  your hub manager if you haven't received them.
                </p>
              </div>
              <Field
                label="Employee ID / Username"
                placeholder="e.g. FHM-HYD-2045"
                icon={<Users size={16} />}
              />
              <Field
                label="Password"
                placeholder="Enter your password"
                type="password"
                icon={<Lock size={16} />}
              />
            </div>
          )}

          {/* Gig worker: 3 auth options */}
          {userType === "gig" && (
            <div className="rise">
              {/* Auth mode tabs */}
              <div
                style={{
                  display: "flex",
                  gap: 6,
                  marginBottom: 20,
                  background: C.snow,
                  borderRadius: 14,
                  padding: 4,
                  border: `1px solid ${C.silver}`,
                }}
              >
                {[
                  { k: "otp", l: "Mobile OTP" },
                  { k: "creds", l: "Username" },
                  { k: "email", l: "Email" },
                ].map((m) => (
                  <button
                    key={m.k}
                    onClick={() => setAuthMode(m.k)}
                    className="press"
                    style={{
                      flex: 1,
                      padding: "9px 4px",
                      borderRadius: 10,
                      fontSize: 11,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      background: authMode === m.k ? C.white : C.snow,
                      color: authMode === m.k ? C.purple : C.mist,
                      boxShadow:
                        authMode === m.k ? `0 2px 6px rgba(0,0,0,.1)` : "none",
                      transition: "all .2s",
                    }}
                  >
                    {m.l}
                  </button>
                ))}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {authMode === "otp" && (
                  <>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div
                        style={{
                          background: C.snow,
                          border: `1.5px solid ${C.silver}`,
                          borderRadius: 14,
                          padding: "13px 14px",
                          fontWeight: 700,
                          fontSize: 15,
                          color: C.ink,
                          flexShrink: 0,
                        }}
                      >
                        +91
                      </div>
                      <Field placeholder="9876543210" type="tel" />
                    </div>
                  </>
                )}
                {authMode === "creds" && (
                  <>
                    <Field
                      label="Mobile / Username"
                      placeholder="Enter mobile or username"
                      icon={<Users size={16} />}
                    />
                    <Field
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      icon={<Lock size={16} />}
                    />
                  </>
                )}
                {authMode === "email" && (
                  <>
                    <Field
                      label="Mobile Number"
                      placeholder="9876543210"
                      type="tel"
                      icon={<Phone size={16} />}
                    />
                    <Field
                      label="Email Address"
                      placeholder="you@example.com"
                      type="email"
                      icon={<Mail size={16} />}
                    />
                    <p
                      style={{
                        fontSize: 12,
                        color: C.mist,
                        margin: "-4px 0 0",
                        lineHeight: 1.6,
                      }}
                    >
                      Both mobile and email must match our records.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {!userType && (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  background: C.purplePale,
                  borderRadius: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}
              >
                <Users size={32} color={C.purpleLight} />
              </div>
              <p style={{ fontSize: 14, color: C.mist, margin: 0 }}>
                Select your account type above to continue
              </p>
            </div>
          )}
        </div>

        <div
          style={{
            padding: "16px 24px 30px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {userType === "fhm" && (
            <Btn label="Sign In →" onClick={() => setScreen("main")} />
          )}
          {userType === "gig" && (
            <>
              <Btn
                label={authMode === "otp" ? "Send OTP →" : "Sign In →"}
                onClick={() =>
                  authMode === "otp" ? setScreen("otp") : setScreen("main")
                }
              />
              <button
                className="press"
                onClick={() => {
                  setScreen("onboard");
                  setObStep(0);
                }}
                style={{
                  background: "transparent",
                  border: `1.5px solid ${C.purple}`,
                  borderRadius: 18,
                  padding: "15px",
                  fontWeight: 700,
                  fontSize: 14,
                  color: C.purple,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                New here? Create Account
              </button>
            </>
          )}
        </div>
      </Screen>
    );

  /* ══════════════════════════════════════════
     OTP VERIFICATION
  ══════════════════════════════════════════ */
  if (screen === "otp")
    return (
      <Screen>
        <SBar />
        <div
          style={{ flex: 1, padding: "10px 24px", overflowY: "auto" }}
          className="sh"
        >
          <button
            onClick={() => setScreen("login")}
            className="press"
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: C.snow,
              border: `1px solid ${C.silver}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.charcoal,
              marginBottom: 24,
            }}
          >
            <ArrowLeft size={17} />
          </button>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: C.ink,
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              margin: "0 0 8px",
            }}
          >
            Verify your
            <br />
            number
          </h2>
          <p style={{ fontSize: 14, color: C.slate, margin: "0 0 36px" }}>
            6-digit OTP sent to your mobile
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                style={{
                  width: 52,
                  height: 62,
                  background: C.snow,
                  border: `2px solid ${C.silver}`,
                  borderRadius: 16,
                  textAlign: "center",
                  fontSize: 24,
                  fontWeight: 800,
                  color: C.ink,
                  outline: "none",
                  transition: "border-color .2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = C.purple)}
                onBlur={(e) => (e.target.style.borderColor = C.silver)}
                onChange={(e) => {
                  if (e.target.value && i === 5)
                    setTimeout(() => setScreen("main"), 300);
                }}
              />
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: C.slate,
              marginTop: 26,
            }}
          >
            Didn't receive?{" "}
            <span
              style={{ color: C.purple, fontWeight: 700, cursor: "pointer" }}
            >
              Resend in 0:30
            </span>
          </p>
        </div>
      </Screen>
    );

  /* ══════════════════════════════════════════
     SCREEN 2.1–2.5 — ONBOARDING
  ══════════════════════════════════════════ */
  if (screen === "onboard") {
    const s = obSteps[obStep];
    return (
      <Screen>
        <SBar />
        {/* Progress header */}
        <div
          style={{
            padding: "8px 20px 14px",
            borderBottom: `1px solid ${C.silver}`,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <button
              onClick={() =>
                obStep > 0 ? setObStep((p) => p - 1) : setScreen("login")
              }
              className="press"
              style={{
                width: 36,
                height: 36,
                borderRadius: 12,
                background: C.snow,
                border: `1px solid ${C.silver}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.charcoal,
              }}
            >
              <ArrowLeft size={17} />
            </button>
            <span
              style={{
                background: C.purplePale,
                color: C.purple,
                fontSize: 11,
                fontWeight: 700,
                padding: "5px 13px",
                borderRadius: 999,
                border: `1px solid ${C.purpleMid}`,
              }}
            >
              Step {obStep + 1} of {obSteps.length}
            </span>
          </div>
          <div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
            {obSteps.map((_, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 3,
                  borderRadius: 2,
                  background:
                    i < obStep
                      ? C.purple
                      : i === obStep
                        ? C.purpleLight
                        : C.silver,
                  transition: "background .3s",
                }}
              />
            ))}
          </div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: C.ink,
              margin: "0 0 3px",
            }}
          >
            {s.title}
          </h2>
          <p style={{ fontSize: 13, color: C.slate, margin: 0 }}>{s.sub}</p>
        </div>

        <div
          style={{ flex: 1, overflowY: "auto", padding: "18px 20px 0" }}
          className="sh"
        >
          {/* Step 0: Preferred Area (Screen 2.1) */}
          {obStep === 0 && (
            <div
              className="enter"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingBottom: 20,
              }}
            >
              <Select
                label="Area Type"
                options={[
                  "Select type...",
                  "Pincode Area",
                  "City / District",
                  "Landmark / Micro-hub",
                ]}
              />
              <Field label="Pincode" placeholder="e.g. 500081" type="number" />
              <Field
                label="City / Area Name"
                placeholder="e.g. Madhapur, Hyderabad"
              />
              <Field
                label="Landmark / Hub (optional)"
                placeholder="e.g. Avaan Hub Kondapur"
              />
              <div
                style={{
                  background: C.bluePale,
                  border: "1px solid #BFDBFE",
                  borderRadius: 14,
                  padding: 14,
                  display: "flex",
                  gap: 10,
                }}
              >
                <Info
                  size={15}
                  color={C.blue}
                  style={{ flexShrink: 0, marginTop: 1 }}
                />
                <p
                  style={{
                    fontSize: 12,
                    color: "#1E40AF",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  You can add multiple service areas from your profile after
                  onboarding.
                </p>
              </div>
            </div>
          )}

          {/* Step 1: Personal Details (Screen 2.2) */}
          {obStep === 1 && (
            <div
              className="enter"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingBottom: 20,
              }}
            >
              <Field
                label="Full Name (as per Aadhaar)"
                placeholder="e.g. Rajesh Kumar"
              />
              <Field
                label="Email Address"
                placeholder="you@example.com"
                icon={<Mail size={16} />}
              />
              <Select
                label="Gender"
                options={["Select...", "Male", "Female", "Prefer not to say"]}
              />
              <Field
                label="Date of Birth"
                placeholder="DD / MM / YYYY"
                icon={<Calendar size={16} />}
              />
              <Field
                label="Aadhaar Number"
                placeholder="0000 0000 0000"
                type="number"
              />
              <Field label="PAN Card Number" placeholder="ABCDE1234F" />
            </div>
          )}

          {/* Step 2: Vehicle Details (Screen 2.3) */}
          {obStep === 2 && (
            <div
              className="enter"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingBottom: 20,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.slate,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    margin: "0 0 10px",
                  }}
                >
                  Vehicle Type
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  {[
                    {
                      Icon: Bike,
                      l: "2-Wheeler",
                      s: "Bike / Scooter",
                      a: true,
                    },
                    {
                      Icon: Truck,
                      l: "3/4-Wheeler",
                      s: "Auto / Truck",
                      a: false,
                    },
                  ].map((v) => (
                    <div
                      key={v.l}
                      style={{
                        border: `2px solid ${v.a ? C.purple : C.silver}`,
                        background: v.a ? C.purplePale : C.white,
                        borderRadius: 18,
                        padding: 16,
                        cursor: "pointer",
                        position: "relative",
                      }}
                    >
                      {v.a && (
                        <div
                          style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 20,
                            height: 20,
                            background: C.purple,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Check size={12} color="#fff" strokeWidth={3} />
                        </div>
                      )}
                      <v.Icon
                        size={26}
                        color={v.a ? C.purple : C.mist}
                        style={{ marginBottom: 10 }}
                      />
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: C.ink,
                          margin: "0 0 2px",
                        }}
                      >
                        {v.l}
                      </p>
                      <p style={{ fontSize: 11, color: C.slate, margin: 0 }}>
                        {v.s}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <Field
                label="Vehicle Number"
                placeholder="TS 09 EA 1234"
                icon={<Car size={16} />}
              />
              <Field
                label="Vehicle Registration (RC)"
                placeholder="Registration number"
              />
              <Select
                label="Fuel Type"
                options={["Select...", "Petrol", "Diesel", "CNG", "Electric"]}
              />
              <Field
                label="Load Capacity (kg)"
                placeholder="e.g. 50"
                type="number"
              />
            </div>
          )}

          {/* Step 3: Bank Details (Screen 2.4) */}
          {obStep === 3 && (
            <div
              className="enter"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  background: C.bluePale,
                  border: "1px solid #BFDBFE",
                  borderRadius: 14,
                  padding: 14,
                  display: "flex",
                  gap: 10,
                }}
              >
                <Info
                  size={15}
                  color={C.blue}
                  style={{ flexShrink: 0, marginTop: 1 }}
                />
                <p
                  style={{
                    fontSize: 12,
                    color: "#1E40AF",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  We'll deposit ₹1 to verify your account. Account name must
                  match your Aadhaar exactly.
                </p>
              </div>
              <Field
                label="Account Number"
                placeholder="Enter account number"
                type="number"
              />
              <Field
                label="Re-enter Account Number"
                placeholder="Confirm account number"
                type="number"
              />
              <Field
                label="IFSC Code"
                placeholder="e.g. SBIN0001234"
                icon={<Hash size={16} />}
              />
              <Field label="Bank Name" placeholder="e.g. State Bank of India" />
              <Field label="Account Holder Name" placeholder="As per Aadhaar" />
            </div>
          )}

          {/* Step 4: Documents (Screen 2.5) */}
          {obStep === 4 && (
            <div
              className="enter"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 11,
                paddingBottom: 20,
              }}
            >
              <div
                style={{
                  background: C.amberPale,
                  border: `1px solid ${C.amber}33`,
                  borderRadius: 14,
                  padding: 12,
                  display: "flex",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <AlertTriangle
                  size={15}
                  color={C.amber}
                  style={{ flexShrink: 0, marginTop: 1 }}
                />
                <p
                  style={{
                    fontSize: 12,
                    color: "#92400E",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Upload clear, well-lit photos. Blurry or incomplete images
                  will be rejected and delay your approval.
                </p>
              </div>
              {[
                { T: "Live Selfie", S: "Clear photo of your face, no glasses" },
                {
                  T: "Aadhaar Card — Front",
                  S: "Must show photo & name clearly",
                },
                { T: "Aadhaar Card — Back", S: "Must show address clearly" },
                { T: "PAN Card", S: "Front of the card" },
                { T: "Driving Licence — Front", S: "Valid & unexpired" },
                { T: "Driving Licence — Back", S: "Back side of valid DL" },
                { T: "Vehicle RC", S: "Registration Certificate" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="press"
                  style={{
                    border: `2px dashed ${C.silver}`,
                    borderRadius: 16,
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: C.white,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        background: C.purplePale,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Camera size={19} color={C.purple} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: C.ink,
                          margin: "0 0 2px",
                        }}
                      >
                        {d.T}
                      </p>
                      <p style={{ fontSize: 11, color: C.mist, margin: 0 }}>
                        {d.S}
                      </p>
                    </div>
                  </div>
                  <Upload size={15} color={C.mist} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ padding: "14px 20px 28px", flexShrink: 0 }}>
          <Btn
            label={
              obStep === obSteps.length - 1
                ? "Submit for Review →"
                : "Continue →"
            }
            onClick={() => {
              if (obStep === obSteps.length - 1) setScreen("pending");
              else setObStep((p) => p + 1);
            }}
          />
        </div>
      </Screen>
    );
  }

  /* ══════════════════════════════════════════
     SCREEN 2.6 — VERIFICATION PENDING
  ══════════════════════════════════════════ */
  if (screen === "pending")
    return (
      <Screen bg={C.purpleDeep}>
        <SBar dark />
        {/* Decorative */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.05)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -90,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.05)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            flex: 1,
            padding: "0 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            overflowY: "auto",
          }}
          className="sh"
        >
          <div
            className="breathe"
            style={{
              width: 88,
              height: 88,
              background: "rgba(255,255,255,.1)",
              borderRadius: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              border: "2px solid rgba(255,255,255,.15)",
            }}
          >
            <Clock size={42} color={C.yellow} />
          </div>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: C.white,
              lineHeight: 1.1,
              margin: "0 0 12px",
              letterSpacing: "-.02em",
            }}
          >
            Under Review
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.7,
              maxWidth: 270,
              margin: "0 0 32px",
            }}
          >
            Your profile is being verified by an admin. Core features are locked
            until approval.
          </p>

          {/* Checklist */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 36,
            }}
          >
            {[
              { l: "Identity Verified", status: "done" },
              { l: "Vehicle Check — In Progress", status: "progress" },
              { l: "Final Approval — Pending", status: "pending" },
            ].map((s, i) => {
              const clr =
                s.status === "done"
                  ? C.green
                  : s.status === "progress"
                    ? C.yellow
                    : "rgba(255,255,255,.22)";
              const tc =
                s.status === "done"
                  ? "#86EFAC"
                  : s.status === "progress"
                    ? C.yellow
                    : "rgba(255,255,255,.42)";
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: "rgba(255,255,255,.07)",
                    border: "1px solid rgba(255,255,255,.09)",
                    borderRadius: 16,
                    padding: "14px 18px",
                  }}
                >
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: clr,
                      flexShrink: 0,
                      boxShadow:
                        s.status === "progress"
                          ? `0 0 0 4px ${C.yellow}33`
                          : "",
                    }}
                  />
                  <span style={{ fontSize: 13, fontWeight: 600, color: tc }}>
                    {s.l}
                  </span>
                  {s.status === "done" && (
                    <Check
                      size={16}
                      color="#86EFAC"
                      style={{ marginLeft: "auto" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <Btn
            label="Simulate Approval →"
            variant="outline"
            onClick={() => setScreen("main")}
          />
        </div>
      </Screen>
    );

  /* ══════════════════════════════════════════
     MAIN APP (Screens 3–7)
  ══════════════════════════════════════════ */

  /* ── PICKUP FLOW (Screens 3.2–3.8) ── */
  const PickupFlow = () => {
    if (!job) return null;

    if (jStep === "preview")
      return (
        <Sheet onClose={() => setJStep(null)}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "4px 22px" }}
            className="sh"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "10px 0 16px",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: 7, marginBottom: 8 }}>
                  <Pill label="First Mile" color={C.blue} bg={C.bluePale} />
                  <Pill label="Pickup" color={C.slate} bg={C.snow} />
                </div>
                <p
                  style={{
                    fontSize: 42,
                    fontWeight: 900,
                    color: C.ink,
                    margin: 0,
                    letterSpacing: "-.04em",
                    lineHeight: 1,
                  }}
                >
                  ₹{job.earn}
                </p>
                <p style={{ fontSize: 13, color: C.slate, margin: "4px 0 0" }}>
                  Payout for this task
                </p>
              </div>
              <button
                onClick={() => setJStep(null)}
                className="press"
                style={{
                  width: 36,
                  height: 36,
                  background: C.snow,
                  border: `1px solid ${C.silver}`,
                  borderRadius: 11,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.slate,
                }}
              >
                <X size={17} />
              </button>
            </div>
            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {[
                { l: "Distance", v: job.dist },
                { l: "Packages", v: `${job.pkgs} pkgs` },
                { l: "Weight", v: job.weight },
              ].map((c) => (
                <div
                  key={c.l}
                  style={{
                    background: C.snow,
                    border: `1px solid ${C.silver}`,
                    borderRadius: 14,
                    padding: "11px 10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: C.ink,
                      margin: "0 0 3px",
                    }}
                  >
                    {c.v}
                  </p>
                  <p
                    style={{
                      fontSize: 9,
                      color: C.mist,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: 0,
                    }}
                  >
                    {c.l}
                  </p>
                </div>
              ))}
            </div>
            {/* Route */}
            <div
              style={{
                background: C.snow,
                borderRadius: 18,
                padding: 16,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 14,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: C.green,
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.mist,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: "0 0 3px",
                    }}
                  >
                    Pickup From
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.ink,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.pickup}
                  </p>
                  <p
                    style={{ fontSize: 12, color: C.slate, margin: "3px 0 0" }}
                  >
                    {job.customer}
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginLeft: 5,
                  borderLeft: `2px dashed ${C.silver}`,
                  height: 18,
                  marginBottom: 14,
                }}
              />
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 3,
                    background: C.purple,
                    marginTop: 4,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.mist,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: "0 0 3px",
                    }}
                  >
                    Drop at Hub
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.ink,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.drop}
                  </p>
                </div>
              </div>
            </div>
            {/* Details grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
                marginBottom: 14,
              }}
            >
              {[
                { l: "Booking ID", v: job.id },
                { l: "Time Slot", v: job.timeSlot },
                { l: "ETA to Pickup", v: job.eta },
                { l: "Partner", v: "Rajesh K." },
              ].map((c) => (
                <div
                  key={c.l}
                  style={{
                    background: C.snow,
                    border: `1px solid ${C.silver}`,
                    borderRadius: 13,
                    padding: "11px 13px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 9,
                      color: C.mist,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: "0 0 4px",
                    }}
                  >
                    {c.l}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.ink,
                      margin: 0,
                    }}
                  >
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                background: C.amberPale,
                border: `1px solid ${C.amber}33`,
                borderRadius: 14,
                padding: 14,
                display: "flex",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <AlertTriangle
                size={15}
                color={C.amber}
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              <p
                style={{
                  fontSize: 12,
                  color: "#92400E",
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                You have {job.eta} to reach pickup. Customer OTP is required
                before collecting packages.
              </p>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <Btn
              label="Accept & Start"
              icon={<ChevronRight size={18} />}
              onClick={() => setJStep("p_mapPreview")}
            />
            <Btn
              label="Decline Job"
              variant="ghost"
              onClick={() => {
                setJob(null);
                setJStep(null);
              }}
            />
          </div>
        </Sheet>
      );

    /* 3.3 Map preview sheet */
    if (jStep === "p_mapPreview")
      return (
        <Sheet onClose={() => setJStep("preview")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "0 22px" }}
            className="sh"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0 14px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.mist,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    margin: "0 0 3px",
                  }}
                >
                  Navigate to Pickup
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: C.ink,
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  {job.pickup}
                </p>
              </div>
              <button
                onClick={() => setJStep("preview")}
                className="press"
                style={{
                  width: 34,
                  height: 34,
                  background: C.snow,
                  border: `1px solid ${C.silver}`,
                  borderRadius: 11,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.slate,
                }}
              >
                <ArrowLeft size={16} />
              </button>
            </div>
            <MockMap
              from="Your Location"
              to={job.pickup}
              color={C.green}
              height={200}
            />
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 12,
                marginBottom: 4,
              }}
            >
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 13,
                  padding: "11px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                🗺️ Google Maps
              </button>
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 13,
                  padding: "11px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                🍎 Apple Maps
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Navigate to Pickup"
              icon={<Navigation size={18} />}
              onClick={() => setJStep("p_fullMap")}
            />
          </div>
        </Sheet>
      );

    /* 3.4 Full-screen map */
    if (jStep === "p_fullMap")
      return (
        <div
          className="fade"
          style={{ position: "absolute", inset: 0, zIndex: 20 }}
        >
          <FullMap
            from="Your Location"
            to={job.pickup}
            color={C.green}
            sliderLabel="Slide — Confirm Arrival"
            onSlide={() => setJStep("p_arrived1")}
            onBack={() => setJStep("p_mapPreview")}
          />
        </div>
      );

    /* 3.5.1 Arrived confirmation */
    if (jStep === "p_arrived1")
      return (
        <div
          className="fade"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,16,38,.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "flex-end",
            zIndex: 20,
          }}
        >
          <div
            className="sheet"
            style={{
              width: "100%",
              background: C.white,
              borderRadius: "28px 28px 0 0",
              padding: "8px 24px 38px",
            }}
          >
            <div
              style={{
                width: 40,
                height: 4,
                background: C.silver,
                borderRadius: 2,
                margin: "8px auto 20px",
              }}
            />
            <div
              className="rise"
              style={{ textAlign: "center", padding: "8px 0 24px" }}
            >
              <div
                className="pop"
                style={{
                  width: 76,
                  height: 76,
                  background: C.amberPale,
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px",
                }}
              >
                <MapPin size={36} color={C.amber} />
              </div>
              <h3
                style={{
                  fontSize: 23,
                  fontWeight: 800,
                  color: C.ink,
                  margin: "0 0 10px",
                }}
              >
                Have you arrived?
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: C.slate,
                  lineHeight: 1.65,
                  maxWidth: 270,
                  margin: "0 auto 26px",
                }}
              >
                Confirm arrival to notify <strong>{job.customer}</strong> to be
                ready with their packages.
              </p>
              <Btn
                label="Yes, I've Arrived"
                variant="dark"
                onClick={() => setJStep("p_arrived2")}
              />
            </div>
          </div>
        </div>
      );

    /* 3.5.2 Customer details */
    if (jStep === "p_arrived2")
      return (
        <Sheet onClose={() => setJStep("p_arrived1")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "4px 22px" }}
            className="sh"
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: C.ink,
                padding: "10px 0 16px",
                margin: 0,
              }}
            >
              Customer Details
            </p>
            {/* Customer card */}
            <div
              style={{
                background: `linear-gradient(140deg,${C.purpleDeep},${C.purple})`,
                borderRadius: 22,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  background: C.yellow,
                  borderRadius: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  fontWeight: 900,
                  color: C.ink,
                  flexShrink: 0,
                }}
              >
                {job.customer[0]}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: 19,
                    fontWeight: 800,
                    color: C.white,
                    margin: "0 0 3px",
                  }}
                >
                  {job.customer}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.6)",
                    margin: "0 0 12px",
                  }}
                >
                  {job.phone}
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    className="press"
                    style={{
                      background: "rgba(255,255,255,.16)",
                      border: "1px solid rgba(255,255,255,.2)",
                      borderRadius: 10,
                      padding: "7px 15px",
                      color: C.white,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Phone size={13} /> Call
                  </button>
                  <button
                    className="press"
                    style={{
                      background: "rgba(255,255,255,.16)",
                      border: "1px solid rgba(255,255,255,.2)",
                      borderRadius: 10,
                      padding: "7px 15px",
                      color: C.white,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <MessageCircle size={13} /> Message
                  </button>
                </div>
              </div>
            </div>
            {/* Details list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 14,
              }}
            >
              {[
                { l: "Pickup Address", v: job.pickup },
                { l: "Booking ID", v: job.id },
                { l: "Time Slot", v: job.timeSlot },
                { l: "No. of Packages", v: `${job.pkgs} units` },
                { l: "Total Weight", v: job.weight },
              ].map((r) => (
                <div
                  key={r.l}
                  style={{
                    background: C.snow,
                    border: `1px solid ${C.silver}`,
                    borderRadius: 14,
                    padding: "11px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: C.mist,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                    }}
                  >
                    {r.l}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.ink,
                      maxWidth: "52%",
                      textAlign: "right",
                    }}
                  >
                    {r.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Confirm Pickup"
              icon={<Package size={18} />}
              onClick={() => setJStep("p_arrived3")}
            />
          </div>
        </Sheet>
      );

    /* 3.5.3 Package + OTP + photo */
    if (jStep === "p_arrived3")
      return (
        <Sheet onClose={() => setJStep("p_arrived2")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "4px 22px" }}
            className="sh"
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: C.ink,
                padding: "10px 0 16px",
                margin: 0,
              }}
            >
              Verify & Collect
            </p>
            {/* Package list */}
            <div
              style={{
                background: C.snow,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 18,
                padding: "14px 16px",
                marginBottom: 14,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.mist,
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                  margin: "0 0 12px",
                }}
              >
                Package Breakdown
              </p>
              {Array.from({ length: job.pkgs }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 0",
                    borderBottom:
                      i < job.pkgs - 1 ? `1px solid ${C.pearl}` : "none",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: C.purplePale,
                        borderRadius: 11,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Package size={16} color={C.purple} />
                    </div>
                    <span
                      style={{ fontSize: 13, fontWeight: 700, color: C.ink }}
                    >
                      Bag {i + 1}
                    </span>
                  </div>
                  <span
                    style={{ fontSize: 12, color: C.slate, fontWeight: 600 }}
                  >
                    {(parseFloat(job.weight) / job.pkgs).toFixed(1)} kg
                  </span>
                </div>
              ))}
              <div
                style={{
                  borderTop: `1.5px solid ${C.silver}`,
                  paddingTop: 11,
                  marginTop: 4,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: C.purple }}
                >
                  Total Weight
                </span>
                <span style={{ fontSize: 15, fontWeight: 900, color: C.ink }}>
                  {job.weight}
                </span>
              </div>
            </div>
            {/* OTP */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.slate,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                margin: "0 0 10px",
              }}
            >
              Customer OTP
            </p>
            <div
              style={{
                display: "flex",
                gap: 9,
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="number"
                  maxLength="1"
                  style={{
                    width: 64,
                    height: 72,
                    background: C.snow,
                    border: `2px solid ${C.silver}`,
                    borderRadius: 17,
                    textAlign: "center",
                    fontSize: 26,
                    fontWeight: 800,
                    color: C.ink,
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = C.purple)}
                  onBlur={(e) => (e.target.style.borderColor = C.silver)}
                />
              ))}
            </div>
            {/* Photo upload */}
            <div
              className="press"
              style={{
                background: C.purplePale,
                border: `2px dashed ${C.purpleLight}`,
                borderRadius: 18,
                height: 130,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Camera size={32} color={C.purple} style={{ marginBottom: 9 }} />
              <p
                style={{
                  fontWeight: 800,
                  color: C.purple,
                  fontSize: 13,
                  margin: 0,
                }}
              >
                Upload Package Photos
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: C.purpleLight,
                  margin: "4px 0 0",
                }}
              >
                Photo of all {job.pkgs} packages together
              </p>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Items Collected"
              variant="green"
              icon={<Check size={18} />}
              onClick={() => setJStep("p_hubNav")}
            />
          </div>
        </Sheet>
      );

    /* 3.6 Hub navigation sheet */
    if (jStep === "p_hubNav")
      return (
        <Sheet onClose={() => setJStep("p_arrived3")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "0 22px" }}
            className="sh"
          >
            <div
              style={{
                padding: "10px 0 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: C.green,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.green,
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                Pickup Complete
              </span>
            </div>
            <p
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: C.ink,
                margin: "0 0 14px",
              }}
            >
              Navigate to Hub
            </p>
            <MockMap
              from={job.pickup}
              to={job.drop}
              color={C.purpleDark}
              height={200}
            />
            <div
              style={{
                marginTop: 12,
                background: C.ink,
                borderRadius: 18,
                padding: "15px 18px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(255,255,255,.1)",
                  borderRadius: 13,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Landmark size={20} color={C.yellow} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 10,
                    color: C.yellow,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    margin: "0 0 3px",
                  }}
                >
                  Destination Hub
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: C.white,
                    margin: 0,
                  }}
                >
                  {job.drop}
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 10,
                marginBottom: 4,
              }}
            >
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 13,
                  padding: "10px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                🗺️ Google Maps
              </button>
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 13,
                  padding: "10px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                🍎 Apple Maps
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Navigate to Hub"
              variant="yellow"
              icon={<Navigation size={18} />}
              onClick={() => setJStep("p_hubMap")}
            />
          </div>
        </Sheet>
      );

    /* 3.7 Full-screen map to hub */
    if (jStep === "p_hubMap")
      return (
        <div
          className="fade"
          style={{ position: "absolute", inset: 0, zIndex: 20 }}
        >
          <FullMap
            from={job.pickup}
            to={job.drop}
            color={C.purpleDark}
            sliderLabel="Slide — Arrived at Hub"
            onSlide={() => setJStep("p_handover")}
            onBack={() => setJStep("p_hubNav")}
          />
        </div>
      );

    /* 3.8 Handover with QR */
    if (jStep === "p_handover")
      return (
        <div
          className="fade"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,16,38,.65)",
            backdropFilter: "blur(7px)",
            display: "flex",
            alignItems: "flex-end",
            zIndex: 20,
          }}
        >
          <div
            className="sheet"
            style={{
              width: "100%",
              background: C.white,
              borderRadius: "28px 28px 0 0",
              padding: "8px 24px 36px",
            }}
          >
            <div
              style={{
                width: 40,
                height: 4,
                background: C.silver,
                borderRadius: 2,
                margin: "8px auto 18px",
              }}
            />
            <h3
              style={{
                fontSize: 19,
                fontWeight: 800,
                color: C.ink,
                margin: "0 0 6px",
              }}
            >
              Final Handover
            </h3>
            <p
              style={{
                fontSize: 13,
                color: C.slate,
                margin: "0 0 20px",
                lineHeight: 1.65,
              }}
            >
              Show this QR to the hub executive. They'll scan your Partner ID to
              confirm delivery and release your payment.
            </p>
            {/* QR */}
            <div
              style={{
                background: C.snow,
                border: `2px solid ${C.silver}`,
                borderRadius: 26,
                padding: 22,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 150,
                  height: 150,
                  margin: "0 auto 14px",
                  background: C.white,
                  borderRadius: 12,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="150" height="150" viewBox="0 0 150 150">
                  <rect width="150" height="150" fill="white" />
                  {[
                    [5, 5],
                    [95, 5],
                    [5, 95],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <rect
                        x={x}
                        y={y}
                        width="46"
                        height="46"
                        rx="5"
                        fill={C.ink}
                      />
                      <rect
                        x={x + 6}
                        y={y + 6}
                        width="34"
                        height="34"
                        rx="4"
                        fill="white"
                      />
                      <rect
                        x={x + 12}
                        y={y + 12}
                        width="22"
                        height="22"
                        rx="3"
                        fill={C.ink}
                      />
                    </g>
                  ))}
                  {[...Array(7)].map((_, r) =>
                    [...Array(7)].map((_, c) =>
                      (r + c) % 2 === 0 ? (
                        <rect
                          key={`${r}${c}`}
                          x={55 + c * 7}
                          y={55 + r * 7}
                          width="6"
                          height="6"
                          rx="1"
                          fill={C.ink}
                        />
                      ) : null,
                    ),
                  )}
                </svg>
              </div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  color: C.ink,
                  margin: "0 0 4px",
                }}
              >
                Partner ID: AP-2026
              </p>
              <p style={{ fontSize: 12, color: C.mist, margin: "0 0 8px" }}>
                {job.id} · {job.pkgs} packages · {job.weight}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: C.purplePale,
                  padding: "5px 12px",
                  borderRadius: 999,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: C.purple,
                  }}
                />
                <span
                  style={{ fontSize: 11, fontWeight: 700, color: C.purple }}
                >
                  Ready for Scan
                </span>
              </div>
            </div>
            <Btn
              label="Mark as Completed"
              icon={<CheckCircle2 size={18} />}
              onClick={finishJob}
            />
          </div>
        </div>
      );

    return null;
  };

  /* ── DELIVERY FLOW (Screens 4.1–4.8) ── */
  const DeliveryFlow = () => {
    if (!job) return null;

    /* 4.1 Preview */
    if (jStep === "preview")
      return (
        <Sheet onClose={() => setJStep(null)}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "4px 22px" }}
            className="sh"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "10px 0 16px",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: 7, marginBottom: 8 }}>
                  <Pill label="Last Mile" color={C.orange} bg={C.orangePale} />
                  <Pill label="Delivery" color={C.slate} bg={C.snow} />
                </div>
                <p
                  style={{
                    fontSize: 42,
                    fontWeight: 900,
                    color: C.ink,
                    margin: 0,
                    letterSpacing: "-.04em",
                    lineHeight: 1,
                  }}
                >
                  ₹{job.earn}
                </p>
                <p style={{ fontSize: 13, color: C.slate, margin: "4px 0 0" }}>
                  Payout for this task
                </p>
              </div>
              <button
                onClick={() => {
                  setJob(null);
                  setJStep(null);
                }}
                className="press"
                style={{
                  width: 36,
                  height: 36,
                  background: C.snow,
                  border: `1px solid ${C.silver}`,
                  borderRadius: 11,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: C.slate,
                }}
              >
                <X size={17} />
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 8,
                marginBottom: 16,
              }}
            >
              {[
                { l: "Distance", v: job.dist },
                { l: "Packages", v: `${job.pkgs} pkgs` },
                { l: "Weight", v: job.weight },
              ].map((c) => (
                <div
                  key={c.l}
                  style={{
                    background: C.snow,
                    border: `1px solid ${C.silver}`,
                    borderRadius: 14,
                    padding: "11px 10px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: C.ink,
                      margin: "0 0 3px",
                    }}
                  >
                    {c.v}
                  </p>
                  <p
                    style={{
                      fontSize: 9,
                      color: C.mist,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: 0,
                    }}
                  >
                    {c.l}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                background: C.snow,
                borderRadius: 18,
                padding: 16,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 14,
                }}
              >
                <Landmark
                  size={16}
                  color={C.orange}
                  style={{ marginTop: 3, flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.mist,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: "0 0 3px",
                    }}
                  >
                    Pick up from Hub
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.ink,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.pickup}
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginLeft: 8,
                  borderLeft: `2px dashed ${C.silver}`,
                  height: 18,
                  marginBottom: 14,
                }}
              />
              <div
                style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
              >
                <MapPin
                  size={16}
                  color={C.purple}
                  style={{ marginTop: 3, flexShrink: 0 }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.mist,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: "0 0 3px",
                    }}
                  >
                    Deliver to Customer
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.ink,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {job.drop}
                  </p>
                  <p
                    style={{ fontSize: 12, color: C.slate, margin: "3px 0 0" }}
                  >
                    {job.customer}
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
                marginBottom: 14,
              }}
            >
              {[
                { l: "Booking ID", v: job.id },
                { l: "Time Slot", v: job.timeSlot },
                { l: "Customer", v: job.customer },
                { l: "ETA", v: job.eta },
              ].map((c) => (
                <div
                  key={c.l}
                  style={{
                    background: C.snow,
                    border: `1px solid ${C.silver}`,
                    borderRadius: 13,
                    padding: "11px 13px",
                  }}
                >
                  <p
                    style={{
                      fontSize: 9,
                      color: C.mist,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".07em",
                      margin: "0 0 4px",
                    }}
                  >
                    {c.l}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.ink,
                      margin: 0,
                    }}
                  >
                    {c.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <Btn
              label="Accept & Start"
              icon={<ChevronRight size={18} />}
              onClick={() => setJStep("d_hubNav")}
            />
            <Btn
              label="Decline Job"
              variant="ghost"
              onClick={() => {
                setJob(null);
                setJStep(null);
              }}
            />
          </div>
        </Sheet>
      );

    /* 4.2 Navigate to hub sheet */
    if (jStep === "d_hubNav")
      return (
        <Sheet onClose={() => setJStep("preview")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "0 22px" }}
            className="sh"
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: C.ink,
                padding: "10px 0 14px",
                margin: 0,
              }}
            >
              Navigate to Hub
            </p>
            <MockMap
              from="Your Location"
              to={job.pickup}
              color={C.orange}
              height={200}
            />
            <div
              style={{
                marginTop: 12,
                background: C.orangePale,
                border: `1px solid ${C.orange}33`,
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Landmark size={20} color={C.orange} style={{ flexShrink: 0 }} />
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: C.orange,
                    textTransform: "uppercase",
                    letterSpacing: ".07em",
                    margin: "0 0 2px",
                  }}
                >
                  Hub Pickup
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: C.ink,
                    margin: 0,
                  }}
                >
                  {job.pickup}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.orangePale,
                  border: `1px solid ${C.orange}33`,
                  borderRadius: 13,
                  padding: "10px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.orange,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                🗺️ Google Maps
              </button>
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.orangePale,
                  border: `1px solid ${C.orange}33`,
                  borderRadius: 13,
                  padding: "10px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.orange,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                🍎 Apple Maps
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Navigate to Hub"
              icon={<Navigation size={18} />}
              onClick={() => setJStep("d_hubMap")}
            />
          </div>
        </Sheet>
      );

    /* 4.3 Full map to hub */
    if (jStep === "d_hubMap")
      return (
        <div
          className="fade"
          style={{ position: "absolute", inset: 0, zIndex: 20 }}
        >
          <FullMap
            from="Your Location"
            to={job.pickup}
            color={C.orange}
            sliderLabel="Slide — Arrived at Hub"
            onSlide={() => setJStep("d_hubVerify")}
            onBack={() => setJStep("d_hubNav")}
          />
        </div>
      );

    /* 4.4 Hub verification */
    if (jStep === "d_hubVerify")
      return (
        <Sheet onClose={() => setJStep("d_hubNav")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "4px 22px" }}
            className="sh"
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: C.ink,
                padding: "10px 0 16px",
                margin: 0,
              }}
            >
              Hub Pickup Verification
            </p>
            <div
              style={{
                background: C.snow,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 18,
                padding: "14px 16px",
                marginBottom: 14,
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.mist,
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                  margin: "0 0 12px",
                }}
              >
                Package Details
              </p>
              {Array.from({ length: job.pkgs }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 0",
                    borderBottom:
                      i < job.pkgs - 1 ? `1px solid ${C.pearl}` : "none",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: C.orangePale,
                        borderRadius: 11,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Package size={16} color={C.orange} />
                    </div>
                    <span
                      style={{ fontSize: 13, fontWeight: 700, color: C.ink }}
                    >
                      Package {i + 1}
                    </span>
                  </div>
                  <span
                    style={{ fontSize: 12, color: C.slate, fontWeight: 600 }}
                  >
                    {(parseFloat(job.weight) / job.pkgs).toFixed(1)} kg
                  </span>
                </div>
              ))}
              <div
                style={{
                  borderTop: `1.5px solid ${C.silver}`,
                  paddingTop: 11,
                  marginTop: 4,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: C.orange }}
                >
                  Total Weight
                </span>
                <span style={{ fontSize: 15, fontWeight: 900, color: C.ink }}>
                  {job.weight}
                </span>
              </div>
            </div>
            {/* Hub QR / OTP */}
            <div
              style={{
                background: C.orangePale,
                border: `1px solid ${C.orange}33`,
                borderRadius: 16,
                padding: "14px 16px",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  marginBottom: 12,
                }}
              >
                <QrCode size={18} color={C.orange} />
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: C.ink,
                    margin: 0,
                  }}
                >
                  Scan Hub QR or Enter OTP
                </p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[0, 1, 2, 3].map((i) => (
                  <input
                    key={i}
                    type="number"
                    maxLength="1"
                    style={{
                      width: 56,
                      height: 62,
                      background: C.white,
                      border: `2px solid ${C.silver}`,
                      borderRadius: 14,
                      textAlign: "center",
                      fontSize: 22,
                      fontWeight: 800,
                      color: C.ink,
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = C.orange)}
                    onBlur={(e) => (e.target.style.borderColor = C.silver)}
                  />
                ))}
              </div>
            </div>
            <div
              className="press"
              style={{
                background: C.snow,
                border: `2px dashed ${C.silver}`,
                borderRadius: 16,
                height: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Camera size={24} color={C.mist} style={{ marginBottom: 7 }} />
              <p
                style={{
                  fontSize: 12,
                  color: C.mist,
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                Upload Package Photos{" "}
                <span style={{ fontWeight: 500 }}>(optional)</span>
              </p>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Items Picked"
              icon={<Check size={18} />}
              onClick={() => setJStep("d_custNav")}
            />
          </div>
        </Sheet>
      );

    /* 4.5 Navigate to customer */
    if (jStep === "d_custNav")
      return (
        <Sheet onClose={() => setJStep("d_hubVerify")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "0 22px" }}
            className="sh"
          >
            <div
              style={{
                padding: "10px 0 6px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: C.green,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.green,
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                Hub Pickup Done
              </span>
            </div>
            <p
              style={{
                fontSize: 16,
                fontWeight: 800,
                color: C.ink,
                margin: "0 0 14px",
                paddingTop: 4,
              }}
            >
              Navigate to Customer
            </p>
            <MockMap
              from={job.pickup}
              to={job.drop}
              color={C.purple}
              height={200}
            />
            <div
              style={{
                marginTop: 12,
                background: C.purplePale,
                border: `1px solid ${C.purpleMid}`,
                borderRadius: 16,
                padding: "14px 18px",
                display: "flex",
                gap: 12,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <MapPin size={20} color={C.purple} style={{ flexShrink: 0 }} />
              <div>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: C.purple,
                    textTransform: "uppercase",
                    letterSpacing: ".07em",
                    margin: "0 0 2px",
                  }}
                >
                  Delivery Address
                </p>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: C.ink,
                    margin: 0,
                  }}
                >
                  {job.drop}
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 13,
                  padding: "10px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                🗺️ Google Maps
              </button>
              <button
                className="press"
                style={{
                  flex: 1,
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 13,
                  padding: "10px 8px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: C.purple,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                🍎 Apple Maps
              </button>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Navigate to Customer"
              icon={<Navigation size={18} />}
              onClick={() => setJStep("d_custMap")}
            />
          </div>
        </Sheet>
      );

    /* 4.6 Full map to customer */
    if (jStep === "d_custMap")
      return (
        <div
          className="fade"
          style={{ position: "absolute", inset: 0, zIndex: 20 }}
        >
          <FullMap
            from={job.pickup}
            to={job.drop}
            color={C.purple}
            sliderLabel="Slide — Arrived at Customer"
            onSlide={() => setJStep("d_deliverConfirm")}
            onBack={() => setJStep("d_custNav")}
          />
        </div>
      );

    /* 4.7 Delivery confirmation */
    if (jStep === "d_deliverConfirm")
      return (
        <Sheet onClose={() => setJStep("d_custNav")}>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "4px 22px" }}
            className="sh"
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: C.ink,
                padding: "10px 0 16px",
                margin: 0,
              }}
            >
              Delivery Confirmation
            </p>
            {/* Customer card */}
            <div
              style={{
                background: `linear-gradient(140deg,${C.purpleDeep},${C.purple})`,
                borderRadius: 22,
                padding: "18px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: C.yellow,
                  borderRadius: 17,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 900,
                  color: C.ink,
                  flexShrink: 0,
                }}
              >
                {job.customer[0]}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: C.white,
                    margin: "0 0 3px",
                  }}
                >
                  {job.customer}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,.6)",
                    margin: "0 0 12px",
                  }}
                >
                  {job.drop}
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    className="press"
                    style={{
                      background: "rgba(255,255,255,.16)",
                      border: "1px solid rgba(255,255,255,.2)",
                      borderRadius: 10,
                      padding: "7px 14px",
                      color: C.white,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Phone size={13} /> Call
                  </button>
                  <button
                    className="press"
                    style={{
                      background: "rgba(255,255,255,.16)",
                      border: "1px solid rgba(255,255,255,.2)",
                      borderRadius: 10,
                      padding: "7px 14px",
                      color: C.white,
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <MessageCircle size={13} /> Message
                  </button>
                </div>
              </div>
            </div>
            {/* Customer OTP */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C.slate,
                textTransform: "uppercase",
                letterSpacing: ".08em",
                margin: "0 0 10px",
              }}
            >
              Customer OTP
            </p>
            <div
              style={{
                display: "flex",
                gap: 9,
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="number"
                  maxLength="1"
                  style={{
                    width: 64,
                    height: 72,
                    background: C.snow,
                    border: `2px solid ${C.silver}`,
                    borderRadius: 17,
                    textAlign: "center",
                    fontSize: 26,
                    fontWeight: 800,
                    color: C.ink,
                    outline: "none",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = C.purple)}
                  onBlur={(e) => (e.target.style.borderColor = C.silver)}
                />
              ))}
            </div>
            {/* Delivery proof photo */}
            <div
              className="press"
              style={{
                background: C.purplePale,
                border: `2px dashed ${C.purpleLight}`,
                borderRadius: 18,
                height: 128,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Camera size={30} color={C.purple} style={{ marginBottom: 9 }} />
              <p
                style={{
                  fontWeight: 800,
                  color: C.purple,
                  fontSize: 13,
                  margin: 0,
                }}
              >
                Upload Delivery Proof
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: C.purpleLight,
                  margin: "4px 0 0",
                }}
              >
                Photo of delivered packages at door
              </p>
            </div>
          </div>
          <div
            style={{
              padding: "10px 22px 28px",
              borderTop: `1px solid ${C.silver}`,
              flexShrink: 0,
            }}
          >
            <Btn
              label="Confirm Delivery"
              icon={<CheckCircle2 size={18} />}
              onClick={() => setJStep("d_complete")}
            />
          </div>
        </Sheet>
      );

    /* 4.8 Delivery complete celebration */
    if (jStep === "d_complete")
      return (
        <div
          className="fade"
          style={{
            position: "absolute",
            inset: 0,
            background: C.purpleDeep,
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 28px",
          }}
        >
          {/* Decorative */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 280,
              height: 280,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -70,
              width: 250,
              height: 250,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,.06)",
              pointerEvents: "none",
            }}
          />
          <div className="rise" style={{ width: "100%", textAlign: "center" }}>
            <div
              className="pop"
              style={{
                width: 96,
                height: 96,
                background: "rgba(255,255,255,.12)",
                borderRadius: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 26px",
                border: "2px solid rgba(255,255,255,.18)",
              }}
            >
              <CheckCircle2 size={50} color={C.yellow} />
            </div>
            <h1
              style={{
                fontSize: 34,
                fontWeight: 900,
                color: C.white,
                lineHeight: 1.1,
                margin: "0 0 10px",
                letterSpacing: "-.02em",
              }}
            >
              Delivery
              <br />
              Successful! 🎉
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,.6)",
                margin: "0 0 34px",
                lineHeight: 1.65,
              }}
            >
              Delivered to {job.customer}
            </p>
            {/* Summary card */}
            <div
              style={{
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.14)",
                borderRadius: 24,
                padding: "22px 26px",
                marginBottom: 28,
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                  marginBottom: 18,
                  paddingBottom: 18,
                  borderBottom: "1px solid rgba(255,255,255,.1)",
                }}
              >
                {[
                  { l: "Trip Earnings", v: `₹${job.earn}`, big: true },
                  { l: "Packages", v: `${job.pkgs} delivered` },
                  { l: "Booking ID", v: job.id },
                  { l: "Distance", v: job.dist },
                ].map((s) => (
                  <div key={s.l} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,.4)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: ".09em",
                        margin: "0 0 6px",
                      }}
                    >
                      {s.l}
                    </p>
                    <p
                      style={{
                        fontSize: s.big ? 34 : 16,
                        fontWeight: s.big ? 900 : 700,
                        color: s.big ? C.yellow : C.white,
                        margin: 0,
                        letterSpacing: s.big ? "-.03em" : "0",
                      }}
                    >
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <TrendingUp size={16} color={C.greenLight} />
                <span
                  style={{ fontSize: 13, color: C.greenLight, fontWeight: 700 }}
                >
                  ₹{balance + job.earn} total balance
                </span>
              </div>
            </div>
            <button
              className="press"
              onClick={finishJob}
              style={{
                width: "100%",
                background: C.yellow,
                color: C.ink,
                borderRadius: 20,
                padding: "18px",
                fontWeight: 800,
                fontSize: 16,
                border: "none",
                boxShadow: `0 10px 28px ${C.yellow}55`,
                letterSpacing: "-.01em",
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      );

    return null;
  };

  /* ── WALLET SCREEN (Screen 5) ── */
  const WalletScreen = () => (
    <div
      className="enter"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div style={{ flexShrink: 0, background: C.white }}>
        <SBar />
        <TBar title="Earnings & Wallet" onBack={() => setTab("home")} />
      </div>
      <div
        style={{ flex: 1, overflowY: "auto", padding: "16px 16px 0" }}
        className="sh"
      >
        {/* Balance hero (Screen 5.1) */}
        <div
          style={{
            background: `linear-gradient(150deg,${C.purpleDeep},${C.purpleDark})`,
            borderRadius: 28,
            padding: "24px",
            marginBottom: 14,
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 10px 34px ${C.purpleDeep}55`,
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -30,
              top: -30,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "rgba(255,255,255,.05)",
              pointerEvents: "none",
            }}
          />
          <p
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,.42)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              fontWeight: 700,
              margin: "0 0 6px",
            }}
          >
            Available Balance
          </p>
          <p
            style={{
              fontSize: 46,
              fontWeight: 900,
              color: C.yellow,
              margin: "0 0 4px",
              letterSpacing: "-.04em",
              lineHeight: 1,
            }}
          >
            ₹{balance.toFixed(2)}
          </p>
          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,.45)",
              margin: "0 0 20px",
              fontWeight: 500,
            }}
          >
            Auto-payout every Tuesday
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              borderTop: "1px solid rgba(255,255,255,.1)",
              paddingTop: 16,
              marginBottom: 18,
            }}
          >
            {[
              { l: "Today Earned", v: `₹${earned}` },
              { l: "Trips Today", v: `${trips}` },
            ].map((s) => (
              <div key={s.l}>
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,.35)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".09em",
                    margin: "0 0 4px",
                  }}
                >
                  {s.l}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: C.white,
                    margin: 0,
                    letterSpacing: "-.02em",
                  }}
                >
                  {s.v}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowWithdraw(true)}
            className="press"
            style={{
              width: "100%",
              background: C.yellow,
              color: C.ink,
              borderRadius: 16,
              padding: "15px",
              fontWeight: 800,
              fontSize: 15,
              border: "none",
              boxShadow: `0 6px 20px ${C.yellow}55`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Wallet size={18} /> Withdraw Funds
          </button>
        </div>
        {/* Auto-payout info */}
        <div
          style={{
            background: C.purplePale,
            border: `1px solid ${C.purpleMid}`,
            borderRadius: 16,
            padding: "13px 16px",
            display: "flex",
            gap: 10,
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <Zap size={16} color={C.purple} style={{ flexShrink: 0 }} />
          <p
            style={{
              fontSize: 12,
              color: C.purpleDark,
              margin: 0,
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            <strong>Auto-payout active.</strong> Your balance is automatically
            cleared every Tuesday to your registered bank account if no manual
            withdrawal was made.
          </p>
        </div>
        {/* Filter */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 14,
            overflowX: "auto",
          }}
          className="sh"
        >
          {["all", "today", "week", "bonus"].map((f) => (
            <button
              key={f}
              onClick={() => setEarnFilter(f)}
              className="press"
              style={{
                padding: "8px 16px",
                borderRadius: 12,
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".07em",
                whiteSpace: "nowrap",
                border: earnFilter === f ? "none" : `1px solid ${C.silver}`,
                cursor: "pointer",
                flexShrink: 0,
                background: earnFilter === f ? C.purple : C.white,
                color: earnFilter === f ? C.white : C.slate,
              }}
            >
              {f}
            </button>
          ))}
        </div>
        {/* History */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingBottom: 110,
          }}
        >
          {shownHistory.map((j, i) => (
            <div
              key={i}
              onClick={() => setReceipt(j)}
              className="press"
              style={{
                background: C.white,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 18,
                padding: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 14,
                    background: j.bonus ? C.yellowPale : C.purplePale,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {j.bonus ? (
                    <Star size={20} color={C.yellowDark} />
                  ) : (
                    <Package size={20} color={C.purple} />
                  )}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: C.ink,
                      margin: "0 0 3px",
                    }}
                  >
                    {j.id}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: C.mist,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    {j.date}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 900,
                    color: C.green,
                    margin: 0,
                  }}
                >
                  +₹{j.earn}
                </p>
                <ChevronRight size={15} color={C.silver} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Receipt overlay */}
      {receipt && (
        <div
          className="enter"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            background: C.snow,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flexShrink: 0, background: C.white }}>
            <SBar />
            <TBar title="Payout Details" onBack={() => setReceipt(null)} />
          </div>
          <div
            style={{ flex: 1, overflowY: "auto", padding: 16 }}
            className="sh"
          >
            <div
              style={{
                background: `linear-gradient(150deg,${C.purpleDeep},${C.purpleDark})`,
                borderRadius: 24,
                padding: "28px 22px",
                textAlign: "center",
                marginBottom: 14,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,.4)",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  fontWeight: 700,
                  margin: "0 0 8px",
                }}
              >
                Amount Credited
              </p>
              <p
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: C.yellow,
                  letterSpacing: "-.04em",
                  margin: "0 0 14px",
                }}
              >
                ₹{receipt.earn}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "rgba(22,163,74,.15)",
                  padding: "7px 15px",
                  borderRadius: 999,
                  border: "1px solid rgba(22,163,74,.25)",
                }}
              >
                <CheckCircle2 size={14} color="#86EFAC" />
                <span
                  style={{ fontSize: 12, fontWeight: 700, color: "#86EFAC" }}
                >
                  Payment Processed
                </span>
              </div>
            </div>
            <div
              style={{
                background: C.white,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 22,
                padding: 20,
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: C.ink,
                  margin: "0 0 16px",
                }}
              >
                Breakdown
              </p>
              {[
                ["Base Pay", "₹40.00"],
                ["Kilometer Pay", `₹${(receipt.earn - 40).toFixed(2)}`],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontSize: 13, color: C.slate }}>{k}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>
                    {v}
                  </span>
                </div>
              ))}
              <div
                style={{
                  borderTop: `1px solid ${C.silver}`,
                  paddingTop: 13,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{ fontSize: 14, fontWeight: 800, color: C.purple }}
                >
                  Total
                </span>
                <span style={{ fontSize: 17, fontWeight: 900, color: C.ink }}>
                  ₹{receipt.earn}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  /* ── PROFILE SCREEN (Screen 6) ── */
  const ProfileScreen = () => (
    <div
      className="enter"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ flexShrink: 0, background: C.white }}>
        <SBar />
        <TBar
          title="My Profile"
          onBack={() => setTab("home")}
          right={
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.slate,
                padding: 0,
                display: "flex",
              }}
            >
              <Settings size={20} />
            </button>
          }
        />
      </div>
      <div
        style={{ flex: 1, overflowY: "auto", padding: "14px 16px 0" }}
        className="sh"
      >
        {/* Partner card */}
        <div
          style={{
            background: `linear-gradient(140deg,${C.purpleDeep},${C.purple})`,
            borderRadius: 26,
            padding: "20px 22px",
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 16,
            boxShadow: `0 8px 28px ${C.purple}44`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -20,
              bottom: -20,
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "rgba(255,255,255,.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: 74,
              height: 74,
              background: C.yellow,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 900,
              color: C.ink,
              flexShrink: 0,
            }}
          >
            R
          </div>
          <div>
            <p
              style={{
                fontSize: 21,
                fontWeight: 900,
                color: C.white,
                margin: "0 0 3px",
                letterSpacing: "-.02em",
              }}
            >
              Rajesh Kumar
            </p>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,.55)",
                margin: "0 0 12px",
                fontWeight: 500,
              }}
            >
              ID: AP-2026 ·{" "}
              {userType === "fhm" ? "FHM Associate" : "Gig Worker"}
            </p>
            <span
              style={{
                background: "rgba(22,163,74,.18)",
                color: "#86EFAC",
                fontSize: 10,
                fontWeight: 700,
                padding: "4px 11px",
                borderRadius: 8,
                border: "1px solid rgba(22,163,74,.28)",
                textTransform: "uppercase",
                letterSpacing: ".07em",
              }}
            >
              ✓ Verified
            </span>
          </div>
        </div>
        {/* Quick stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 10,
            marginBottom: 16,
          }}
        >
          {[
            { l: "Today", v: `₹${earned}` },
            { l: "Trips", v: `${trips}` },
            { l: "Rating", v: "4.8★" },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                background: C.white,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 16,
                padding: "13px 10px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: C.purple,
                  margin: "0 0 3px",
                }}
              >
                {s.v}
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: C.mist,
                  margin: 0,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>
        {/* Menu */}
        <div
          style={{
            background: C.white,
            border: `1.5px solid ${C.silver}`,
            borderRadius: 22,
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          {[
            {
              id: "personal",
              I: <User size={18} />,
              l: "Personal Information",
              sub: "Name, DOB, Aadhaar",
            },
            {
              id: "vehicle",
              I: <Bike size={18} />,
              l: "Vehicle Management",
              sub: "Type, RC, fuel",
            },
            {
              id: "compliance",
              I: <ShieldCheck size={18} />,
              l: "KYC Documents",
              sub: "7 docs verified",
            },
            {
              id: "support",
              I: <HelpCircle size={18} />,
              l: "Help & Support",
              sub: "FAQ & call support",
            },
          ].map((item, idx, arr) => (
            <button
              key={item.id}
              onClick={() => setProfilePage(item.id)}
              className="press"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                background: "none",
                border: "none",
                borderBottom:
                  idx < arr.length - 1 ? `1px solid ${C.pearl}` : "none",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: C.purplePale,
                    borderRadius: 13,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: C.purple,
                  }}
                >
                  {item.I}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.ink,
                      margin: "0 0 2px",
                    }}
                  >
                    {item.l}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: C.mist,
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {item.sub}
                  </p>
                </div>
              </div>
              <ChevronRight size={16} color={C.silver} />
            </button>
          ))}
        </div>
        <div style={{ paddingBottom: 110 }}>
          <button
            onClick={() => setScreen("login")}
            className="press"
            style={{
              width: "100%",
              background: C.redPale,
              color: C.red,
              border: `1px solid #FECACA`,
              borderRadius: 16,
              padding: "14px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Power size={17} /> Log Out
          </button>
        </div>
      </div>
      {/* Sub-pages */}
      {profilePage && (
        <div
          className="enter"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            background: C.snow,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flexShrink: 0, background: C.white }}>
            <SBar />
            <TBar
              title={
                profilePage === "personal"
                  ? "Personal Info"
                  : profilePage === "vehicle"
                    ? "Vehicle Info"
                    : profilePage === "compliance"
                      ? "KYC Documents"
                      : "Help & Support"
              }
              onBack={() => setProfilePage(null)}
            />
          </div>
          <div
            style={{ flex: 1, overflowY: "auto", padding: "18px 16px 90px" }}
            className="sh"
          >
            {profilePage === "personal" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <Field label="Full Name" value="Rajesh Kumar" />
                <Field
                  label="Mobile"
                  value="+91 9876543210"
                  icon={<Phone size={16} />}
                />
                <Field
                  label="Email"
                  value="rajesh@example.com"
                  icon={<Mail size={16} />}
                />
                <Field
                  label="Date of Birth"
                  value="15/04/1992"
                  icon={<Calendar size={16} />}
                />
                <Field label="Aadhaar Number" value="XXXX XXXX 4589" />
                <Field label="PAN Card" value="ABCDE1234F" />
              </div>
            )}
            {profilePage === "vehicle" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div
                  style={{
                    background: C.purplePale,
                    border: `1px solid ${C.purpleMid}`,
                    borderRadius: 18,
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <Bike size={28} color={C.purple} />
                  <div>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: C.ink,
                        margin: "0 0 3px",
                      }}
                    >
                      2-Wheeler Active
                    </p>
                    <p style={{ fontSize: 12, color: C.slate, margin: 0 }}>
                      Petrol · 50 kg load capacity
                    </p>
                  </div>
                </div>
                <Field label="Vehicle Number" value="TS 09 EA 1234" />
                <Field label="Registration (RC)" value="RC2024HYD1234" />
                <Field label="Service Hub" value="Madhapur Hub, Hyderabad" />
              </div>
            )}
            {profilePage === "compliance" && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "Live Selfie",
                  "Aadhaar — Front",
                  "Aadhaar — Back",
                  "PAN Card",
                  "Driving Licence — Front",
                  "Driving Licence — Back",
                  "Vehicle RC",
                ].map((d, i) => (
                  <div
                    key={i}
                    style={{
                      background: C.white,
                      border: `1.5px solid ${C.silver}`,
                      borderRadius: 16,
                      padding: "13px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          background: C.greenPale,
                          borderRadius: 11,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Check size={17} color={C.green} />
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: C.ink,
                          margin: 0,
                        }}
                      >
                        {d}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: C.green,
                        textTransform: "uppercase",
                        letterSpacing: ".05em",
                      }}
                    >
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            )}
            {profilePage === "support" && (
              <>
                <div
                  style={{
                    textAlign: "center",
                    padding: "14px 0 26px",
                    borderBottom: `1px solid ${C.silver}`,
                    marginBottom: 22,
                  }}
                >
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      background: C.yellowPale,
                      borderRadius: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    <HelpCircle size={28} color={C.yellowDark} />
                  </div>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: C.ink,
                      margin: "0 0 6px",
                    }}
                  >
                    Need Help?
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: C.slate,
                      margin: "0 0 18px",
                      lineHeight: 1.6,
                    }}
                  >
                    Reach your hub manager or our 24/7 support team.
                  </p>
                  <button
                    className="press"
                    style={{
                      width: "100%",
                      background: C.purple,
                      color: C.white,
                      borderRadius: 16,
                      padding: "14px",
                      fontWeight: 700,
                      fontSize: 14,
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: `0 6px 20px ${C.purple}44`,
                    }}
                  >
                    <Phone size={16} /> Call Support (24/7)
                  </button>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  {[
                    {
                      q: "When do I receive my payout?",
                      a: "Every Tuesday automatically. You can also withdraw manually anytime, minimum ₹100.",
                    },
                    {
                      q: "Customer is unavailable at pickup?",
                      a: "Wait 10 minutes and call twice. Then mark as 'Customer Unavailable' — this auto-triggers a reschedule.",
                    },
                    {
                      q: "How are my earnings calculated?",
                      a: "Base fare + per-km rate + weight bonus + performance incentives. Bonuses are credited separately on Sundays.",
                    },
                    {
                      q: "What is the job timeout policy?",
                      a: "After accepting a booking, you have 20–40 minutes to reach the pickup location. The system sends an alert as you approach the timeout window.",
                    },
                    {
                      q: "Can I change my service area?",
                      a: "Yes, go to Profile > Personal Info > Service Area. Changes go live within 24 hours after admin review.",
                    },
                    {
                      q: "How do I report a damaged package?",
                      a: "Use the 'Report Issue' option available on the completed job card in your earnings history.",
                    },
                  ].map((f, i) => (
                    <FAQ key={i} q={f.q} a={f.a} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );

  /* ══════════════════════════════════════════
     MAIN SHELL
  ══════════════════════════════════════════ */
  const inJobFlow = jStep && jStep !== "preview";
  const showNav = !inJobFlow && !receipt && !profilePage && !showWithdraw;

  return (
    <Screen bg={C.snow}>
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {/* ── HOME TAB (Screen 3.1) ── */}
        {tab === "home" && (
          <div
            className="enter"
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Purple header */}
            <div
              style={{
                flexShrink: 0,
                background: `linear-gradient(150deg,${C.purpleDeep} 0%,${C.purple} 100%)`,
                padding: "0 20px 24px",
                borderRadius: "0 0 34px 34px",
                boxShadow: `0 10px 30px ${C.purple}44`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -50,
                  right: -60,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.05)",
                  pointerEvents: "none",
                }}
              />
              <SBar dark />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <div>
                  <Logo white />
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,.5)",
                      margin: "6px 0 0",
                      fontWeight: 500,
                    }}
                  >
                    Good morning, Rajesh 👋
                  </p>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    className="press"
                    style={{
                      width: 40,
                      height: 40,
                      background: "rgba(255,255,255,.14)",
                      borderRadius: 13,
                      border: "1px solid rgba(255,255,255,.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Bell size={20} color={C.white} />
                    <div
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 7,
                        height: 7,
                        background: C.yellow,
                        borderRadius: "50%",
                        border: `1.5px solid ${C.purple}`,
                      }}
                    />
                  </button>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: C.yellow,
                      borderRadius: 13,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 17,
                      color: C.ink,
                    }}
                  >
                    R
                  </div>
                </div>
              </div>
              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                {[
                  {
                    label: "Today's Earnings",
                    val: `₹${earned}`,
                    accent: true,
                  },
                  { label: "Trips Today", val: `${trips}`, accent: false },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: s.accent
                        ? "rgba(255,255,255,.16)"
                        : "rgba(255,255,255,.09)",
                      border: `1px solid rgba(255,255,255,${s.accent ? 0.2 : 0.12})`,
                      borderRadius: 20,
                      padding: "15px 17px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: "rgba(255,255,255,.6)",
                        textTransform: "uppercase",
                        letterSpacing: ".09em",
                        margin: "0 0 8px",
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontSize: 32,
                        fontWeight: 900,
                        color: s.accent ? C.yellow : C.white,
                        margin: 0,
                        letterSpacing: "-.03em",
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div
              style={{ flex: 1, overflowY: "auto", padding: "16px 16px 0" }}
              className="sh"
            >
              {/* Online/Offline toggle */}
              <div
                style={{
                  background: C.white,
                  border: `1.5px solid ${C.silver}`,
                  borderRadius: 22,
                  padding: 5,
                  display: "flex",
                  gap: 5,
                  marginBottom: 16,
                  boxShadow: `0 2px 10px rgba(30,26,46,.06)`,
                }}
              >
                {[
                  { on: true, label: "Online" },
                  { on: false, label: "Offline" },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    className="press"
                    onClick={() => setOnline(opt.on)}
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      borderRadius: 17,
                      fontWeight: 800,
                      fontSize: 13,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      transition: "all .25s",
                      background:
                        online === opt.on
                          ? opt.on
                            ? C.green
                            : C.ink
                          : "transparent",
                      color: online === opt.on ? C.white : C.mist,
                      boxShadow:
                        online === opt.on
                          ? opt.on
                            ? `0 4px 16px ${C.green}50`
                            : `0 4px 14px rgba(30,26,46,.22)`
                          : "none",
                    }}
                  >
                    {online === opt.on && opt.on && (
                      <div
                        className="pulse"
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,.9)",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {online === opt.on && !opt.on && <Power size={15} />}
                    {opt.label}
                  </button>
                ))}
              </div>

              {!online ? (
                <div
                  className="rise"
                  style={{
                    paddingTop: 48,
                    textAlign: "center",
                    paddingBottom: 110,
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      background: C.purplePale,
                      borderRadius: 26,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 18px",
                    }}
                  >
                    <Crosshair size={36} color={C.purpleLight} />
                  </div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      color: C.ink,
                      margin: "0 0 8px",
                    }}
                  >
                    You're Offline
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: C.slate,
                      lineHeight: 1.65,
                      padding: "0 36px",
                      margin: 0,
                    }}
                  >
                    Go online to access the 24/7 booking panel and start
                    earning.
                  </p>
                </div>
              ) : (
                <div className="rise" style={{ paddingBottom: 110 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 14,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 800,
                        color: C.ink,
                        margin: 0,
                      }}
                    >
                      Booking Marketplace
                    </p>
                    <span
                      style={{
                        background: C.yellowPale,
                        color: C.yellowDark,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "5px 11px",
                        borderRadius: 999,
                        border: `1px solid ${C.yellow}33`,
                        textTransform: "uppercase",
                        letterSpacing: ".06em",
                      }}
                    >
                      {bookings.length} Live
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {bookings.map((b) => (
                      <BookingCard
                        key={b.id}
                        b={b}
                        onClick={() => openJob(b)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Job overlays */}
            {job && jType === "pickup" && <PickupFlow />}
            {job && jType === "delivery" && <DeliveryFlow />}
          </div>
        )}

        {/* DASHBOARD TAB (Screen 7) */}
        {tab === "dashboard" && (
          <DashboardScreen onBack={() => setTab("home")} />
        )}

        {/* EARNINGS TAB (Screen 5) */}
        {tab === "earnings" && <WalletScreen />}

        {/* PROFILE TAB (Screen 6) */}
        {tab === "profile" && <ProfileScreen />}

        {showWithdraw && (
          <WithdrawModal
            balance={balance}
            setBalance={setBalance}
            close={() => setShowWithdraw(false)}
          />
        )}
      </div>

      {/* ── Bottom Nav — hidden during active job ── */}
      {showNav && (
        <div
          style={{
            flexShrink: 0,
            padding: "8px 14px 24px",
            background: C.white,
            borderTop: `1px solid ${C.pearl}`,
          }}
        >
          <div
            style={{
              background: C.ink,
              borderRadius: 22,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "0 8px",
            }}
          >
            {[
              { t: "home", I: <Home size={21} />, l: "Home" },
              { t: "dashboard", I: <BarChart2 size={21} />, l: "Stats" },
              { t: "earnings", I: <Wallet size={21} />, l: "Wallet" },
              { t: "profile", I: <User size={21} />, l: "Me" },
            ].map(({ t, I, l }) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="press"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  padding: "4px 14px",
                  borderRadius: 14,
                  border: "none",
                  cursor: "pointer",
                  transition: "all .2s",
                  background: tab === t ? "rgba(255,255,255,.1)" : "none",
                  color: tab === t ? C.yellow : "rgba(255,255,255,.32)",
                }}
              >
                {I}
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: ".04em",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </Screen>
  );
}

/* ═══════════════════════════════════════════════════════════
   DEVICE CHROME
═══════════════════════════════════════════════════════════ */
export default function DeviceApp() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#D0CADC 0%,#BEB8CE 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
      }}
    >
      <Styles />
      <div style={{ position: "relative", flexShrink: 0 }}>
        {/* Physical buttons */}
        {[
          { s: "right", t: 132, h: 72 },
          { s: "left", t: 92, h: 36 },
          { s: "left", t: 142, h: 70 },
          { s: "left", t: 224, h: 70 },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              [b.s]: -4,
              top: b.t,
              width: 4,
              height: b.h,
              background: "#1E1E22",
              borderRadius: b.s === "right" ? "0 3px 3px 0" : "3px 0 0 3px",
            }}
          />
        ))}
        {/* Shell */}
        <div
          style={{
            background: "linear-gradient(160deg,#2C2C30,#1A1A1E)",
            borderRadius: 54,
            padding: 11,
            boxShadow:
              "0 0 0 1px #3A3A40,0 60px 130px rgba(0,0,0,.75),inset 0 1px 0 rgba(255,255,255,.07)",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              width: 122,
              height: 36,
              background: "#080810",
              borderRadius: 22,
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              border: "1px solid #1E1E28",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#0D0D14",
              }}
            />
            <div
              style={{
                width: 30,
                height: 10,
                borderRadius: 6,
                background: "#121218",
              }}
            />
          </div>
          {/* Screen */}
          <div
            style={{
              width: 390,
              height: 844,
              borderRadius: 44,
              overflow: "hidden",
              background: C.white,
              position: "relative",
            }}
          >
            <App />
          </div>
        </div>
      </div>
    </div>
  );
}
