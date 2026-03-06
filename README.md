# blocFeed Example

A minimal Next.js app with the [blocfeed](https://www.npmjs.com/package/blocfeed) widget fully integrated. Clone, add your key, and see it working in under a minute.

## Quick Start

```bash
git clone https://github.com/mihir-kanzariya/blocfeed-example.git
cd blocfeed-example
npm install
```

Create a `.env.local` file with your blocfeed ID:

```bash
cp .env.example .env.local
```

Edit `.env.local` and replace `bf_your_project_id_here` with your actual `blocfeed_id` from [blocfeed.com/dashboard](https://blocfeed.com/dashboard).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — click the green dot in the bottom-right corner to try the widget.

## Get Your `blocfeed_id`

1. Sign up at [blocfeed.com](https://blocfeed.com)
2. Create a project in the dashboard
3. Copy the `blocfeed_id` (starts with `bf_`)

## What This Example Demonstrates

- **Element picking** — click any element to select it, captures component name and test ID
- **Element screenshots** — automatic screenshot of the selected element
- **Screen recording** — record a video clip showing bug reproduction steps
- **Click tracking** — captures every click during recording with timestamps
- **Voice feedback** — speak feedback, auto-transcribed with Whisper
- **Console & network capture** — errors and failed requests attached automatically
- **Secret leak detection** — warns if API keys are exposed in client-side code
- **Feedback categories** — bug, feature, UX, general pill selector
- **Keyboard shortcut** — `Cmd+Shift+F` (Mac) / `Ctrl+Shift+F` (Windows) to toggle
- **Dark mode** — widget follows dark theme by default
- **User identity** — user ID, email, and name attached to every submission
- **Offline queue** — failed submissions retry automatically
- **Custom trigger style** — animated "dot" trigger with hover expand
- **`data-blocfeed-component`** — shows how to tag components for triage
- **`data-testid`** — captured in the feedback payload for QA workflows

## Integration (2 lines of code)

The entire integration lives in `src/app/layout.tsx`:

```tsx
import { BlocFeedWidget } from "blocfeed";

// Inside your layout:
<BlocFeedWidget
  blocfeed_id={process.env.NEXT_PUBLIC_BLOCFEED_ID!}
  config={{
    ui: { position: "bottom-right", triggerStyle: "dot" },
    diagnostics: { console: true, network: true },
    recording: { enabled: true },
    voice: { enabled: true },
    security: { secretScan: true },
  }}
/>
```

## Project Structure

```
blocfeed-example/
  src/app/
    layout.tsx     ← blocFeed widget added here
    page.tsx       ← demo landing page with interactive elements
    globals.css    ← minimal styles
  .env.example     ← copy to .env.local and add your key
  package.json
```

## Tech Stack

- Next.js 15 (App Router)
- React 19
- blocfeed SDK
- framer-motion (for animated trigger styles)

## Links

- [blocfeed.com](https://blocfeed.com) — Dashboard
- [npm](https://www.npmjs.com/package/blocfeed) — SDK package
- [SDK docs](https://github.com/mihir-kanzariya/blocfeed) — Full configuration reference

## License

MIT
