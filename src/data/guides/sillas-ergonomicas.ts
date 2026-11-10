import type { Guide } from '../../types/guide';

export const sillasGuide: Guide = {
  slug: 'mejores-sillas-ergonomicas-calidad-precio',
  title: 'Las 3 Mejores Sillas Ergonómicas Calidad-Precio de 2026 (Para Cuidar tu Espalda)',
  metaDescription: '¿Qué silla de oficina comprar para teletrabajar sin dolor de lumbares? Analizamos soporte lumbar, malla transpirable y ajustes por menos de 250 €.',
  category: 'muebles',
  categoryName: 'Muebles y Hogar',
  lastUpdated: '10 de Noviembre, 2026',
  readingTime: '5 min',
  intro: 'Pasar 8 horas diarias sentado en una silla barata pasa factura a tu espalda. Sin embargo, no hace falta gastarse 1.200 € en una Herman Miller para tener ergonomía médica. Comparamos las sillas de malla transpirable con auténtico ajuste lumbar por una fracción de ese precio.',
  verdictTitle: 'El Veredicto Rápido: La compra inteligente para tu espalda',
  verdictText: 'La Sihoo Doro C300 o la clásica Sihoo M18 por entre 140 € y 240 € son las reinas indiscutibles de la ergonomía calidad-precio. Ofrecen soporte lumbar dinámico, reposabrazos 3D y malla completa que evita el calor en verano.',
  quickTable: [
    {
      name: 'Sihoo Doro C300',
      badge: '👑 Rey Ergonomía Premium',
      image: 'https://images.unsplash.com/photo-1580481077195-c3a824479361?w=400&auto=format&fit=crop&q=80',
      keyFeature: 'Malla total • Soporte lumbar dinámico autoajustable • 3D',
      specPill: 'Top Espalda',
      priceEstimate: '~239 €',
      linkAnchor: '#sihoo-doro-c300',
      isWinner: true,
    },
    {
      name: 'Sihoo M18',
      badge: '🥈 Mejor Menos de 150€',
      image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=400&auto=format&fit=crop&q=80',
      keyFeature: 'Cojín de alta densidad • Respaldo de malla transpirable',
      specPill: 'Superventas',
      priceEstimate: '~149 €',
      linkAnchor: '#sihoo-m18',
    },
  ],
  products: [
    {
      id: 'sihoo-doro-c300',
      rankNumber: 1,
      badge: '🏆 La Elección Calidad-Precio (Recomendación #1)',
      badgeColor: 'emerald',
      score: 9.7,
      name: 'Sihoo Doro C300 (Ergonómica de Malla Completa)',
      brand: 'Sihoo',
      image: 'https://images.unsplash.com/photo-1580481077195-c3a824479361?w=700&auto=format&fit=crop&q=80',
      specs: ['Malla transpirable en asiento y respaldo', 'Soporte lumbar dinámico autoadaptable', 'Reposabrazos 3D', 'Inclinación sincronizada hasta 130°'],
      whyBestValue: 'Imita el concepto de las sillas ergonómicas de alta gama de más de 800 € (como la Herman Miller Aeron): toda la superficie es de malla tensada sin espuma que se deforme con los años, y su soporte lumbar se mueve contigo cuando te reclinas.',
      targetUser: 'Teletrabajadores y opositores que pasen más de 6 horas al día sentados y sufran de dolores lumbares.',
      pros: [
        'Asiento de malla: fresco en verano y sin deformación de cojín',
        'Soporte lumbar que acompaña el movimiento de la columna',
        'Reposacabezas multidireccional amplio',
      ],
      cons: [
        'Si mides más de 1.90m, el respaldo puede quedar ligeramente justo',
        'Montaje inicial requiere unos 25 minutos',
      ],
      offers: [
        { name: 'Amazon', price: '239,99 €', url: 'https://www.amazon.es', highlight: true },
        { name: 'PcComponentes', price: '249,00 €', url: 'https://www.pccomponentes.com' },
      ],
    },
    {
      id: 'sihoo-m18',
      rankNumber: 2,
      badge: '🥈 Opción Económica Más Vendida (< 150 €)',
      badgeColor: 'amber',
      score: 9.1,
      name: 'Sihoo M18 (Respaldo Malla y Cojín Confort)',
      brand: 'Sihoo',
      image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=700&auto=format&fit=crop&q=80',
      specs: ['Soporte lumbar ajustable en altura y profundidad', 'Cojín acolchado W-shape', 'Pistón de gas Clase 3'],
      whyBestValue: 'Es la silla más vendida y recomendada en internet por debajo de 150 €. A diferencia de las sillas gaming que atrapan el calor y no tienen soporte lumbar real, la M18 permite regular el punto exacto donde apoya tu espalda baja.',
      targetUser: 'Cualquiera con presupuesto ajustado que quiera dejar atrás sillas de comedor o modelos baratos de oficina.',
      pros: [
        'Ajuste lumbar bidireccional (sube/baja y entra/sale)',
        'Cojín cómodo y firme que no se hunde',
        'Estructura robusta certificada hasta 150 kg',
      ],
      cons: [
        'Los reposabrazos solo se ajustan en altura (no giran)',
      ],
      offers: [
        { name: 'Amazon', price: '149,99 €', url: 'https://www.amazon.es', highlight: true },
      ],
    },
  ],
  buyerTips: [
    {
      icon: '🪑',
      title: '1. Huye de las "sillas gaming" baratas',
      description: 'El diseño de asiento de carreras de coche está pensado para sujetar contra fuerzas G laterales, no para trabajar. Suelen ser de polipiel calurosa y carecen de soporte lumbar ergonómico real.',
    },
    {
      icon: '🌬️',
      title: '2. Malla vs Espuma',
      description: 'La malla completa transpira y dura años sin deformarse. La espuma es más mullida al inicio pero en modelos económicos pierde densidad a los 2 años.',
    },
  ],
  faqs: [
    {
      question: '¿Cada cuánto tiempo conviene levantarse aunque la silla sea buena?',
      answer: 'Ninguna silla sustituye el movimiento. La recomendación médica es levantarse 2 minutos cada 50 minutos de trabajo continuo para reactivar la circulación.',
    },
  ],
};
