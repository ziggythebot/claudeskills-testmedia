# TikTok Scripts - Hero Variant Testing

## Variant 1: Value-First

**Hook (0-3s):**
"We helped this startup raise £5M with one pitch deck."

**Problem (3-8s):**
"Most design agencies take 3 months and cost £50k. Investors lose interest. Funding rounds close."

**Solution (8-15s):**
"Bureau Bonanza delivers investor-ready design in 3 weeks. Pitch decks. Brand identities. Product design."

**Proof (15-25s):**
"50+ startups. £200M+ raised. One design agency."

**CTA (25-30s):**
"See our work → bureaubonanza.com"

**Visual Style:**
- Data overlays (£200M+, 50+ startups)
- Before/after pitch deck slides
- Client testimonial clips
- Professional, clean aesthetic

---

## Variant 2: Creative-First

**Hook (0-3s):**
"This is not another boring brand identity."

**Problem (3-8s):**
"Your competitors look the same. Same colors. Same fonts. Same forgettable designs."

**Solution (8-15s):**
"Bureau Bonanza creates bold visual identities that make people stop scrolling."

**Proof (15-25s):**
[Montage of striking portfolio work - logos, packaging, websites morphing/transitioning]

**CTA (25-30s):**
"Let's create together → bureaubonanza.com"

**Visual Style:**
- High-energy transitions
- Portfolio showcase
- Vibrant colors
- Motion graphics
- Artistic, bold aesthetic

---

## Variant 3: Speed-First

**Hook (0-3s):**
"Your product launch is in 4 weeks. You need design... now."

**Problem (3-8s):**
"Traditional agencies say 3-6 months. Freelancers ghost you. DIY looks DIY."

**Solution (8-15s):**
"Bureau Bonanza: Launch-ready design in 3 weeks. No compromises. No delays."

**Proof (15-25s):**
[Timeline visualization - Week 1: Kickoff, Week 2: Revisions, Week 3: Launch]
"From brief to launch. Every time."

**CTA (25-30s):**
"Start your project → bureaubonanza.com"

**Visual Style:**
- Fast-paced editing
- Countdown timer overlays
- Progress bars
- Urgency-driven visuals
- Clean, efficient aesthetic

---

## A/B Testing Strategy

### Test Variables:
- **Hook**: Which grabs attention fastest?
- **Problem framing**: ROI vs creativity vs speed
- **Visual style**: Professional vs artistic vs urgent
- **CTA**: Which drives more clicks?

### Metrics to Track:
- **View duration**: Do people watch to the end?
- **Click-through rate**: Do they visit the website?
- **Engagement**: Likes, comments, shares
- **Conversion**: Do they book a call?

### Distribution:
- Post all 3 variants
- Tag with #designagency #startupdesign #branding
- Post at different times (morning, afternoon, evening)
- Monitor which performs best
- Double down on winner

---

## Remotion Template Structure

Each variant gets its own Remotion composition:

```typescript
// ValueFirstTikTok.tsx
export const ValueFirstTikTok: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={90}>
        <Hook text="We helped this startup raise £5M..." />
      </Sequence>
      <Sequence from={90} durationInFrames={150}>
        <Problem text="Most agencies take 3 months..." />
      </Sequence>
      {/* etc */}
    </AbsoluteFill>
  );
};
```

All three compositions share:
- Same aspect ratio (9:16)
- Same duration (30s)
- Same brand colors
- Different copy, pacing, and visual style
