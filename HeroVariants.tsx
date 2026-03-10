'use client';

import { useState, useEffect } from 'react';
import variants from './variant-export.json';

type VariantId = 'variant-1-value' | 'variant-2-creative' | 'variant-3-speed';

export default function HeroVariants() {
  const [activeVariant, setActiveVariant] = useState<VariantId>('variant-1-value');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // A/B testing logic - randomly assign variant on first visit
    const stored = localStorage.getItem('hero-variant');
    if (!stored) {
      const variantIds: VariantId[] = [
        'variant-1-value',
        'variant-2-creative', 
        'variant-3-speed'
      ];
      const random = variantIds[Math.floor(Math.random() * variantIds.length)];
      setActiveVariant(random);
      localStorage.setItem('hero-variant', random);
      
      // Track variant view
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'variant_view', {
          variant_id: random,
        });
      }
    } else {
      setActiveVariant(stored as VariantId);
    }
  }, []);

  if (!isClient) {
    // SSR fallback - show first variant
    return <HeroContent variant={variants.variants[0]} />;
  }

  const variant = variants.variants.find(v => v.id === activeVariant) || variants.variants[0];

  return <HeroContent variant={variant} />;
}

function HeroContent({ variant }: { variant: typeof variants.variants[0] }) {
  const { headline, subheadline, cta, secondaryCta } = variant.components;

  const handleCtaClick = (ctaType: 'primary' | 'secondary') => {
    // Track CTA click for A/B test
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        variant_id: variant.id,
        cta_type: ctaType,
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 
          style={{
            fontSize: headline.fontSize,
            fontWeight: headline.fontWeight,
            color: headline.color,
          }}
        >
          {headline.text}
        </h1>
        
        <p 
          style={{
            fontSize: subheadline.fontSize,
            fontWeight: subheadline.fontWeight,
            color: subheadline.color,
            maxWidth: '700px',
            margin: '24px auto',
          }}
        >
          {subheadline.text}
        </p>
        
        <div className="cta-group">
          <a 
            href={cta.href}
            className={`btn btn-${cta.variant}`}
            onClick={() => handleCtaClick('primary')}
          >
            {cta.text}
          </a>
          
          <a 
            href={secondaryCta.href}
            className={`btn btn-${secondaryCta.variant}`}
            onClick={() => handleCtaClick('secondary')}
          >
            {secondaryCta.text}
          </a>
        </div>

        {/* Debug panel (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div style={{ 
            marginTop: '40px', 
            padding: '20px', 
            background: '#f5f5f5', 
            borderRadius: '8px' 
          }}>
            <p><strong>Active Variant:</strong> {variant.name}</p>
            <p><strong>Focus:</strong> {variant.metadata.focus}</p>
            <p><strong>Tone:</strong> {variant.metadata.tone}</p>
            <p><strong>Ideal for:</strong> {variant.metadata.ideal_for}</p>
          </div>
        )}
      </div>
    </section>
  );
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
