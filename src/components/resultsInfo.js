import {Row, Col, Spinner} from 'react-bootstrap';

// Mui
import Badge from '@mui/material/Badge';

const ResultsInfo = (props) => {

  return(
    <Row className="mt-3 mb-3">
      <Col>
        <h3>Resultados 
        {
          props.isLoading?
            <Badge bg="info"><Spinner animation="border" size="sm"/></Badge>: null
        }
        </h3>
      </Col>
      <Col md="auto"> {/* Tamaño de pagina */}
        <Badge badgeContent={props.pageLeng} color="primary" max={999999} anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
          <h6>Pagina Actual</h6>
        </Badge>
      </Col>
      <Col md="auto"> {/* Resultados totales */}
        <Badge badgeContent={props.results} color="primary" max={999999} anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
          <h6>Total</h6>
        </Badge>
      </Col>
    </Row>
  );
}

export default ResultsInfo;