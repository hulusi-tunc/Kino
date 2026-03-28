# User Personas: AI Prompt-to-Video Generator

---

## Real User Sentiment (from reviews, Reddit, X/Twitter)

### What users love
- Speed vs traditional production (idea to clip in minutes)
- Creative exploration and "happy accidents"
- Low barrier for non-video-professionals
- Runway Gen-3 image-to-video: best-in-class motion quality
- Pika's beginner-friendly interface
- Luma's generous free tier

### What users hate
- **Pricing/credit burn** (#1 complaint) - "predatory" credit systems, burn through monthly credits in one session of iteration
- **Short clip duration** - 4-second clips are insufficient for real use
- **Lack of controllability** - "It does what it wants, not what I ask"
- **Motion artifacts** - morphing limbs, melting faces, physics defying
- **Resolution** - insufficient for professional/broadcast use
- **No audio** - no synchronized sound generation
- **Inconsistency** - same prompt, wildly different results
- **Watermarks** on free tiers deter social sharing

---

## Persona 1: Maya Torres - Social Media Content Creator

| Field | Detail |
|---|---|
| Age | 27 |
| Role | Full-time content creator (YouTube, TikTok, Instagram) |
| Followers | 180K across platforms |
| Tech Savviness | High |

### Goals
- Produce 5-7 short-form videos per week
- Create visually distinctive content that stands out
- Reduce time on B-roll, transitions, VFX
- Experiment with surreal/impossible visuals

### Pain Points
- Volume pressure: platforms reward daily posting
- B-roll gaps: great voiceover but lacks supporting visuals; stock feels generic
- Motion graphics freelancers cost $200-500/clip
- Burned through Runway's $36/mo plan in 3 days
- 4-second clips useless for TikTok/Reels (needs 15-60s)

### Tools Used
CapCut (primary), Canva, After Effects (occasional), Runway (tried, churned), Pika (exploring)

### What She Needs
- Longer clips (15-60s continuous)
- Predictable flat-rate pricing
- Style control and customization (avoid "AI slop" reputation)
- Sub-10-minute time to usable output

> "I don't need AI to replace my creativity -- I need it to keep up with my creativity. I have ten ideas a day and can only execute two."

---

## Persona 2: David Chen - Marketing Manager

| Field | Detail |
|---|---|
| Age | 34 |
| Role | Marketing Manager, Head of Content |
| Company | B2B SaaS, ~250 employees |
| Tech Savviness | Moderate |

### Goals
- Produce video without relying on overloaded creative team or agencies
- Reduce 3-4 week turnaround to under one week
- Create localized/variant versions for different markets
- Justify tool spend with clear ROI

### Pain Points
- Agency: 2-3 week lead time, $3,000-8,000 per deliverable
- Internal design team perpetually backlogged
- Budget not growing proportionally to video demand
- AI tools produce outputs that don't match brand guidelines
- Needs stakeholder previews before committing budget

### Tools Used
External agencies (hero videos), Canva (social), Loom (internal), PowerPoint

### What He Needs
- Brand consistency controls (critical)
- Team accounts, SSO, usage reporting
- Intuitive for non-technical team members
- Flat-rate or seat-based predictable pricing
- "Good enough for LinkedIn" quality at 10% of agency cost/time

> "I don't need Hollywood quality -- I need 'good enough for LinkedIn' quality, delivered in hours instead of weeks."

---

## Persona 3: Aisha Okafor - Freelance Creative / Agency Owner

| Field | Detail |
|---|---|
| Age | 31 |
| Role | Founder, 4-person creative agency |
| Specialty | Social content and brand videos |
| Tech Savviness | Very high |

### Goals
- Take on more clients without proportionally increasing headcount
- Offer 48-hour turnaround video packages
- Accelerate concepting and storyboarding
- Produce high-quality mood boards/animatics to win pitches faster

### Pain Points
- Clients expect more deliverables for same budget (3 videos -> 3 + 12 social cuts + 5 variants)
- Skilled motion designers cost $60-90/hour
- AI output is a starting point, not a deliverable: 2-3 hours cleanup for 4-second clip
- Inconsistent character/style across clips makes AI useless for brand work
- Some clients view AI work as "cheating" and expect lower rates

### Tools Used
Premiere Pro, After Effects, DaVinci Resolve, Figma, Midjourney (concept art), Runway (experimental)

### What She Needs
- Professional export formats (ProRes, alpha channel)
- Fine control (camera path, timing, color, framing)
- Character/style consistency across clips (critical)
- Volume pricing or enterprise plans
- API for pipeline integration

> "AI video tools are like having a very talented but unpredictable intern. The raw output can be stunning, but it needs supervision, correction, and finishing work."

---

## Persona 4: Raj Patel - Non-Technical Startup Founder

| Field | Detail |
|---|---|
| Age | 39 |
| Role | Co-founder/CEO, early-stage fintech (Series A) |
| Company | 18 employees, no creative staff |
| Tech Savviness | Low for creative tools (backend engineer) |

### Goals
- Create explainer videos, pitch visuals, social content without hiring creative team
- Produce 60-90s product demo video for website
- Short social clips for LinkedIn/X brand awareness
- Video content in hours, not weeks

### Pain Points
- Zero creative infrastructure
- Agency quotes: $8,000-15,000 for 90-second explainer
- Tried Pika and Runway: "typed what I wanted, got a fever dream," spent 2 hours with nothing usable
- Doesn't know prompt engineering ("cinematic lighting, 24fps, shallow depth of field")
- Every dollar goes to engineering and sales

### Tools Used
Canva (struggles), Google Slides, Loom, Unsplash stock photos. Tried Runway (abandoned after 2 hrs), Pika (abandoned after 1 hr)

### What He Needs
- Templates and guided workflows (critical)
- Results in under 30 minutes or he's gone
- Professional enough for enterprise CFO audience
- Simple, clear pricing
- Minimal learning curve

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

---

## Key Design Implications

1. **Pricing is a PMF issue** - Credit-based pricing is the #1 churn reason. Predictable pricing = competitive moat.

2. **Blank prompt box = wall for 50% of users** - David and Raj will fail and churn without templates, examples, and guided wizards. These are essential, not nice-to-haves.

3. **"Good enough in 10 minutes" beats "amazing in 3 hours"** - Speed-first for the majority, quality controls for the professional minority.

4. **Consistency is the unseated king** - Generating multiple clips with same character/style/visual language is what every persona needs and no tool delivers well.
