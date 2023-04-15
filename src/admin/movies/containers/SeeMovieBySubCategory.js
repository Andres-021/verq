import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

import SubCategory from '../../shared/components/SubCategory';
import SearchMovie from './SearchMovie';
import MoviePopular from './MoviePopular';
import MovieTopRated from './MovieTopRated';
import MovieLatest from './MovieLatest';

const SeeMovieBySubCategory = (props) => {

  const [subCategory, setSubCategory] = useState('searched'); // Inicia por pelicula

  const handleSubCategory = (e, newValor) => {
    setSubCategory(newValor);
  }


  // Pasamos el componente de movies Buscadas para renderizar el contenido
  const children1 = <SearchMovie search={props.search}/>;
  // Pasamos el componente de movies Populares para renderizar el contenido
  const children2 = <MoviePopular/>;
  // Pasamos el componente de MovieTopRated para renderizar el contenido
  const children3 = <MovieTopRated/>;
  // ultimas
  const children4 = <MovieLatest/>;

  return (
    <>
      <SubCategory
        value={subCategory}
        onChange={handleSubCategory}
        children1={children1}
        children2={children2}
        children3={children3}
        children4={children4}
      />
    </>
  );
}

export default SeeMovieBySubCategory;

