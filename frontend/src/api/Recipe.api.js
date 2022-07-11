import axios from './api';

const RecipeApi = {
  async getRecipes() {
    const response = await axios.get(`/recetas`);

    return response.data;
  },
};

export default RecipeApi;
