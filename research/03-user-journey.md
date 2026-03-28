# User Journey Map: AI Prompt-to-Video Generator

---

## Stage 1: AWARENESS

### User Actions
- Sees viral AI-generated video on Twitter/X, TikTok, Instagram
- Clicks "Made with [Product]" watermark
- Reads "Best AI Video Tools" listicle or YouTube comparison
- Sees targeted ad (before/after: prompt vs. output)
- Hears from colleague or creator community

### Thoughts & Emotions
- "That looks amazing -- how was that made?"
- "I've been wanting to make video but can't edit / no time"
- Curiosity + skepticism ("Is it actually that good?")

### Pain Points
- Hard to tell if showcased outputs are representative or cherry-picked
- Confusion about what "AI video" means
- Too many competing tools, unclear differentiation

### Design Opportunities
- "Made with [Product]" watermark that links to landing page with that video's prompt visible
- Show prompt alongside output everywhere (most persuasive pattern)
- "Try this prompt" CTA that takes users directly into product with pre-filled prompt

---

## Stage 2: CONSIDERATION

### User Actions
- Browses landing page, watches demos
- Checks pricing (free tier?)
- Searches "[Product] vs Runway vs Sora"
- Reads reviews, checks community galleries

### Thoughts & Emotions
- "Can I actually use this for my needs?"
- "What does free give me?"
- Price sensitivity, privacy concerns

### Pain Points
- Confusing pricing tiers (credits vs minutes vs generations)
- Unclear free tier limitations
- Hard to judge quality without trying
- Privacy/ownership concerns

### Design Opportunities
- Interactive demo/playground on landing page (zero sign-up)
- Crystal clear free tier: "3 free videos, 720p, with watermark"
- Address ownership prominently: "You own your videos. We don't train on your content."
- Real-time community feed of what others are generating

---

## Stage 3: FIRST USE (Critical Moment)

### User Actions
- Signs up (email/Google/Apple)
- Encounters onboarding
- Types first prompt (often vague or overly ambitious)
- Waits for generation (30s to minutes)
- Views result -- evaluates vs expectations
- Decides: try again, refine, or leave

### Thoughts & Emotions
- "Let me try quickly" (wants minimal friction)
- "I'm not sure what to write" (cold start anxiety)
- Waiting: anxiety, impatience, "Is it stuck?"
- Result: delight ("Wow!") or disappointment ("Not what I meant")

### Pain Points
- **Cold start**: empty text box, no idea what to write
- First prompt is bad -> bad result -> churn
- Long wait with no feedback feels broken
- No guidance on what makes a good prompt
- Result doesn't match mental image, no idea how to fix

### Design Opportunities
- **Guided first prompt**: Template-based building: "A [subject] doing [action] in [setting] with [style]" -- highest-impact onboarding pattern
- **Curated starter prompts**: "Try one of these" with 6-8 examples, one-tap generate
- **Smart defaults**: Pre-select most forgiving settings
- **Generation UX**: Named progress stages ("Understanding prompt..." / "Composing scene..." / "Rendering frames...") -- reduces perceived wait by up to 40%
- **Early preview**: Show thumbnail within 5-10 seconds before full video
- **First-result framing**: "Not quite right? Try adding more detail about camera angle." Frame iteration as normal, not failure.

---

## Stage 4: ENGAGEMENT

### User Actions
- Generates more videos, experiments
- Discovers features: style presets, aspect ratios, duration, camera motion
- Tries advanced features: image-to-video, extend/loop
- Starts using outputs for real purposes
- Saves favorites, builds library

### Thoughts & Emotions
- "I'm getting the hang of this"
- "I wonder if I can make it do [specific thing]"
- "This one came out great -- I want to share it"
- "I'm running out of free credits..."

### Pain Points
- Poor feature discovery
- Inconsistent quality feels unreliable
- No "more like this" option
- Sharing workflow is clunky (download, re-upload)
- Creative wall after initial experimentation

### Design Opportunities
- **Progressive disclosure**: After 3 generations -> style controls. After 5 -> image-to-video. After 10 -> camera motion.
- **"More like this"**: One button to generate variations of liked result
- **One-tap sharing**: Direct post to TikTok, Instagram, YouTube Shorts
- **Prompt history with performance**: Show which prompts produced best results
- **Inspiration engine**: "Trending prompts" or "Staff picks"

---

## Stage 5: CONVERSION (Paywall) -- Critical Design Challenge

### User Actions
- Hits free tier limit
- Or tries premium feature (higher res, no watermark, longer duration)
- Sees upgrade prompt
- Evaluates pricing vs perceived value
- Upgrades, looks for alternatives, or churns

### Thoughts & Emotions
- "I was just getting into it and now I have to pay" (frustration if abrupt)
- "Is this worth $X/month?"
- "Can I find something free that does the same?"
- If great results: "Worth paying for"
- If mixed: "Not confident enough to pay"

### Pain Points
- Hard paywall at arbitrary moment feels punishing
- Credit pricing is confusing and creates anxiety
- Losing access to already-created work feels like hostage-taking
- No way to earn more free usage

### Design Opportunities
- **Soft paywall with graduated friction**: Don't cut off entirely. Downgrade: lower res, add watermark, longer queue. User experiences the premium difference. (Spotify model)
- **Timing**: Trigger AFTER a "wow moment" (download, share, re-generation signals), not arbitrary count
- **Show what they'll lose**: "Your next video would be 4K without watermark" with preview of clean version
- **Value framing**: "Less than one stock video clip" or "Replace your $50/month stock subscription"
- **Referral credits**: "Invite a friend, get 5 more generations"
- **Keep existing outputs**: NEVER lock previously generated content behind paywall
- **Free premium trial**: One free premium-quality generation to see the difference

---

## Stage 6: RETENTION

### User Actions
- Returns regularly for ongoing needs
- Integrates into workflow
- Upgrades plan as usage grows
- Shares outputs, recommends tool
- Explores new capabilities on release

### Thoughts & Emotions
- "This is part of my toolkit now"
- "I hope they add [feature] soon"
- "Should I still pay for this?"

### Pain Points
- Model updates changing output style without warning break trust
- No completion notifications for longer renders
- Subscription fatigue
- Lack of workflow integrations

### Design Opportunities
- **Weekly digest**: "Your videos got X views. Here's what's new."
- **Model version control**: Let users keep previous version for ongoing projects
- **Push notifications**: "Your video is ready!" with preview
- **Value reinforcement**: "You created 23 videos this month. Estimated $460 saved."
- **API + integrations**: Canva, Notion, Slack, social schedulers
- **Loyalty mechanics**: Long-term subscribers get higher limits, early access
