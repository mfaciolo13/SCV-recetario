const mean = require('lodash/mean');

const recetasMock = [
  {
    id: '1',
    title: 'Bizcochuelo',
    ingredients: ['Harina', 'Huevos', 'Ingrediente 3'],
    rating: [],
    steps: [],
    averageRating: null,
  },
  {
    id: '2',
    title: 'Receta 2',
    ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
    rating: [],
    averageRating: null,
  },
];

exports.recetasService = {
  async getRecetas(options) {
    if (options.sortBy) {
      return recetasMock.sort();
    }
    if (options.search) {
      return recetasMock.filter();
    }

    return recetasMock;
  },

  async getRecetaById(id) {
    return recetasMock.find((receta) => receta.id === id);
  },

  async updateReceta(id, receta) {
    const recetaToUpdate = recetasMock.find((recetaMock) => recetaMock.id === id);
    if (recetaToUpdate) {
      const rating = [...recetaToUpdate.rating, receta.rating];
      recetaToUpdate.rating = rating;
      recetaToUpdate.averageRating = mean(rating);
    }

    return recetaToUpdate;
  },
};
