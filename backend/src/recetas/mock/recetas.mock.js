exports.recetasMock = [
  {
    id: '1',
    title: 'Omelette',
    ingredients: [
      { amount: 2, element: 'huevos', unit: '' },
      { amount: 150, element: 'leche', unit: 'ml' },
      { amount: 15, element: 'oregano', unit: 'g' },
      { amount: 5, element: 'sal', unit: 'g' },
    ],
    steps: ['Batir los huevos', 'Agregar sal y oregano', 'Agregar la leche', 'Cocinar durante 5m por lado'],
    quantity: 1,
    rating: [],
    averageRating: null,
  },
  {
    id: '2',
    title: 'Bizcochuelo',
    ingredients: [
      { amount: 400, element: 'harina leudante', unit: 'g' },
      { amount: 3, element: 'huevos', unit: '' },
      { amount: 200, element: 'leche', unit: 'ml' },
      { amount: 15, element: 'esencia de vainilla', unit: 'ml' },
      { amount: 200, element: 'azúcar', unit: 'g' },
    ],
    steps: [
      'Batir los huevos durante 15m',
      'incorporar leche, harina y esencia de vainilla',
      'incorporar azucar',
      'pasar a un molde y dejar durante 40m a 260° en el horno',
    ],
    quantity: 1,
    rating: [],
    averageRating: null,
  },
  {
    id: '3',
    title: 'Tarta de jamón y queso',
    ingredients: [
      { amount: 1, element: 'tapa de tarta', unit: '' },
      { amount: 2, element: 'huevos', unit: '' },
      { amount: 300, element: 'jamon', unit: 'g' },
      { amount: 300, element: 'queso', unit: 'g' },
    ],
    steps: [
      'Batir los huevos',
      'poner la tapa de tarta en un molde para horno',
      'incorporar jamon y queso y luego el huevo',
      'hornear a fuego medio durante 30 min',
    ],
    quantity: 1,
    rating: [],
    averageRating: null,
  },
];
