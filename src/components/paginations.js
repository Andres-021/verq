import {Row, Col} from 'react-bootstrap';

// Mui
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function BasicPagination(props) {
  return (
    <Row className="justify-content-center">
      <Col md="auto">
        <Stack spacing={2}>
          <Pagination page={props.page} defaultPage={1} count={props.count} onChange={props.onChange} color="primary" disabled={props.disabled}/>
        </Stack>
      </Col>
    </Row>
    
  );
}