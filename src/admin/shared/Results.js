import {Container, Row, Col, Anchor, CardGroup, Alert} from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';


import OverlayBootstrap from './components/overlay';
import AlerMui from './components/alertMui';
import '../../style/results.css';

const Results = (props) => {

  return(

    <>
      <div className='div-results'>
        {
          props.results.length || props.results !== undefined?
          props.results.map((element, index) => (
            <Col className='mb-3' key={index}>
              <OverlayBootstrap category={props.cat} pelis={element}/>
            </Col>
          ))
          :  
            <Col sm='auto'>
              <AlerMui severity={'info'} text={'No se encontraron resultados.'}/>
            </Col>
        }
      </div>
    </>
  );
}

export default Results;