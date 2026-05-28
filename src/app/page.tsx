import TopNav from '@/components/layout/top-nav';
import Footer from '@/components/layout/footer';
import Hero from '@/components/home/hero';
import FieldNotes from '@/components/home/field-notes';
import VariantDetail from '@/components/home/variant-detail';
import Story from '@/components/home/story';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { VARIANTS } from '@/lib/products/data';

const LAGER = VARIANTS.find((v) => v.id === 'lager')!;
const LOWCARB = VARIANTS.find((v) => v.id === 'lowcarb')!;

export default function Home() {
  return (
    <>
      <TopNav />
      <main id="main-content">
        {/* Hero handles its own entrance animation internally */}
        <Hero />

        <ScrollReveal>
          <FieldNotes />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <VariantDetail variant={LAGER} />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <VariantDetail variant={LOWCARB} reverse />
        </ScrollReveal>

        <ScrollReveal>
          <Story />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
