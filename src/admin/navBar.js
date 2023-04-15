import {Navbar, Container, Form, FormControl, Button, Row, Col, Nav, NavDropdown, DropdownButton, Dropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, cloneElement } from 'react';


// Mui
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';
import ListItemButton from '@mui/material/ListItemButton';

import Collapse from '@mui/material/Collapse';

// Miu Icon
import ListItemIcon from '@mui/material/ListItemIcon';
//import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';

import IndexMovieDumb from './indexMovieDumb';
import SeeByCategory from './shared/containers/SeeByCategory';
import SpeedDial from './shared/components/SpeedDial';

import IndexMovie from './indexMovie';


function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
  
}


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 50, right: 50 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const drawerWidth = 240;


export default function NavBar(props) {
  const [search, setSearch] = useState('');
  const [searchActive, setSearchActive] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // Inpu busqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // Boton de buscar
  const handleSearchSubmit = () => {
    if(search === ''){
      console.log('Vacio')
    }else{
      setSearchActive(search);
    }
  }

  // Lista de objetos.
  const listItem = [
    {item : <SearchOutlinedIcon/>, name: 'Busqueda'},
    // {item: <LibraryAddCheckOutlinedIcon/>, name: 'Agregado'}
  ];

  // const listItemAdmin = [
  //   {item: <PersonAddOutlinedIcon />, name: 'Registrar'}
  // ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              ...
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Divider/>
            
            {
              listItem.map((obj, index) => (
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  <Divider/>
                  <ListItemIcon>
                    {obj.item}
                  </ListItemIcon>
                  <ListItemText primary={obj.name} />
                </ListItemButton>
              ))
            }
            <Divider/>

            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <AdminPanelSettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Panel admin" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  listItemAdmin.map((obj, index) => (
                    <ListItemButton 
                      sx={{ pl: 4 }}
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemIcon>
                        {obj.item}
                      </ListItemIcon>
                      <ListItemText primary={obj.name} />
                    </ListItemButton>
                  ))
                }
              </List>
            </Collapse>

          </List>
        </Box>
      </Drawer> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {
          selectedIndex === 0? <IndexMovie/>
          : null
        }
      </Box>
    </Box>
  );
}
