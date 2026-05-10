import TopNav from '@/components/layout/top-nav';
import Footer from '@/components/layout/footer';
import Hero from '@/components/home/hero';
import FieldNotes from '@/components/home/field-notes';
import VariantDetail from '@/components/home/variant-detail';
import Story from '@/components/home/story';
import NotifyMe from '@/components/home/notify-me';
import { VARIANTS } from '@/lib/products/data';

const LAGER = VARIANTS.find((v) => v.id === 'lager')!;
const LOWCARB = VARIANTS.find((v) => v.id === 'lowcarb')!;

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <FieldNotes />
        <VariantDetail variant={LAGER} />
        <VariantDetail variant={LOWCARB} reverse />
        <Story />
        <NotifyMe />
      </main>
      <Footer />
    </>
  );
}
