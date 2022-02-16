import {Container, Row, Col, Button, Pagination} from 'react-bootstrap';

// Mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import SeeResults from './seeResults';
import ResultsInfo from './resultsInfo';
import BasicPagination from './paginations';

const Category = (props) => {
  return (
    <Row>
      <Col sm={2} className="text-start mt-5">
        <Row>
          <Col>
            {  
              props.value !== 'searched' &&
              <>
                <Row classNam="mb-3">
                  <Col>
                    <sub>Los resultados subministrados al momento de filtrar, solo son realizados en la pagina actual.</sub>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="tittle" onChange={''} control={<Radio />} label="Titulo" />
                      <FormControlLabel value="year" onChange={''} control={<Radio />} label="Año" />
                    </RadioGroup>
                  </Col>
                  <Col>
                    <TextField hiddenLabel placeholder="Año" id="standard-basic" variant="standard" size="medium" margin="dense" value={props.filter} onChange={props.onChangeFilter}/>
                  </Col>
                </Row>
              </>
            }
          </Col>
        </Row>
      </Col>
      <Col>
          <Row>
            <Col>
              <Box
                sx={{textAlign:'start', flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}
              >
                <Tabs
                  orientation="horizontal"
                  variant="scrollable"
                  value={props.value}
                  onChange={props.onChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderBottom: 1, borderColor: 'divider' }}
                >
                  <Tab value="searched" label="Buscado" />
                  <Tab value="popular" label="Populares" />
                  <Tab value="top-rated" label="Valorados" />
                </Tabs>
              </Box>
            </Col>
          </Row>
        <ResultsInfo pageLeng={props.Length} results={props.totalMovie} isLoading={props.loading}/>
        <SeeResults results={props.Movies}/>
      </Col>
      <BasicPagination page={props.pageActive} count={props.totalPages} onChange={props.onChangePage}/>
    </Row>
  );
}

export default Category;