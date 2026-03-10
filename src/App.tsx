/* eslint-disable */
// @ts-nocheck
import React, { useState } from "react";
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
  FileText,
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
  TrendingUp,
  FileCheck,
  Star,
  LayoutDashboard,
  Box,
} from "lucide-react";

/* ── Tokens ── */
const C = {
  purple: "#A767A7",
  purpleDark: "#7D3F7D",
  purpleDeep: "#5C2D5C",
  purpleLight: "#C894C8",
  purplePale: "#F5ECF5",
  purpleMid: "#EAD5EA",
  yellow: "#F7BD1E",
  yellowDark: "#D9A416",
  yellowPale: "#FFF8E1",
  ink: "#1E1A2E",
  charcoal: "#3D3550",
  slate: "#6E6783",
  mist: "#A89EBA",
  silver: "#D8D3E3",
  pearl: "#EDE9F5",
  snow: "#F8F7FC",
  white: "#FFFFFF",
  green: "#16A34A",
  greenPale: "#DCFCE7",
  red: "#DC2626",
  redPale: "#FEE2E2",
  amber: "#D97706",
  amberPale: "#FEF3C7",
  blue: "#2563EB",
  bluePale: "#EFF6FF",
};

/* ── Global CSS ── */
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
    *,*::before,*::after{font-family:'Plus Jakarta Sans',sans-serif!important;box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
    .sh::-webkit-scrollbar{display:none;} .sh{-ms-overflow-style:none;scrollbar-width:none;}
    .enter{animation:enter .25s ease both;}
    @keyframes enter{from{opacity:0;transform:translateX(10px)}to{opacity:1;transform:none}}
    .rise{animation:rise .28s ease both;}
    @keyframes rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
    .sheet{animation:sheet .32s cubic-bezier(.32,.72,0,1) both;}
    @keyframes sheet{from{transform:translateY(100%)}to{transform:none}}
    .fade{animation:fade .22s ease both;}
    @keyframes fade{from{opacity:0}to{opacity:1}}
    .press{cursor:pointer;transition:transform .15s;}
    .press:active{transform:scale(.97);}
    .pulse{animation:pulse 2s ease infinite;}
    @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(22,163,74,.5)}60%{box-shadow:0 0 0 10px rgba(22,163,74,0)}100%{box-shadow:0 0 0 0 rgba(22,163,74,0)}}
    .spin{animation:spin 1s linear infinite;}
    @keyframes spin{to{transform:rotate(360deg)}}
    input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;}
    .bg-pan { animation: bg-pan 12s ease-in-out infinite alternate; background-size: 200% 200%; }
    @keyframes bg-pan { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
    .float { animation: float 6s ease-in-out infinite; }
    @keyframes float { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(3deg); } 100% { transform: translateY(0px) rotate(0deg); } }
  `}</style>
);

/* ── Shared atoms ── */
const Logo = ({ white = false }) => (
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
        fontSize: 22,
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

const SBar = ({ dark = false }) => (
  <div
    style={{
      padding: "10px 22px 5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: dark ? "transparent" : C.white,
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
        style={{ margin: "0 2px" }}
        fill="none"
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
            borderRadius: "0 1px 1px 0",
            background: dark ? "rgba(255,255,255,.4)" : C.silver,
          }}
        />
      </div>
    </div>
  </div>
);

const TBar = ({ title, onBack, right }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px",
      background: C.white,
      borderBottom: `1px solid ${C.silver}`,
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
      )}
      <h1
        style={{
          fontSize: 17,
          fontWeight: 800,
          color: C.ink,
          margin: 0,
          letterSpacing: "-.02em",
        }}
      >
        {title}
      </h1>
    </div>
    {right && <div style={{ color: C.slate }}>{right}</div>}
  </div>
);

const Field = ({ label, placeholder, type = "text", value }) => (
  <div>
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
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      style={{
        width: "100%",
        background: C.snow,
        border: `1.5px solid ${C.silver}`,
        borderRadius: 14,
        padding: "13px 15px",
        fontSize: 15,
        fontWeight: 500,
        color: C.ink,
        outline: "none",
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
  </div>
);

const Pill = ({ label, color, bg }) => (
  <span
    style={{
      display: "inline-block",
      fontSize: 10,
      fontWeight: 700,
      color,
      background: bg,
      padding: "3px 9px",
      borderRadius: 999,
      textTransform: "uppercase",
      letterSpacing: ".07em",
    }}
  >
    {label}
  </span>
);

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
        onClick={() => set(!o)}
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

/* ════════════════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════════════ */
function App() {
  const [screen, setScreen] = useState("login");
  const [tab, setTab] = useState("home");
  const [online, setOnline] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [profilePage, setProfilePage] = useState(null);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [filter, setFilter] = useState("all");
  const [preview, setPreview] = useState(null);
  const [activeJob, setActiveJob] = useState(null);
  const [jobStep, setJobStep] = useState(null);
  const [balance, setBalance] = useState(1250);
  const [earned, setEarned] = useState(340);
  const [trips, setTrips] = useState(4);

  const bookings = [
    {
      id: "AVN-9012",
      type: "First Mile",
      customer: "Suresh Reddy",
      pickup: "Cyber Towers, Hitec City",
      drop: "Avaan Hub, Madhapur",
      dist: "3.5 km",
      pkgs: 2,
      earn: 75,
      eta: "18 min",
    },
    {
      id: "AVN-9015",
      type: "Last Mile",
      customer: "Anita Gupta",
      pickup: "Avaan Hub, Madhapur",
      drop: "Inorbit Mall, Hitec City",
      dist: "1.2 km",
      pkgs: 1,
      earn: 45,
      eta: "10 min",
    },
    {
      id: "AVN-9021",
      type: "First Mile",
      customer: "Karan Mehra",
      pickup: "Jubilee Hills, Road 45",
      drop: "Avaan Hub, Madhapur",
      dist: "4.8 km",
      pkgs: 3,
      earn: 110,
      eta: "25 min",
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

  const shown = history.filter((j) => {
    if (filter === "today") return j.date.includes("Today");
    if (filter === "week") return true;
    if (filter === "bonus") return j.bonus;
    return true;
  });

  const acceptJob = () => {
    setActiveJob(preview);
    setPreview(null);
    setJobStep("go_pickup");
  };
  const finishJob = () => {
    setBalance((p) => p + activeJob.earn);
    setEarned((p) => p + activeJob.earn);
    setTrips((p) => p + 1);
    setActiveJob(null);
    setJobStep(null);
  };

  /* ──────────────────────────────────────────
     SCREEN: LOGIN
  ────────────────────────────────────────── */
  if (screen === "login")
    return (
      <Screen bg={C.white}>
        <SBar />
        <div
          style={{ flex: 1, padding: "22px 24px 0", overflowY: "auto" }}
          className="sh"
        >
          <Logo />
          <h1
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: C.ink,
              lineHeight: 1.1,
              letterSpacing: "-.03em",
              margin: "26px 0 10px",
            }}
          >
            Earn on
            <br />
            your schedule.
          </h1>
          <p
            style={{
              fontSize: 14,
              color: C.slate,
              lineHeight: 1.65,
              margin: "0 0 26px",
            }}
          >
            Join Avaan's logistics network. Deliver parcels. Get paid weekly.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 10,
              marginBottom: 28,
            }}
          >
            {[
              { v: "4.8★", l: "Rating" },
              { v: "₹500", l: "Avg/day" },
              { v: "Tue", l: "Payout" },
            ].map((s) => (
              <div
                key={s.l}
                style={{
                  background: C.purplePale,
                  border: `1px solid ${C.purpleMid}`,
                  borderRadius: 16,
                  padding: "12px 8px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: C.purple,
                    margin: 0,
                  }}
                >
                  {s.v}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: C.slate,
                    margin: "2px 0 0",
                    fontWeight: 600,
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
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
            Mobile Number
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                background: C.snow,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 14,
                padding: "12px 14px",
                fontWeight: 700,
                fontSize: 15,
                color: C.ink,
              }}
            >
              +91
            </div>
            <input
              type="tel"
              defaultValue="9876543210"
              placeholder="10-digit number"
              style={{
                flex: 1,
                background: C.snow,
                border: `1.5px solid ${C.silver}`,
                borderRadius: 14,
                padding: "12px 14px",
                fontSize: 15,
                fontWeight: 500,
                color: C.ink,
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = C.purple;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = C.silver;
              }}
            />
          </div>
        </div>
        <div style={{ padding: "18px 24px 28px", flexShrink: 0 }}>
          <button
            className="press"
            onClick={() => setScreen("otp")}
            style={{
              width: "100%",
              background: C.purple,
              color: C.white,
              borderRadius: 18,
              padding: "17px",
              fontWeight: 700,
              fontSize: 16,
              border: "none",
              boxShadow: `0 8px 24px ${C.purple}50`,
            }}
          >
            Send OTP →
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: C.mist,
              margin: "10px 0 0",
            }}
          >
            By continuing you agree to our Terms of Service
          </p>
        </div>
      </Screen>
    );

  /* ──────────────────────────────────────────
     SCREEN: OTP
  ────────────────────────────────────────── */
  if (screen === "otp")
    return (
      <Screen bg={C.white}>
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
              marginBottom: 22,
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
            OTP sent to +91 9876543210
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {[0, 1, 2, 3].map((i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                style={{
                  width: 70,
                  height: 78,
                  background: C.snow,
                  border: `2px solid ${C.silver}`,
                  borderRadius: 18,
                  textAlign: "center",
                  fontSize: 28,
                  fontWeight: 800,
                  color: C.ink,
                  outline: "none",
                  transition: "border-color .2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = C.purple)}
                onBlur={(e) => (e.target.style.borderColor = C.silver)}
                onChange={(e) => {
                  if (e.target.value && i === 3)
                    setTimeout(() => setScreen("work_area"), 300);
                }}
              />
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: C.slate,
              marginTop: 24,
            }}
          >
            Didn't receive?{" "}
            <span
              style={{ color: C.purple, fontWeight: 700, cursor: "pointer" }}
            >
              Resend OTP
            </span>
          </p>
        </div>
      </Screen>
    );

  /* ──────────────────────────────────────────
     SCREEN: WORK AREA PREFERENCE
  ────────────────────────────────────────── */
  if (screen === "work_area")
    return (
      <Screen bg={C.purpleDeep}>
        <div
          className="bg-pan"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${C.purpleDeep} 0%, ${C.purple} 50%, ${C.purpleDark} 100%)`,
            zIndex: 0,
          }}
        />
        <div
          className="bg-pan"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            zIndex: 0,
            background:
              "radial-gradient(circle at 50% 50%, #fff 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <SBar dark />
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px 24px 24px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            position: "relative",
          }}
          className="sh"
        >
          <button
            onClick={() => setScreen("otp")}
            className="press"
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: C.white,
              marginBottom: 30,
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={17} />
          </button>

          <div
            className="float"
            style={{ textAlign: "center", marginBottom: 30 }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                border: "2px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <MapPin size={38} color={C.yellow} />
            </div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: C.white,
                lineHeight: 1.1,
                letterSpacing: "-.02em",
                margin: "0 0 10px",
              }}
            >
              Where do you
              <br />
              want to work?
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                padding: "0 10px",
                margin: 0,
              }}
            >
              Let us know your preferred operational area so we can prioritize
              tasks nearest to you.
            </p>
          </div>

          <div
            className="enter"
            style={{
              background: C.white,
              borderRadius: 26,
              padding: 22,
              marginTop: "auto",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            }}
          >
            <Field label="Pincode" placeholder="e.g. 500081" type="number" />
            <div style={{ height: 16 }} />
            <Field label="City / Area" placeholder="e.g. Madhapur, Hyderabad" />
            <div style={{ height: 16 }} />
            <Field
              label="Landmark / Micro-hub"
              placeholder="e.g. Cyber Towers"
            />

            <button
              onClick={() => setScreen("kyc_1")}
              className="press"
              style={{
                width: "100%",
                background: C.purple,
                color: C.white,
                borderRadius: 18,
                padding: 17,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
                boxShadow: `0 6px 20px ${C.purple}44`,
                marginTop: 26,
              }}
            >
              Proceed to KYC →
            </button>
          </div>
        </div>
      </Screen>
    );

  /* ──────────────────────────────────────────
     SCREEN: KYC (shared shell)
  ────────────────────────────────────────── */
  const KycWrap = ({ s, title, sub, prev, next, children }) => (
    <Screen bg={C.white}>
      <SBar />
      {/* Fixed header */}
      <div
        style={{
          padding: "12px 20px",
          borderBottom: `1px solid ${C.silver}`,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <button
            onClick={prev}
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
          <Pill label={`Step ${s} of 4`} color={C.purple} bg={C.purplePale} />
        </div>
        <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 3,
                borderRadius: 2,
                background: i <= s ? C.purple : C.silver,
                transition: "background .3s",
              }}
            />
          ))}
        </div>
        <h2
          style={{
            fontSize: 21,
            fontWeight: 800,
            color: C.ink,
            margin: "0 0 2px",
            letterSpacing: "-.02em",
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: 13, color: C.slate, margin: 0 }}>{sub}</p>
      </div>
      {/* Scrollable body */}
      <div
        style={{ flex: 1, overflowY: "auto", padding: "18px 20px 0" }}
        className="sh"
      >
        {children}
      </div>
      {/* Fixed footer button */}
      <div style={{ padding: "16px 20px 26px", flexShrink: 0 }}>
        <button
          onClick={next}
          className="press"
          style={{
            width: "100%",
            background: C.purple,
            color: C.white,
            borderRadius: 18,
            padding: 17,
            fontWeight: 700,
            fontSize: 15,
            border: "none",
            boxShadow: `0 6px 20px ${C.purple}44`,
          }}
        >
          Continue →
        </button>
      </div>
    </Screen>
  );

  if (screen === "kyc_1")
    return (
      <KycWrap
        s={1}
        title="Personal Details"
        sub="Required for background verification."
        prev={() => setScreen("login")}
        next={() => setScreen("kyc_2")}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            paddingBottom: 20,
          }}
        >
          <Field
            label="Full Name (As per Aadhaar)"
            placeholder="e.g. Rajesh Kumar"
          />
          <Field
            label="Aadhaar Number"
            placeholder="0000 0000 0000"
            type="number"
          />
          <Field label="PAN Card Number" placeholder="ABCDE1234F" />
        </div>
      </KycWrap>
    );

  if (screen === "kyc_2")
    return (
      <KycWrap
        s={2}
        title="Vehicle & Work Area"
        sub="Helps us assign the right jobs to you."
        prev={() => setScreen("kyc_1")}
        next={() => setScreen("kyc_3")}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
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
                { Icon: Bike, l: "2-Wheeler", s: "Bikes & Scooters", a: true },
                { Icon: Truck, l: "3/4-Wheeler", s: "Auto & Trucks", a: false },
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
                    size={28}
                    color={v.a ? C.purple : C.mist}
                    style={{ marginBottom: 10 }}
                  />
                  <p
                    style={{
                      fontSize: 14,
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
            label="Vehicle Registration (RC)"
            placeholder="TS 09 EA 1234"
          />
          <Field
            label="Preferred Hub Area"
            placeholder="e.g. Madhapur, Hyderabad"
          />
        </div>
      </KycWrap>
    );

  if (screen === "kyc_3")
    return (
      <KycWrap
        s={3}
        title="Bank Details"
        sub="Where should we deposit your earnings?"
        prev={() => setScreen("kyc_2")}
        next={() => setScreen("kyc_4")}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
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
              size={16}
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
              We'll deposit ₹1 to verify your account. Name must match Aadhaar.
            </p>
          </div>
          <Field
            label="Account Number"
            placeholder="Enter account number"
            type="number"
          />
          <Field
            label="Re-enter Account Number"
            placeholder="Confirm number"
            type="number"
          />
          <Field label="IFSC Code" placeholder="e.g. SBIN000XXXX" />
        </div>
      </KycWrap>
    );

  if (screen === "kyc_4")
    return (
      <KycWrap
        s={4}
        title="Upload Documents"
        sub="Upload clear photos of all documents."
        prev={() => setScreen("kyc_3")}
        next={() => setScreen("pending")}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            paddingBottom: 20,
          }}
        >
          {[
            {
              T: "Live Selfie",
              S: "Clear photo of your face",
              I: <Camera size={22} />,
            },
            {
              T: "Driving Licence",
              S: "Front side of your DL",
              I: <FileText size={22} />,
            },
            {
              T: "Vehicle RC",
              S: "Registration Certificate",
              I: <FileCheck size={22} />,
            },
          ].map((d, i) => (
            <div
              key={i}
              className="press"
              style={{
                border: `2px dashed ${C.silver}`,
                borderRadius: 18,
                padding: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: C.white,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    background: C.snow,
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: C.mist,
                  }}
                >
                  {d.I}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: C.ink,
                      margin: "0 0 2px",
                    }}
                  >
                    {d.T}
                  </p>
                  <p style={{ fontSize: 12, color: C.slate, margin: 0 }}>
                    {d.S}
                  </p>
                </div>
              </div>
              <Upload size={17} color={C.mist} />
            </div>
          ))}
        </div>
      </KycWrap>
    );

  /* ──────────────────────────────────────────
     SCREEN: PENDING
  ────────────────────────────────────────── */
  if (screen === "pending")
    return (
      <Screen bg={C.purpleDeep}>
        <SBar dark />
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
            style={{
              width: 80,
              height: 80,
              background: "rgba(255,255,255,.12)",
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 22,
              border: "2px solid rgba(255,255,255,.15)",
            }}
          >
            <Clock size={38} color={C.yellow} />
          </div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: C.white,
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              margin: "0 0 10px",
            }}
          >
            Under Review
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,.6)",
              lineHeight: 1.65,
              maxWidth: 260,
              margin: "0 0 30px",
            }}
          >
            Your documents are being reviewed. We'll notify you once approved.
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 32,
            }}
          >
            {[
              "Identity Verified ✓",
              "Vehicle Check – In Progress",
              "Final Approval – Pending",
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 14,
                  padding: "13px 16px",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background:
                      i === 0
                        ? C.green
                        : i === 1
                          ? C.yellow
                          : "rgba(255,255,255,.25)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color:
                      i === 0
                        ? "#86EFAC"
                        : i === 1
                          ? C.yellow
                          : "rgba(255,255,255,.45)",
                  }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setScreen("main")}
            className="press"
            style={{
              width: "100%",
              background: "rgba(255,255,255,.1)",
              color: C.white,
              border: "1.5px solid rgba(255,255,255,.2)",
              borderRadius: 18,
              padding: 16,
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Simulate Approval →
          </button>
        </div>
      </Screen>
    );

  /* ──────────────────────────────────────────
     SCREEN: MAIN APP
  ────────────────────────────────────────── */
  if (screen === "main")
    return (
      <Screen bg={C.snow}>
        {/* ── TAB CONTENT — each tab is a full flex column ── */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          {/* ════ HOME TAB ════ */}
          {tab === "home" && (
            <div
              className="enter"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Purple header — part of normal flow, NOT position:sticky or absolute */}
              <div
                style={{
                  flexShrink: 0,
                  background: `linear-gradient(150deg,${C.purpleDeep} 0%,${C.purple} 100%)`,
                  padding: "0 20px 24px",
                  borderRadius: "0 0 34px 34px",
                  boxShadow: `0 8px 28px ${C.purple}44`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.04)",
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
                  <Logo white />
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      className="press"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(255,255,255,.15)",
                        borderRadius: 13,
                        border: "1px solid rgba(255,255,255,.2)",
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
                        fontSize: 16,
                        color: C.ink,
                      }}
                    >
                      R
                    </div>
                  </div>
                </div>
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
                        padding: "15px 16px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: "rgba(255,255,255,.65)",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                          margin: "0 0 8px",
                        }}
                      >
                        {s.label}
                      </p>
                      <p
                        style={{
                          fontSize: 30,
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

              {/* Scrollable body */}
              <div
                style={{ flex: 1, overflowY: "auto", padding: "16px 16px 0" }}
                className="sh"
              >
                {/* Toggle */}
                <div
                  style={{
                    background: C.white,
                    border: `1.5px solid ${C.silver}`,
                    borderRadius: 22,
                    padding: 5,
                    display: "flex",
                    gap: 5,
                    marginBottom: 16,
                    boxShadow: `0 2px 8px rgba(30,26,46,.06)`,
                  }}
                >
                  {[
                    { on: true, label: "Online" },
                    { on: false, label: "Offline" },
                  ].map((opt) => (
                    <button
                      key={opt.label}
                      className="press"
                      onClick={() => {
                        if (!opt.on) {
                          setOnline(false);
                          setPreview(null);
                        } else setOnline(true);
                      }}
                      style={{
                        flex: 1,
                        padding: "11px 0",
                        borderRadius: 17,
                        fontWeight: 800,
                        fontSize: 13,
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 7,
                        transition: "all .2s",
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
                              ? `0 4px 14px ${C.green}50`
                              : `0 4px 14px rgba(30,26,46,.2)`
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
                      paddingTop: 44,
                      textAlign: "center",
                      paddingBottom: 100,
                    }}
                  >
                    <div
                      style={{
                        width: 76,
                        height: 76,
                        background: C.purplePale,
                        borderRadius: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <Crosshair size={34} color={C.purpleLight} />
                    </div>
                    <h3
                      style={{
                        fontSize: 18,
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
                        lineHeight: 1.6,
                        padding: "0 30px",
                        margin: 0,
                      }}
                    >
                      Go online to see available bookings and start earning.
                    </p>
                  </div>
                ) : (
                  <div className="rise" style={{ paddingBottom: 100 }}>
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
                        Available Nearby
                      </p>
                      <span
                        style={{
                          background: C.yellowPale,
                          color: C.yellowDark,
                          fontSize: 10,
                          fontWeight: 700,
                          padding: "4px 10px",
                          borderRadius: 999,
                          border: `1px solid ${C.yellow}44`,
                          textTransform: "uppercase",
                          letterSpacing: ".06em",
                        }}
                      >
                        {bookings.length} New
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
                        <div
                          key={b.id}
                          onClick={() => setPreview(b)}
                          className="press"
                          style={{
                            background: C.white,
                            border: `1.5px solid ${C.silver}`,
                            borderRadius: 22,
                            padding: 16,
                            boxShadow: `0 2px 10px rgba(30,26,46,.05)`,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              marginBottom: 12,
                            }}
                          >
                            <div>
                              <Pill
                                label={b.type}
                                color={
                                  b.type === "First Mile" ? C.blue : C.purple
                                }
                                bg={
                                  b.type === "First Mile"
                                    ? C.bluePale
                                    : C.purplePale
                                }
                              />
                              <p
                                style={{
                                  fontSize: 14,
                                  fontWeight: 800,
                                  color: C.ink,
                                  margin: "7px 0 0",
                                }}
                              >
                                {b.id}
                              </p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <p
                                style={{
                                  fontSize: 24,
                                  fontWeight: 900,
                                  color: C.purple,
                                  margin: 0,
                                  letterSpacing: "-.03em",
                                }}
                              >
                                ₹{b.earn}
                              </p>
                              <p
                                style={{
                                  fontSize: 12,
                                  color: C.slate,
                                  margin: "2px 0 0",
                                  fontWeight: 600,
                                }}
                              >
                                {b.dist}
                              </p>
                            </div>
                          </div>
                          <div
                            style={{
                              background: C.snow,
                              borderRadius: 11,
                              padding: "9px 12px",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              marginBottom: 12,
                            }}
                          >
                            <MapPin
                              size={13}
                              color={C.mist}
                              style={{ flexShrink: 0 }}
                            />
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
                                gap: 14,
                                fontSize: 12,
                                color: C.slate,
                                fontWeight: 600,
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 4,
                                }}
                              >
                                <Package size={13} /> {b.pkgs} pkgs
                              </span>
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 4,
                                }}
                              >
                                <Clock size={13} /> {b.eta}
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
                                borderRadius: 10,
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: 4,
                              }}
                            >
                              VIEW <ArrowRight size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── Job detail sheet — inside tab, stacked above content ── */}
              {preview && (
                <div
                  className="fade"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(30,26,46,.55)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 52,
                    zIndex: 10,
                  }}
                >
                  <div
                    className="sheet"
                    style={{
                      background: C.white,
                      flex: 1,
                      borderRadius: "30px 30px 0 0",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
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
                    <div
                      style={{
                        flex: 1,
                        overflowY: "auto",
                        padding: "6px 22px",
                      }}
                      className="sh"
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          padding: "8px 0 16px",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 12,
                              color: C.slate,
                              margin: "0 0 4px",
                              fontWeight: 500,
                            }}
                          >
                            Payout for this task
                          </p>
                          <p
                            style={{
                              fontSize: 40,
                              fontWeight: 900,
                              color: C.ink,
                              margin: 0,
                              letterSpacing: "-.04em",
                            }}
                          >
                            ₹{preview.earn}
                          </p>
                        </div>
                        <button
                          onClick={() => setPreview(null)}
                          className="press"
                          style={{
                            width: 36,
                            height: 36,
                            background: C.snow,
                            border: `1px solid ${C.silver}`,
                            borderRadius: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: C.slate,
                          }}
                        >
                          <X size={17} />
                        </button>
                      </div>
                      {/* Route */}
                      <div
                        style={{
                          position: "relative",
                          paddingLeft: 26,
                          marginLeft: 8,
                          marginBottom: 20,
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 5,
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background: C.ink,
                            border: `3px solid ${C.white}`,
                            outline: `2px solid ${C.ink}`,
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: 5,
                            top: 19,
                            width: 2,
                            height: 40,
                            borderLeft: `2px dashed ${C.silver}`,
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: 61,
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background: C.purple,
                            border: `3px solid ${C.white}`,
                            outline: `2px solid ${C.purple}`,
                          }}
                        />
                        <div style={{ marginBottom: 36 }}>
                          <p
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: C.mist,
                              textTransform: "uppercase",
                              letterSpacing: ".08em",
                              margin: "0 0 3px",
                            }}
                          >
                            Pickup
                          </p>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: C.ink,
                              margin: "0 0 2px",
                            }}
                          >
                            {preview.pickup}
                          </p>
                          <p
                            style={{ fontSize: 12, color: C.slate, margin: 0 }}
                          >
                            {preview.customer}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: C.mist,
                              textTransform: "uppercase",
                              letterSpacing: ".08em",
                              margin: "0 0 3px",
                            }}
                          >
                            Drop
                          </p>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: C.ink,
                              margin: 0,
                            }}
                          >
                            {preview.drop}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 10,
                          marginBottom: 14,
                        }}
                      >
                        {[
                          {
                            I: <Package size={18} color={C.purple} />,
                            l: "Packages",
                            v: `${preview.pkgs} Units`,
                            bg: C.purplePale,
                          },
                          {
                            I: <Navigation size={18} color={C.slate} />,
                            l: "Distance",
                            v: preview.dist,
                            bg: C.snow,
                          },
                        ].map((c) => (
                          <div
                            key={c.l}
                            style={{
                              background: c.bg,
                              border: `1px solid ${C.silver}`,
                              borderRadius: 16,
                              padding: 14,
                            }}
                          >
                            {c.I}
                            <p
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                color: C.mist,
                                textTransform: "uppercase",
                                letterSpacing: ".07em",
                                margin: "7px 0 3px",
                              }}
                            >
                              {c.l}
                            </p>
                            <p
                              style={{
                                fontSize: 16,
                                fontWeight: 800,
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
                          border: "1px solid #FDE68A",
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
                          20 minutes to reach pickup. Verification PIN required
                          at handover.
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "12px 22px 26px",
                        borderTop: `1px solid ${C.silver}`,
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <button
                        onClick={acceptJob}
                        className="press"
                        style={{
                          width: "100%",
                          background: C.purple,
                          color: C.white,
                          borderRadius: 18,
                          padding: 17,
                          fontWeight: 700,
                          fontSize: 15,
                          border: "none",
                          boxShadow: `0 6px 20px ${C.purple}44`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                        }}
                      >
                        ACCEPT & START <ChevronRight size={18} />
                      </button>
                      <button
                        onClick={() => setPreview(null)}
                        style={{
                          background: "none",
                          border: "none",
                          color: C.mist,
                          fontWeight: 600,
                          fontSize: 13,
                          padding: "10px",
                          cursor: "pointer",
                        }}
                      >
                        Decline Job
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Active job panel Map Background ── */}
              {activeJob && (
                <div
                  className="fade"
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 9,
                    background: "#E2E8F0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ flexShrink: 0, background: C.white }}>
                    <SBar />
                    <TBar
                      title="Navigation"
                      onBack={() => setActiveJob(null)}
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      flex: 1,
                      overflow: "hidden",
                    }}
                  >
                    {/* Fake Map Elements */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                          "radial-gradient(circle at 50% 50%, #CBD5E1 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                        opacity: 0.8,
                      }}
                    />
                    <svg
                      viewBox="0 0 400 600"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <path
                        d="M 120 150 L 180 280 L 300 320 L 250 500"
                        fill="none"
                        stroke={C.purple}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="120"
                        cy="150"
                        r="10"
                        fill={C.ink}
                        stroke={C.white}
                        strokeWidth="3"
                      />
                      <circle
                        cx="250"
                        cy="500"
                        r="10"
                        fill={C.green}
                        stroke={C.white}
                        strokeWidth="3"
                      />
                      {/* Current marker */}
                      <circle cx="180" cy="280" r="12" fill={C.purple} />
                      <circle cx="180" cy="280" r="6" fill={C.white} />
                    </svg>
                    <div
                      style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        right: 20,
                        background: C.white,
                        borderRadius: 16,
                        padding: "14px",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <div
                        className="pulse"
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: C.purplePale,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Navigation size={22} color={C.purple} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontSize: 15,
                            fontWeight: 800,
                            margin: "0 0 2px",
                          }}
                        >
                          Heading to{" "}
                          {jobStep === "go_pickup"
                            ? "Pickup"
                            : jobStep === "hub"
                              ? "Hub"
                              : "Destination"}
                        </p>
                        <p style={{ fontSize: 13, color: C.slate, margin: 0 }}>
                          Follow the route on map
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Active job panel ── */}
              {activeJob && (
                <div
                  className="sheet"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: C.white,
                    borderRadius: "28px 28px 0 0",
                    boxShadow: `0 -4px 32px rgba(30,26,46,.12)`,
                    zIndex: 10,
                    maxHeight: "85%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                  <div
                    style={{ overflowY: "auto", padding: "4px 22px 28px" }}
                    className="sh"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "6px 0 14px",
                      }}
                    >
                      <span
                        style={{
                          background: C.greenPale,
                          color: C.green,
                          fontSize: 10,
                          fontWeight: 700,
                          padding: "5px 10px",
                          borderRadius: 8,
                          textTransform: "uppercase",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <div
                          className="pulse"
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: C.green,
                          }}
                        />{" "}
                        Active
                      </span>
                      <p
                        style={{
                          fontSize: 20,
                          fontWeight: 900,
                          color: C.purple,
                          margin: 0,
                        }}
                      >
                        ₹{activeJob.earn}
                      </p>
                    </div>

                    {jobStep === "go_pickup" && (
                      <div
                        className="rise"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 14,
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: 18,
                              fontWeight: 800,
                              color: C.ink,
                              margin: "0 0 4px",
                            }}
                          >
                            Navigate to Pickup
                          </p>
                          <p
                            style={{ fontSize: 13, color: C.slate, margin: 0 }}
                          >
                            Head to the customer's location below.
                          </p>
                        </div>
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
                          <div
                            style={{
                              width: 46,
                              height: 46,
                              background: C.purple,
                              borderRadius: 14,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <User size={22} color="#fff" />
                          </div>
                          <div>
                            <p
                              style={{
                                fontSize: 14,
                                fontWeight: 800,
                                color: C.ink,
                                margin: "0 0 2px",
                              }}
                            >
                              {activeJob.customer}
                            </p>
                            <p
                              style={{
                                fontSize: 12,
                                color: C.slate,
                                margin: 0,
                                lineHeight: 1.4,
                              }}
                            >
                              {activeJob.pickup}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setJobStep("arrived")}
                          className="press"
                          style={{
                            width: "100%",
                            background: C.purple,
                            color: C.white,
                            borderRadius: 16,
                            padding: 16,
                            fontWeight: 700,
                            fontSize: 15,
                            border: "none",
                            boxShadow: `0 6px 18px ${C.purple}44`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                          }}
                        >
                          <Navigation size={18} /> Navigate
                        </button>
                      </div>
                    )}

                    {jobStep === "arrived" && (
                      <div
                        className="rise"
                        style={{ textAlign: "center", padding: "14px 0" }}
                      >
                        <div
                          style={{
                            width: 64,
                            height: 64,
                            background: C.amberPale,
                            borderRadius: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 14px",
                          }}
                        >
                          <MapPin size={30} color={C.amber} />
                        </div>
                        <p
                          style={{
                            fontSize: 19,
                            fontWeight: 800,
                            color: C.ink,
                            margin: "0 0 8px",
                          }}
                        >
                          Arrived?
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: C.slate,
                            lineHeight: 1.6,
                            margin: "0 0 22px",
                            padding: "0 16px",
                          }}
                        >
                          Confirm arrival to notify the customer.
                        </p>
                        <button
                          onClick={() => setJobStep("pin")}
                          className="press"
                          style={{
                            width: "100%",
                            background: C.ink,
                            color: C.white,
                            borderRadius: 16,
                            padding: 15,
                            fontWeight: 700,
                            fontSize: 15,
                            border: "none",
                          }}
                        >
                          Yes, I've Arrived
                        </button>
                      </div>
                    )}

                    {jobStep === "pin" && (
                      <div
                        className="rise"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 18,
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              width: 52,
                              height: 52,
                              background: C.purplePale,
                              borderRadius: 16,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 12px",
                            }}
                          >
                            <ShieldCheck size={26} color={C.purple} />
                          </div>
                          <p
                            style={{
                              fontSize: 18,
                              fontWeight: 800,
                              color: C.ink,
                              margin: "0 0 4px",
                            }}
                          >
                            Customer PIN
                          </p>
                          <p
                            style={{ fontSize: 13, color: C.slate, margin: 0 }}
                          >
                            Enter 4-digit PIN from {activeJob.customer}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 10,
                          }}
                        >
                          {[0, 1, 2, 3].map((i) => (
                            <input
                              key={i}
                              type="number"
                              maxLength="1"
                              style={{
                                width: 62,
                                height: 70,
                                background: C.snow,
                                border: `2px solid ${C.silver}`,
                                borderRadius: 16,
                                textAlign: "center",
                                fontSize: 24,
                                fontWeight: 800,
                                color: C.ink,
                                outline: "none",
                              }}
                              onFocus={(e) =>
                                (e.target.style.borderColor = C.purple)
                              }
                              onBlur={(e) =>
                                (e.target.style.borderColor = C.silver)
                              }
                              onChange={(e) => {
                                if (e.target.value && i === 3)
                                  setTimeout(() => setJobStep("photo"), 400);
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {jobStep === "photo" && (
                      <div
                        className="rise"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 14,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 18,
                            fontWeight: 800,
                            color: C.ink,
                            margin: 0,
                          }}
                        >
                          Package Evidence
                        </p>
                        <div
                          className="press"
                          style={{
                            background: C.purplePale,
                            border: `2px dashed ${C.purpleLight}`,
                            borderRadius: 22,
                            height: 170,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Camera
                            size={38}
                            color={C.purple}
                            style={{ marginBottom: 10 }}
                          />
                          <p
                            style={{
                              fontWeight: 800,
                              color: C.purple,
                              fontSize: 14,
                              margin: 0,
                            }}
                          >
                            Take Photo
                          </p>
                          <p
                            style={{
                              fontSize: 11,
                              color: C.purpleLight,
                              margin: "3px 0 0",
                            }}
                          >
                            All {activeJob.pkgs} packages together
                          </p>
                        </div>
                        <button
                          onClick={() => setJobStep("hub")}
                          className="press"
                          style={{
                            width: "100%",
                            background: C.purple,
                            color: C.white,
                            borderRadius: 16,
                            padding: 15,
                            fontWeight: 700,
                            fontSize: 15,
                            border: "none",
                            boxShadow: `0 6px 18px ${C.purple}44`,
                          }}
                        >
                          Confirm Pickup
                        </button>
                      </div>
                    )}

                    {jobStep === "hub" && (
                      <div
                        className="rise"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 14,
                        }}
                      >
                        <div style={{ textAlign: "center", padding: "4px 0" }}>
                          <div
                            style={{
                              width: 52,
                              height: 52,
                              background: C.greenPale,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 10px",
                            }}
                          >
                            <Check
                              size={26}
                              color={C.green}
                              strokeWidth={2.5}
                            />
                          </div>
                          <p
                            style={{
                              fontSize: 18,
                              fontWeight: 800,
                              color: C.ink,
                              margin: 0,
                            }}
                          >
                            Items Collected!
                          </p>
                        </div>
                        <div
                          style={{
                            background: C.ink,
                            borderRadius: 18,
                            padding: "18px 16px",
                            color: C.white,
                          }}
                        >
                          <p
                            style={{
                              fontSize: 10,
                              color: C.yellow,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: ".08em",
                              margin: "0 0 6px",
                            }}
                          >
                            Deliver to Hub
                          </p>
                          <p
                            style={{
                              fontSize: 15,
                              fontWeight: 800,
                              margin: "0 0 3px",
                            }}
                          >
                            Avaan Processing Hub
                          </p>
                          <p
                            style={{
                              fontSize: 12,
                              color: "rgba(255,255,255,.5)",
                              margin: 0,
                            }}
                          >
                            {activeJob.drop}
                          </p>
                        </div>
                        <button
                          onClick={() => setJobStep("handover")}
                          className="press"
                          style={{
                            width: "100%",
                            background: C.yellow,
                            color: C.ink,
                            borderRadius: 16,
                            padding: 15,
                            fontWeight: 800,
                            fontSize: 15,
                            border: "none",
                            boxShadow: `0 6px 18px ${C.yellow}55`,
                          }}
                        >
                          Navigate to Hub
                        </button>
                      </div>
                    )}

                    {jobStep === "handover" && (
                      <div
                        className="rise"
                        style={{ textAlign: "center", padding: "10px 0" }}
                      >
                        <div
                          style={{
                            width: 68,
                            height: 68,
                            background: C.purplePale,
                            border: `2px solid ${C.purpleMid}`,
                            borderRadius: 22,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 14px",
                          }}
                        >
                          <Scan size={32} color={C.purple} />
                        </div>
                        <p
                          style={{
                            fontSize: 19,
                            fontWeight: 800,
                            color: C.ink,
                            margin: "0 0 8px",
                          }}
                        >
                          Final Handover
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: C.slate,
                            lineHeight: 1.6,
                            margin: "0 0 22px",
                            padding: "0 14px",
                          }}
                        >
                          Let the hub executive scan your Partner ID to complete
                          the delivery and release payment.
                        </p>
                        <button
                          onClick={finishJob}
                          className="press"
                          style={{
                            width: "100%",
                            background: C.purple,
                            color: C.white,
                            borderRadius: 16,
                            padding: 15,
                            fontWeight: 700,
                            fontSize: 15,
                            border: "none",
                            boxShadow: `0 6px 18px ${C.purple}44`,
                          }}
                        >
                          Simulate Hub Scan
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ════ DASHBOARD TAB ════ */}
          {tab === "dashboard" && (
            <div
              className="enter"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: C.white,
              }}
            >
              <div style={{ flexShrink: 0, background: C.white }}>
                <SBar />
                <TBar title="Dashboard" onBack={() => setTab("home")} />
              </div>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "16px 16px 100px",
                }}
                className="sh"
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleDark})`,
                    borderRadius: 20,
                    padding: "24px 20px",
                    color: C.white,
                    marginBottom: 20,
                    boxShadow: `0 8px 24px ${C.purple}44`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                      margin: "0 0 8px",
                    }}
                  >
                    Today's Earnings
                  </p>
                  <p
                    style={{
                      fontSize: 44,
                      fontWeight: 900,
                      margin: "0 0 20px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    ₹2500
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.6)",
                          margin: "0 0 2px",
                        }}
                      >
                        This Week
                      </p>
                      <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                        ₹8750
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 12,
                          color: "rgba(255,255,255,0.6)",
                          margin: "0 0 2px",
                        }}
                      >
                        This Month
                      </p>
                      <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                        ₹28450
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: C.ink,
                    marginBottom: 12,
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
                  {["Today", "This Week", "This Month", "All Time"].map((f) => (
                    <button
                      key={f}
                      className="press"
                      style={{
                        padding: "8px 16px",
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: 700,
                        border: "none",
                        background: f === "Today" ? C.purpleDark : C.pearl,
                        color: f === "Today" ? C.white : C.slate,
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>

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
                      I: <Package size={24} color={C.purpleDeep} />,
                      v: "12",
                      l: "Pickups",
                    },
                    {
                      I: <Truck size={24} color={C.amber} />,
                      v: "58",
                      l: "Total Bags",
                    },
                    {
                      I: <Box size={24} color={C.purpleDeep} />,
                      v: "485",
                      l: "Total Kgs",
                    },
                    {
                      I: <Truck size={24} color={C.amber} />,
                      v: "87",
                      l: "Kms Covered",
                    },
                  ].map((c) => (
                    <div
                      key={c.l}
                      style={{
                        background: C.white,
                        border: `1.5px solid ${C.silver}`,
                        borderRadius: 16,
                        padding: "16px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div style={{ marginBottom: 12 }}>{c.I}</div>
                      <p
                        style={{
                          fontSize: 24,
                          fontWeight: 800,
                          color: C.ink,
                          margin: "0 0 4px",
                        }}
                      >
                        {c.v}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: C.mist,
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {c.l}
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: C.ink,
                    marginBottom: 12,
                  }}
                >
                  Performance
                </p>
                <div
                  style={{
                    background: C.white,
                    border: `1.5px solid ${C.silver}`,
                    borderRadius: 16,
                    padding: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, color: C.slate, fontWeight: 600 }}
                    >
                      Completion Rate
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: C.purpleDark,
                      }}
                    >
                      98.5%
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span
                      style={{ fontSize: 13, color: C.slate, fontWeight: 600 }}
                    >
                      On-Time Pickups
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: C.purpleDark,
                      }}
                    >
                      96.2%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ EARNINGS TAB ════ */}
          {tab === "earnings" && (
            <div
              className="enter"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flexShrink: 0, background: C.white }}>
                <SBar />
                <TBar title="Earnings" onBack={() => setTab("home")} />
              </div>
              <div
                style={{ flex: 1, overflowY: "auto", padding: "16px 16px 0" }}
                className="sh"
              >
                {/* Balance */}
                <div
                  style={{
                    background: `linear-gradient(150deg,${C.purpleDeep},${C.purpleDark})`,
                    borderRadius: 26,
                    padding: "22px 22px 20px",
                    marginBottom: 14,
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: `0 8px 30px ${C.purpleDeep}55`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: -20,
                      top: -20,
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.04)",
                      pointerEvents: "none",
                    }}
                  />
                  <p
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,.45)",
                      textTransform: "uppercase",
                      letterSpacing: ".09em",
                      fontWeight: 700,
                      margin: "0 0 6px",
                    }}
                  >
                    Available Balance
                  </p>
                  <p
                    style={{
                      fontSize: 42,
                      fontWeight: 900,
                      color: C.yellow,
                      margin: "0 0 18px",
                      letterSpacing: "-.04em",
                    }}
                  >
                    ₹{balance.toFixed(2)}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,.1)",
                      paddingTop: 14,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,.35)",
                          textTransform: "uppercase",
                          letterSpacing: ".08em",
                          fontWeight: 700,
                          margin: "0 0 3px",
                        }}
                      >
                        Next Payout
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,.75)",
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        Tuesday, 10th Mar
                      </p>
                    </div>
                    <button
                      onClick={() => setShowWithdraw(true)}
                      className="press"
                      style={{
                        background: C.yellow,
                        color: C.ink,
                        padding: "9px 18px",
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: 800,
                        border: "none",
                        boxShadow: `0 4px 14px ${C.yellow}55`,
                      }}
                    >
                      WITHDRAW
                    </button>
                  </div>
                </div>
                {/* Filters */}
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
                      onClick={() => setFilter(f)}
                      className="press"
                      style={{
                        padding: "8px 16px",
                        borderRadius: 12,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: ".07em",
                        whiteSpace: "nowrap",
                        border: filter === f ? "none" : `1px solid ${C.silver}`,
                        cursor: "pointer",
                        transition: "all .2s",
                        background: filter === f ? C.purple : C.white,
                        color: filter === f ? C.white : C.slate,
                      }}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingBottom: 100,
                  }}
                >
                  {shown.map((j, i) => (
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
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
                              margin: "0 0 2px",
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
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 16,
                            fontWeight: 900,
                            color: C.green,
                            margin: 0,
                          }}
                        >
                          +₹{j.earn}
                        </p>
                        <ChevronRight size={16} color={C.silver} />
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
                    <TBar
                      title="Payout Details"
                      onBack={() => setReceipt(null)}
                    />
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
                        boxShadow: `0 8px 30px ${C.purpleDeep}44`,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,.4)",
                          textTransform: "uppercase",
                          letterSpacing: ".09em",
                          fontWeight: 700,
                          margin: "0 0 8px",
                        }}
                      >
                        Amount Credited
                      </p>
                      <p
                        style={{
                          fontSize: 50,
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
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: "#86EFAC",
                          }}
                        >
                          Payment Processed
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        background: C.white,
                        border: `1.5px solid ${C.silver}`,
                        borderRadius: 20,
                        padding: 20,
                        marginBottom: 12,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 800,
                          color: C.ink,
                          margin: "0 0 14px",
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
                            marginBottom: 11,
                          }}
                        >
                          <span style={{ fontSize: 13, color: C.slate }}>
                            {k}
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: C.ink,
                            }}
                          >
                            {v}
                          </span>
                        </div>
                      ))}
                      <div
                        style={{
                          borderTop: `1px solid ${C.silver}`,
                          paddingTop: 12,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 800,
                            color: C.purple,
                          }}
                        >
                          Total
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 900,
                            color: C.ink,
                          }}
                        >
                          ₹{receipt.earn}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        background: C.snow,
                        border: `1px solid ${C.silver}`,
                        borderRadius: 16,
                        padding: 16,
                      }}
                    >
                      {[
                        ["Job Type", receipt.type],
                        ["Date & Time", receipt.date],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 8,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 11,
                              color: C.mist,
                              textTransform: "uppercase",
                              letterSpacing: ".07em",
                              fontWeight: 700,
                            }}
                          >
                            {k}
                          </span>
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: C.charcoal,
                            }}
                          >
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ════ PROFILE TAB ════ */}
          {tab === "profile" && (
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
                  title="Profile"
                  onBack={() => setTab("home")}
                  right={<Settings size={20} />}
                />
              </div>
              <div
                style={{ flex: 1, overflowY: "auto", padding: "14px 16px 0" }}
                className="sh"
              >
                {/* Partner card */}
                <div
                  style={{
                    background: `linear-gradient(135deg,${C.purpleDeep},${C.purple})`,
                    borderRadius: 24,
                    padding: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 14,
                    boxShadow: `0 6px 24px ${C.purple}44`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: -20,
                      bottom: -20,
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.06)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      background: C.yellow,
                      borderRadius: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
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
                        fontSize: 20,
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
                        color: "rgba(255,255,255,.6)",
                        margin: "0 0 10px",
                        fontWeight: 600,
                      }}
                    >
                      Partner ID: AP-2026
                    </p>
                    <span
                      style={{
                        background: "rgba(22,163,74,.2)",
                        color: "#86EFAC",
                        fontSize: 10,
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: 8,
                        border: "1px solid rgba(22,163,74,.3)",
                        textTransform: "uppercase",
                        letterSpacing: ".07em",
                      }}
                    >
                      ✓ Verified
                    </span>
                  </div>
                </div>
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
                      I: <User size={19} />,
                      l: "Personal Information",
                    },
                    {
                      id: "vehicle",
                      I: <Bike size={19} />,
                      l: "Vehicle Management",
                    },
                    {
                      id: "compliance",
                      I: <ShieldCheck size={19} />,
                      l: "KYC Documents",
                    },
                    {
                      id: "support",
                      I: <HelpCircle size={19} />,
                      l: "Help & Support",
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
                        padding: "15px 18px",
                        background: "none",
                        border: "none",
                        borderBottom:
                          idx < arr.length - 1
                            ? `1px solid ${C.pearl}`
                            : "none",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            background: C.purplePale,
                            borderRadius: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: C.purple,
                          }}
                        >
                          {item.I}
                        </div>
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: C.ink,
                          }}
                        >
                          {item.l}
                        </span>
                      </div>
                      <ChevronRight size={17} color={C.silver} />
                    </button>
                  ))}
                </div>
                <div style={{ paddingBottom: 100 }}>
                  <button
                    onClick={() => setScreen("login")}
                    className="press"
                    style={{
                      width: "100%",
                      background: C.redPale,
                      color: C.red,
                      border: "1px solid #FECACA",
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
              {/* Sub-pages as overlays within this tab */}
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
                          ? "Personal Details"
                          : profilePage === "vehicle"
                            ? "Vehicle Info"
                            : profilePage === "compliance"
                              ? "Documents"
                              : "Help & Support"
                      }
                      onBack={() => setProfilePage(null)}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      overflowY: "auto",
                      padding: "18px 16px 80px",
                    }}
                    className="sh"
                  >
                    {profilePage === "personal" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 18,
                        }}
                      >
                        <Field label="Full Name" value="Rajesh Kumar" />
                        <Field label="Mobile" value="+91 9876543210" />
                        <Field label="Aadhaar" value="XXXX XXXX 4589" />
                        <Field label="PAN" value="ABCDE1234F" />
                      </div>
                    )}
                    {profilePage === "vehicle" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 18,
                        }}
                      >
                        <div
                          style={{
                            background: C.purplePale,
                            border: `1px solid ${C.purpleMid}`,
                            borderRadius: 16,
                            padding: 16,
                            display: "flex",
                            alignItems: "center",
                            gap: 14,
                          }}
                        >
                          <Bike size={26} color={C.purple} />
                          <div>
                            <p
                              style={{
                                fontSize: 14,
                                fontWeight: 800,
                                color: C.ink,
                                margin: "0 0 2px",
                              }}
                            >
                              2-Wheeler Active
                            </p>
                            <p
                              style={{
                                fontSize: 12,
                                color: C.slate,
                                margin: 0,
                              }}
                            >
                              Standard Bike / Scooter
                            </p>
                          </div>
                        </div>
                        <Field
                          label="Registration (RC)"
                          value="TS 09 EA 1234"
                        />
                        <Field
                          label="Service Hub"
                          value="Madhapur Hub, Hyderabad"
                        />
                      </div>
                    )}
                    {profilePage === "compliance" && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {[
                          "Driving Licence",
                          "Vehicle RC",
                          "Profile Selfie",
                          "Bank Passbook",
                        ].map((d, i) => (
                          <div
                            key={i}
                            style={{
                              background: C.white,
                              border: `1.5px solid ${C.silver}`,
                              borderRadius: 16,
                              padding: 14,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                              }}
                            >
                              <div
                                style={{
                                  width: 36,
                                  height: 36,
                                  background: C.greenPale,
                                  borderRadius: 10,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Check size={17} color={C.green} />
                              </div>
                              <p
                                style={{
                                  fontSize: 14,
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
                            padding: "12px 0 22px",
                            borderBottom: `1px solid ${C.silver}`,
                            marginBottom: 22,
                          }}
                        >
                          <div
                            style={{
                              width: 54,
                              height: 54,
                              background: C.yellowPale,
                              border: `1px solid ${C.yellow}44`,
                              borderRadius: 18,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 12px",
                            }}
                          >
                            <HelpCircle size={26} color={C.yellowDark} />
                          </div>
                          <p
                            style={{
                              fontSize: 19,
                              fontWeight: 800,
                              color: C.ink,
                              margin: "0 0 8px",
                            }}
                          >
                            Need Help?
                          </p>
                          <p
                            style={{
                              fontSize: 13,
                              color: C.slate,
                              margin: "0 0 18px",
                            }}
                          >
                            Reach your hub manager or our support team.
                          </p>
                          <button
                            className="press"
                            style={{
                              width: "100%",
                              background: C.purple,
                              color: C.white,
                              borderRadius: 16,
                              padding: 14,
                              fontWeight: 700,
                              fontSize: 14,
                              border: "none",
                              boxShadow: `0 6px 18px ${C.purple}44`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 8,
                            }}
                          >
                            <Phone size={16} /> Call Support
                          </button>
                        </div>
                        <p
                          style={{
                            fontSize: 15,
                            fontWeight: 800,
                            color: C.ink,
                            margin: "0 0 14px",
                          }}
                        >
                          FAQ
                        </p>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                          }}
                        >
                          {[
                            {
                              q: "When will I receive my payout?",
                              a: "Every Tuesday for the previous week's earnings. Min withdrawal ₹100.",
                            },
                            {
                              q: "Customer unavailable at pickup?",
                              a: "Wait 10 mins and call twice. Mark as 'Customer Unavailable' to trigger reschedule.",
                            },
                            {
                              q: "How are earnings calculated?",
                              a: "Base fare + distance pay/km + weight bonus + weekly incentives.",
                            },
                            {
                              q: "Can I change my vehicle?",
                              a: "Yes, under Profile > Vehicle Info. Changes take up to 24h for verification.",
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
          )}

          {/* Withdraw modal — inside main, above everything */}
          {showWithdraw && (
            <WithdrawModal
              balance={balance}
              setBalance={setBalance}
              close={() => setShowWithdraw(false)}
            />
          )}
        </div>

        {/* ── Bottom nav — always at the bottom, never overlapping ── */}
        {!activeJob &&
          !preview &&
          !receipt &&
          !profilePage &&
          !showWithdraw && (
            <div
              style={{
                flexShrink: 0,
                padding: "8px 18px 22px",
                background: C.white,
                borderTop: `1px solid ${C.pearl}`,
              }}
            >
              <div
                style={{
                  background: C.ink,
                  borderRadius: 22,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "0 12px",
                }}
              >
                {[
                  { t: "home", I: <Home size={22} /> },
                  { t: "dashboard", I: <LayoutDashboard size={22} /> },
                  { t: "earnings", I: <Wallet size={22} /> },
                  { t: "profile", I: <User size={22} /> },
                ].map(({ t, I }) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="press"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 3,
                      padding: "4px 22px",
                      borderRadius: 14,
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                      transition: "color .2s",
                      color: tab === t ? C.yellow : "rgba(255,255,255,.3)",
                    }}
                  >
                    {I}
                    {tab === t && (
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: C.yellow,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
      </Screen>
    );

  return null;
}

/* ── Withdraw Modal ── */
function WithdrawModal({ balance, setBalance, close }) {
  const [amt, setAmt] = useState("");
  const [ws, setWs] = useState(1);
  const go = () => {
    const n = parseFloat(amt);
    if (isNaN(n) || n < 100 || n > balance) return;
    setWs(2);
    setTimeout(() => {
      setBalance((p) => p - n);
      setWs(3);
    }, 2000);
  };
  return (
    <div
      className="fade"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 20,
        background: "rgba(30,26,46,.6)",
        backdropFilter: "blur(6px)",
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
          boxShadow: `0 -2px 40px rgba(30,26,46,.15)`,
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
        {ws === 1 && (
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
                    width: 44,
                    height: 44,
                    background: C.purplePale,
                    borderRadius: 12,
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
              Amount
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
                  padding: "16px 16px 16px 48px",
                  fontSize: 30,
                  fontWeight: 800,
                  color: C.ink,
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = C.purple)}
                onBlur={(e) => (e.target.style.borderColor = C.silver)}
              />
            </div>
            <p style={{ fontSize: 12, color: C.mist, margin: "0 0 22px 4px" }}>
              Available: ₹{balance.toFixed(2)} · Min ₹100
            </p>
            <button
              onClick={go}
              className="press"
              disabled={!amt || Number(amt) < 100 || Number(amt) > balance}
              style={{
                width: "100%",
                background:
                  !amt || Number(amt) < 100 || Number(amt) > balance
                    ? C.silver
                    : C.purple,
                color: C.white,
                borderRadius: 16,
                padding: 16,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
              }}
            >
              Transfer to Bank
            </button>
          </>
        )}
        {ws === 2 && (
          <div style={{ padding: "36px 0", textAlign: "center" }}>
            <Loader2
              size={52}
              color={C.purple}
              className="spin"
              style={{ marginBottom: 14 }}
            />
            <h3
              style={{ fontSize: 19, fontWeight: 800, color: C.ink, margin: 0 }}
            >
              Processing…
            </h3>
          </div>
        )}
        {ws === 3 && (
          <div style={{ padding: "16px 0", textAlign: "center" }}>
            <div
              style={{
                width: 72,
                height: 72,
                background: C.greenPale,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Check size={36} color={C.green} strokeWidth={2.5} />
            </div>
            <h3
              style={{
                fontSize: 23,
                fontWeight: 800,
                color: C.ink,
                margin: "0 0 6px",
              }}
            >
              Transfer Successful!
            </h3>
            <p style={{ fontSize: 13, color: C.slate, margin: "0 0 26px" }}>
              Funds will reflect within 24 hours
            </p>
            <button
              onClick={close}
              className="press"
              style={{
                width: "100%",
                background: C.purple,
                color: C.white,
                borderRadius: 16,
                padding: 15,
                fontWeight: 700,
                fontSize: 15,
                border: "none",
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Screen shell ── */
function Screen({ children, bg = "#fff" }) {
  return (
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
}

/* ── Device wrapper ── */
// Rendered inside the JSX export above — the entire app is wrapped by the device chrome in index
// NOTE: The device chrome is at the ROOT render level below.

// Re-export with device chrome
const _App = App;

// Replace App export with device-wrapped version
function DeviceApp() {
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
        {/* Side buttons */}
        {[
          { s: "right", t: 130, h: 70 },
          { s: "left", t: 90, h: 36 },
          { s: "left", t: 140, h: 68 },
          { s: "left", t: 220, h: 68 },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              [b.s]: -4,
              top: b.t,
              width: 4,
              height: b.h,
              background: "#222226",
              borderRadius: b.s === "right" ? "0 3px 3px 0" : "3px 0 0 3px",
            }}
          />
        ))}
        {/* Shell */}
        <div
          style={{
            background: "linear-gradient(160deg,#2A2A2E,#1A1A1E)",
            borderRadius: 54,
            padding: 11,
            boxShadow:
              "0 0 0 1px #3C3C42,0 50px 120px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.08)",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 19,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 34,
              background: "#0A0A0E",
              borderRadius: 20,
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              border: "1px solid #222226",
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#111115",
              }}
            />
            <div
              style={{
                width: 28,
                height: 9,
                borderRadius: 5,
                background: "#141418",
              }}
            />
          </div>
          {/* Screen */}
          <div
            style={{
              width: 390,
              height: 750,
              borderRadius: 44,
              overflow: "hidden",
              background: "#fff",
              position: "relative",
            }}
          >
            <_App />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceApp;
