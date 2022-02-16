import {Container, Row, Col, Anchor, CardGroup, Alert} from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';


import OverlayBootstrap from './overlay';
import AlerMui from './alertMui';

const SeeResults = ({results}) => {



  return(
    <Row className='mb-5' xs="auto" md={results.length? 4:'auto'}>
      {
        results.length || results !== undefined?
        results.map((element, index) => (
          <CardGroup key={index} className="mb-3">
            <OverlayBootstrap pelis={element}/>
          </CardGroup>
        ))
        :  
          <Col sm='auto'>
            <AlerMui severity={'info'} text={'No se encontraron resultados.'}/>
          </Col>
      }
    </Row>
  );
}

export default SeeResults;