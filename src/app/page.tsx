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
