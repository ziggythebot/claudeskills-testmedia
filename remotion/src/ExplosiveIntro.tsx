import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';

const colors = {
  black: '#000000',
  red: '#E31A22',
  white: '#FFFFFF',
  darkRed: '#4A0505',
};

export const ExplosiveIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.black }}>
      {/* Grid background */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(rgba(227, 26, 34, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(227, 26, 34, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '5vw 5vw',
        }}
      />

      {/* Hook: 0-3s (90 frames) */}
      <Sequence from={0} durationInFrames={90}>
        <Hook />
      </Sequence>

      {/* Main Message: 3-10s (210 frames) */}
      <Sequence from={90} durationInFrames={210}>
        <MainMessage />
      </Sequence>

      {/* Skills Flash: 10-13s (90 frames) */}
      <Sequence from={300} durationInFrames={90}>
        <SkillsFlash />
      </Sequence>

      {/* CTA: 13-15s (60 frames) */}
      <Sequence from={390} durationInFrames={60}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 120,
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: colors.white,
          transform: `scale(${scale})`,
          opacity,
          textShadow: `
            4px 4px 0 ${colors.red},
            8px 8px 0 ${colors.darkRed}
          `,
          lineHeight: 0.9,
        }}
      >
        STOP
        <br />
        CODING
        <br />
        ALONE
      </div>
    </AbsoluteFill>
  );
};

const MainMessage: React.FC = () => {
  const frame = useCurrentFrame() - 90;
  const { fps } = useVideoConfig();

  const slideIn = spring({
    frame,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const x = interpolate(slideIn, [0, 1], [-1080, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
        transform: `translateX(${x}px)`,
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 100,
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: colors.black,
          WebkitTextStroke: `3px ${colors.white}`,
          textShadow: `
            4px 4px 0 ${colors.red},
            8px 8px 0 ${colors.darkRed}
          `,
          lineHeight: 0.9,
          marginBottom: 60,
        }}
      >
        CLAUDE
        <br />
        SKILLS
      </div>

      <div
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 40,
          color: colors.white,
          textAlign: 'center',
          borderLeft: `4px solid ${colors.red}`,
          paddingLeft: 30,
          lineHeight: 1.4,
        }}
      >
        Autonomous AI that
        <br />
        actually works
      </div>
    </AbsoluteFill>
  );
};

const SkillsFlash: React.FC = () => {
  const frame = useCurrentFrame() - 300;

  const skills = [
    { icon: '🤖', name: 'AUTO-DEPLOY', delay: 0 },
    { icon: '🎯', name: 'AUTO-TEST', delay: 10 },
    { icon: '⚡', name: 'AUTO-FIX', delay: 20 },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 40,
        padding: 80,
      }}
    >
      {skills.map((skill, i) => {
        const opacity = interpolate(
          frame - skill.delay,
          [0, 15],
          [0, 1],
          { extrapolateLeft: 'clamp' }
        );

        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              opacity,
              background: colors.black,
              border: `4px solid ${colors.red}`,
              padding: '30px 50px',
              boxShadow: `6px 6px 0 ${colors.darkRed}`,
            }}
          >
            <div style={{ fontSize: 80 }}>{skill.icon}</div>
            <div
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                fontSize: 50,
                color: colors.white,
              }}
            >
              {skill.name}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const CTA: React.FC = () => {
  const frame = useCurrentFrame() - 390;
  const { fps } = useVideoConfig();

  const pulse = spring({
    frame,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const scale = interpolate(pulse, [0, 1], [1, 1.1]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 70,
          fontWeight: 900,
          color: colors.white,
          background: colors.red,
          padding: '40px 80px',
          border: `4px solid ${colors.white}`,
          boxShadow: `8px 8px 0 ${colors.black}`,
          transform: `scale(${scale}) skewX(-8deg)`,
          textAlign: 'center',
        }}
      >
        CLAUDESKILLS.AI
      </div>
    </AbsoluteFill>
  );
};
