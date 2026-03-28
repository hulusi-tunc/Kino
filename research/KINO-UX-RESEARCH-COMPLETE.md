# Kino - AI Video Generator | Complete UX Research & Planning

## Project: HUBX Web Designer Recruitment Case

**Product:** AI prompt-to-video web application
**Target Users:** Content creators, marketers, social media teams, startup founders
**Deliverables:** Landing Page (desktop + mobile), Core WebApp UI (prompt-to-video flow), Paywall/Premium Access Screen, UIKit

---

# 1. COMPETITIVE ANALYSIS

## 7 competitors analyzed across landing page, UX flow, and monetization strategy.

## Competitive Positioning

The AI video space in 2026 has clear leaders. Here's where they sit and where Kino should position:

```
                        Pro / Cinematic
                              |
                              |              Runway --- Kling
               Google Veo ---|              (complex, pro tools)
                              |
          *** KINO ***  ------|     Sora (shut down)
          (Sweet spot)        |
                              |
           HeyGen --------    |
         (simple, avatars)    |
              Pika --------   |
                              |
         Canva AI ------      |
                              |
      Simple workflow --------|-------- Complex workflow
```

**Kino's sweet spot:** Cinematic quality like Runway, but simple enough for everyone like Pika. Runway and Kling sit in the complex/pro corner -- powerful but intimidating. HeyGen is actually simple (clean script + avatar picker) but locked to avatar-only use cases. Pika is radically simple but feels cheap. Sora shut down in March 2026, leaving the premium-but-accessible space wide open. Kino should own that gap: pro-quality output with a workflow anyone can use in under 60 seconds.

## What each competitor teaches us about UX patterns

### Runway
Dark cinematic UI. Sidebar with advanced tools (motion brush, camera control, style transfer). Multi-step workflow -- feels like After Effects lite.
- **Steal:** dark theme, cinematic feel, professional workspace
- **Avoid:** overwhelming sidebar on first use, complex multi-tool UI

### Google Veo / Flow
Clean minimal interface. Multiple entry points: text, image, frames, ingredients. Strong prompt adherence. Audio generation built in. Best quality in 2026.
- **Steal:** clean interface, multiple input modes, audio generation
- **Avoid:** Google's enterprise pricing ($29-360/mo)

### Pika
Single text box, one button. "Not for pros, for actual people." Scene Ingredients let you mix characters + props + backgrounds. Credit-based, gentle upgrade nudges.
- **Steal:** radical simplicity, one box + one button approach
- **Avoid:** feeling too casual / cheap for professional marketers

### HeyGen
Avatar-led video from scripts. 175+ languages, lip-sync. Enterprise focus: Paramount, Cisco, J&J use it. Complex workflow but strong onboarding.
- **Steal:** enterprise trust signals, brand logos, strong onboarding
- **Avoid:** avatar-only approach, too niche for creative use cases

### Kling
Strong motion quality, up to 2-minute clips. More granular camera and motion controls. Feature-dense interface with creativity slider.
- **Steal:** long-duration clips, granular motion controls
- **Avoid:** feature-dense UI that overwhelms casual users

### Canva AI
AI video as one feature inside a broader creative suite. Extremely accessible, zero learning curve. Template-driven approach for non-designers.
- **Steal:** zero-friction templates, accessible to everyone
- **Avoid:** generic quality, AI video feels like an afterthought

---

## Detailed Competitor Breakdown

### Runway ML
- **Category:** Creative Suite | Dark theme
- **Pricing:** Credits, $12-$76/mo
- **Hero:** Full-bleed autoplay video, aspirational headline, prominent CTA
- **Core UX:** Prompt + image-to-video, workspace canvas, multi-tool suite (inpainting, bg removal, text-to-image). Clean interface with expandable settings panel. Progress bar with estimated time (30-90s). Output in workspace/canvas view with extend, upscale, download.
- **Paywall:** Soft - credits deplete, tools remain visible. Free tier ~125 credits/mo, watermarked. Upgrade triggers on credit depletion or premium-only features.
- **Visual:** Dark mode default, near-black bg, dark grays, purple/blue accents, white text. Clean sans-serif. Futuristic-professional, cinematic studio feel.

