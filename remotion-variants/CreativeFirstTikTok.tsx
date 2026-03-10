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

const variant = variantData.variants.find(v => v.id === 'variant-2-creative')!;

const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 200, mass: 0.5 },
  });

  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: 'white',
          transform: `scale(${scale})`,
          opacity,
          textShadow: '4px 4px 20px rgba(0,0,0,0.3)',
        }}>
          {variant.components.headline.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Problem: React.FC = () => {
  const frame = useCurrentFrame();

  const y = interpolate(frame - 90, [0, 30], [100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(frame - 90, [0, 20], [0, 1]);

  return (
    <AbsoluteFill style={{ background: '#1a1a2e' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
        transform: `translateY(${y}px)`,
        opacity,
      }}>
        <div style={{
          fontSize: 48,
          fontWeight: 700,
          color: 'white',
          marginBottom: 40,
          lineHeight: 1.3,
        }}>
          Your website is invisible
        </div>
        <div style={{
          fontSize: 32,
          color: '#a8a8b3',
          maxWidth: 800,
          lineHeight: 1.4,
        }}>
          Beautiful design means nothing if no one sees it
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Solution: React.FC = () => {
  const frame = useCurrentFrame();

  const leftX = interpolate(frame - 240, [0, 30], [-100, 0]);
  const rightX = interpolate(frame - 240, [0, 30], [100, 0]);
  const opacity = interpolate(frame - 240, [0, 25], [0, 1]);

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 56,
          fontWeight: 800,
          color: 'white',
          marginBottom: 50,
          transform: `translateX(${leftX}px)`,
          opacity,
        }}>
          Design + Story + Strategy
        </div>
        <div style={{
          fontSize: 36,
          color: 'rgba(255,255,255,0.95)',
          maxWidth: 900,
          lineHeight: 1.4,
          transform: `translateX(${rightX}px)`,
          opacity,
        }}>
          We create brands that people actually remember and talk about
        </div>
      </div>
    </AbsoluteFill>
  );
};

const Proof: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale1 = spring({
    frame: frame - 450,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  const scale2 = spring({
    frame: frame - 470,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  const scale3 = spring({
    frame: frame - 490,
    fps,
    config: { damping: 200 },
    durationInFrames: 20,
  });

  return (
    <AbsoluteFill style={{ background: '#1a1a2e' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 42,
          fontWeight: 700,
          color: 'white',
          marginBottom: 60,
        }}>
          Real impact
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          width: '100%',
          maxWidth: 800,
        }}>
          <div style={{
            fontSize: 32,
            color: '#fff',
            transform: `scale(${scale1})`,
            padding: 30,
            background: 'rgba(102, 126, 234, 0.2)',
            borderRadius: 20,
          }}>
            📈 +340% website traffic
          </div>
          <div style={{
            fontSize: 32,
            color: '#fff',
            transform: `scale(${scale2})`,
            padding: 30,
            background: 'rgba(102, 126, 234, 0.2)',
            borderRadius: 20,
          }}>
            🎯 Featured in Design Milk
          </div>
          <div style={{
            fontSize: 32,
            color: '#fff',
            transform: `scale(${scale3})`,
            padding: 30,
            background: 'rgba(102, 126, 234, 0.2)',
            borderRadius: 20,
          }}>
            ✨ 12k Instagram reach
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: frame - 750,
    fps,
    config: { damping: 200, mass: 0.5 },
  });

  const buttonScale = spring({
    frame: frame - 780,
    fps,
    config: { damping: 100, mass: 0.3 },
  });

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 52,
          fontWeight: 800,
          color: 'white',
          marginBottom: 50,
          transform: `scale(${scale})`,
        }}>
          Ready to stand out?
        </div>
        <div style={{
          fontSize: 42,
          fontWeight: 700,
          color: 'white',
          background: 'rgba(0,0,0,0.3)',
          padding: '30px 60px',
          borderRadius: 60,
          transform: `scale(${buttonScale})`,
          border: '4px solid white',
        }}>
          bureaubonanza.co.uk
        </div>
        <div style={{
          fontSize: 28,
          color: 'rgba(255,255,255,0.9)',
          marginTop: 40,
        }}>
          📧 Free brand audit
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const CreativeFirstTikTok: React.FC = () => {
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
