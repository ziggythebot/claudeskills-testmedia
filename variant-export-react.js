import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const customStyles = {
  root: {
    '--c-black': '#000000',
    '--c-red': '#E31A22',
    '--c-white': '#FFFFFF',
    '--c-grid': 'rgba(227, 26, 34, 0.15)',
    '--c-dark-red': '#4A0505',
  },
  body: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    backgroundImage: `
      linear-gradient(rgba(227, 26, 34, 0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(227, 26, 34, 0.15) 1px, transparent 1px)
    `,
    backgroundSize: '5vw 5vw',
    backgroundPosition: 'center center',
  },
  sysMeta: {
    position: 'fixed',
    fontFamily: "'Space Mono', 'Courier New', monospace",
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#E31A22',
    pointerEvents: 'none',
    zIndex: 100,
  },
  sysMetaTopLeft: {
    top: '1.5vw',
    left: '1.5vw',
  },
  sysMetaTopRight: {
    top: '1.5vw',
    right: '1.5vw',
    textAlign: 'right',
  },
  sysMetaBottomLeft: {
    bottom: '1.5vw',
    left: '1.5vw',
  },
  sysMetaBottomRight: {
    bottom: '1.5vw',
    right: '1.5vw',
    textAlign: 'right',
  },
  sysMetaSpan: {
    display: 'block',
    marginBottom: '2px',
  },
  heroContainer: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '5vw',
    position: 'relative',
    gap: '4vw',
    alignItems: 'center',
  },
  contentZone: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    zIndex: 10,
  },
  eyebrow: {
    fontFamily: "'Space Mono', 'Courier New', monospace",
    color: '#E31A22',
    fontSize: '0.875rem',
    letterSpacing: '0.2em',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  eyebrowBefore: {
    content: "''",
    width: '20px',
    height: '4px',
    background: '#E31A22',
    display: 'inline-block',
    flexShrink: 0,
  },
  h1: {
    fontFamily: "'Impact', 'Inter Black', 'Arial Black', sans-serif",
    fontSize: 'clamp(4rem, 8vw, 9rem)',
    lineHeight: 0.85,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    margin: 0,
    color: '#FFFFFF',
    textShadow: '4px 4px 0 #E31A22, 8px 8px 0 #4A0505',
  },
  h1Line1: {
    display: 'block',
  },
  h1Line2: {
    display: 'block',
    color: '#000000',
    WebkitTextStroke: '3px #FFFFFF',
    textShadow: '4px 4px 0 #E31A22, 8px 8px 0 #4A0505',
    marginLeft: '2vw',
  },
  subhead: {
    fontSize: 'clamp(1rem, 1.2vw, 1.5rem)',
    lineHeight: 1.5,
    maxWidth: '80%',
    color: '#CCCCCC',
    fontWeight: 500,
    borderLeft: '4px solid #E31A22',
    paddingLeft: '1.5rem',
    marginTop: '1rem',
  },
  actionGroup: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },
  btn: {
    fontFamily: "'Impact', 'Inter Black', 'Arial Black', sans-serif",
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '1rem 2rem',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.1s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'skewX(-8deg)',
  },
  btnPrimary: {
    backgroundColor: '#E31A22',
    color: '#FFFFFF',
    border: '4px solid #FFFFFF',
    boxShadow: '6px 6px 0 #000000, 10px 10px 0 #FFFFFF',
  },
  btnPrimaryHover: {
    backgroundColor: '#FFFFFF',
    color: '#E31A22',
    borderColor: '#E31A22',
  },
  btnSecondary: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    border: '4px solid #E31A22',
    boxShadow: '4px 4px 0 #E31A22',
  },
  btnSecondaryHover: {
    backgroundColor: '#E31A22',
  },
  btnSpan: {
    transform: 'skewX(8deg)',
    display: 'block',
  },
  graphicZone: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1000px',
  },
  moduleConstruct: {
    position: 'relative',
    width: 'clamp(250px, 30vw, 500px)',
    aspectRatio: '1',
    transformStyle: 'preserve-3d',
  },
  moduleLayerRed: {
    position: 'absolute',
    inset: 0,
    backgroundColor: '#E31A22',
    clipPath: 'polygon(10% 0, 100% 8%, 92% 100%, 0 92%)',
    boxShadow: '-15px 15px 0 #4A0505',
    border: '2px solid #000',
  },
  moduleLayerWhite: {
    position: 'absolute',
    inset: '8%',
    backgroundColor: '#FFFFFF',
    clipPath: 'polygon(8% 0, 100% 5%, 95% 100%, 0 95%)',
  },
  moduleLayerInnerRed: {
    position: 'absolute',
    inset: '15%',
    backgroundColor: '#E31A22',
    clipPath: 'polygon(0 0, 60% 10%, 100% 50%, 80% 100%, 10% 90%)',
  },
  moduleLayerCore: {
    position: 'absolute',
    inset: '22%',
    backgroundColor: '#000000',
    clipPath: 'polygon(0 0, 60% 10%, 100% 50%, 80% 100%, 10% 90%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '20px 20px',
  },
  moduleCoreAccent: {
    width: '20px',
    height: '20px',
    backgroundColor: '#FFFFFF',
    transform: 'rotateZ(45deg)',
  },
  crosshair: {
    position: 'absolute',
    width: '30px',
    height: '30px',
    pointerEvents: 'none',
  },
  ch1: {
    top: '10%',
    left: '10%',
  },
  ch2: {
    bottom: '10%',
    right: '10%',
  },
};

const BlinkText = ({ children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ opacity: visible ? 1 : 0, transition: 'none' }}>
      {children}
    </span>
  );
};

