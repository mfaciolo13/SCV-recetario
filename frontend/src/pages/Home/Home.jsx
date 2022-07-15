import { Link } from 'react-router-dom';

import { Input, Button, Table } from 'components';
import { useRecipes } from 'hooks';

const Home = () => {
  const { recipes } = useRecipes();

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col gap-y-4 mb-4">
        <div className="flex gap-4">
          <Input label="Recetas" />
          <Button label="Buscar" />
        </div>
        <Link to="/ratings">Ver valoraciones</Link>
      </div>
      <div className="w-[300px]">
        <Table rows={recipes} />
      </div>
    </div>
  );
};

export default Home;
