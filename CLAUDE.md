# Kino - AI Video Generator | HUBX Recruitment Case

## Project Context
This is a Web Designer recruitment case for HUBX. The product is an AI prompt-to-video generator web application called "Kino."

**IMPORTANT CONTEXT (do not mention in deliverables):** HUBX already has a similar product called DaVinci AI (davinci.ai) — an AI model aggregator. Our design must align with their ecosystem without naming it directly.

## Deliverables
1. Landing Page (desktop + mobile)
2. Core WebApp UI (prompt-to-video flow)
3. Paywall / Premium Access Screen
4. UIKit / Design System in Figma

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

## Design System Status (on "Design System" page)

### Tokens — COMPLETE
- **Primitives (79 colors):** gray-dark (11), gray-light (11), base (2), blue (10), red (11), green (11), amber (11), purple (11), cyan (11)
- **Semantic Color (35 tokens, Dark+Light modes):** bg (5), text (5), border (5), brand (4), status (8), icon (8)
- **Spacing (14):** 0-128px on 4px base
- **Radius (7):** none through full (9999 for pill buttons)
- **Effect Styles (9):** shadow/xs through shadow/3xl + focus-ring/brand + focus-ring/error
- **Text Styles (26):** display (5), heading (5), body (8), label (4), caption (2), overline (2)

### Components — IN PROGRESS
1. **Text Input** — 216 variants (fully tokenized)
2. **Button** — 60 variants (4 styles × 5 sizes × 3 states), pill-shaped, INSTANCE_SWAP icons
3. **Link Button** — 27 variants
4. **Social Button** — 8 variants (Google/Apple/X/GitHub)
5. **Compact Button** — 48 variants (icon-only)
6. **Icons** — 2,537 local components (all bound to icon/primary token)

### Components Still Needed
Card, Badge/Tag, Avatar, Toggle/Switch, Checkbox, Select/Dropdown, Modal/Dialog, Toast, Tabs, Navigation, Tooltip, Progress/Spinner

## Design Direction

### Visual
- Dark premium aesthetic (near-black #050505 background)
- Blue primary CTA: #346AEA
- Inter font throughout, medium weight (500) favored
- Pill-shaped CTAs (radius/full = 9999)
- Cards: 16-26px radius, Sections: 32px radius
- Generous spacing: 64-140px between sections

### Token Architecture Decisions
- ~48 semantic tokens (Material Design 3 / Apple HIG level — NOT 150+ like Untitled UI)
- Separate dark/light gray primitives (cool-tinted dark, warm light)
- bg hierarchy: primary → secondary → tertiary → quaternary (supports nested cards)
- Text: Apple pattern (primary/secondary/tertiary/disabled/on-brand)
- Icon tokens separate from text tokens
- All buttons pill-shaped using radius/full

### Product Model
- Multi-model aggregator (users pick which AI model generates their video)
- Credit-based pricing: Basic ~$9, Pro ~$19, Creator ~$49
- Conversational prompt refinement (chat-style UX)
- Privacy as differentiator: "Your data is never used to train models"

### Brand Voice
- Confident but not arrogant
- Professional, not playful
- Creator-centric: "You bring the vision. We bring it to life."
- Trust-focused, no fake urgency or dark patterns

## User Preferences
- Research-first approach before design
- All components on ONE "Design System" page
- Emoji in page naming
- Use agents in parallel for research
- Always call relevant skills before decisions
- Update both Figma AND research doc when changes happen
- Don't mention DaVinci/HUBX directly in deliverables

## Research Doc
Full research at: research/KINO-UX-RESEARCH-COMPLETE.md

## What's Next
1. More components (card, badge, avatar, etc.)
2. Wireframes for Landing Page, WebApp UI, Paywall
3. High-fidelity designs in Figma
4. Prototype link
