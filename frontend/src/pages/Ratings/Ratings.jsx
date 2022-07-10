import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';

import { TabPanel } from 'components';

const Ratings = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <Tabs value={currentTab} onChange={handleChange} className="mb-4">
          <Tab label="Mejor puntaje" />
          <Tab label="Peor puntaje" />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          Mejor puntaje
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Peor puntaje
        </TabPanel>
      </div>
    </div>
  );
};

export default Ratings;
