const orderBy = require('lodash/orderBy');
const mean = require('lodash/mean');
const { recetasMock } = require('../mock/recetas.mock');

exports.recetasService = {
  async getRecetas(options) {
    if (options.orderBy) {
      const data = orderBy(recetasMock, 'averageRating', options.orderBy);

      return data;
    }
    if (options.search) {
      return recetasMock.filter(
        (receta) =>
          receta.title.includes(options.search) || receta.ingredients.map((receta) => receta.includes(options.search))
      );
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
