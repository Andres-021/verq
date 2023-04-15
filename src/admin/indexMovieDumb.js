import {Container, Row, Col} from 'react-bootstrap';


// Mui
import TextField from '@mui/material/TextField';
// import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

// Mui icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const IndexMovieDumb = (props) => {

  return(
      <Row className="mt-3 mb-5">
        {/* Formulario busqueda */}
        <Col>
          <TextField fullWidth hiddenLabel placeholder="Buscar" id="standard-basic" variant="standard" size="medium" margin="dense" value={props.value} onChange={props.onChange}/>
          <FormHelperText id="my-helper-text">Introduce el nombre de la serie o pelicula.</FormHelperText>
        </Col>
        <Col sm='auto'>
          <Button
            size="medium"
            onClick={props.onClick}
            variant="contained"
          >
            <SearchOutlinedIcon />
          </Button>
        </Col>
        {/* Fin Formulario busqueda */}
      </Row>
  );
}

export default IndexMovieDumb;