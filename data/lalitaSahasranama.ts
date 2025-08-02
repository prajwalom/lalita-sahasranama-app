export interface SahasranamaName {
  id: number;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  significance?: string;
  category: 'form' | 'attributes' | 'powers' | 'abode' | 'devotion' | 'cosmic';
}

// Sample structure - you can add your names here
export const lalitaSahasranama: SahasranamaName[] = [
  {
    id: 1,
    sanskrit: "श्री माता",
    transliteration: "Shri Mata",
    meaning: "The Divine Mother",
    significance: "She who is the auspicious mother of all creation",
    category: "form"
  },
  // Add more names here...
];

export const categories = [
  { key: 'all', label: 'All Names' },
  { key: 'form', label: 'Divine Form' },
  { key: 'attributes', label: 'Attributes' },
  { key: 'powers', label: 'Powers' },
  { key: 'abode', label: 'Divine Abode' },
  { key: 'devotion', label: 'Devotion' },
  { key: 'cosmic', label: 'Cosmic Aspects' },
];