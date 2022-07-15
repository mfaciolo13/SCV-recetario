import { useState } from 'react';

import RecipeApi from 'api/Recipe.api';
import { useFeedbackToast } from 'contexts/FeedbackToastContext';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { handleOpenToast } = useFeedbackToast();

  const getRecipes = async (orderBy = 'desc') => {
    try {
      setRecipes([]);
      setIsLoading(true);
      const { results } = await RecipeApi.getRecipes(orderBy);

      setRecipes(results);
    } catch (error) {
      handleOpenToast('error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    recipes,
    isLoading,
    getRecipes,
  };
};

export default useRecipes;