### Pika Labs
- **Category:** Consumer Creative | Dark theme
- **Pricing:** Credits, $8-$28/mo
- **Hero:** Autoplay video grid, playful accessible headline ("The idea-to-video platform")
- **Core UX:** Chat-like simplicity, feed/timeline output view. Clean text prompt at center, image/video upload. Almost chat-like. Inline loading with animated placeholder. Feed output (social media style). Each card shows prompt, play, download/remix/share/reprompt.
- **Paywall:** Soft - gentle upgrade prompts on depletion. Feature-gated premium effects (Pikaffects).
- **Visual:** Dark mode, deep navy/charcoal. Vibrant accents: pinks, purples, electric blues. Rounded, friendly sans-serif. Playful-futuristic, consumer-oriented.

### Luma AI (Dream Machine)
- **Category:** Quality-Focused | Dark theme
- **Pricing:** Generations, $24-$100+/mo
- **Hero:** Bold headline ("Dream Machine"), photorealistic quality showcase
- **Core UX:** Intentionally minimal, stripped-down interface. Prominent text prompt + reference image. Minimal settings. Very streamlined. Gallery/grid workspace view.
- **Paywall:** Usage-gated (daily generation cap), not feature-gated. Lower priority queue and resolution on free tier.
- **Visual:** Dark mode, deep blacks/grays. Minimal accents, subtle blues/whites. Clean, elegant sans-serif. Premium-minimal.

### Kling AI
- **Category:** Tech-Forward | Dark theme
- **Pricing:** Credits + subscriptions
- **Hero:** Cinematic showcase, technical capabilities focus
- **Core UX:** Feature-dense, more controls, creativity slider. Text prompt + image upload. Duration, aspect ratio controls. Queue-based with estimated wait times.
- **Paywall:** Daily limits + resolution gates. Some advanced motion modes tier-gated.
- **Visual:** Primarily dark mode. Blues, purples, electric accents, more saturated. Tech-forward, slightly busier UI.
- **Differentiator:** Long-duration generation (up to 2 min), granular camera/motion controls.

### Sora (OpenAI)
- **Category:** Research Platform | Light/Minimal theme
- **Pricing:** ChatGPT bundle, $20-$200/mo
- **Hero:** Curated gallery, minimal authoritative presentation
- **Core UX:** Storyboard + remix features within ChatGPT. Text prompt, options for resolution/aspect/duration. Queue-based.
- **Paywall:** Hard - requires ChatGPT subscription. No standalone Sora access.
- **Visual:** Clean, minimal. White/light for marketing, neutral/dark for generation. Subtle greens (OpenAI brand). Extremely minimal. Authoritative, restrained.
- **Differentiator:** Storyboard feature for multi-scene planning (unique). Bundling strategy.

### Synthesia
- **Category:** Enterprise Avatar | Light theme
- **Pricing:** Seats, $22-$67/mo
- **Hero:** AI avatar speaking to camera, business-focused headline
- **Core UX:** Slide-based editor (like PowerPoint), template-first. Script per scene, avatar selection, template/layout. NOT a prompt box. Rendering scene-by-scene with email notification.
- **Paywall:** 1 free demo video (1 min, watermarked), then subscription. Gates: video count, length, custom avatars, API, collaboration.
- **Visual:** Light mode default. Whites, light grays, blue/purple accents. Corporate-SaaS feel.

### HeyGen
- **Category:** Marketing Video | Light theme
- **Pricing:** Credits, $24-$72/mo
- **Hero:** Text-in / video-out split screen demo
- **Core UX:** Scene editor + URL-to-video automation. Also "Video Translate" feature. Analytics on shared videos.
- **Paywall:** 1 free video (watermarked), then credit gates. Advanced features (avatar cloning, translation, API) gate to higher tiers.
- **Visual:** Light mode for marketing, clean editor. Blues, whites. Modern SaaS, between enterprise and consumer.
- **Differentiator:** Video translation/lip-sync as viral hook. URL-to-video automation.

## Common Patterns Across Competitors

| Pattern | Details |
|---|---|
| Dark mode dominance | 5/7 use dark UI for creative tools. Enterprise tools use light. |
| Hero = output showcase | All lead with generated video, not feature descriptions. Show, don't tell. |
| Credit-based monetization | Nearly all use credits/generation counts, not unlimited. |
| 3-step "How it Works" | Universal: Type prompt > AI generates > Download/share. |
| Prompt input as centerpiece | Text field is visual/functional center. Minimal chrome around it. |
| Progressive disclosure | Advanced settings hidden behind expandable panels. Simple defaults. |
| Gallery as social proof | Community showcases for inspiration + credibility. |

## Creative vs Enterprise Split

