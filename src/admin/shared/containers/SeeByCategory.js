import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

import Category from '../components/Category';
import SeeMovieBySubCategory from '../../movies/containers/SeeMovieBySubCategory';
import SeeTvBySubCategory from '../../series/SeeTvBySubCategory';

const SeeByCategory = (props) => {

  const [category, setCategory] = useState('movie'); // Inicia por pelicula

  const handleCategory = (e, newValor) => {
    setCategory(newValor);
  }

  // Pasamos el componente de movies Buscadas para renderizar el contenido
  const children1 = <SeeMovieBySubCategory search={props.search}/>;
  // Pasamos el componente de movies Buscadas para renderizar el contenido
  const children2 = <SeeTvBySubCategory search={props.search}/>;

  return(
    <>
      <Category value={category} onChange={handleCategory} children1={children1} children2={children2}/>
    </>
  );
}

export default SeeByCategory;