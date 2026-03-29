# Kino — Updated Landing Page & Design Plan
## HUBX Web Designer Case Study | March 2026

---

# INSPIRATION SOURCE: Lovart.ai

Lovart.ai (AI design agent) was analyzed as primary design inspiration. Their landing page uses scroll-driven animation demos instead of static feature cards. Every section is a mini-product experience, not a description. The page performs the product rather than explaining it.

## Key Lovart Patterns Adopted for Kino

1. **Rotating hero with embedded product preview** — 3 examples cycle every 2.5s. Each changes: headline text, product preview, prompt in chat panel, and background texture color. Auto-rotation stops on user interaction. A working text input in the hero triggers signup modal on send.

2. **Scroll-driven "how it works"** — Replaces traditional numbered steps. As user scrolls: empty frame appears → prompt card slides up with typewriter text → send triggers AI reasoning steps → image/video renders blur-to-sharp → final result plays. The animation IS the explanation.

3. **Split-layout feature sections with zigzag** — Each feature uses: small-caps label + serif headline + one paragraph + pill CTA on one side, scroll-driven animation demo on the other. Sides alternate (text-left/demo-right, then demo-left/text-right) creating visual rhythm.

4. **Object-as-token editing** — In "Touch Edit" section, clicking objects in the image turns them into inline chips in the prompt with numbered markers. Natural language + visual references = surgical precision.

5. **AI-generated painterly backgrounds** — Sections use blurred, watercolor-style AI images as backgrounds. Pricing cards use glassmorphism on painterly landscapes. Creates warmth without visual noise.

6. **Light mode landing page** — Warm off-white/cream background, NOT the typical dark AI tool aesthetic. Deliberate contrast with competitors. App/editor would be dark mode for immersive creation.

---

# DESIGN DIRECTION

