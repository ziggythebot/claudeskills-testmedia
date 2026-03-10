export default function Hero() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: '700',
        color: 'white',
        marginBottom: '20px',
        maxWidth: '800px'
      }}>
        Master Claude Skills
      </h1>

      <p style={{
        fontSize: '24px',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: '40px',
        maxWidth: '600px'
      }}>
        Learn how to build autonomous AI agents
      </p>

      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button style={{
          fontSize: '18px',
          fontWeight: '600',
          padding: '16px 32px',
          borderRadius: '8px',
          border: 'none',
          background: 'white',
          color: '#667eea',
          cursor: 'pointer'
        }}>
          Watch Tutorial
        </button>

        <button style={{
          fontSize: '18px',
          fontWeight: '600',
          padding: '16px 32px',
          borderRadius: '8px',
          border: '2px solid white',
          background: 'transparent',
          color: 'white',
          cursor: 'pointer'
        }}>
          Browse Skills
        </button>
      </div>
    </div>
  )
}
