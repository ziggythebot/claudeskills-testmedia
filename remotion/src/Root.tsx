import { Composition } from 'remotion';
import { ExplosiveIntro } from './ExplosiveIntro';
import { MinimalBrutalist } from './MinimalBrutalist';
import { GlitchReveal } from './GlitchReveal';
import { Terminal Style } from './TerminalStyle';
import { SkillShowcase } from './SkillShowcase';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Variant 1: Explosive Intro (15s) */}
      <Composition
        id="ExplosiveIntro"
        component={ExplosiveIntro}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Variant 2: Minimal Brutalist (15s) */}
      <Composition
        id="MinimalBrutalist"
        component={MinimalBrutalist}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Variant 3: Glitch Reveal (15s) */}
      <Composition
        id="GlitchReveal"
        component={GlitchReveal}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Variant 4: Terminal Style (15s) */}
      <Composition
        id="TerminalStyle"
        component={TerminalStyle}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Variant 5: Skill Showcase (30s) */}
      <Composition
        id="SkillShowcase"
        component={SkillShowcase}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
