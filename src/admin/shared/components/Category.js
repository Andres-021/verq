// Bootstrap
import {Container, Row, Col} from 'react-bootstrap';

// Mui
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Box from '@mui/material/Box';


function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Category = (props) => {

  return(
    <>
      <TabContext value={props.value}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={props.onChange} aria-label="lab API tabs example">
                <LinkTab href={`/search/movie/${props.search}`} label="Peliculas" value="movie" />
                <LinkTab href={`/search/tv/${props.search}`}  label="Series de Tv" value="tv" />
              </TabList>
            </Box>

          <TabPanel value="movie">
            {props.children1}
          </TabPanel>
          <TabPanel value="tv">
            {props.children2}
          </TabPanel>

      </TabContext>
    </>
  );
}

export default Category;