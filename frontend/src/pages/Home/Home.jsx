import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';

import { useRecipes } from 'hooks';

import { Input, Button, Table } from 'components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const { recipes, getRecipes } = useRecipes();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = useCallback(() => {
    getRecipes('desc', inputValue);
  }, [inputValue]);

  const debouncedHandleOnChange = useCallback(debounce(handleOnChange, 300), []);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-2">
      <div className="flex flex-col gap-y-4 mb-4">
        <div className="flex gap-4">
          <Input label="Recetas" onChange={debouncedHandleOnChange} />
          <Button label="Buscar" onClick={handleOnClick} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-[300px]">
          <Table rows={recipes} />
        </div>
        <Link to="/ratings" className="pt-4 w-[110px]">
          Ver valoraciones
        </Link>
      </div>
    </div>
  );
};

export default Home;
