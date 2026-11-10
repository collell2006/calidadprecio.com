export interface Subcategory {
  name: string;
  slug?: string;
  badge?: string; // Ej. 'Popular', 'Guía lista'
}

export interface Category {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  subcategories: Subcategory[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'electrodomesticos',
    name: 'Electrodomésticos',
    shortName: 'Electro',
    icon: '🧺',
    description: 'Aparatos de alta durabilidad, bajo consumo eléctrico (Clase A) y repuestos oficiales asegurados.',
    subcategories: [
      { name: 'Lavadoras', slug: '/guias/mejores-lavadoras-calidad-precio', badge: 'Guía activa' },
      { name: 'Freidoras de Aire', slug: '/guias/mejores-freidoras-aire-calidad-precio', badge: 'Top ventas' },
      { name: 'Secadoras con Bomba de Calor' },
      { name: 'Frigoríficos y Refrigeradores' },
      { name: 'Lavavajillas A+++' },
      { name: 'Microondas con Grill' },
      { name: 'Hornos Pirolíticos' },
      { name: 'Placas de Inducción' },
    ],
  },
  {
    slug: 'muebles',
    name: 'Muebles y Hogar',
    shortName: 'Muebles',
    icon: '🪑',
    description: 'Ergonomía, descanso y mobiliario con materiales sólidos que evitan dolores de espalda sin pagar marcas de lujo.',
    subcategories: [
      { name: 'Sillas Ergonómicas', slug: '/guias/mejores-sillas-ergonomicas-calidad-precio', badge: 'Guía activa' },
      { name: 'Escritorios Elevables (Standing Desks)' },
      { name: 'Colchones Viscoelásticos' },
      { name: 'Sofás y Chaise Longue' },
      { name: 'Mesas de Centro y Comedor' },
      { name: 'Estanterías y Almacenaje' },
      { name: 'Lámparas de Escritorio LED' },
    ],
  },
  {
    slug: 'hardware',
    name: 'Hardware de PC',
    shortName: 'Hardware',
    icon: '💻',
    description: 'Componentes, pantallas y portátiles optimizados por rendimiento por cada euro gastado.',
    subcategories: [
      { name: 'Monitores PC (2K y Gaming)', slug: '/guias/mejores-monitores-pc-calidad-precio', badge: 'Guía activa' },
      { name: 'Portátiles Teletrabajo y Gaming' },
      { name: 'Tarjetas Gráficas (GPU)' },
      { name: 'Procesadores (CPU)' },
      { name: 'Teclados Mecánicos' },
      { name: 'Ratones Ergonómicos y Gaming' },
      { name: 'Discos SSD M.2 NVMe' },
    ],
  },
  {
    slug: 'moviles',
    name: 'Móviles y Tablets',
    shortName: 'Móviles',
    icon: '📱',
    description: 'Smartphones y dispositivos móviles con pantallas fluidas, cámaras estabilizadas (OIS) y años de soporte.',
    subcategories: [
      { name: 'Móviles Menos de 300€', slug: '/guias/mejores-moviles-calidad-precio', badge: 'Guía activa' },
      { name: 'Móviles Gama Media-Alta' },
      { name: 'Tablets para Estudiar y Trabajar' },
      { name: 'Smartwatches y Pulseras' },
      { name: 'Auriculares con Cancelación de Ruido' },
      { name: 'Baterías Portátiles (Power Banks)' },
    ],
  },
  {
    slug: 'cocina',
    name: 'Cocina & Pequeño Hogar',
    shortName: 'Cocina',
    icon: '🍳',
    description: 'Pequeños electrodomésticos eficientes que ahorran tiempo de preparación y cocinado diario.',
    subcategories: [
      { name: 'Freidoras de Aire (Airfryers)', slug: '/guias/mejores-freidoras-aire-calidad-precio', badge: 'Top ventas' },
      { name: 'Cafeteras Superautomáticas' },
      { name: 'Robots de Cocina Multifunción' },
      { name: 'Aspiradoras sin Cable (Escoba)' },
      { name: 'Batidoras de Vaso y Mano' },
      { name: 'Envasadoras al Vacío' },
      { name: 'Tostadoras y Hervidores' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
