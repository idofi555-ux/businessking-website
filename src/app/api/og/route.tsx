import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'The King of Connections';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          position: 'relative',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(252,181,54,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Border */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
            border: '1px solid rgba(252,181,54,0.2)',
            borderRadius: '20px',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #FCB536 0%, #FFD966 50%, #E6A020 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 900,
                color: '#0a0a0f',
              }}
            >
              BK
            </span>
          </div>

          {/* Brand */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.05em',
              marginBottom: '16px',
              display: 'flex',
            }}
          >
            BUSINESS{' '}
            <span style={{ color: '#FCB536', marginLeft: '12px' }}>KING</span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#9ca3af',
              display: 'flex',
            }}
          >
            {title}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FCB536',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginTop: '40px',
              opacity: 0.7,
              display: 'flex',
            }}
          >
            businesskingonline.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
