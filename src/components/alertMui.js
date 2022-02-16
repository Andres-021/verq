import {Container, Row, Col, CardGroup, Alert} from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';

// Mui
import InfoIcon from '@mui/icons-material/Info'

const AlertBootstrap = (props) => {

  return (
    <Alert icon={<InfoIcon fontSize="inherit" />} severity={props.severity}>
      {props.text}
      <Link to='/' className="color-link">
        <strong> Ir a inicio.</strong>
      </Link>
    </Alert>
  );
}

export default AlertBootstrap;