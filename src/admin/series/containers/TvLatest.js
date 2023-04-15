import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, Row} from 'react-bootstrap';

import api from '../../../config/api';

import ResultsInfo from '../../shared/ResultsInfo';
import Results from '../../shared/Results';
import Pagination from '../../shared/Paginations';

const TvLatest = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  // Resultados
  const [latest, setLatest] = useState([]);
  const [totalLatest, setTotalLatest] = useState(0);
  // Paginas
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  const navigate = useNavigate();

  const handlePage = (e, newValor) => {
    setPage(newValor);
  }

  useEffect(() => {
    api.tv.getLatestTvs().then((res) => {
      // Como la respuesta es un objeto, debemos guardarla dentro de Corchetes.
      setLatest([res]);
      setTotalLatest([res].length);

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
          <ResultsInfo isLoading={isLoading} page={page} pageLeng={latest.length} results={totalLatest}/>
          <Results cat={'tv'} results={latest}/>
          <Pagination page={page} count={totalPage} onChange={handlePage}/>
        </Row>
      }
    </>
  );
}


export default TvLatest;