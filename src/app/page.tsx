"use client";

import { useRef } from "react";
import type { BlocFeedHandle } from "blocfeed";

export default function HomePage() {
  const feedbackRef = useRef<BlocFeedHandle>(null);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
      {/* Hero */}
      <header style={{ textAlign: "center", marginBottom: 60 }}>
        <h1 style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>
          blocFeed Example
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 18, maxWidth: 500, margin: "0 auto" }}>
          This demo shows how to integrate the{" "}
          <a href="https://www.npmjs.com/package/blocfeed" target="_blank" rel="noopener">
            blocfeed
          </a>{" "}
          widget into a Next.js app.
        </p>
        <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 8 }}>
          Click the green dot in the bottom-right corner or press{" "}
          <kbd style={kbdStyle}>Cmd+Shift+F</kbd> to try it.
        </p>
      </header>

      {/* Feature cards */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 48 }}>
        <Card title="Element Picking" desc="Click any element on the page to select it. The widget highlights and captures the component name, test ID, and element screenshot." />
        <Card title="Screenshots" desc="Automatic element-level screenshots are captured when you pick an element. Full-page screenshots are also available." />
        <Card title="Screen Recording" desc="Record a short video clip to show bug reproduction steps. Click tracking captures every click during recording." />
        <Card title="Voice Feedback" desc="Speak your feedback instead of typing. Audio is transcribed with Whisper and populates the text field." />
        <Card title="Console & Network" desc="Console errors and failed network requests are automatically attached to every feedback submission." />
        <Card title="Secret Detection" desc="Scans client-side code for leaked API keys, database credentials, and tokens." />
      </section>

      {/* Interactive demo section */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Try it out
        </h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <DemoButton label="Primary Button" />
          <DemoButton label="Secondary Button" variant="secondary" />
          <DemoButton label="Danger Button" variant="danger" />
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 12 }}>
          Try picking any of these buttons with the feedback widget to see element-level selection in action.
        </p>
      </section>

      {/* Sample form */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Sample Form
        </h2>
        <div
          data-blocfeed-component="SampleForm"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>Name</span>
              <input
                type="text"
                placeholder="Jane Doe"
                data-testid="name-input"
                style={inputStyle}
              />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>Email</span>
              <input
                type="email"
                placeholder="jane@example.com"
                data-testid="email-input"
                style={inputStyle}
              />
            </label>
            <button
              data-blocfeed-component="SubmitButton"
              data-testid="submit-btn"
              style={{
                ...buttonBase,
                background: "var(--accent)",
                color: "#000",
                fontWeight: 600,
              }}
            >
              Submit
            </button>
          </div>
          <p style={{ color: "var(--muted)", fontSize: 12, marginTop: 12 }}>
            This form does nothing — it&apos;s here so you can test element picking on form controls.
            Notice how <code>data-blocfeed-component</code> and <code>data-testid</code> are captured in the payload.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Pricing Cards
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <PricingCard
            name="Starter"
            price="Free"
            features={["10 feedback credits", "1 project", "Element screenshots", "Email support"]}
          />
          <PricingCard
            name="Pro"
            price="$19/mo"
            features={["Unlimited feedback", "5 projects", "Video recording", "Voice feedback", "Priority support"]}
            highlighted
          />
          <PricingCard
            name="Enterprise"
            price="Custom"
            features={["Unlimited everything", "SSO & SAML", "Dedicated support", "SLA guarantee", "Custom integrations"]}
          />
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 12 }}>
          Pick any card, button, or price tag to see how nested elements are captured with component names.
        </p>
      </section>

      {/* Dashboard mockup */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
          Dashboard Preview
        </h2>
        <div
          data-blocfeed-component="DashboardMockup"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {/* Toolbar */}
          <div
            data-blocfeed-component="Toolbar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#e53e3e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ecc94b" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#48bb78" }} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <TabButton label="Overview" active />
              <TabButton label="Feedback" />
              <TabButton label="Settings" />
            </div>
            <button
              data-blocfeed-component="NotificationBell"
              data-testid="notification-btn"
              style={{ ...buttonBase, background: "transparent", color: "var(--muted)", padding: "6px 10px", fontSize: 16 }}
            >
              🔔
            </button>
          </div>

          {/* Stats row */}
          <div
            data-blocfeed-component="StatsRow"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 1, background: "var(--border)" }}
          >
            <StatBox label="Total Feedback" value="1,284" change="+12%" />
            <StatBox label="Open Bugs" value="23" change="-5%" positive={false} />
            <StatBox label="Feature Requests" value="89" change="+24%" />
            <StatBox label="Avg Response" value="2.4h" change="-18%" />
          </div>

          {/* Feedback list */}
          <div style={{ padding: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: "var(--muted)" }}>
              Recent Feedback
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <FeedbackRow
                category="bug"
                title="Login button not responding on mobile Safari"
                user="sarah@acme.com"
                time="2m ago"
              />
              <FeedbackRow
                category="feature"
                title="Add dark mode toggle to settings page"
                user="mike@startup.io"
                time="15m ago"
              />
              <FeedbackRow
                category="ux"
                title="Onboarding flow is confusing at step 3"
                user="lisa@design.co"
                time="1h ago"
              />
              <FeedbackRow
                category="bug"
                title="Charts not rendering with large datasets"
                user="dev@bigcorp.com"
                time="3h ago"
              />
            </div>
          </div>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 12 }}>
          This is a mock dashboard UI. Try picking individual stats, feedback rows, tabs, or the notification bell.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 24, textAlign: "center" }}>
        <p style={{ color: "var(--muted)", fontSize: 13 }}>
          <a href="https://blocfeed.com" target="_blank" rel="noopener">blocfeed.com</a>
          {" · "}
          <a href="https://www.npmjs.com/package/blocfeed" target="_blank" rel="noopener">npm</a>
          {" · "}
          <a href="https://github.com/mihir-kanzariya/blocfeed" target="_blank" rel="noopener">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      data-blocfeed-component={title.replace(/\s/g, "")}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{title}</h3>
      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{desc}</p>
    </div>
  );
}

