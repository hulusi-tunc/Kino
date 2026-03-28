# UX Best Practices for AI Generation Tools

---

## 1. Prompt Input Design

**Core Problem**: Most users are not prompt engineers. The blank text box is the biggest friction point.

### Best Practices

1. **Template-based prompt builder** - Structured fields: Subject + Action + Setting + Style + Camera. Shows composed prompt so users learn syntax. Lowers the floor without lowering the ceiling.

2. **Prompt suggestions & autocomplete** - As user types, suggest completions. "A golden retriever..." -> "...running through a field at sunset, cinematic lighting." Teaches patterns implicitly.

3. **Example gallery linked to prompts** - Every showcase video has "Copy this prompt" button. Prompt-to-output pairs are the fastest learning path.

4. **Negative prompts made accessible** - Toggle switches instead of typed negatives: "Avoid: blurry, text, distorted faces" as checkboxes.

5. **Prompt enhancement** - "Enhance my prompt" button using LLM to expand vague prompt into detailed one. Show what was added so users learn. Runway does this effectively.

6. **Visual style references** - Upload reference image or select from style library (cinematic, anime, watercolor) rather than describing style in words.

7. **Prompt history & favorites** - Save, tag, reuse successful prompts.

---

## 2. Loading & Generation States

**Core Problem**: 30s to several minutes is an eternity in UX. Unmanaged wait = tab-switching, anxiety, abandonment.

### Best Practices

1. **Named progress stages** - "Analyzing prompt" (0-10%) -> "Composing scene" (10-30%) -> "Generating frames" (30-80%) -> "Rendering final video" (80-100%). Labeled stages reduce perceived wait by ~40%.

2. **Early preview** - Show thumbnail/first frame within 5-10 seconds. Users can evaluate and cancel early if direction is wrong.

3. **Queue system with notifications** - Multiple generations with completion notifications. Don't force one-at-a-time. Push (mobile) + browser notifications.

4. **Productive waiting** - Show tips, related community creations, or prompt suggestions during generation.

5. **Honest time estimates** - Under-promise, over-deliver. Show range if variable.

6. **Cancel and regenerate** - Allow cancellation. If early preview looks wrong, let them refine without credit cost.

7. **Background generation** - On mobile, allow leaving the app. Push notification on completion.

---

## 3. Paywall UX

**Core Problem**: Converting free users without destroying goodwill.

### Reference Models
- **Midjourney**: ~25 free gens then hard paywall. Works because product quality is undeniable by gen 25.
- **Runway**: Limited free credits, watermarked, lower res. Premium removes limitations.
- **Canva** (gold standard): Premium assets mixed in with crown icon. Users build entire project, only hit paywall at export. "Build then pay" = extremely high conversion.

### Best Practices

1. **Trigger after demonstrated value** - Track satisfaction signals (downloads, shares, time viewing, re-gens). Show paywall after "wow moment," not after generation #3.

2. **Soft paywall with visible degradation** - Free users keep generating with limitations: watermark, 480p/720p, 3s max, longer queue. Creates natural upgrade desire.

3. **Never hold content hostage** - Previously generated content accessible regardless of subscription status. Trust-destroying anti-pattern to lock it.

4. **Value framing** - "This video would cost $200+ from a freelancer" or "Stock alternative: $79/clip." Frame against alternatives, not in absolute terms.

5. **Contextual upgrade prompts** - Not generic "Upgrade now." Show: "Upgrade to remove watermark from THIS video" with clean preview. Specificity converts.

6. **Multiple conversion paths** - Monthly, annual (discounted), pay-per-video, team plans.

7. **Free tier as permanent, not trial** - "Free forever with watermark. Upgrade anytime." Reduces pressure, paradoxically increases conversion.

---

## 4. Onboarding for AI Tools

**Core Problem**: Users need to learn both the interface AND how to communicate with AI.

### Best Practices

1. **First generation in under 60 seconds** - North Star metric. Minimize form fields, skip email verification, defer profile setup.

2. **Guided first prompt, not tutorial** - Pre-built prompt they can modify: "A cat on a rooftop at sunset, Studio Ghibli style." Tap generate, see result, understand instantly.

3. **Show, don't tell** - Replace text instructions with prompt-output pairs. Gallery of "Prompt X -> Result Y" teaches more in 5 seconds than a paragraph.

4. **Progressive complexity** - Session 1: text box + generate. Session 2: style controls. Session 3: advanced features. Duolingo approach.

5. **Set realistic expectations** - Show range of output quality upfront. Frame outputs as "starting points" if appropriate.

6. **Try before sign-up** - Let them enter prompt and see result/preview before account creation. Generates psychological investment.

7. **Contextual help over tutorials** - Skip 5-step welcome tour. Show hints at moment of need: short prompt warning, style suggestion, first-wait encouragement.

---

## 5. Trust Signals

**Core Problem**: Skepticism about quality, consistency, and ethics/privacy.

### Best Practices

1. **Honest public gallery** - Show realistic range, not only best outputs. Community gallery with real results (including imperfect) > polished showcase.

2. **Transparent content policy** - Clear, accessible what can/cannot be generated. AI video = sensitive territory. Don't bury in legal text.

3. **Data privacy commitment** - Prominently: "Your prompts and videos are private. We don't use your content to train models unless you opt in."

4. **Consistent output quality** - Implement seed/consistency controls and quality floors (reject below-threshold outputs before showing).

5. **Social proof at every stage** - Videos generated count, testimonials, brand logos, press mentions on landing page, pricing page, AND paywall.

6. **Transparent pricing, no dark patterns** - No hidden fees, no auto-upgrade, no confusing credits. One-click cancel.

7. **Content provenance** - C2PA/Content Credentials metadata. Signals responsible AI, helps users prove ownership.

8. **Human support accessibility** - Real humans available (even if AI handles most). Signals accountability.

---

## Key Takeaways for Design

1. **Prompt input IS the product** - Invest disproportionately in making it guided, forgiving, educational.

2. **First result quality defines everything** - Stack the deck: smart defaults, proven prompts, auto-enhancement.

3. **Wait time is an opportunity** - Well-designed loading with previews, tips, progress storytelling increases engagement.

4. **Soft paywalls > hard cutoffs** - Let users keep using with visible limitations.

5. **Trust through transparency** - Real outputs, clear data usage, consistent quality.

6. **Simplicity at surface, power underneath** - "Type and generate" for beginners, deep controls for power users. Progressive disclosure is the key.
