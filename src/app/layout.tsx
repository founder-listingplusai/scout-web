import { Abril_Fatface, Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import AgeGate from '@/components/age-gate/age-gate';
import SmoothScroll from '@/components/providers/smooth-scroll';

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

export const metadata = {
  title: 'Scout Brewing & Co.',
  description: 'A no-nonsense Australian lager. Brewed in Melbourne.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${abril.variable} ${sourceSerif.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-cream text-navy font-sans antialiased">
        <AgeGate />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
