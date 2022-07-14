import axios from './api';

const RecipeApi = {
  async getRecipes() {
    const response = await axios.get(`/recetas`);

    return response.data;
  },
  async updateRecipe(id, data) {
    return await axios.patch(`/recetas/${id}`, data);
  },
};

export default RecipeApi;
