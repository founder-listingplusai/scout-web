export interface Variant {
  id: 'lager' | 'lowcarb';
  number: '01' | '02';
  name: string;
  style: string;
  abv: string;
  ibu: number;
  tagline: string;
  description: string;
  tasting: string[];
  pairs: string[];
  hops: string;
  malt: string;
  yeast: string;
  origin: string;
  packSize: string;
  accent: string;
  bottle: string;
  moody: string;
  notifyEmailSubject: string;
}

export const VARIANTS: Variant[] = [
  {
    id: 'lager',
    number: '01',
    name: 'Lager',
    style: 'Australian Lager',
    abv: '5.0%',
    ibu: 24,
    tagline: 'Crisp. Cold. Classic.',
    description:
      'A no-nonsense Australian lager brewed for long afternoons. Crisp, clean, dangerously drinkable.',
    tasting: ['Bready malt', 'Noble hops', 'Dry finish'],
    pairs: ['Schnitzel', 'Hot chips', 'Sunset'],
    hops: 'Hallertau · Saaz',
    malt: 'Pilsner · Vienna',
    yeast: 'Lager W-34/70',
    origin: 'Brewed in Melbourne',
    packSize: '24 × 330ml',
    accent: 'var(--color-red)',
    bottle: '/products/lager-bottle.png',
    moody: '/products/lager-moody.png',
    notifyEmailSubject: 'Notify me — Lager',
  },
  {
    id: 'lowcarb',
    number: '02',
    name: 'Low Carb',
    style: 'Session Lager',
    abv: '4.0%',
    ibu: 18,
    tagline: 'Light on carbs. Heavy on afternoons.',
    description:
      'Everything you want from a lager with 40% fewer carbs. Sessionable, clean, and built for the second round.',
    tasting: ['Crisp', 'Subtle citrus', 'Ultra clean'],
    pairs: ['Salads', 'Tennis', 'Long lunches'],
    hops: 'Cascade · Galaxy',
    malt: 'Pilsner',
    yeast: 'Lager W-34/70',
    origin: 'Brewed in Melbourne',
    packSize: '24 × 330ml',
    accent: 'var(--color-blue)',
    bottle: '/products/lowcarb-bottle.png',
    moody: '/products/lowcarb-moody.png',
    notifyEmailSubject: 'Notify me — Low Carb',
  },
];