| Dimension | Creative (Runway, Pika, Luma, Kling, Sora) | Enterprise (Synthesia, HeyGen) |
|---|---|---|
| Primary input | Free-form creative prompt | Structured script + avatar |
| Output type | Abstract/cinematic clips | Talking-head presentations |
| Target user | Creators, filmmakers, designers | L&D, marketing, sales teams |
| Visual identity | Dark, futuristic, cinematic | Light, corporate, trustworthy |
| Pricing anchor | Credits per generation | Minutes of video per month |

## Differentiation Opportunities

1. **Guided Creative Direction** - Mood boards, style presets, shot type selectors instead of blank prompt box
2. **Transparent Generation** - Show intermediate frames, mid-generation steering, explain AI decisions
3. **Predictable Pricing** - Simple per-video pricing vs confusing credit systems (top churn reason)
4. **Mobile-First Creation** - Short-form video (TikTok/Reels) is primary use case, yet mobile UX is an afterthought
5. **Integrated Post-Production** - Bridge gap between AI clip and publishable video with trimming, captions, music
6. **Light Mode for Creative Tools** - Universal dark mode is convention, not necessity. Polished light mode could stand out
7. **Storyboard-First Workflow** - Only Sora explores multi-scene creation. Planning + generating + assembling = real gap
8. **Onboarding and Education** - Interactive onboarding that teaches prompting while users create their first video

---

# 2. USER PERSONAS

## Real User Sentiment (from reviews, Reddit, X/Twitter)

**What users love:**
- Speed vs traditional production (idea to clip in minutes)
- Creative exploration and "happy accidents"
- Low barrier for non-video-professionals
- Runway Gen-3 image-to-video: best-in-class motion quality
- Pika's beginner-friendly interface
- Luma's generous free tier

