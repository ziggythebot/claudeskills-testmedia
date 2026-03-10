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
};

export const MinimalBrutalist: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.white }}>
      {/* Diagonal split */}
      <Sequence from={0} durationInFrames={450}>
        <DiagonalSplit />
      </Sequence>

      {/* Opening: 0-4s (120 frames) */}
      <Sequence from={0} durationInFrames={120}>
        <Opening />
      </Sequence>

      {/* Problem: 4-8s (120 frames) */}
      <Sequence from={120} durationInFrames={120}>
        <Problem />
      </Sequence>

      {/* Solution: 8-12s (120 frames) */}
      <Sequence from={240} durationInFrames={120}>
        <Solution />
      </Sequence>

      {/* CTA: 12-15s (90 frames) */}
      <Sequence from={360} durationInFrames={90}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

const DiagonalSplit: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: colors.red,
        clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 60%)',
      }}
    />
  );
};

const Opening: React.FC = () => {
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
          fontSize: 140,
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          color: colors.black,
          transform: `scale(${scale})`,
          lineHeight: 0.85,
        }}
      >
        AI<br />THAT<br />SHIPS
      </div>
    </AbsoluteFill>
  );
};

const Problem: React.FC = () => {
  const frame = useCurrentFrame() - 120;

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const y = interpolate(frame, [0, 20], [50, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
        }}
      >
        <div
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            fontSize: 60,
            color: colors.red,
            marginBottom: 40,
            textTransform: 'uppercase',
          }}
        >
          THE PROBLEM
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 50,
            color: colors.black,
            lineHeight: 1.3,
            fontWeight: 600,
          }}
        >
          Most AI just talks.<br />
          You still do the work.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Solution: React.FC = () => {
  const frame = useCurrentFrame() - 240;

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const x = interpolate(frame, [0, 30], [100, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateX(${x}px)`,
        }}
      >
        <div
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            fontSize: 60,
            color: colors.red,
            marginBottom: 40,
            textTransform: 'uppercase',
          }}
        >
          CLAUDE SKILLS
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 45,
            color: colors.black,
            lineHeight: 1.4,
            fontWeight: 500,
          }}
        >
          • Deploys your code<br />
          • Runs your tests<br />
          • Fixes your bugs<br />
          • While you sleep
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CTA: React.FC = () => {
  const frame = useCurrentFrame() - 360;
  const { fps } = useVideoConfig();

  const pulse = spring({
    frame,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const scale = interpolate(pulse, [0, 1], [1, 1.05]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'Impact, Arial Black, sans-serif',
          fontSize: 80,
          fontWeight: 900,
          color: colors.white,
          background: colors.black,
          padding: '50px 100px',
          transform: `scale(${scale})`,
          textAlign: 'center',
        }}
      >
        CLAUDESKILLS.AI
      </div>
    </AbsoluteFill>
  );
};
