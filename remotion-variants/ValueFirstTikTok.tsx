import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring } from 'remotion';
import variantData from '../variant-export.json';

const variant = variantData.variants.find(v => v.id === 'variant-1-value')!;

export const ValueFirstTikTok: React.FC = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Hook: 0-3s (0-90 frames @ 30fps) */}
      <Sequence from={0} durationInFrames={90}>
        <Hook />
      </Sequence>
      
      {/* Problem: 3-8s (90-240 frames) */}
      <Sequence from={90} durationInFrames={150}>
        <Problem />
      </Sequence>
      
      {/* Solution: 8-15s (240-450 frames) */}
      <Sequence from={240} durationInFrames={210}>
        <Solution />
      </Sequence>
      
      {/* Proof: 15-25s (450-750 frames) */}
      <Sequence from={450} durationInFrames={300}>
        <Proof />
      </Sequence>
      
      {/* CTA: 25-30s (750-900 frames) */}
      <Sequence from={750} durationInFrames={150}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

function Hook() {
  const frame = useCurrentFrame();
  
  const scale = spring({
    frame,
    fps: 30,
    config: { damping: 200 },
  });
  
  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <div style={{ 
        transform: `scale(${scale})`,
        textAlign: 'center',
        padding: '0 40px',
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 'bold',
          color: '#fff',
          margin: 0,
          lineHeight: 1.2,
        }}>
          We helped this startup<br/>raise £5M
        </h1>
        <p style={{ 
          fontSize: '32px',
          color: '#fff',
          marginTop: '20px',
        }}>
          with one pitch deck.
        </p>
      </div>
    </AbsoluteFill>
  );
}

function Problem() {
  const frame = useCurrentFrame();
  
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
    }}>
      <div style={{ 
        opacity,
        textAlign: 'center',
        padding: '0 40px',
      }}>
        <p style={{ 
          fontSize: '36px', 
          color: '#fff',
          lineHeight: 1.4,
        }}>
          Most design agencies<br/>
          take 3 months and<br/>
          cost £50k
        </p>
        <p style={{ 
          fontSize: '28px',
          color: '#ff4444',
          marginTop: '40px',
        }}>
          Investors lose interest.<br/>
          Funding rounds close.
        </p>
      </div>
    </AbsoluteFill>
  );
}

function Solution() {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
      <div style={{ textAlign: 'center', padding: '0 40px' }}>
        <h2 style={{ 
          fontSize: '40px', 
          fontWeight: 'bold',
          color: variant.components.headline.color,
          margin: '0 0 30px 0',
        }}>
          {variant.components.headline.text}
        </h2>
        <p style={{ 
          fontSize: '24px',
          color: variant.components.subheadline.color,
          lineHeight: 1.5,
        }}>
          Investor-ready design<br/>
          in 3 weeks
        </p>
      </div>
    </AbsoluteFill>
  );
}

function Proof() {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          fontSize: '80px',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
        }}>
          50+
        </div>
        <p style={{ 
          fontSize: '32px',
          color: '#fff',
          marginBottom: '60px',
        }}>
          startups
        </p>
        
        <div style={{ 
          fontSize: '80px',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
        }}>
          £200M+
        </div>
        <p style={{ 
          fontSize: '32px',
          color: '#fff',
        }}>
          raised
        </p>
      </div>
    </AbsoluteFill>
  );
}

function CTA() {
  const frame = useCurrentFrame();
  
  const scale = spring({
    frame: frame - 60,
    fps: 30,
    config: { damping: 200 },
  });
  
  return (
    <AbsoluteFill style={{ 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#000',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          fontSize: '36px',
          color: '#fff',
          marginBottom: '40px',
        }}>
          {variant.components.cta.text}
        </h3>
        
        <div style={{ 
          transform: `scale(${scale})`,
          backgroundColor: '#667eea',
          color: '#fff',
          padding: '20px 60px',
          borderRadius: '50px',
          fontSize: '28px',
          fontWeight: 'bold',
        }}>
          bureaubonanza.com
        </div>
      </div>
    </AbsoluteFill>
  );
}