**What users hate:**
- Pricing/credit burn (#1 complaint) - "predatory" credit systems
- Short clip duration - 4-second clips insufficient for real use
- Lack of controllability - "It does what it wants, not what I ask"
- Motion artifacts - morphing limbs, melting faces
- Resolution insufficient for professional use
- No synchronized audio generation
- Inconsistency - same prompt, wildly different results
- Watermarks on free tiers deter social sharing

---

## Persona 1: Maya Torres - Content Creator

| Field | Detail |
|---|---|
| Age | 27 |
| Role | Full-time content creator (YouTube, TikTok, Instagram) |
| Followers | 180K across platforms |
| Tech Savviness | High |

**Goals:**
- Produce 5-7 short-form videos per week
- Visually distinctive content that stands out
- Reduce B-roll and VFX production time
- Experiment with surreal/impossible visuals

**Pain Points:**
- Volume pressure from daily posting demands
- 4-sec clips useless for TikTok/Reels (needs 15-60s)
- Burned through Runway $36/mo in 3 days
- Concerned about "AI slop" reputation

**Key Needs:**
- Longer clip duration (15-60s continuous)
- Predictable flat-rate pricing
- Style control and customization
- Under 10 minutes to usable output

**Tools Used:** CapCut (primary), Canva, After Effects (occasional), Runway (tried, churned), Pika (exploring)

> "I don't need AI to replace my creativity -- I need it to keep up with my creativity. I have ten ideas a day and can only execute two."

---

## Persona 2: David Chen - Marketing Manager

| Field | Detail |
|---|---|
| Age | 34 |
| Role | Marketing Manager, Head of Content |
| Company | B2B SaaS, ~250 employees |
| Tech Savviness | Moderate |

**Goals:**
- Video content without agency dependency
- Reduce 3-4 week turnaround to under 1 week
- Localized variant versions for different markets
- Justify marketing tool spend with ROI

**Pain Points:**
- Agency costs $3-$8K per deliverable, 2-3 week lead
- Internal design team perpetually backlogged
- AI outputs don't match brand guidelines
- Needs stakeholder previews before committing

**Key Needs:**
- Brand consistency controls (critical)
- Team accounts with SSO
- Intuitive for non-technical team members
- Predictable seat-based pricing

**Tools Used:** External agencies (hero videos), Canva (social), Loom (internal), PowerPoint

> "I don't need Hollywood quality -- I need 'good enough for LinkedIn' quality, delivered in hours instead of weeks."

---

## Persona 3: Aisha Okafor - Agency Owner

| Field | Detail |
|---|---|
| Age | 31 |
| Role | Founder, 4-person creative agency |
| Specialty | Social content and brand videos |
| Tech Savviness | Very High |

**Goals:**
- Take on more clients without proportionally increasing headcount
- Offer 48-hour turnaround video packages
- Accelerate concepting and storyboarding
- Win pitches faster with animatics

**Pain Points:**
- Clients want more deliverables for same budget
- Motion designers cost $60-$90/hour
- AI output needs 2-3 hours cleanup per 4s clip
- Inconsistent character/style across clips

**Key Needs:**
- Professional export formats (ProRes, alpha channel)
- Fine control over camera, timing, color
- Character and style consistency (critical)
- API for pipeline integration

**Tools Used:** Premiere Pro, After Effects, DaVinci Resolve, Figma, Midjourney (concept art), Runway (experimental)

> "AI video tools are like having a very talented but unpredictable intern. The raw output can be stunning, but it needs supervision, correction, and finishing work."

---

## Persona 4: Raj Patel - Startup Founder

| Field | Detail |
|---|---|
| Age | 39 |
| Role | Co-founder/CEO, early-stage fintech (Series A) |
| Company | 18 employees, no creative staff |
| Tech Savviness | Low for creative tools (backend engineer) |

**Goals:**
- Explainer videos without hiring creative team
- 60-90s product demo for company website
- Social clips for LinkedIn and X
- Content in hours, not weeks

**Pain Points:**
- Zero creative infrastructure
- Agency quotes $8-$15K for 90s explainer
- Tried Runway and Pika: "got a fever dream"
- Doesn't understand prompt engineering

**Key Needs:**
- Templates and guided workflows (critical)
- Results in under 30 minutes or he leaves
- Professional enough for enterprise CFOs
- Minimal learning curve

**Tools Used:** Canva (struggles), Google Slides, Loom, Unsplash. Tried Runway (abandoned 2 hrs), Pika (abandoned 1 hr)

> "I just need to type 'show our dashboard processing a payment with a clean, professional look' and get back something I can put on our website without being embarrassed."

---

## Cross-Persona Opportunity Matrix

| Design Opportunity | Maya (Creator) | David (Marketing) | Aisha (Agency) | Raj (Founder) |
|---|---|---|---|---|
| Longer clip duration (15-60s) | Critical | Critical | Important | Critical |
| Predictable flat-rate pricing | High | Critical | High | High |
| Template/guided workflows | Low | High | Low | **Critical** |
| Brand consistency controls | Medium | **Critical** | **Critical** | Medium |
| Professional export formats | Low | Medium | **Critical** | Low |
| Character/style consistency | High | High | **Critical** | Medium |
| Sub-10-min time to first output | **Critical** | High | Medium | **Critical** |
| API / pipeline integration | Low | Medium | **Critical** | Low |
| Team collaboration features | Low | **Critical** | High | Low |

## Key Design Implications

1. **Pricing is a PMF issue** - Credit-based pricing is the #1 churn reason. Predictable pricing = competitive moat.
2. **Blank prompt box = wall for 50% of users** - David and Raj will fail and churn without templates, examples, and guided wizards.
3. **"Good enough in 10 minutes" beats "amazing in 3 hours"** - Speed-first for the majority, quality controls for pros.
4. **Consistency is the unseated king** - Same character/style across clips is what every persona needs and no tool delivers.

---

# 3. USER JOURNEY MAP

## Stage 1: AWARENESS
**Emotion:** Curious + Skeptical

**User Actions:**
- Sees viral AI-generated video on Twitter/X, TikTok, Instagram
- Clicks "Made with [Product]" watermark
- Reads "Best AI Video Tools" listicle or YouTube comparison
- Sees targeted ad (before/after: prompt vs. output)

**Pain Points:**
- Can't tell if showcased outputs are cherry-picked
- Too many competing tools, unclear differences
- Confusion about what "AI video" means

**Design Opportunities:**
- Show prompt alongside every output (most persuasive pattern)
- "Try this prompt" CTA that takes users directly into product with pre-filled input
- Watermark links to landing page with exact prompt visible

---

## Stage 2: CONSIDERATION
**Emotion:** Interested but Price-Sensitive

**User Actions:**
- Browses landing page and demos
- Checks pricing and free tier details
- Compares with competitors
- Reads reviews and community galleries

**Pain Points:**
- Confusing credit-based pricing
- Unclear free tier limitations
- Privacy and ownership concerns

**Design Opportunities:**
- Interactive demo/playground on landing page (zero signup)
- Crystal clear free tier: "3 free videos, 720p, with watermark"
- "You own your videos. We don't train on your content." prominently displayed
- Real-time community feed of what others are generating

---

## Stage 3: FIRST USE (Critical Moment)
**Emotion:** Anxious -> Delight or Disappointment

**User Actions:**
- Signs up with minimal friction
- Types first prompt (often vague or overly ambitious)
- Waits for generation (30s to minutes)
- Views result versus expectations
- Decides: try again, refine, or leave

**Pain Points:**
- Blank text box = cold start anxiety
- Bad first prompt -> bad result -> churn
- Long wait with no feedback feels broken
- No guidance on what makes a good prompt

**Design Opportunities:**
- Guided prompt builder: "A [subject] doing [action] in [setting] with [style]" (highest-impact onboarding pattern)
- Curated starter prompts: "Try one of these" with 6-8 examples, one-tap generate
- Smart defaults: pre-select most forgiving settings
- Named generation stages ("Understanding prompt..." / "Composing scene..." / "Rendering frames...") - reduces perceived wait by ~40%
- Early preview: show thumbnail within 5-10 seconds before full video
- First-result framing: "Not quite right? Try adding more detail about camera angle." Frame iteration as normal, not failure.

---

## Stage 4: ENGAGEMENT
**Emotion:** Growing Confidence

**User Actions:**
- Generates more videos, experiments
- Discovers features progressively
- Uses outputs for real purposes
- Builds personal gallery of favorites

**Pain Points:**
- Poor feature discovery
- Inconsistent output quality feels unreliable
- No "more like this" option
- Clunky sharing workflow

**Design Opportunities:**
- Progressive disclosure: After 3 gens -> style controls. After 5 -> image-to-video. After 10 -> camera motion.
- "More like this" button for variations of liked results
- One-tap sharing to TikTok, Instagram, YouTube Shorts
- Prompt history with quality ratings
- Inspiration engine: "Trending prompts" or "Staff picks"

---

## Stage 5: CONVERSION (Paywall - Critical Design Challenge)
**Emotion:** Frustrated -> Evaluating Value

**User Actions:**
- Hits free tier limit
- Sees upgrade prompt or paywall
- Evaluates pricing against perceived value
- Decides: upgrade, find alternative, or churn

**Pain Points:**
- Hard paywall at arbitrary moment feels punishing
- Credit pricing creates anxiety
- Locking existing content feels like hostage-taking
- No way to earn more free usage

**Design Opportunities:**
- Soft paywall with graduated friction: degrade quality, don't block access (Spotify/Canva model)
- Trigger after "wow moment" (download, share signals), not arbitrary count
- "Remove watermark from THIS video" with clean vs watermarked preview
- Value framing: "Less than one stock video clip" or "Replace your $50/month stock subscription"
- Referral credits: "Invite a friend, get 5 more generations"
- NEVER lock previously generated content behind paywall
- Free tier as permanent: "Free forever with watermark. Upgrade anytime." (paradoxically increases conversion)

---

## Stage 6: RETENTION
**Emotion:** Habitual -> Advocate

**User Actions:**
- Returns regularly for ongoing needs
- Integrates into creative workflow
- Shares and recommends to others
- Explores new features on release

**Pain Points:**
- Model updates change style without warning
- No completion notifications for renders
- Subscription fatigue
- Lack of workflow integrations

**Design Opportunities:**
- Weekly value digest: "You created 23 videos. Estimated $460 saved."
- Model version control for ongoing projects
- Push notifications when video is ready
- API and integrations (Canva, Slack, social schedulers)
- Loyalty mechanics: long-term subscribers get higher limits, early access

---

# 4. UX BEST PRACTICES

## Prompt Input Design
1. **Template-based prompt builder** - Structured fields: Subject + Action + Setting + Style + Camera. Lowers the floor without lowering the ceiling.
2. **Prompt suggestions & autocomplete** - As user types, suggest completions. Teaches patterns implicitly.
3. **Example gallery linked to prompts** - Every showcase video has "Copy this prompt" button.
4. **Negative prompts made accessible** - Toggle switches: "Avoid: blurry, text, distorted faces" as checkboxes.
5. **Prompt enhancement** - "Enhance my prompt" button using LLM to expand vague into detailed.
6. **Visual style references** - Upload reference image or select from style library.
7. **Prompt history & favorites** - Save, tag, reuse successful prompts.

## Loading & Generation States
1. **Named progress stages** - "Analyzing prompt" -> "Composing scene" -> "Generating frames" -> "Rendering final video". Labeled stages reduce perceived wait by ~40%.
2. **Early preview** - Show thumbnail/first frame within 5-10 seconds.
3. **Queue system with notifications** - Multiple generations with completion notifications.
4. **Productive waiting** - Show tips, community creations, or prompt suggestions during generation.
5. **Cancel and regenerate** - Allow cancellation without credit cost.
6. **Background generation** - On mobile, allow leaving the app. Push notification on completion.

## Paywall UX
1. **Trigger after demonstrated value** - Track satisfaction signals (downloads, shares). Show paywall after "wow moment."
2. **Soft paywall with visible degradation** - Free users keep generating with limitations: watermark, 480p/720p, 3s max, longer queue.
3. **Never hold content hostage** - Previously generated content always accessible.
4. **Contextual upgrade prompts** - "Upgrade to remove watermark from THIS video" with clean preview. Specificity converts.
5. **Free tier as permanent** - "Free forever with watermark. Upgrade anytime."

## Onboarding
1. **First generation in under 60 seconds** - North Star metric for onboarding.
2. **Guided first prompt, not tutorial** - Pre-built prompt they can modify. One-tap generate.
3. **Show, don't tell** - Gallery of "Prompt X -> Result Y" teaches more than paragraphs.
4. **Progressive complexity** - Session 1: text box + generate. Session 2: style controls. Session 3: advanced features.
5. **Try before sign-up** - Let them enter prompt and see result/preview before account creation.

## Trust Signals
1. **Honest public gallery** - Show realistic range, not only best outputs.
2. **Transparent content policy** - Clear what can/cannot be generated.
3. **Data privacy** - "Your prompts and videos are private. We don't train on your content."
4. **Social proof at every stage** - Video count, testimonials, brand logos on landing, pricing, AND paywall.
5. **Transparent pricing, no dark patterns** - No hidden fees, one-click cancel.

---

# 5. INFORMATION ARCHITECTURE

## Sitemap

```
Kino
├── Landing Page
│   ├── Navigation
│   ├── Hero + CTA
│   ├── Social Proof
│   ├── How It Works
│   ├── Features
│   ├── Example Gallery
│   ├── Pricing
│   ├── FAQ
│   ├── Final CTA
│   └── Footer
├── WebApp
│   ├── Prompt Input (Empty State)
│   ├── Prompt Input (Active)
│   ├── Generating State
│   ├── Video Result
│   └── Gallery / History
├── Paywall / Premium
│   ├── Upgrade Prompt
│   ├── Plan Comparison
│   ├── Checkout
│   └── Success
└── Auth
    ├── Sign Up
    ├── Log In
    └── Onboarding
```

## Landing Page - Section Breakdown

| # | Section | Purpose | Priority |
|---|---|---|---|
| 01 | Navigation | Logo, nav links (Features, How it Works, Examples, Pricing), CTA button | Required |
| 02 | Hero Section | Headline, subheadline, primary CTA, embedded video showcase or prompt demo | Required |
| 03 | Social Proof | User count, brand logos, or strong stat ("10,000+ videos generated") | Required |
| 04 | How It Works | 3-step visual flow: Write prompt -> AI generates -> Download & share | Required |
| 05 | Features | Key differentiators: HD quality, fast generation, style control, easy sharing | Required |
| 06 | Example Gallery | Prompt-to-video pairs with "Copy this prompt" CTA | Optional |
| 07 | Pricing | Free, Pro, Enterprise tiers with clear comparison. Simple, not credit-based | Required |
| 08 | FAQ | Common questions: quality, ownership, pricing, privacy | Optional |
| 09 | Final CTA | "Ready to create?" with sign-up form or button | Required |
| 10 | Footer | Links, social icons, legal, copyright | Required |

---

# 6. USER FLOWS

## Flow 1: Landing Page -> Sign Up
1. **Land on Homepage** (via social, ad, or search)
2. **Read Hero Section** (understand value proposition)
3. **See Social Proof** (10K+ users, brand logos)
4. **View How it Works** (3-step process)
5. **Browse Examples** (prompt -> video pairs)
6. **Check Pricing** (compare tiers)
7. **Click CTA** ("Try Free" or "Get Started")

## Flow 2: Prompt -> Video Generation
1. **Open WebApp** (empty state with starter prompts)
2. **Write Prompt** (type or use template builder, optional style/duration controls)
3. **Click Generate** (prompt sent to AI)
4. **Generation Loading** (named stages with progress, early preview at 5-10s)
5. **View Result** (video auto-plays, compare to prompt)
6. **Take Action** [Decision] (download, share, remix, or "More like this")
7. **Save to Gallery** (added to personal history)

## Flow 3: Free User -> Premium Upgrade
1. **Hit Free Limit** (credits depleted or premium feature attempted)
2. **See Upgrade Prompt** (contextual: "Remove watermark from THIS video")
3. **View Value** [Decision] (HD, no watermark, more generations)
4. **Compare Plans** (Free vs Pro vs Enterprise, clear feature comparison)
5. **Choose Plan** (monthly or annual billing)
6. **Complete Payment** (Stripe checkout, instant activation)
7. **Premium Activated** (immediate access to all premium features)

## Flow 4: First-Time Onboarding
1. **Sign Up** (email or Google SSO, minimal fields)
2. **Welcome Screen** ("What will you use Kino for?" optional)
3. **Guided First Prompt** (pre-filled template: [subject] + [setting] + [style])
4. **First Generation** (smart defaults applied, best chance of good result)
5. **Wow Moment** [Decision] (see first video, tips for improvement)
6. **Explore Features** (progressive disclosure of advanced controls)

---

# 7. CONTENT STRATEGY

## Landing Page - Hero Copy Options

**Headline Option A:** All Your Video Creation. One Platform.
Confident, declarative. Positions as an all-in-one solution.

**Headline Option B:** Imagine It. Describe It. Watch It.
Three-part rhythm that mirrors the product flow.

**Headline Option C:** You Bring the Vision. We Bring It to Life.
Creator-centric. Puts the user first, tool second.

**Subheadline:** Top-tier AI video generation models. One simple interface. Create stunning videos from text prompts in seconds — no editing skills required.

**Primary CTA:** Start Free Now (short, action-oriented, matches industry pattern)
**Secondary CTA:** Explore Examples -> (for visitors not ready to commit)

## WebApp - UX Writing

| Element | Copy | Rationale |
|---|---|---|
| Empty State | What will you create today? | Inviting, not intimidating |
| Prompt Placeholder | "A cozy cabin in snowy mountains at golden hour, cinematic..." | Teaches prompt structure by example |
| Generating Stage 1 | Understanding your vision... | |
| Generating Stage 2 | Composing the scene... | |
| Generating Stage 3 | Rendering frames... | |
| Generating Stage 4 | Finalizing your video... | Named stages reduce perceived wait ~40% |
| Result Success | Your video is ready | Simple, clear |
| Iteration Help | Not quite right? Try adding details about lighting, camera angle, or style. | Frames iteration as normal, not failure |
| Error State | We couldn't generate that one. Tips: be more specific, avoid complex multi-character scenes, try a different style | Helpful, not apologetic |

## Paywall - Upgrade Messaging

| Element | Copy |
|---|---|
| Soft Paywall Trigger | Upgrade to share this video in HD (contextual, specific to what user just created) |
| Value Proposition | Go Premium. Create without limits. HD export, No watermark, 100 videos/mo, Priority generation |
| Price Anchoring | Less than a single stock video clip. Replace your $50/month footage subscription. |
| Social Proof | Join 10,000+ creators who upgraded this month |
| Soft Urgency | Your video is waiting -- upgrade to download in full quality. (tied to existing value, no fake timers) |
| Free Tier Framing | Free forever with watermark. Upgrade anytime. (reduces pressure, increases conversion) |

## Brand Voice Guidelines

**Tone:** Confident but not arrogant. Simple but not dumbed-down. Inspiring but not hypey. Helpful but not hand-holdy. We speak like a smart creative friend, not a corporate robot.

**Do:**
- Use active voice ("Create" not "Videos can be created")
- Be specific ("4K video in 30 seconds" not "high quality fast")
- Show empathy for the creative process
- Celebrate what users create, not the technology

**Don't:**
- Use jargon ("generative adversarial networks")
- Overpromise ("any video you can imagine")
- Be apologetic about limitations
- Use fake urgency or dark patterns
- Say "AI-powered" in every sentence

---

# 8. DESIGN STRATEGY RECOMMENDATIONS

## Visual Direction
**Recommendation: Dark premium aesthetic**

Based on deeper market analysis, the leading AI creative platforms overwhelmingly use dark, editorial aesthetics. A dark-first approach signals "professional creative tool" and is the industry standard.

### Color System
- **Background:** Near-black (`#050505`) — not pure black, subtle warmth
- **Surface:** White at 6-10% opacity for cards and containers
- **Primary CTA:** Cobalt blue (`#346AEA`) — confident, trustworthy, distinct from competitor purples
- **Text Primary:** White `#FFFFFF`
- **Text Secondary:** White at 50-70% opacity
- **Text Tertiary:** `#ABABAB`
- **Accent/highlight:** One high-contrast white section for visual break (models/capabilities showcase)

### Typography
- **Font:** Inter throughout (single typeface)
- **Weight distribution:** Medium (500) heavily favored — refined, understated. Avoid heavy/black weights.
- **H1:** 40px / 500 weight / 60px line-height
- **H2:** 38px / 500-600 weight
- **Body:** 14-16px / 400-500 weight
- **CTA:** 14-15px / 500-600 weight

### Shape Language
- **CTAs:** Pill-shaped (fully rounded) for primary actions
- **Cards:** 16-26px border radius
- **Sections:** 32px radius for major containers
- **Never sharp corners** — everything is softened

### Spacing
- **Section spacing:** 64-140px between major sections (generous breathing room)
- **Max content width:** 1440px
- **Horizontal padding:** 80-90px desktop, 16-20px mobile

## Product Model: Multi-Model Aggregator

The emerging trend in AI video is **model aggregation** — one platform, multiple AI engines. Rather than positioning as a single proprietary model, the product should:

- Let users choose which AI model powers their generation (e.g., different models for different styles/speeds)
- Frame the value as "access to the best AI models through one simple interface"
- Use a credit-based system where different models cost different amounts
- This aligns with how the market is moving and provides a natural pricing lever

### Pricing Model
Credit-based with tiered subscriptions:

| Plan | Price | Credits/mo | Videos | Speed |
|---|---|---|---|---|
| Basic | ~$9/mo | 2,000+ | ~50 | Standard |
| Pro | ~$19/mo | 4,500+ | ~110 | Priority |
| Creator | ~$49/mo | 11,000+ | ~280 | Max performance |

All plans: full access to core tools, commercial use rights. Differentiation on volume, speed, and queue priority — not feature-gating.

## Paywall Approach
- Soft paywall — degrade quality, don't block access entirely
- Full-page premium screen (not a generic modal), visually strong and intentional
- Contextual triggers tied to user's actual content
- Trust signals: testimonials, value comparison, transparent pricing
- **Credit depletion as primary trigger** — when credits run out, show upgrade with clear value comparison
- **"Your data is never used to train models"** — trust and privacy messaging at conversion point

## Core UX Innovation: Conversational Prompt Refinement

Beyond the standard text prompt box, consider a **chat-style iterative interface** for prompt refinement:
- User types initial prompt
- AI generates and responds with options: "Want any changes? Choose: change style, change background, upscale, make variations"
- Users refine through conversation rather than re-typing entire prompts
- This pattern is emerging in mobile-first AI tools and dramatically reduces the "blank text box" problem

## Key Design Principles
1. **Prompt input IS the product** — invest disproportionately in making it guided, forgiving, educational
2. **First result quality defines everything** — stack the deck: smart defaults, proven prompts, auto-enhancement
3. **Wait time is an opportunity** — loading with previews, tips, progress storytelling increases engagement
4. **Simplicity at surface, power underneath** — "type and generate" for beginners, deep controls for power users via progressive disclosure
5. **Model selection as a feature** — let users pick which AI model generates their video, framed as creative choice not technical complexity
6. **Dark editorial aesthetic** — premium feel, generous spacing, Inter font, blue accents. Professional, not playful.
7. **Privacy as a differentiator** — explicit messaging about data ownership, no training on user content

## Brand Voice (Updated)
- **Confident but not arrogant:** "All your video creation. One platform."
- **Creator-centric:** "You bring the vision. We take it further."
- **Professional, not playful:** Clean declarative statements, no slang
- **Trust-focused:** "AI you can trust. Built for creators."
- **Action-oriented CTAs:** "Start Free Now", "Get Started for Free"

## Figma File
All UX planning is structured in Figma: https://www.figma.com/design/9Ys8N8OjU1yiTu7V2X1Gv0

Pages: Cover, Competitive Analysis, User Personas, User Journey Map, Information Architecture, User Flows, Content Strategy
