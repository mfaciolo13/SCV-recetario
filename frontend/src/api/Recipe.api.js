import axios from './api';

const RecipeApi = {
  async getRecipes(orderBy, search) {
    const response = await axios.get(`/recetas`, { params: { orderBy, ...(search && { search }) } });

    return response.data;
  },
  async updateRecipe(id, data) {
    const response = await axios.patch(`/recetas/${id}`, data);

    return response.data;
  },
};

export default RecipeApi;
