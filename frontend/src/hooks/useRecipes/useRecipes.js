import { useEffect, useState } from 'react';

import RecipeApi from 'api/Recipe.api';
import { useFeedbackToast } from 'contexts/FeedbackToastContext';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { handleOpenToast } = useFeedbackToast();

  const getRecipes = async () => {
    try {
      const { results } = await RecipeApi.getRecipes();

      setRecipes(results);
    } catch (error) {
      handleOpenToast('error', error.message);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return {
    recipes,
    getRecipes,
  };
};

export default useRecipes;
