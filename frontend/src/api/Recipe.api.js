import axios from './api';

const RecipeApi = {
  async getRecipes(orderBy) {
    const response = await axios.get(`/recetas`, { params: { orderBy } });

    return response.data;
  },
  async updateRecipe(id, data) {
    return await axios.patch(`/recetas/${id}`, data);
  },
};

export default RecipeApi;
