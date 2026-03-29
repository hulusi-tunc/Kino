# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context
This is a **design-first project** (not a production codebase). Kino is a Web Designer recruitment case for HUBX — an AI prompt-to-video generator web application. All deliverables live in Figma; the repo holds research docs, MCP configs, and project context.

**IMPORTANT CONTEXT (do not mention in deliverables):** HUBX already has a similar product called DaVinci AI (davinci.ai) — an AI model aggregator. Our design must align with their ecosystem without naming it directly.

**BRIEF vs RESEARCH:** The actual HUBX brief (`Designer Case.pdf`) is intentionally open — it describes a simple prompt-to-video generator useful for content creators, marketers, and social media teams. It asks for a "vision-driven, future-facing product." Things like multi-model aggregator, credit pricing, and privacy positioning are **creative choices from research**, NOT brief requirements. Always distinguish between what the brief requires and what we chose.

**CHOSEN DIRECTION:** Lovart.ai-inspired conversational AI agent approach. Users interact through natural language chat, not a blank text box. AI models work behind the scenes (not user-facing). Iterative refinement through conversation. Positioning: "Your AI video director" not "tool." The landing page *performs* the product through scroll-driven demos rather than describing it with static feature cards.

## Deliverables (all in Figma)
1. Landing Page (desktop + mobile)
2. Core WebApp UI (prompt-to-video flow — 4 states: empty, loading, result, scene edit)
3. Paywall / Premium Access Screen (full-page, not modal)
4. UIKit / Design System

## Setup
```bash
npm install          # installs puppeteer (only dependency)
```
MCP servers are configured in `.mcp.json` (project-level: chrome-devtools, puppeteer) and `~/.claude/.mcp.json` (global: Figma Desktop MCP). Skills `frontend-design` and `shadcn-ui` are locked in `skills-lock.json`. No build, lint, or test commands — this is a docs/design repo.

## Critical Workflow Rules

### Figma Skill Prerequisite
**Always call the `figma-use` skill BEFORE any `use_figma` tool call.** Never call `use_figma` directly — skipping the skill causes hard-to-debug failures.

### Design-First — Do NOT Build Components Proactively
Do NOT create design system components (cards, modals, toasts, etc.) proactively. The user designs screens first, then we extract and systematize components from actual designs. Only build tokens/foundations and basic atoms (buttons, inputs, icons, badges) when explicitly requested.

### Emoji Property Naming in Figma
All Figma component properties MUST use emoji prefixes. Never use plain text property names.

Standard emoji map:
- 🧩 Type — component type variant
- 🎨 Style — visual style (Primary, Secondary, etc.)
- 📌 State — interaction state (Default, Hover, Disabled, etc.)
- 📏 Size — size variant (XS, SM, MD, etc.)
- 🏢 Provider — social/brand provider
- ✏️ Edit — editable text properties
- ⬅️ Leading / ➡️ Trailing — icon toggles or swaps
- 🔷 Pick Icon — icon instance swap
- 💡 Hint, 🔖 Label, 🔢 Counter, 🚫 Disabled, 🏁 Suffix, ⌘ Shortcut — other toggles

### Other Workflow Rules
- Research-first approach before design
- All components on ONE "Design System" page in Figma
- Emoji in Figma page naming (e.g., 🔍 Competitive Analysis)
- Use agents in parallel for research
- Always call relevant skills before design decisions
- Update both Figma AND research docs when changes happen
- Don't mention DaVinci/HUBX directly in deliverables
- Do not scaffold code unless explicitly asked — use Figma MCP tools for component and layout creation

## Figma File
https://www.figma.com/design/9Ys8N8OjU1yiTu7V2X1Gv0

### Pages
- Cover
- 🔍 Competitive Analysis — 7 competitors, positioning map, steal/avoid insights
- 👤 User Personas — 4 personas (Creator, Marketing, Agency, Founder)
- 🗺️ User Journey Map — 6 stages from awareness to retention
- 🏗️ Information Architecture — Sitemap + updated section breakdown
- 🔄 User Flows — 4 flows (Landing→SignUp, Prompt→Video, Free→Premium, Onboarding)
- ✍️ Content Strategy — Hero copy, UX writing, paywall messaging, brand voice, design direction, product model
- Design System — All components + documentation (see below)
- ✏️ Wireframes — All wireframe versions (see below)

## Research
Full UX research at `research/KINO-UX-RESEARCH-COMPLETE.md` with supporting files:
- `01-competitive-analysis.md` — 7 AI video tools analyzed
- `02-user-personas.md` — 4 personas with goals, pain points, scenarios
- `03-user-journey.md` — 6-stage journey map
- `04-ux-best-practices.md` — 25+ categorized design practices
- `05-design-strategy.md` — Positioning, differentiation, product model

## Design System Status (on "Design System" page)

