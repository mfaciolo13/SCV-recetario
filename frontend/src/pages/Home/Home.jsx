import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import RecipeApi from 'api/Recipe.api';

import { Input, Button, Table } from 'components';

import { COLUMNS } from './Home.utils';

const Home = () => {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const { results } = await RecipeApi.getRecipes();

        setRecipesData(results);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-4">
          <Input label="Recetas" />
          <Button label="Buscar" />
        </div>
        <Link to="/ratings">Ver valoraciones</Link>
      </div>
      <Table columns={COLUMNS} rows={recipesData} />
    </div>
  );
};

export default Home;
