import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SITE_NAME } from '../lib/seo';

export const alt = `${SITE_NAME}｜國科會大眾科學教育計畫｜國立臺北教育大學`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const openHuninn = await readFile(join(process.cwd(), 'public/jf-openhuninn-2.1.ttf'));

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 88px',
          background: 'linear-gradient(135deg, #1e6091 0%, #174d76 55%, #0f3a5c 100%)',
          color: '#ffffff',
          fontFamily: 'jf-openhuninn',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: 'rgba(82, 183, 136, 0.35)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -160,
            right: 160,
            width: 360,
            height: 360,
            borderRadius: 9999,
            background: 'rgba(255, 183, 3, 0.22)',
          }}
        />

        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              padding: '12px 28px',
              borderRadius: 9999,
              background: '#ffb703',
              color: '#0f3a5c',
              fontSize: 34,
            }}
          >
            國科會大眾科學教育計畫
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 92, lineHeight: 1.15 }}>未來科技啟航</div>
          <div style={{ display: 'flex', fontSize: 92, lineHeight: 1.15 }}>
            <span style={{ color: '#52b788' }}>AIoT</span>
            <span style={{ marginLeft: 24 }}>推廣科學營</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', fontSize: 40 }}>
          <div style={{ width: 56, height: 6, borderRadius: 9999, background: '#52b788', marginRight: 20 }} />
          國立臺北教育大學
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'jf-openhuninn',
          data: openHuninn,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
