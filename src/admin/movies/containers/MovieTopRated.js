import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, Row} from 'react-bootstrap';

import api from '../../../config/api';

import ResultsInfo from '../../shared/ResultsInfo';
import Results from '../../shared/Results';
import Pagination from '../../shared/Paginations';

const MovieTopRated = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  // Resultados
  const [topRated, setTopRated] = useState([]);
  const [totalTopRated, setTotalTopRated] = useState(0);
  // Paginas
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  const navigate = useNavigate();

  const handlePage = (e, newValor) => {
    setPage(newValor);
  }

  useEffect(() => {
    api.movie.getTopRatedMovies(page).then((res) => {
      setTopRated(res.results);
      setTotalTopRated(res.total_results);
      setPage(res.page);
      setTotalPage(res.total_pages);

      setIsLoading(false);
    })
  },[page]); // Solo si page cambia vuelve a renderizar

  return(
    <>
      {
        isLoading?
        <h1>Cargando...</h1>
        :
        <Row>
          <ResultsInfo isLoading={isLoading} page={page} pageLeng={topRated.length} results={totalTopRated}/>
          <Results results={topRated}/>
          <Pagination page={page} count={totalPage} onChange={handlePage}/>
        </Row>
      }
    </>
  );
}


export default MovieTopRated;