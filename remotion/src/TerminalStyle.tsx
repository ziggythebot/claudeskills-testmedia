import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  interpolate,
} from 'remotion';

const colors = {
  terminalBg: '#0A0A0A',
  green: '#00FF41',
  red: '#E31A22',
  white: '#FFFFFF',
};

export const TerminalStyle: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: colors.terminalBg }}>
      {/* Scanlines */}
      <Scanlines />

      {/* Terminal Header */}
      <TerminalHeader />

      {/* Command Sequence: 0-5s (150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <CommandSequence />
      </Sequence>

      {/* Output Display: 5-10s (150 frames) */}
      <Sequence from={150} durationInFrames={150}>
        <OutputDisplay />
      </Sequence>

      {/* Success Message: 10-13s (90 frames) */}
      <Sequence from={300} durationInFrames={90}>
        <SuccessMessage />
      </Sequence>

      {/* CTA: 13-15s (60 frames) */}
      <Sequence from={390} durationInFrames={60}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

const Scanlines: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
      }}
    />
  );
};

const TerminalHeader: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '30px 50px',
        background: '#000',
        borderBottom: `3px solid ${colors.green}`,
        fontFamily: 'Space Mono, monospace',
        fontSize: 28,
        color: colors.green,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span>claude-skills@terminal</span>
      <span>~/autonomous-ai</span>
    </div>
  );
};

const CommandSequence: React.FC = () => {
  const frame = useCurrentFrame();

  const commands = [
    { text: '$ claude deploy app', delay: 0 },
    { text: '$ claude run tests', delay: 40 },
    { text: '$ claude fix bugs', delay: 80 },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '150px 50px',
        flexDirection: 'column',
        gap: 40,
      }}
    >
      {commands.map((cmd, i) => {
        const cmdFrame = frame - cmd.delay;
        const charsToShow = Math.floor(interpolate(cmdFrame, [0, 30], [0, cmd.text.length], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        }));

        if (cmdFrame < 0) return null;

        const showCursor = cmdFrame < 30;

        return (
          <div
            key={i}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 40,
              color: colors.green,
            }}
          >
            {cmd.text.slice(0, charsToShow)}
            {showCursor && <span style={{ opacity: cmdFrame % 20 < 10 ? 1 : 0 }}>▮</span>}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const OutputDisplay: React.FC = () => {
  const frame = useCurrentFrame() - 150;

  const outputs = [
    { text: '✓ Build successful', delay: 0, color: colors.green },
    { text: '✓ Tests passed (47/47)', delay: 30, color: colors.green },
    { text: '✓ 3 bugs fixed', delay: 60, color: colors.green },
    { text: '✓ Deployed to production', delay: 90, color: colors.green },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '150px 50px',
        flexDirection: 'column',
        gap: 35,
      }}
    >
      {outputs.map((output, i) => {
        const opacity = interpolate(frame - output.delay, [0, 15], [0, 1], {
          extrapolateLeft: 'clamp',
        });

        return (
          <div
            key={i}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 38,
              color: output.color,
              opacity,
            }}
          >
            {output.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const SuccessMessage: React.FC = () => {
  const frame = useCurrentFrame() - 300;

  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div style={{ opacity }}>
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 35,
            color: colors.green,
            textAlign: 'center',
            marginBottom: 40,
          }}
        >
          {'>'} ALL TASKS COMPLETED
        </div>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 48,
            color: colors.white,
            textAlign: 'center',
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          While you<br />were sleeping
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CTA: React.FC = () => {
  const frame = useCurrentFrame() - 390;

  const opacity = interpolate(frame, [0, 15], [0, 1]);

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
          fontFamily: 'Space Mono, monospace',
          fontSize: 60,
          fontWeight: 700,
          color: colors.terminalBg,
          background: colors.green,
          padding: '40px 80px',
          border: `4px solid ${colors.green}`,
          boxShadow: `0 0 30px ${colors.green}`,
          textAlign: 'center',
        }}
      >
        claudeskills.ai
      </div>
    </AbsoluteFill>
  );
};
