# Design Strategy & Key Decisions

## Product Name Suggestion
"Kino" -- which means "cinema" in several languages. Short, memorable, aligns with the video generation theme.

---

## Strategic Design Decisions

### 1. Visual Direction
Based on competitive analysis, we have two viable directions:

**Option A: Dark + Cinematic (Industry Standard)**
- Follows Runway, Pika, Luma conventions
- Dark backgrounds, vibrant accents
- Feels premium and futuristic
- Risk: blends in with competitors

**Option B: Light + Modern with Dark Accents (Differentiated)**
- Clean, bright, airy
- Stands out from the sea of dark UIs
- More accessible, less intimidating for non-technical users (David, Raj)
- Could bridge the creative-enterprise gap
- Risk: might feel less "creative tool" and more "SaaS"

**Recommendation**: Consider a hybrid -- light mode landing page (approachable, trustworthy for first visit) with a dark mode webapp/editor (immersive for creation). This serves both the consideration stage (light = trust) and the creation stage (dark = focus on output).

### 2. Landing Page Structure (Story Flow)
1. **Hero**: Product value + embedded video showcase + CTA
2. **Social proof bar**: User count, brand logos
3. **How it works**: 3-step visual flow
4. **Example prompts + outputs**: Interactive gallery
5. **Features**: Key differentiators
6. **Pricing**: Clear, simple tiers
7. **FAQ + Trust signals**
8. **Final CTA**

### 3. Core WebApp UI Strategy
- Prompt input as the centerpiece
- Guided prompt building for first-time users
- Starter prompt gallery ("Try one of these")
- Named generation stages with early preview
- Output gallery with "More like this" and one-tap sharing
- Progressive feature disclosure

### 4. Paywall Strategy
- Soft paywall approach (Canva model)
- Free outputs with watermark + lower resolution
- Trigger upgrade after "wow moment" (not arbitrary count)
- Show value concretely: "Remove watermark from THIS video"
- Clean, full-page premium screen (not a modal)
- Trust signals on paywall: testimonials, value comparison

### 5. Target Personas Priority
For this case, we should design primarily for:
1. **Maya (Creator)** -- represents the core user, speed-focused
2. **Raj (Founder)** -- represents the accessibility challenge, needs guided UX
3. **David (Marketing)** -- represents the conversion opportunity

### 6. Key Screens Needed

**Required:**
- Landing Page (desktop + mobile)
- Prompt-to-Video WebApp UI (generation flow)
- Paywall / Premium Access Screen

**Optional (recommended):**
- "How it works" section (within landing page)
- Example prompts with video previews (within landing page)
- Mobile responsive layouts

---

## UIKit Foundations to Define

### Typography
- Heading font: Modern geometric sans-serif (e.g., Plus Jakarta Sans, General Sans, or Satoshi)
- Body font: Clean readable sans-serif (Inter or matching family)
- Monospace for prompt text (optional)

### Color Palette
- Primary brand color (to be decided)
- Dark/light background options
- Accent colors for CTAs, highlights
- Semantic colors (success, warning, error)
- Neutral grays scale

### Components
- Buttons (primary, secondary, ghost)
- Input fields (prompt input, form fields)
- Cards (video output, pricing tier, feature)
- Navigation (header, mobile menu)
- Progress indicators (generation stages)
- Modals / overlays
- Tags / badges
- Pricing table
