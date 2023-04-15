import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, Row} from 'react-bootstrap';

import api from '../../../config/api';

import ResultsInfo from '../../shared/ResultsInfo';
import Results from '../../shared/Results';
import Pagination from '../../shared/Paginations';

const TvPopular = () => {

  const [isLoading, setIsLoading] = useState(true);
  // Resultados
  const[popular, setPopular] = useState([]);
  const [totalPopular, setTotalPopular] = useState(0);
  // Paginas
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handlePage = (e, newValue) => {
    setPage(newValue);
  }

  useEffect(() => {
    api.tv.getPopularTvs(page).then((res) => {
      setPopular(res.results);
      setTotalPopular(res.total_results);
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
          <ResultsInfo isLoading={isLoading} pageLeng={popular.length} results={totalPopular}/>
          <Results cat={'tv'} results={popular}/>
          <Pagination page={page} count={totalPage} onChange={handlePage}/>
        </Row>
      }
    </>
  );
}

export default TvPopular;