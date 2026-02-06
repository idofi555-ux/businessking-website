import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FCB536, #f59e0b)',
          borderRadius: '6px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: 900, color: '#0a0a0f' }}>BK</span>
      </div>
    ),
    { ...size }
  );
}