## Visual Direction
- **Landing page: Light mode** — warm cream/off-white (#F5F4F0 range), dark text, serif display headlines
- **WebApp: Dark mode** — near-black background, content-focused, cinematic feel
- **Accent color: Coral/orange (#E85D3A)** — differentiates from purple/blue AI tool convention
- **Typography: Serif display for headlines** (Playfair Display or similar) + clean sans for body (Instrument Sans or similar)
- **Rounded corners: 12-16px** on cards and containers
- **Pill buttons** for CTAs (full rounded)
- **AI-generated backgrounds** for pricing and CTA sections

## Color Token System
- **Layer 1: Primitives** — raw hex palette, ~50 variables. Neutral ramp (12 stops), accent/coral ramp (10 stops), 4 semantic colors (success/warning/error/info, 3 stops each)
- **Layer 2: Semantic tokens** — ~19 tokens that swap between light/dark modes. 3 backgrounds, 3 text, 2 border, 4 accent, 4 status, 3 special
- **Figma setup:** Collection 1 "Primitives" (no modes), Collection 2 "Tokens" (two modes: Light/Dark referencing primitives)

---

# LANDING PAGE STRUCTURE — SECTION BY SECTION

## Section 1: Hero — The Product Sells Itself

**Layout:** Top half = typography (centered), bottom half = embedded product preview

**Top half:**
- Small-caps label: "YOUR AI VIDEO DIRECTOR"
- Large serif H1: "Create a [cinematic drone shot](underlined, rotating) of a mountain lake"
- Underlined text rotates between 3 examples with superscript indicators (1)(2)(3)
- Pill CTA button: "Create now" (dark fill, white text)

**Bottom half:**
- Browser-frame mockup showing the product
- Left side: Video playing (the result of the displayed example)
- Right side: Chat panel with prompt bubble, AI reasoning steps ("Understood scene intent" / "Composing camera movement" / "Selected cinematic style"), and a real working text input at bottom
- When user types in input and hits send → signup modal appears (Google + Apple + Email, minimal friction)

**3 rotating examples (everything syncs):**
1. "Create a cinematic drone shot of a mountain lake" — aerial lake at golden hour — warm golden watercolor bg texture
2. "Create a product ad for a luxury perfume" — slow-mo perfume bottle — cool blue watercolor bg texture  
3. "Create a social reel for a street food vlog" — night market close-up — warm neon/pink watercolor bg texture

**Interaction spec:**
- Auto-rotates every 2.5 seconds
- Stops on any user interaction (click, type)
- Chat input is live — typing + send triggers signup modal
- Signup modal: logo, "Welcome to Kino", Google/Apple/Email options, Cloudflare verification, Terms/Privacy links

**Figma deliverable:** 3 hero frame variants (one per example) + signup modal overlay frame

---

## Section 2: Social Proof Bar

**Layout:** Horizontal strip, cream background, centered stats

**Content:**
- "2M+ videos created" | "500K creators" | "<30s average generation" | "4K max resolution"
- Separated by thin vertical dividers
- Small text labels below each number

**Figma deliverable:** 1 frame, thin horizontal section

---

## Section 3: Scene Picker — Scroll-Driven "How It Works"

**Header (centered):**
- Small-caps: "AI VIDEO DIRECTOR"
- Serif headline: "From words to worlds."
- Body: "Describe a scene. Watch your vision become cinematic video."

**Scroll animation sequence (5 key frames):**

| Scroll % | What happens |
|----------|-------------|
| 0% | Empty dark 16:9 video frame appears with subtle grain texture |
| 25% | Prompt card slides up from below. Typewriter types: "A cinematic drone flyover of lavender fields at golden hour, soft wind moving through the rows..." |
| 50% | Send button animates. Prompt card slides away. AI reasoning steps appear sequentially below frame: "Understanding your scene..." → "Composing camera path..." → "Selecting visual style..." → "Rendering frames..." |
| 75% | Blurred image appears in dark frame, progressively sharpens. Colors bloom from muted to vivid golden-purple |
| 100% | Sharp, finished video plays. Action buttons fade in below: "Download HD" / "Share" / "Create another" |

**Figma deliverable:** 5 frames arranged horizontally, labeled "Scroll 0-100%". Connected with progress bar annotation. Note: "Scroll-pinned section — content transforms as user scrolls through 100vh viewport."

---

## Section 4: Feature Demos — "Video, beyond generation."

**Parent header (centered, full-width):**
- Small-caps: "FEATURES"
- Large serif headline: "Video, beyond generation."
- Body: "AI output is just the starting point. You direct what comes next."

### Section 4a: Scene Edit (text left, demo right)

**Left side:**
- Small-caps: "SCENE EDIT"
- Serif headline: "Refine until it's exactly right."
- Body: "Point at elements in your video, describe what to change. Kino preserves what's working and adjusts precisely what you ask."
- Pill CTA: "Try Scene Edit"

**Right side (scroll-driven demo):**
- Video frame with blue numbered markers on specific elements (sky = 1, camera = 2)
- Prompt card below with inline object chips: "Make the [1 sky] warmer and [2 camera] pan slower"
- Typewriter text types the prompt
- Send triggers transformation — video updates with changes applied
- Before/after wipe showing the transformation

**Figma deliverable:** 3-4 key frames showing the animation states

### Section 4b: Style Memory (demo left, text right — layout flips)

**Left side (scroll-driven demo):**
- One video clip appears
- Duplicates/splits into 3 clips showing different scenes but identical visual style (same color grading, same camera behavior, same framing approach)
- Floating style reference objects (color palette chip, camera icon) merge into clips

**Right side:**
- Small-caps: "STYLE MEMORY"
- Serif headline: "Your vision, frame after frame."
- Body: "Kino remembers your style across projects. Same cinematic signature whether you're creating one clip or a hundred."
- Pill CTA: "Explore Style Memory"

**Figma deliverable:** 3-4 key frames showing the animation states

---

## Section 5: Pricing

**Background:** Full-width AI-generated painterly landscape (cool blues, lavender, sage). Generate with prompt: "Abstract impressionist landscape, misty mountains and meadow, cool palette with soft blue, lavender, sage, and ivory, extreme gaussian blur effect, watercolor wash, no recognizable objects, ambient atmospheric, wide aspect ratio"

**Header (left-aligned or centered):**
- Serif headline: "Choose the right plan for you"
- Monthly / Annually toggle

**Trial banner above cards:**
- "Try 3 videos free — no credit card required"

**3 plan cards (white glassmorphism on painted bg):**

| | Starter | Pro (featured) | Enterprise |
|---|---------|----------------|------------|
| Price | $19/mo | $49/mo | Custom |
| For | Individual creators | Serious creators & marketers | Teams & agencies |
| Videos | 30 / month | 100 / month | Unlimited |
| Resolution | 1080p | 4K | 4K+ |
| Duration | 15s max | 60s max | Custom |
| Watermark | Yes | No | No |
| Queue | Standard | Priority | Dedicated |
| Features | Basic generation | + Style Memory, Scene Edit | + API, SSO, team seats, brand kit |
| CTA | Start creating | Go Pro | Contact sales |

**Design notes:**
- Pro card has "Most popular" badge and thicker border
- Starter and Enterprise have outline buttons, Pro has filled button
- Below cards: "Try 3 videos free before you decide" link

**Figma deliverable:** 1 frame with toggle in both states (monthly/annually)

---

## Section 6: Final CTA + Footer

**CTA section:**
- Dark background (AI-generated cinematic light leak — amber and teal on black)
- Serif headline: "Your next video starts with a sentence."
- Body: "No learning curve. No editing software. Just your imagination."
- Large pill CTA: "Try free — 3 videos on us"

**Footer:**
- Kino logo + tagline ("Your AI video director")
- Product links: Features, Pricing, API docs
- Company links: About, Blog, Careers
- Legal links: Privacy, Terms, Cookies
- Social icons
- Copyright line

**Figma deliverable:** 1 frame for CTA + footer combined

---

# WEBAPP UI (Dark Mode)

**4 states to design:**

1. **Empty state** — Dark background. Centered prompt input with placeholder text ("Describe the video you want to create..."). Style/duration/aspect ratio pill toggles below input. Suggestion chips with example prompts. Header: Kino logo + credits remaining badge + user avatar. Recent generations strip at bottom.

2. **Loading state** — Video frame area with AI reasoning steps appearing sequentially: "Understanding your scene..." → "Composing camera path..." → "Selecting visual style..." → "Rendering frames..." Progress bar filling. First blurred preview appears within 5-10 seconds.

3. **Result state** — Video preview playing in frame with player controls. Action buttons below: Download HD (primary), Regenerate, Edit prompt, Share. Prompt text visible above or beside the video.

4. **Scene Edit mode** — Paused video frame with numbered blue markers on elements. Edit prompt input below with inline object chips. "Apply changes" CTA.

---

# PAYWALL SCREEN (Full-Page, Not Modal)

**Background:** The user's actual generated video, heavily blurred (gaussian 40px+)

**Overlay content (centered card):**
- Lock icon
- Headline: "Your video is ready"
- Subhead: "Upgrade to download in full quality"
- Small preview: side-by-side of watermarked 720p (current) vs clean 4K (Pro)
- Plan comparison: Starter vs Pro with key differences
- Primary CTA: "Go Pro — $49/mo"
- Secondary: "See all plans"
- Trust signal: "Join 50K+ creators who upgraded"
- Below: "Your trial videos are always available"

---

# MOBILE RESPONSIVE APPROACH

Based on Lovart.ai mobile analysis:

- **Hero:** Stacks vertically — headline + CTA on top, product preview below. Chat panel hidden on mobile, just the video canvas. Nav collapses to hamburger + "Get started" pill.
- **Social proof:** Horizontal scrollable row or stacked 2x2 grid
- **Scene picker scroll animation:** Same sequence, full-width. Animations preserved on mobile.
- **Feature sections:** Split layouts become stacked — full-width image/demo on top, text block below. No zigzag alternation.
- **Pricing:** Cards stack vertically. Pro card stays featured with badge. Add swipe indicator.
- **CTA + Footer:** Full-width, stacked.
- **Typography stays large** — don't over-shrink headlines on mobile. Serif headlines remain commanding.

---

# SECTION HEADER FORMULA (Use for Every Section)

Every feature section follows this exact pattern (from Lovart):

```
SMALL CAPS CATEGORY LABEL (10-11px, letter-spacing: 2-3px, uppercase)

Large Serif Headline, Short (24-32px desktop)

One sentence of body text that explains the concept.
No more than two lines. (14-16px, secondary color)

[Pill CTA Button]
```

---

# AI BACKGROUND IMAGE PROMPTS

Generate at high resolution (2560x1440+), apply 20-40px Gaussian blur in Figma if needed.

**Hero warm sections:**
"Abstract watercolor landscape, soft rolling hills and sky, warm sunset palette with peach, coral, sage green, and cream tones, painterly brushstrokes, extremely soft focus, no sharp details, dreamy atmospheric, oil painting texture, 4K"

**Pricing cool sections:**
"Abstract impressionist landscape, misty mountains and meadow, cool palette with soft blue, lavender, sage, and ivory, extreme gaussian blur effect, watercolor wash, no recognizable objects, ambient atmospheric, wide aspect ratio"

**CTA cinematic dark:**
"Abstract cinematic light leak, anamorphic lens flare, warm amber and cool teal tones bleeding into deep black, extremely soft focus, film grain, no recognizable shapes, atmospheric bokeh orbs, 21:9 ultrawide"

**Cards / small glassmorphism backgrounds:**
"Abstract watercolor texture, soft color gradient wash, muted earth tones with sage green and warm beige, paper texture visible, no objects or shapes, extremely minimal, subtle color variation, square format"

**Figma application:** Place image → add Fill layer with page background color (#F5F4F0) at 30-50% opacity on top → add Gaussian blur (20-40px) on image layer.

---

# BRAND VOICE

- **Tone:** Confident but not arrogant. Simple but not dumbed-down. We speak like a smart creative friend.
- **Agent framing:** "Your AI video director" not "AI video tool." Loading states become "Directing your scene" not "Generating."
- **Do:** Active voice, specific metrics, celebrate user creativity
- **Don't:** Jargon, overpromise, fake urgency, "AI-powered" in every sentence

---

# UX COPY TABLE

| UI Element | Copy |
|-----------|------|
| Empty state heading | What will you create today? |
| Prompt placeholder | "A cozy cabin in snowy mountains at golden hour, cinematic..." |
| Loading stage 1 | Understanding your scene... |
| Loading stage 2 | Composing camera path... |
| Loading stage 3 | Selecting visual style... |
| Loading stage 4 | Rendering frames... |
| Result success | Your video is ready |
| Iteration help | Not quite right? Try adding details about lighting, camera angle, or style. |
| Error state | We couldn't create that one. Try being more specific about the scene. |
| Paywall trigger | Your video is ready — upgrade to download in full quality |
| Trial prompt | Try 3 videos free — no credit card required |

---

# FIGMA DELIVERABLES SUMMARY

| Page | Frames | Theme |
|------|--------|-------|
| Landing — Desktop | ~14 frames (3 hero variants, signup modal, social proof, 5 scroll frames, 2 feature sections, pricing, CTA+footer) | Light mode |
| Landing — Mobile | ~6-8 frames (hero, sections stacked, pricing, CTA) | Light mode |
| WebApp UI | ~4 frames (empty, loading, result, scene edit) | Dark mode |
| Paywall | 1 frame (full-page with blurred video bg) | Dark mode |
| UIKit | ~4-5 frames (color tokens with light/dark, typography, components, icons) | Both modes |

**Total: ~30-35 frames**

---

# KEY DIFFERENTIATORS vs OTHER APPLICANTS

1. Light landing / dark app — shows contextual design thinking
2. No feature cards — every section is a scroll-driven demo
3. Scroll animation specs with key frames — demonstrates motion design
4. Deferred signup via working prompt input — conversion psychology
5. AI-generated backgrounds — the product creates its own aesthetic
6. Proper color token system — primitives + semantic tokens with mode mapping
7. "Agent not tool" framing throughout — coherent brand voice
