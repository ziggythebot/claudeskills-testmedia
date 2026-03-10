import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from 'remotion';

const colors = {
  black: '#000000',
  red: '#E31A22',
  white: '#FFFFFF',
  darkRed: '#4A0505',
};

export const SkillShowcase: React.FC = () => {
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

      {/* Hook: 0-4s (120 frames) */}
      <Sequence from={0} durationInFrames={120}>
        <Hook />
      </Sequence>

      {/* Skill 1: 4-9s (150 frames) */}
      <Sequence from={120} durationInFrames={150}>
        <SkillCard
          icon="🚀"
          title="AUTO-DEPLOY"
          description="Pushes code, runs CI/CD, deploys to production"
          bullets={['Build & test', 'Deploy safely', 'Rollback if needed']}
        />
      </Sequence>

      {/* Skill 2: 9-14s (150 frames) */}
      <Sequence from={270} durationInFrames={150}>
        <SkillCard
          icon="🧪"
          title="AUTO-TEST"
          description="Writes tests, runs suites, analyzes coverage"
          bullets={['Unit tests', 'Integration tests', 'E2E tests']}
        />
      </Sequence>

      {/* Skill 3: 14-19s (150 frames) */}
      <Sequence from={420} durationInFrames={150}>
        <SkillCard
          icon="🔧"
          title="AUTO-FIX"
          description="Finds bugs, writes fixes, commits patches"
          bullets={['Debug errors', 'Fix bugs', 'Update docs']}
        />
      </Sequence>

      {/* Skill 4: 19-24s (150 frames) */}
      <Sequence from={570} durationInFrames={150}>
        <SkillCard
          icon="📊"
          title="AUTO-MONITOR"
          description="Tracks metrics, alerts on issues, generates reports"
          bullets={['Performance tracking', 'Error monitoring', 'Daily reports']}
        />
      </Sequence>

      {/* Final CTA: 24-30s (180 frames) */}
      <Sequence from={720} durationInFrames={180}>
        <FinalCTA />
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
          fontSize: 100,
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: colors.white,
          transform: `scale(${scale})`,
          textShadow: `
            4px 4px 0 ${colors.red},
            8px 8px 0 ${colors.darkRed}
          `,
          lineHeight: 0.9,
        }}
      >
        4 SKILLS<br />
        EVERY<br />
        DEV NEEDS
      </div>
    </AbsoluteFill>
  );
};

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, bullets }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({
    frame,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const x = interpolate(slideIn, [0, 1], [1080, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <div
        style={{
          transform: `translateX(${x}px)`,
          background: colors.black,
          border: `6px solid ${colors.red}`,
          padding: 60,
          boxShadow: `12px 12px 0 ${colors.darkRed}`,
          maxWidth: 900,
        }}
      >
        <div style={{ fontSize: 100, marginBottom: 30 }}>{icon}</div>
        <div
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            fontSize: 70,
            textTransform: 'uppercase',
            color: colors.white,
            marginBottom: 30,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 36,
            color: '#CCCCCC',
            marginBottom: 40,
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {bullets.map((bullet, i) => {
            const bulletOpacity = interpolate(frame, [15 + i * 10, 30 + i * 10], [0, 1], {
              extrapolateLeft: 'clamp',
            });

            return (
              <div
                key={i}
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: 32,
                  color: colors.red,
                  opacity: bulletOpacity,
                }}
              >
                {'>'} {bullet}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const FinalCTA: React.FC = () => {
  const frame = useCurrentFrame();
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
        flexDirection: 'column',
        gap: 60,
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 80,
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: colors.white,
          textShadow: `
            4px 4px 0 ${colors.red},
            8px 8px 0 ${colors.darkRed}
          `,
          lineHeight: 1,
        }}
      >
        STOP CODING<br />
        START SHIPPING
      </div>
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
