import { Input, Button } from 'components';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex items-center justify-center">
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-4">
        <Input label="Recetas" />
        <Button label="Buscar" />
      </div>
      <Link to="/ratings">Ver valoraciones</Link>
    </div>
  </div>
);

export default Home;
