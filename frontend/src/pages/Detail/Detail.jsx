import { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { useParams } from 'react-router-dom';

import RecipeApi from 'api/Recipe.api';
import { RAITING_OPTIONS } from './Detail.utils';
import { useFeedbackToast } from 'contexts/FeedbackToastContext';
import { useLocalStorage } from 'hooks';

import { TabPanel, Select, Button } from 'components';

const Detail = () => {
  const { handleOpenToast } = useFeedbackToast();
  const { storageData, getItem, setItem } = useLocalStorage();

  const [currentTab, setCurrentTab] = useState(0);
  const [selected, setSelected] = useState('');
  const { id } = useParams();

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
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <Tabs value={currentTab} onChange={handleChange} className="mb-4">
          <Tab label="Ingredientes" />
          <Tab label="Pasos" />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          Ingredientes
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Pasos
        </TabPanel>
        <div className="flex mt-4 gap-4">
          <Select selected={selected} onChange={setSelected} options={RAITING_OPTIONS} />
          <Button label="Guardar" onClick={saveRating} disabled={storageData[id] ?? false} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
