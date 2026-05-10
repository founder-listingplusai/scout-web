import type { Metadata, Viewport } from 'next';
import { Abril_Fatface, Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import AgeGate from '@/components/age-gate/age-gate';
import SmoothScroll from '@/components/providers/smooth-scroll';
import SkipLink from '@/components/ui/skip-link';
import CustomCursor from '@/components/ui/custom-cursor';

const abril = Abril_Fatface({ subsets: ['latin'], weight: '400', variable: '--font-abril' });
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://scoutbrewing.com.au'),
  title: {
    default: 'Scout Brewing & Co. — Brewed in Melbourne',
    template: '%s | Scout Brewing & Co.',
  },
  description:
    'Two honest beers, one philosophy. Scout Lager and Low Carb — brewed in Melbourne for long afternoons.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Scout Brewing & Co.',
    title: 'Scout Brewing & Co. — Brewed in Melbourne',
    description:
      'Two honest beers, one philosophy. Scout Lager and Low Carb — brewed in Melbourne for long afternoons.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Scout Brewing & Co.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scout Brewing & Co. — Brewed in Melbourne',
    description: 'Two honest beers, one philosophy. Brewed in Melbourne.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#f1e8cb',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${abril.variable} ${sourceSerif.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-cream text-navy font-sans antialiased">
        <SkipLink />
        <CustomCursor />
        <AgeGate />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
