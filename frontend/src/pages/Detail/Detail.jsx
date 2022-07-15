import { useCallback, useEffect, useState } from 'react';
import { Divider, Tab, Tabs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { RAITING_OPTIONS } from './Detail.utils';
import { useRecipes } from 'hooks';

import { TabPanel, Select, Button } from 'components';

const Detail = () => {
  const { recipe, updateRecipe, getRecipes } = useRecipes();

  const [currentTab, setCurrentTab] = useState(0);
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState(1);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);

  const handleOnInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  const handleOnClick = useCallback(() => {
    updateRecipe({ rating: selected });
    setIsSaveDisabled(true);
  }, [selected]);

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    setInputValue(recipe?.quantity);
  }, [recipe?.quantity]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  w-[400px]">
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
            <input
              placeholder="1"
              value={inputValue || ''}
              className="w-[30px]"
              type="number"
              min={1}
              max={10}
              onChange={handleOnInputChange}
            />
            <Typography>persona/s</Typography>
          </div>
          <ul>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount * inputValue} {ingredient.unit} {ingredient.element}
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <ul>
            {recipe?.steps?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </TabPanel>
        <Divider />
        <div className="flex mt-4 gap-4">
          <Select selected={selected} onChange={setSelected} options={RAITING_OPTIONS} />
          <Button label="Guardar" onClick={handleOnClick} disabled={!selected || isSaveDisabled} />
        </div>
        <Link to="/" className="pt-4 w-[100px]">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Detail;
