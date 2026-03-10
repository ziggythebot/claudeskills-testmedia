import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  random,
} from 'remotion';

const colors = {
  black: '#000000',
  red: '#E31A22',
  white: '#FFFFFF',
  darkRed: '#4A0505',
};

export const GlitchReveal: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.black }}>
      {/* Static noise background */}
      <NoiseBackground />

      {/* Glitch Intro: 0-3s (90 frames) */}
      <Sequence from={0} durationInFrames={90}>
        <GlitchIntro />
      </Sequence>

      {/* Problem Statement: 3-7s (120 frames) */}
      <Sequence from={90} durationInFrames={120}>
        <ProblemStatement />
      </Sequence>

      {/* Feature Glitch: 7-12s (150 frames) */}
      <Sequence from={210} durationInFrames={150}>
        <FeatureGlitch />
      </Sequence>

      {/* CTA: 12-15s (90 frames) */}
      <Sequence from={360} durationInFrames={90}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

const NoiseBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = 0.05 + Math.sin(frame * 0.1) * 0.02;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=)',
        backgroundSize: '200px 200px',
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
};

const GlitchIntro: React.FC = () => {
  const frame = useCurrentFrame();

  const glitchAmount = frame < 60 ? interpolate(frame, [0, 60], [20, 0]) : 0;
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 120,
          fontWeight: 900,
          textTransform: 'uppercase',
          color: colors.white,
          textShadow: `
            ${glitchAmount * random(frame)}px 0 ${colors.red},
            ${-glitchAmount * random(frame + 1)}px 0 cyan
          `,
          lineHeight: 0.85,
          textAlign: 'center',
        }}
      >
        STOP<br />WATCHING<br />AI CODE
      </div>
    </AbsoluteFill>
  );
};

const ProblemStatement: React.FC = () => {
  const frame = useCurrentFrame() - 90;

  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      <div style={{ opacity }}>
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 40,
            color: colors.red,
            marginBottom: 40,
            letterSpacing: '0.2em',
          }}
        >
          {'>'} REALITY_CHECK
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 48,
            color: colors.white,
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          You babysit AI.<br />
          Copy/paste code.<br />
          Hope it works.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const FeatureGlitch: React.FC = () => {
  const frame = useCurrentFrame() - 210;

  const features = [
    { text: 'AUTONOMOUS_DEPLOY', delay: 0 },
    { text: 'AUTONOMOUS_TEST', delay: 30 },
    { text: 'AUTONOMOUS_FIX', delay: 60 },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 100,
        flexDirection: 'column',
        gap: 50,
      }}
    >
      {features.map((feature, i) => {
        const featureFrame = frame - feature.delay;
        const opacity = interpolate(featureFrame, [0, 15], [0, 1], {
          extrapolateLeft: 'clamp',
        });

        const glitch = featureFrame < 10 ? random(`glitch-${i}`) * 5 : 0;

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateX(${glitch}px)`,
            }}
          >
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: 50,
                color: colors.red,
                letterSpacing: '0.1em',
                textShadow: `2px 2px 0 ${colors.darkRed}`,
              }}
            >
              {'>'} {feature.text}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const CTA: React.FC = () => {
  const frame = useCurrentFrame() - 360;

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const glitch = frame % 20 < 2 ? random(`cta-${frame}`) * 3 : 0;

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 70,
          fontWeight: 900,
          color: colors.black,
          background: colors.white,
          padding: '50px 80px',
          border: `6px solid ${colors.red}`,
          transform: `translateX(${glitch}px)`,
          textAlign: 'center',
        }}
      >
        CLAUDESKILLS.AI
      </div>
    </AbsoluteFill>
  );
};
