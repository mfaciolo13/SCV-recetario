import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeApi from 'api/Recipe.api';
import { useFeedbackToast } from 'contexts/FeedbackToastContext';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const { handleOpenToast } = useFeedbackToast();

  const getRecipes = useCallback(
    async (orderBy = 'desc', search = '') => {
      try {
        setRecipes([]);
        setIsLoading(true);
        const { results } = await RecipeApi.getRecipes(orderBy, search);

        if (id) {
          setRecipe(results.find((r) => r.id === id));
        }

        setRecipes(results);
      } catch (error) {
        handleOpenToast('error', error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [setRecipe, setRecipes]
  );

  const updateRecipe = async (data) => {
    try {
      const params = {
        ...(data.rating && { rating: data.rating }),
        ...(data.quantity && { quantity: data.quantity }),
      };

      const { results } = await RecipeApi.updateRecipe(id, params);

      setRecipe(results);

      handleOpenToast('success', '¡Receta actualizada!');
    } catch (error) {
      handleOpenToast('error', error.message);
    }
  };

  return {
    recipes,
    recipe,
    isLoading,
    getRecipes,
    updateRecipe,
  };
};

export default useRecipes;
