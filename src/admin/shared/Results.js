import {Container, Row, Col, Anchor, CardGroup, Alert} from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';


import OverlayBootstrap from './components/overlay';
import AlerMui from './components/alertMui';

const Results = (props) => {

  return(
    <Col>
      <Row xs={2} sm='auto' md={4} lg={6}>
        {
          props.results.length || props.results !== undefined?
          props.results.map((element, index) => (
            <Col className='mb-3' key={index}>
              <OverlayBootstrap cateory={props.cat} pelis={element}/>
            </Col>
          ))
          :  
            <Col sm='auto'>
              <AlerMui severity={'info'} text={'No se encontraron resultados.'}/>
            </Col>
        }
      </Row>
    </Col>
  );
}

export default Results;