# Variant → Website → TikTok Pipeline

Complete demonstration of how design variants flow from Variant.com through website implementation to TikTok video content.

## Pipeline Overview

```
Variant.com Export (JSON)
    ↓
Website Implementation (Next.js + A/B Testing)
    ↓
TikTok Scripts (Hook/Problem/Solution/Proof/CTA)
    ↓
Remotion Video Compositions (30s, 9:16 format)
```

## Files

### 1. Variant Export (`variant-export.json`)

Three hero section variants for Bureau Bonanza:
- **variant-1-value**: ROI-focused, professional
- **variant-2-creative**: Story and brand-focused, bold
- **variant-3-speed**: Urgency-driven, high-contrast

Each variant includes:
- Component properties (headline, subheadline, CTAs)
- Visual styling (fonts, colors, weights)
- Metadata (focus, tone, target audience)

### 2. Website Component (`HeroVariants.tsx`)

Next.js client component with:
- **A/B Testing**: Random variant assignment on first visit
- **localStorage**: Persistent variant selection
- **Google Analytics**: Event tracking for variant views and CTA clicks
- **SSR-safe**: Fallback to first variant during server render

Usage:
```tsx
import { HeroVariants } from '@/components/HeroVariants'

export default function Home() {
  return <HeroVariants />
}
```

### 3. TikTok Scripts (`tiktok-scripts.md`)

30-second scripts for each variant following structure:
- **Hook (0-3s)**: Grab attention
- **Problem (3-8s)**: Identify pain point
- **Solution (8-15s)**: Present offering
- **Proof (15-25s)**: Build credibility
- **CTA (25-30s)**: Drive action

Each script includes:
- Voiceover copy
- Visual style guidelines
- On-screen text suggestions
- A/B testing metrics to track

### 4. Remotion Compositions (`remotion-variants/`)

Three 30-second TikTok video templates:

#### ValueFirstTikTok.tsx
- Clean, professional aesthetic
- Blue gradient backgrounds
- Stats and metrics featured prominently
- Smooth spring animations

#### CreativeFirstTikTok.tsx
- Bold purple gradients
- Story-driven visuals
- "Design + Story + Strategy" messaging
- Featured in Design Milk proof point

#### SpeedFirstTikTok.tsx
- High-contrast black with neon green (#00ff88)
- Aggressive, urgent tone
- "48-Hour Turnaround" positioning
- Fast-paced animations

## Remotion Setup

### Initialize Remotion Project

```bash
cd /Users/ziggy/variant-to-tiktok-test
npx create-video@latest
```

Options:
- Template: **Blank**
- TypeScript: **Yes**
- Package manager: **npm**

### Configure Compositions

Add to `src/Root.tsx`:

```tsx
import { Composition } from 'remotion';
import { ValueFirstTikTok } from './remotion-variants/ValueFirstTikTok';
import { CreativeFirstTikTok } from './remotion-variants/CreativeFirstTikTok';
import { SpeedFirstTikTok } from './remotion-variants/SpeedFirstTikTok';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ValueFirst"
        component={ValueFirstTikTok}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CreativeFirst"
        component={CreativeFirstTikTok}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="SpeedFirst"
        component={SpeedFirstTikTok}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
```

### Preview

```bash
npm start
```

Open http://localhost:3000

### Render Videos

```bash
# Render Value-First variant
npm run build && npx remotion render ValueFirst value-first.mp4

# Render Creative-First variant
npm run build && npx remotion render CreativeFirst creative-first.mp4

# Render Speed-First variant
npm run build && npx remotion render SpeedFirst speed-first.mp4
```

## A/B Testing Strategy

### Website Testing
Track these metrics per variant:
- Variant view events
- CTA click-through rate
- Time on page
- Bounce rate
- Form submissions

### TikTok Testing
Track these metrics per video:
- View completion rate
- Average watch time
- Link clicks (if using link sticker)
- Comments mentioning specific benefits
- Shares

### Correlation Analysis
Compare website variant performance with corresponding TikTok video performance to identify:
- Which messaging resonates across channels
- Where messaging works on one platform but not another
- Opportunities to align or diverge positioning

## Design System Integration

This pipeline demonstrates how to use Variant.com exports programmatically:

1. **Export from Variant**: Use Variant's JSON export for components
2. **Parse in Code**: Read variant properties into React components
3. **Dynamic Rendering**: Use variant data to drive both web and video content
4. **Consistent Messaging**: Same copy across website and TikTok
5. **Scalable Testing**: Easy to add new variants without rebuilding pipeline

## Next Steps

- [ ] Set up actual Remotion project and render test videos
- [ ] Add real Bureau Bonanza assets (logo, screenshots, metrics)
- [ ] Record voiceovers for TikTok scripts
- [ ] Set up GA4 custom events for variant tracking
- [ ] Deploy Next.js site with HeroVariants component
- [ ] Test actual variant assignments and localStorage persistence
- [ ] Run 2-week A/B test with 33% traffic split
- [ ] Analyze results and iterate on winning variant

## Technical Notes

- **Next.js Client Component**: Required for `useEffect` and `localStorage` access
- **SSR Handling**: Component returns first variant during SSR to avoid hydration mismatch
- **Google Analytics**: Uses `window.gtag` directly (assumes GA4 installed via tag in `_app.tsx` or layout)
- **Remotion Frame Timing**: 30fps × 30s = 900 frames total
- **Sequence Organization**: Each composition has 5 distinct sequences (Hook/Problem/Solution/Proof/CTA)
- **Animation Performance**: Using `spring` and `interpolate` from Remotion for smooth, production-ready animations

## Real-World Usage

To use this pipeline for a real project:

1. Export actual components from Variant.com as JSON
2. Build Next.js component consuming that JSON structure
3. Write TikTok scripts based on variant messaging
4. Build Remotion compositions using variant data
5. Render videos and upload to TikTok
6. Track performance across both channels
7. Iterate on winning variants

The key insight: **Variant data drives everything**, ensuring consistency from design system through implementation to marketing content

