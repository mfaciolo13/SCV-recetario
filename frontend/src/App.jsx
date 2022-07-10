import { Route, Routes } from 'react-router-dom';

import { Detail, Home, Ratings } from 'pages';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="ratings" element={<Ratings />} />
    </Routes>
  </div>
);

export default App;
