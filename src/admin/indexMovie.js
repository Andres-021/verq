import {useState, useEffect} from 'react';

// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';


import IndexMovieDumb from './indexMovieDumb';
import SeeByCategory from './shared/containers/SeeByCategory';
import SpeedDial from './shared/components/SpeedDial';

const IndexMovie = () => {

  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState('');

  // Inpu busqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // Boton de buscar
  const handleSearchSubmit = () => {
    if(search === ''){
      console.log('Vacio')
    }else{
      setSearchActive(search);
    }
  }

  return(
    <>
      <Container fluid>
        <IndexMovieDumb value={search} onChange={handleSearch} onClick={handleSearchSubmit}/>
        <SeeByCategory search={searchActive}/>
      </Container>
    </>
  );
}

export default IndexMovie;