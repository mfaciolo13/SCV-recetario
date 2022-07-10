import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import { RAITING_OPTIONS } from './Detail.utils';

import { TabPanel, Select, Button } from 'components';

const Detail = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

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
          <Button label="Guardar" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
