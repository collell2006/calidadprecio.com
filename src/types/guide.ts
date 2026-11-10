export interface StoreOffer {
  name: string; // 'Amazon', 'PcComponentes', 'MediaMarkt', 'Cecotec', etc.
  price: string; // '379,00 €'
  url: string; // Enlace de afiliado
  highlight?: boolean;
}

export interface ProductItem {
  id: string; // ancla HTML, ej. 'balay-3ts976ba'
  rankNumber: number;
  badge: string; // '🏆 Rey Calidad-Precio', '🥈 Opción Económica (<300€)'
  badgeColor?: 'emerald' | 'amber' | 'blue' | 'purple';
  score: number; // 9.7
  name: string;
  brand: string;
  image: string;
  specs: string[]; // ['9 kg', '1400 rpm', 'Motor Inverter', 'Clase A']
  whyBestValue: string; // El argumento de por qué vale la pena
  targetUser: string; // A quién se lo recomendamos
  pros: string[];
  cons: string[];
  offers: StoreOffer[];
}

export interface QuickTableItem {
  name: string;
  badge: string;
  image: string;
  keyFeature: string;
  specPill: string; // 'Clase A', 'Doble Cesta', '144Hz'
  priceEstimate: string;
  linkAnchor: string; // '#balay-3ts976ba'
  isWinner?: boolean;
}

export interface BuyerTip {
  icon: string; // '⚙️', '📏', '🌱'
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string; // 'mejores-lavadoras-calidad-precio'
  title: string;
  metaDescription: string;
  category: string; // 'electrodomesticos', 'muebles', 'hardware', 'moviles', 'cocina'
  categoryName: string; // 'Electrodomésticos'
  lastUpdated: string; // 'Noviembre 2026'
  readingTime: string; // '6 min'
  intro: string;
  verdictTitle: string;
  verdictText: string;
  quickTable: QuickTableItem[];
  products: ProductItem[];
  buyerTipsTitle?: string;
  buyerTips: BuyerTip[];
  faqs: FaqItem[];
}
