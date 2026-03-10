import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';
import variantData from '../variant-export.json';

const variant = variantData.variants.find(v => v.id === 'variant-3-speed')!;

const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const opacity = interpolate(frame, [0, 10], [0, 1]);

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 64,
          fontWeight: 900,
          color: '#00ff88',
          transform: `scale(${scale})`,
          opacity,
          textShadow: '0 0 40px rgba(0,255,136,0.6)',
          letterSpacing: '-2px',
        }}>
          {variant.components.headline.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Problem: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = spring({
    frame: frame - 90,
    fps: 30,
    config: { damping: 100, stiffness: 200 },
  });

  const opacity = interpolate(frame - 90, [0, 15], [0, 1]);

  return (
    <AbsoluteFill style={{ background: '#0a0a0a' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
        transform: `scale(${scale})`,
        opacity,
      }}>
        <div style={{
          fontSize: 52,
          fontWeight: 800,
          color: '#ff3366',
          marginBottom: 40,
          textShadow: '0 0 30px rgba(255,51,102,0.5)',
        }}>
          Slow = Dead
        </div>
        <div style={{
          fontSize: 36,
          color: '#fff',
          maxWidth: 800,
          lineHeight: 1.3,
        }}>
          Your competitors ship in days. You're still in meetings.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({
    frame: frame - 240,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const x = interpolate(slideIn, [0, 1], [-1080, 0]);

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
        transform: `translateX(${x}px)`,
      }}>
        <div style={{
          fontSize: 58,
          fontWeight: 900,
          color: '#00ff88',
          marginBottom: 50,
          textShadow: '0 0 40px rgba(0,255,136,0.6)',
        }}>
          48-Hour Turnaround
        </div>
        <div style={{
          fontSize: 38,
          color: '#fff',
          maxWidth: 900,
          lineHeight: 1.3,
        }}>
          Full brand + website in 2 days
        </div>
        <div style={{
          fontSize: 32,
          color: '#aaa',
          marginTop: 30,
        }}>
          No calls. No delays. Just results.
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Proof: React.FC = () => {
  const frame = useCurrentFrame();

  const item1Opacity = interpolate(frame - 450, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
  const item2Opacity = interpolate(frame - 480, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
  const item3Opacity = interpolate(frame - 510, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });
  const item4Opacity = interpolate(frame - 540, [0, 20], [0, 1], { extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill style={{ background: '#0a0a0a' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 44,
          fontWeight: 800,
          color: '#00ff88',
          marginBottom: 60,
          textShadow: '0 0 30px rgba(0,255,136,0.5)',
        }}>
          Real speed
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          width: '100%',
          maxWidth: 900,
          alignItems: 'flex-start',
        }}>
          <div style={{
            fontSize: 34,
            color: '#fff',
            opacity: item1Opacity,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            <span style={{ color: '#00ff88', fontSize: 40 }}>✓</span>
            <span>Day 1: Live site</span>
          </div>
          <div style={{
            fontSize: 34,
            color: '#fff',
            opacity: item2Opacity,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            <span style={{ color: '#00ff88', fontSize: 40 }}>✓</span>
            <span>Day 2: Full brand</span>
          </div>
          <div style={{
            fontSize: 34,
            color: '#fff',
            opacity: item3Opacity,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            <span style={{ color: '#00ff88', fontSize: 40 }}>✓</span>
            <span>Day 3: Already launching</span>
          </div>
          <div style={{
            fontSize: 34,
            color: '#fff',
            opacity: item4Opacity,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}>
            <span style={{ color: '#00ff88', fontSize: 40 }}>✓</span>
            <span>Zero meetings. Zero BS.</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = spring({
    frame: frame - 750,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const scale = interpolate(pulse, [0, 1], [1, 1.05]);

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 54,
          fontWeight: 900,
          color: '#fff',
          marginBottom: 50,
        }}>
          Start tomorrow
        </div>
        <div style={{
          fontSize: 46,
          fontWeight: 800,
          color: '#000',
          background: '#00ff88',
          padding: '35px 70px',
          borderRadius: 20,
          transform: `scale(${scale})`,
          boxShadow: '0 0 60px rgba(0,255,136,0.6)',
        }}>
          bureaubonanza.co.uk
        </div>
        <div style={{
          fontSize: 30,
          color: '#00ff88',
          marginTop: 50,
          fontWeight: 600,
        }}>
          ⚡ 48-hour delivery
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const SpeedFirstTikTok: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Hook: 0-3s (90 frames) */}
      <Sequence from={0} durationInFrames={90}>
        <Hook />
      </Sequence>

      {/* Problem: 3-8s (150 frames) */}
      <Sequence from={90} durationInFrames={150}>
        <Problem />
      </Sequence>

      {/* Solution: 8-15s (210 frames) */}
      <Sequence from={240} durationInFrames={210}>
        <Solution />
      </Sequence>

      {/* Proof: 15-25s (300 frames) */}
      <Sequence from={450} durationInFrames={300}>
        <Proof />
      </Sequence>

      {/* CTA: 25-30s (150 frames) */}
      <Sequence from={750} durationInFrames={150}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
