import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Detail, Home, Ratings } from 'pages';
import { useLocalStorage } from 'hooks';

const App = () => {
  const { setItem } = useLocalStorage();

  useEffect(() => {
    setItem('');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="ratings" element={<Ratings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
