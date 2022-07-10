import { Route, Routes } from 'react-router-dom';

import { Detail, Home, Raitings } from 'pages';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="raitings" element={<Raitings />} />
    </Routes>
  </div>
);

export default App;