function DemoButton({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "secondary" | "danger";
}) {
  const colors = {
    primary: { bg: "var(--accent)", color: "#000" },
    secondary: { bg: "var(--card-bg)", color: "var(--fg)" },
    danger: { bg: "#e53e3e", color: "#fff" },
  };

  return (
    <button
      data-blocfeed-component={`${variant}Button`}
      style={{
        ...buttonBase,
        background: colors[variant].bg,
        color: colors[variant].color,
        fontWeight: 500,
        border: variant === "secondary" ? "1px solid var(--border)" : "none",
      }}
    >
      {label}
    </button>
  );
}

const buttonBase: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  fontSize: 14,
};

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--bg)",
  color: "var(--fg)",
  fontSize: 14,
  outline: "none",
};

const kbdStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "2px 6px",
  borderRadius: 4,
  border: "1px solid var(--border)",
  background: "var(--card-bg)",
  fontSize: 12,
  fontFamily: "monospace",
};

function PricingCard({
  name,
  price,
  features,
  highlighted = false,
}: {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      data-blocfeed-component={`PricingCard-${name}`}
      style={{
        background: "var(--card-bg)",
        border: highlighted ? "2px solid var(--accent)" : "1px solid var(--border)",
        borderRadius: 12,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {highlighted && (
        <span
          style={{
            position: "absolute",
            top: -10,
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--accent)",
            color: "#000",
            fontSize: 11,
            fontWeight: 600,
            padding: "2px 12px",
            borderRadius: 10,
          }}
        >
          Popular
        </span>
      )}
      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{name}</h3>
      <p style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        {price}
        {price !== "Free" && price !== "Custom" && (
          <span style={{ fontSize: 14, fontWeight: 400, color: "var(--muted)" }}>/mo</span>
        )}
      </p>
      <ul style={{ listStyle: "none", padding: 0, flex: 1, marginBottom: 16 }}>
        {features.map((f) => (
          <li key={f} style={{ fontSize: 13, color: "var(--muted)", padding: "4px 0", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--accent)" }}>&#10003;</span> {f}
          </li>
        ))}
      </ul>
      <button
        data-blocfeed-component={`${name}CTA`}
        data-testid={`pricing-${name.toLowerCase()}-btn`}
        style={{
          ...buttonBase,
          width: "100%",
          background: highlighted ? "var(--accent)" : "transparent",
          color: highlighted ? "#000" : "var(--fg)",
          border: highlighted ? "none" : "1px solid var(--border)",
          fontWeight: 600,
        }}
      >
        {name === "Enterprise" ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  );
}

function TabButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      data-blocfeed-component={`Tab-${label}`}
      style={{
        ...buttonBase,
        padding: "6px 14px",
        fontSize: 13,
        background: active ? "var(--accent)" : "transparent",
        color: active ? "#000" : "var(--muted)",
        fontWeight: active ? 600 : 400,
        border: "none",
        borderRadius: 6,
      }}
    >
      {label}
    </button>
  );
}

function StatBox({
  label,
  value,
  change,
  positive = true,
}: {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div
      data-blocfeed-component={`Stat-${label.replace(/\s/g, "")}`}
      style={{ background: "var(--card-bg)", padding: 16 }}
    >
      <p style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>
        {label}
      </p>
      <p style={{ fontSize: 22, fontWeight: 700 }}>{value}</p>
      <p style={{ fontSize: 12, color: positive ? "#48bb78" : "#e53e3e", marginTop: 2 }}>
        {change}
      </p>
    </div>
  );
}

function FeedbackRow({
  category,
  title,
  user,
  time,
}: {
  category: "bug" | "feature" | "ux";
  title: string;
  user: string;
  time: string;
}) {
  const categoryColors = {
    bug: { bg: "rgba(229, 62, 62, 0.15)", color: "#e53e3e", label: "Bug" },
    feature: { bg: "rgba(18, 211, 147, 0.15)", color: "var(--accent)", label: "Feature" },
    ux: { bg: "rgba(236, 201, 75, 0.15)", color: "#ecc94b", label: "UX" },
  };

  const cat = categoryColors[category];

  return (
    <div
      data-blocfeed-component={`FeedbackRow-${category}`}
      data-testid={`feedback-${category}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          padding: "3px 8px",
          borderRadius: 4,
          background: cat.bg,
          color: cat.color,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          flexShrink: 0,
        }}
      >
        {cat.label}
      </span>
      <span style={{ fontSize: 13, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {title}
      </span>
      <span style={{ fontSize: 11, color: "var(--muted)", flexShrink: 0 }}>{user}</span>
      <span style={{ fontSize: 11, color: "var(--muted)", flexShrink: 0 }}>{time}</span>
    </div>
  );
}
