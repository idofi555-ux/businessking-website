import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Business King — The King of Connections';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #111118 50%, #1a1a24 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'linear-gradient(135deg, #FCB536, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#0a0a0f' }}>BK</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: 'white' }}>BUSINESS <span style={{ color: '#FCB536' }}>KING</span></span>
          </div>
        </div>
        <div style={{ fontSize: '56px', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
          The King of Connections
        </div>
        <div style={{ fontSize: '24px', color: '#9ca3af', marginTop: '16px', lineHeight: 1.5 }}>
          Premier digital marketing agency — SEO, PPC, Affiliate Marketing, Strategic Consulting
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #FCB536, #f59e0b, transparent)',
            borderRadius: '2px',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
