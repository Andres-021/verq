import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

import SubCategory from '../shared/components/SubCategory';
import SearchTv from './containers/SearchTv';
import TvPopular from './containers/TvPopular';
import TvTopRated from './containers/TvTopRated'
import TvLatest from './containers/TvLatest';

const SeeMovieBySubCategory = (props) => {

  const [subCategory, setSubCategory] = useState('searched'); // Inicia por pelicula

  const handleSubCategory = (e, newValor) => {
    setSubCategory(newValor);
  }


  // Pasamos el componente de tv Buscadas para renderizar el contenido
  const children1 = <SearchTv search={props.search}/>;
  // Pasamos el componente de tv Populares para renderizar el contenido
  const children2 = <TvPopular/>;
  // Pasamos el componente de tv Top-Rated para renderizar el contenido
  const children3 = <TvTopRated/>
  // ultima
  const children4 = <TvLatest/>;

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