import { useState } from 'react';

const useLocalStorage = () => {
  const [storageData, setStorageData] = useState(null);
  const getItem = () => setStorageData(JSON.parse(localStorage.getItem('ratingFlag')));

  const setItem = (data) => {
    localStorage.setItem('ratingFlag', JSON.stringify(data));
    setStorageData((previous) => ({ ...previous, data }));
  };

  return {
    storageData,
    setStorageData,
    getItem,
    setItem,
  };
};

export default useLocalStorage;