const Crosshair = ({ style }) => (
  <div style={{ ...customStyles.crosshair, ...style }}>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: '1px',
      background: '#E31A22',
      transform: 'translateY(-50%)',
    }} />
    <div style={{
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '1px',
      background: '#E31A22',
      transform: 'translateX(-50%)',
    }} />
  </div>
);

const PrimaryButton = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const style = {
    ...customStyles.btn,
    ...customStyles.btnPrimary,
    ...(hovered ? customStyles.btnPrimaryHover : {}),
    ...(active ? {
      transform: 'skewX(-8deg) translate(4px, 4px)',
      boxShadow: '2px 2px 0 #000000, 6px 6px 0 #FFFFFF',
    } : {}),
  };

  return (
    <a
      href="#"
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={(e) => { e.preventDefault(); if (onClick) onClick(); }}
    >
      <span style={customStyles.btnSpan}>{children}</span>
    </a>
  );
};

const SecondaryButton = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const style = {
    ...customStyles.btn,
    ...customStyles.btnSecondary,
    ...(hovered ? customStyles.btnSecondaryHover : {}),
    ...(active ? {
      transform: 'skewX(-8deg) translate(2px, 2px)',
      boxShadow: '2px 2px 0 #E31A22',
    } : {}),
  };

  return (
    <a
      href="#"
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={(e) => { e.preventDefault(); if (onClick) onClick(); }}
    >
      <span style={customStyles.btnSpan}>{children}</span>
    </a>
  );
};

const ModuleConstruct = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 6000;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) % duration;
      const progress = elapsed / duration;
      const t = Math.sin(progress * 2 * Math.PI);
      setTranslateY(t * -20);
      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const constructStyle = {
    ...customStyles.moduleConstruct,
    transform: `rotateZ(-6deg) translateY(${translateY}px)`,
  };

  return (
    <div style={constructStyle}>
      <div style={customStyles.moduleLayerRed} />
      <div style={customStyles.moduleLayerWhite} />
      <div style={customStyles.moduleLayerInnerRed} />
      <div style={customStyles.moduleLayerCore}>
        <div style={customStyles.moduleCoreAccent} />
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroStyle = isWideScreen
    ? customStyles.heroContainer
    : {
        ...customStyles.heroContainer,
        gridTemplateColumns: '1fr',
        gap: '6vw',
        textAlign: 'center',
      };

  const contentStyle = isWideScreen
    ? customStyles.contentZone
    : {
        ...customStyles.contentZone,
        alignItems: 'center',
      };

  const eyebrowStyle = isWideScreen
    ? customStyles.eyebrow
    : { ...customStyles.eyebrow, justifyContent: 'center' };

  const h1Line2Style = isWideScreen
    ? customStyles.h1Line2
    : { ...customStyles.h1Line2, marginLeft: 0 };

  const subheadStyle = isWideScreen
    ? customStyles.subhead
    : {
        ...customStyles.subhead,
        borderLeft: 'none',
        paddingLeft: 0,
        borderTop: '4px solid #E31A22',
        paddingTop: '1rem',
      };

  const actionStyle = isWideScreen
    ? customStyles.actionGroup
    : { ...customStyles.actionGroup, justifyContent: 'center' };

  const graphicZoneStyle = isWideScreen
    ? { ...customStyles.graphicZone }
    : { ...customStyles.graphicZone, gridRow: 1, minHeight: '40vh' };

  return (
    <main style={heroStyle}>
      <section style={contentStyle}>
        <div>
          <div style={eyebrowStyle}>
            <span style={customStyles.eyebrowBefore} />
            MODULAR INTELLIGENCE
          </div>
          <h1 style={customStyles.h1}>
            <span style={customStyles.h1Line1}>Claude</span>
            <span style={h1Line2Style}>Skills</span>
          </h1>
          <p style={subheadStyle}>
            Equip, configure, and deploy specialized capabilities. A highly structured framework to extend reasoning and execution.
          </p>
        </div>

        <div style={actionStyle}>
          <PrimaryButton>Initialize Skills</PrimaryButton>
          <SecondaryButton>System Docs</SecondaryButton>
        </div>
      </section>

      <section style={graphicZoneStyle}>
        <Crosshair style={customStyles.ch1} />
        <Crosshair style={customStyles.ch2} />
        <ModuleConstruct />
      </section>
    </main>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
      }
      html, body, #root {
        min-height: 100vh;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <div style={customStyles.body}>
        {/* System Meta - Top Left */}
        <div style={{ ...customStyles.sysMeta, ...customStyles.sysMetaTopLeft }}>
          <span style={customStyles.sysMetaSpan}>SYS.FRAMEWORK // V.4.0.2</span>
          <span style={customStyles.sysMetaSpan}>AUTH: REQUIRED</span>
        </div>

        {/* System Meta - Top Right */}
        <div style={{ ...customStyles.sysMeta, ...customStyles.sysMetaTopRight }}>
          <span style={customStyles.sysMetaSpan}>
            LATENCY: <BlinkText>12ms</BlinkText>
          </span>
          <span style={customStyles.sysMetaSpan}>NODE: PRIME_ALPHA</span>
        </div>

        {/* System Meta - Bottom Left */}
        <div style={{ ...customStyles.sysMeta, ...customStyles.sysMetaBottomLeft }}>
          <span style={customStyles.sysMetaSpan}>[ ENGAGE PROTOCOL ]</span>
          <span style={customStyles.sysMetaSpan}>MEM: ALLOCATED</span>
        </div>

        {/* System Meta - Bottom Right */}
        <div style={{ ...customStyles.sysMeta, ...customStyles.sysMetaBottomRight }}>
          <span style={customStyles.sysMetaSpan}>COORD: 34.0522° N, 118.2437° W</span>
          <span style={customStyles.sysMetaSpan}>STATUS: ONLINE</span>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;