import { useEffect, useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import { Table, TabPanel } from 'components';
import { useRecipes } from 'hooks';
import { Link } from 'react-router-dom';

const Ratings = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const { recipes, isLoading, getRecipes } = useRecipes();

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
    getRecipes(newValue === 0 ? 'desc' : 'asc');
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col">
        <Tabs value={currentTab} onChange={handleChange} className="mb-4">
          <Tab label="Mejor puntaje" />
          <Tab label="Peor puntaje" />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          <Table rows={recipes} isLoading={isLoading} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <Table rows={recipes} isLoading={true} />
        </TabPanel>
        <Link to="/" className="pt-4 w-[100px]">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Ratings;
