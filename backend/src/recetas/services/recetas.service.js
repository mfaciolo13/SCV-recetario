const orderBy = require('lodash/orderBy');
const mean = require('lodash/mean');
const { recetasMock } = require('../mock/recetas.mock');

exports.recetasService = {
  /* A function that returns a list of recetas. */
  async getRecetas(options) {
    let recetas = recetasMock;

    if (options.orderBy) {
      recetas = orderBy(recetasMock, 'averageRating', options.orderBy);
    }

    if (options.search) {
      recetas = recetasMock.filter(
        (receta) =>
          receta.title.toLowerCase().includes(options.search.toLowerCase()) ||
          receta.ingredients.some((receta) => receta.element.toLowerCase().includes(options.search.toLowerCase()))
      );
    }

    return recetas;
  },

  async getRecetaById(id) {
    return recetasMock.find((receta) => receta.id === id);
  },

  /* Updating the receta. */
  async updateReceta(id, receta) {
    const recetaToUpdate = recetasMock.find((recetaMock) => recetaMock.id === id);
    if (recetaToUpdate && receta.rating) {
      const rating = [...recetaToUpdate.rating, receta.rating];
      recetaToUpdate.rating = rating;
      recetaToUpdate.averageRating = mean(rating).toFixed(2);
    }

    if (recetaToUpdate && receta.quantity) {
      recetaToUpdate.quantity = receta.quantity;
    }

    return recetaToUpdate;
  },
};
