import type { ReactNode } from "react";
import type { Metadata } from "next";
import { BlocFeedWidget } from "blocfeed";
import "./globals.css";

export const metadata: Metadata = {
  title: "blocFeed Example",
  description: "Example app showing blocFeed widget integration",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* ── blocFeed Widget ─────────────────────────────────────
         *  This is all you need to add feedback to your app.
         *  Replace the blocfeed_id with your own from https://blocfeed.com
         */}
        <BlocFeedWidget
          blocfeed_id={process.env.NEXT_PUBLIC_BLOCFEED_ID!}
          config={{
            // Attach user identity to every submission
            user: {
              id: "demo_user_1",
              email: "demo@example.com",
              name: "Demo User",
            },

            // Widget appearance
            ui: {
              position: "bottom-right",
              triggerStyle: "dot",
              triggerLabel: "Feedback",
              shortcut: "mod+shift+f",
              theme: {
                accentColor: "#12D393",
                mode: "dark",
              },
              categories: ["bug", "feature", "ux", "general"],
            },

            // Capture console errors & failed network requests
            diagnostics: {
              console: true,
              network: true,
            },

            // Enable screen recording
            recording: {
              enabled: true,
              maxDurationMs: 30_000,
            },

            // Enable voice feedback (requires project-level toggle in dashboard)
            voice: {
              enabled: true,
              maxDurationMs: 60_000,
            },

            // Screenshot settings
            capture: {
              element: true,
              fullPage: false,
            },

            // Detect accidentally leaked API keys
            security: {
              secretScan: true,
            },
          }}
        />
      </body>
    </html>
  );
}
