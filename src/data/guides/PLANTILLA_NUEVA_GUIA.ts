/**
 * =========================================================================
 * 📄 PLANTILLA PARA CREAR UNA NUEVA GUÍA CALIDAD-PRECIO
 * =========================================================================
 * 
 * Instrucciones:
 * 1. Duplica este archivo y cámbiale el nombre (ej. `televisores.ts`).
 * 2. Rellena los campos con la información de los productos y tus links de afiliados.
 * 3. Importa tu guía en `src/data/guides/index.ts` y agrégala a la lista `ALL_GUIDES`.
 * ¡La página web se creará automáticamente en `/guias/tu-slug`!
 */

import type { Guide } from '../../types/guide';

export const miNuevaGuia: Guide = {
  slug: 'mejores-productos-ejemplo-calidad-precio',
  title: 'Los 4 Mejores Productos Ejemplo Calidad-Precio de 2026',
  metaDescription: 'Descripción para Google (máximo 155 caracteres) con palabras clave y tiendas.',
  category: 'electrodomesticos', // Opciones: 'electrodomesticos', 'muebles', 'hardware', 'moviles', 'cocina'
  categoryName: 'Grandes Electrodomésticos',
  lastUpdated: '10 de Noviembre, 2026',
  readingTime: '5 min',
  intro: 'Introducción honesta explicando qué problemas tienen los modelos baratos y por qué no vale la pena gastar en los modelos prémium con sobreprecio.',
  verdictTitle: 'El Veredicto Rápido de CalidadPrecio.com',
  verdictText: 'Tu recomendación directa en 2 frases para los lectores que tienen prisa.',
  
  // Tabla rápida de 3-4 filas que aparece arriba del artículo
  quickTable: [
    {
      name: 'Modelo Ganador',
      badge: '👑 Rey Calidad-Precio',
      image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400&auto=format&fit=crop&q=80',
      keyFeature: 'Característica clave 1 • Clave 2',
      specPill: 'Top Gama',
      priceEstimate: '~350 €',
      linkAnchor: '#modelo-ganador',
      isWinner: true,
    },
    {
      name: 'Modelo Económico',
      badge: '🥈 Opción Menos de 200€',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80',
      keyFeature: 'Económico y fiable',
      specPill: 'Ahorro',
      priceEstimate: '~180 €',
      linkAnchor: '#modelo-economico',
    },
  ],

  // Lista detallada de productos analizados
  products: [
    {
      id: 'modelo-ganador', // Coincide con linkAnchor de la tabla rápida
      rankNumber: 1,
      badge: '🏆 La Elección Calidad-Precio (Recomendación #1)',
      badgeColor: 'emerald', // 'emerald', 'amber', 'blue', 'purple'
      score: 9.7,
      name: 'Nombre Completo del Producto y Modelo',
      brand: 'Marca',
      image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80',
      specs: ['Especificación 1', 'Especificación 2', 'Especificación 3'],
      whyBestValue: 'Explica claramente por qué este modelo ofrece más por menos dinero que sus competidores directos.',
      targetUser: 'Para qué tipo de persona o familia es ideal.',
      pros: [
        'Punto fuerte 1',
        'Punto fuerte 2',
        'Punto fuerte 3',
      ],
      cons: [
        'Punto débil o aspecto a tener en cuenta',
      ],
      offers: [
        { name: 'Amazon', price: '349,00 €', url: 'https://www.amazon.es', highlight: true },
        { name: 'PcComponentes', price: '355,00 €', url: 'https://www.pccomponentes.com' },
        { name: 'MediaMarkt', price: '359,00 €', url: 'https://www.mediamarkt.es' },
      ],
    },
  ],

  // Guía de compra: puntos técnicos a tener en cuenta
  buyerTips: [
    {
      icon: '⚙️',
      title: '1. Consejo técnico clave',
      description: 'Explicación del truco o aspecto técnico para que el comprador no se deje engañar por el marketing.',
    },
  ],

  // Preguntas frecuentes
  faqs: [
    {
      question: '¿Duda habitual del comprador?',
      answer: 'Respuesta clara y directa sin rodeos.',
    },
  ],
};
