import { Link } from 'react-router-dom';

import { Input, Button, Table } from 'components';
import { useRecipes } from 'hooks';
import { useEffect } from 'react';

const Home = () => {
  const { recipes, getRecipes } = useRecipes();

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-2">
      <div className="flex flex-col gap-y-4 mb-4">
        <div className="flex gap-4">
          <Input label="Recetas" />
          <Button label="Buscar" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-[300px]">
          <Table rows={recipes} />
        </div>
        <Link to="/ratings" className="pt-4">
          Ver valoraciones
        </Link>
      </div>
    </div>
  );
};

export default Home;
