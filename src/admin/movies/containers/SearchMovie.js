import {useState, useEffect} from 'react';

import {Container, Row} from 'react-bootstrap';

import api from '../../../config/api';

import ResultsInfo from '../../shared/ResultsInfo';
import Results from '../../shared/Results';
import Pagination from '../../shared/Paginations';

const SearchMovie  = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  // Resultados
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  // Paginas
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handlePage = (e, newValor) => {
    setPage(newValor);
  }

  useEffect(() => {
    api.search.getQueryMovies(props.search, page).then((res) => {
      setResults(res.results);
      setTotalResults(res.total_results);

      setIsLoading(false);
    });
  }, [props.search]);

  return(
    <>
      {
        isLoading?
        <h1>Cargando...</h1>
        :
        <Row>
          <ResultsInfo isLoading={isLoading} page={page} pageLeng={results.length} results={totalResults}/>
          <Results results={results}/>
          <Pagination page={page} count={totalPage} onChange={handlePage}/>
        </Row>
      }
    </>
  );
}

export default SearchMovie;