### Tokens — COMPLETE (Updated 2026-03-29)
- **Primitives (113 colors):** gray-dark (11), gray-light (11), base (2), blue (10), red (11), green (11), amber (11), purple (11), cyan (11), **neutral-warm (12)**, **coral (10)**
- **Semantic Color (35 tokens, Dark+Light modes):** bg (5), text (5), border (5), brand (4), status (8), icon (8)
  - Light mode → warm cream bg (neutral-warm), coral accent
  - Dark mode → cool dark (unchanged, for WebApp)
- **Spacing (14):** 0-128px on 4px base
- **Radius (7):** none through full (9999 for pill buttons)
- **Effect Styles (9):** shadow/xs through shadow/3xl + focus-ring/brand + focus-ring/error
- **Text Styles (26):** display (5) + heading h1-h3 = **Playfair Display Bold** (serif); heading h4-h5 + body (8) + label (4) + caption (2) + overline (2) = **Instrument Sans** Regular/Medium

### Components — IN PROGRESS
1. **Text Input** — 216 variants (fully tokenized)
2. **Button** — 60 variants (4 styles x 5 sizes x 3 states), pill-shaped, INSTANCE_SWAP icons
3. **Link Button** — 27 variants
4. **Social Button** — 8 variants (Google/Apple/X/GitHub)
5. **Compact Button** — 48 variants (icon-only)
6. **Icons** — 2,537 local components (all bound to icon/primary token)

## Wireframes (on "✏️ Wireframes" page)

### Older Versions (pre-direction-update)
- "Landing Page — Desktop" (272:2) — original hi-fi dark wireframe
- "Landing Page — Alt (DaVinci-inspired)" (287:11) — hi-fi alternative
- "Landing Page — Lo-Fi Wireframe" (295:11) — old direction grayscale lo-fi
- "Landing Page — Lo-Fi (Agent)" (312:11) — first agent-direction lo-fi (superseded)

### Current / Updated Design Plan (Lovart-inspired, built 2026-03-29)
All frames placed as standalone sections starting at x=6970:
- **Hero — Variant 1 (Mountain Lake)** (333:11) — serif H1, coral underline, browser mockup with dark app + chat panel
- **Hero — Variant 2 (Perfume)** (337:11) — "product ad" variant, indicator 2 active
- **Hero — Variant 3 (Street Food)** (337:70) — "social reel" variant, indicator 3 active
- **Signup Modal** (338:11) — Welcome to Kino, Google/Apple/Email, Cloudflare verify
- **Social Proof** (339:11) — stats bar: 2M+ videos, 500K creators, <30s, 4K
- **Scene Picker / How It Works** (340:11) — 5 scroll keyframes (0%–100%) with progress bar
- **Feature Demos** (341:11) — Scene Edit (markers + chips) + Style Memory (zigzag)
- **Pricing** (342:11) — 3 glassmorphism cards on painterly bg, Pro featured with coral
- **Final CTA** (343:11) — dark cinematic bg, serif headline, coral pill CTA
- **Footer** (343:16) — Kino brand + link columns

## Design Direction (Updated 2026-03-29)

### Visual
- **Landing page: Light mode** — warm cream/off-white (#F5F4F0), dark text, serif display headlines
- **WebApp: Dark mode** — near-black background, content-focused, cinematic feel
- **Accent color: Coral (#E85D3A)** — differentiates from purple/blue AI tool convention
- **Typography: Playfair Display** (serif display) + **Instrument Sans** (sans body)
- Rounded corners: 12-16px on cards, pill buttons (radius/full)
- AI-generated painterly backgrounds for pricing and CTA sections
- Scroll-driven animation demos, not static feature cards
- Glassmorphism pricing cards

### Brand Voice
- "Your AI video director" — not "AI video tool"
- Confident but not arrogant, simple but not dumbed-down
- Loading states: "Directing your scene" not "Generating"
- No fake urgency, no dark patterns

### Product Model
- Conversational AI agent (models hidden behind the scenes)
- Pricing: Starter $19, Pro $49, Enterprise custom
- Soft paywall: 3 free videos, upgrade after wow moment
- Features: Scene Edit (object-as-token), Style Memory

### Section Header Formula (Lovart pattern)
```
SMALL CAPS CATEGORY LABEL (10-11px, letter-spacing: 2-3px, uppercase)
Large Serif Headline, Short (24-40px desktop)
One sentence of body text. No more than two lines. (14-16px, secondary color)
[Pill CTA Button]
```

## What's Next
1. Mobile wireframes (responsive versions of all sections)
2. Hi-fi landing page design (refine wireframes into polished screens)
3. Core WebApp UI (4 states: empty, loading, result, scene edit — dark mode)
4. Paywall screen (full-page with blurred video bg)
5. Prototype link

## Updated Design Plan Reference
Full section-by-section spec with interaction details, UX copy table, AI background prompts, and mobile responsive approach is at: `~/Downloads/Kino_Updated_Design_Plan.md` — copy this file into the repo if working from another machine.
