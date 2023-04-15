import {Container, Row, Col, Button, Pagination} from 'react-bootstrap';

// Mui
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';


const SubCategory = (props) => {
  return (
    <>
      <Col>
        <Row className='mt-3'>
          <Col>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={props.value}
                onChange={props.onChange}
              >
                <FormControlLabel value="searched" control={<Radio />} label="Buscado" />
                <FormControlLabel value="popular" control={<Radio />} label="Populares" />
                <FormControlLabel value="top-rated" control={<Radio />} label="Mas valorados" />
                <FormControlLabel value="latest" control={<Radio />} label="Ultimo" />
              </RadioGroup>
            </FormControl>
          </Col>
        </Row>
        <Row>
          {
            props.value === 'searched'?
            <Col>
              {props.children1}
            </Col>
            :
            props.value === 'popular'?
            <Col>
              {props.children2}
            </Col>
            :
            props.value === 'top-rated' ?
            <Col>
              {props.children3}
            </Col>
            :
            props.value === 'latest' ?
            <Col>
              {props.children4}
            </Col>
            : null
          }
        </Row>
      </Col>
    </>
  );
}

export default SubCategory;