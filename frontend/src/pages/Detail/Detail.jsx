import { useEffect, useState } from 'react';
import { Divider, Tab, Tabs, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import RecipeApi from 'api/Recipe.api';
import { RAITING_OPTIONS } from './Detail.utils';
import { useFeedbackToast } from 'contexts/FeedbackToastContext';
import { useLocalStorage, useRecipes } from 'hooks';

import { TabPanel, Select, Button, Input } from 'components';

const Detail = () => {
  const { handleOpenToast } = useFeedbackToast();
  const { storageData, getItem, setItem } = useLocalStorage();
  const { recipes, getRecipes } = useRecipes();

  const [currentTab, setCurrentTab] = useState(0);
  const [selected, setSelected] = useState('');
  const { id } = useParams();

  const recipe = recipes.find((rec) => rec.id === id);

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  const saveRating = async () => {
    try {
      const data = {
        rating: selected,
      };

      await RecipeApi.updateRecipe(id, data);
      setItem({ [id]: true });

      handleOpenToast('success', '¡Receta actualizada!');
    } catch (error) {
      handleOpenToast('error', error.message);
    }
  };

  useEffect(() => {
    getItem();
    getRecipes();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <Typography variant="h6" className="text-center">
          {recipe?.title} {recipe?.averageRating && `(${recipe.averageRating})`}
        </Typography>
        <Tabs value={currentTab} onChange={handleChange} className="mb-4">
          <Tab label="Ingredientes" />
          <Tab label="Pasos" />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          <div className="flex gap-x-2">
            <Typography>Para</Typography>
            <input placeholder="1" className="w-[30px]" />
            <Typography>persona/s</Typography>
          </div>
          <ul>
            {recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Pasos
        </TabPanel>
        <Divider />
        <div className="flex mt-4 gap-4">
          <Select selected={selected} onChange={setSelected} options={RAITING_OPTIONS} />
          <Button label="Guardar" onClick={saveRating} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
