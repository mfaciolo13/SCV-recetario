import { Navigate, Route, Routes } from 'react-router-dom';

import { Detail, Home, Ratings } from 'pages';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="detail" element={<Detail />} />
    <Route path="ratings" element={<Ratings />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
