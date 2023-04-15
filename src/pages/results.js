// Bootstrap
import {Container, Row, Col, } from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {animateScroll as scroll } from "react-scroll";

// Mui
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';

// Mui icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


//Mui
import Box from '@mui/material/Box';

import '../style/global.css';

import api from '../config/api';

import Paginations from '../components/paginations';
import Category from '../components/category';

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

const Search = (props) => {
  // Estado
  const [loading, setLoading] = useState(false);

  // Url
  const [categoryUrl, setCategoryUrl] = useState('')
  const [nameUrl, setNameUrl] = useState('');

  const [subCategory, setSubCategory] = useState('searched');
  const [tabSelect, setTabSelect] = useState('movie');
  const [search, setSearch] = useState('');

  // Movies --- Busqueda
  const [resultsMovies, setResultsMovies] = useState([]);
  const [totalResultsMovie, setTotalResultsMovie] = useState(0);

    // SubCategoria
    const [subCategoryMovie, setSubCategoryMovie] = useState('searched');
    const [popularMovies, setPopularMovies] = useState([]);
    const [totalPopularMovies, setTotalPopularMovies] = useState(0);
  
    // Filtrado
    const [year, setYear] = useState('');
    const [arrayFilter, setArrayFilter] = useState([]);
    const [totalArrayFilter, setTotalArrayFilter] = useState(0);

  // Paginas - Busqueda
  const [pageMovie, setPageMovie] = useState(1);
  const [totalPagesMovie, setTotalPagesMovie] = useState(0);

  // Paginas - Populares
  const [pagePopularMovie, setPagePopularMovie] = useState(1);
  const [totalPagePopularMovie, setTotalPagePopularMovie] = useState(0);



  // Tvs ---
  const [resultsTv, setResultsTv] = useState([]);
  const [totalResultsTv, setTotalResultsTv] = useState(0);

    // SubCategorias
    const [subCategoryTv, setSubCategoryTv] = useState('searched');
    const [popularTv, setPopularTv] = useState(0);
    const [totalPopularTv, setTotalPopularTv] = useState()
    

  // Paginas - Busqueda
  const [pageTv, setPageTv] = useState(1);
  const [totalPageTv, setTotalPageTv] = useState(0);

  // Paginas - Populares
  const [pagePopularTv, setPagePopularTv] = useState(1);
  const [totalPagePopularTv, setTotalPagePopularTv] = useState(0);


  const navigate = useNavigate();
  const params = useParams();
  const {category, name} = params;


  // Populares
  const search_popular_filter = (category, page) => {
    // Se hace la consulta por categoria
    if(category === "movie"){
      setLoading(true);
      // Si tenemos datos en el array no hacemos consulta
      //if(!resultsMovies.length){
        api.movie.getPopularMovies(page).then((res) => {
          setPopularMovies(res.results);
          setTotalPopularMovies(res.total_results);

          // Paginas
          setPagePopularMovie(res.page);
          setTotalPagePopularMovie(res.total_pages);

          setLoading(false);
        });
      //}
    }

    if(category === "tv"){
      setLoading(true);
      // Si tenemos datos en el array no hacemos consulta
      //if(!resultsTV.length){
        api.tv.getPopularTvs(page).then((res) => {
          setPopularTv(res.results)
          setTotalPopularTv(res.total_results);

          // Paginas
          setPagePopularTv(res.page);
          setTotalPagePopularTv(res.total_pages);

          setLoading(false);
        });
      //}
    }
  }


  // Busqueda
  const search_filter = (query, page) => {

    // Se realiza la misma busqueda en diferentes categorias.
    if(query !== ''){
      setLoading(true);

      api.movie.getQueryMovies(query, page).then((res) => {
        setResultsMovies(res.results);
        setTotalResultsMovie(res.total_results);
        
        // Paginas

        setLoading(false);
      });
          
      api.tv.getQueryTVs(query, page).then((res) => {
        setResultsTv(res.results)
        setTotalResultsTv(res.total_results);

        // Paginas
        setPageTv(res.page);
        setTotalPageTv(res.total_pages);
            
        setLoading(false);
      });
    }
  }


  // Boton de buscar
  const handleSearchSubmit = () => {
    if(search === ''){
      console.log('Vacio')
    }else{

      
      search_filter(search, 1);

      /**Al realizar busqueda => */
      // Categoria por defecto
      setTabSelect('movie');
      // SubCateggoria por defecto
      setSubCategoryTv('searched');
      setSubCategoryMovie('searched');

      navigate(`/search/${search}`, {name: search});
    }

  }
  // Inpu busqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }


  // Botones de navegaciones -Categoria de peliculas
  const handleTabSubmit = (event, newValue) => {
    setTabSelect(newValue);
    navigate(`/search/${newValue}/${search}`, {category: newValue, name: search});
  };


  // Botones navegacion -SubCategorias Peliculas
  const handleSubCategoryChange = (event, newValue) => {
    if(tabSelect !== ''){
      if(tabSelect === 'movie'){
        // Peliculas 
        if(newValue === 'searched'){
          setSubCategoryMovie(newValue);
        }

        if(newValue === 'popular'){
          setSubCategoryMovie(newValue);
          
          search_popular_filter(tabSelect, pagePopularMovie);
          navigate(`/search/${tabSelect}/${newValue}`, {category: tabSelect, filter: newValue});
        }
      }
      if(tabSelect === 'tv'){
        // Series
        if(newValue === 'searched'){
          setSubCategoryTv(newValue);
        }

        if(newValue === 'popular'){
          setSubCategoryTv(newValue);

          search_popular_filter(tabSelect, pagePopularTv);
          navigate(`/search/${tabSelect}/${newValue}`, {category: tabSelect, filter: newValue});
        }
      }
    }
  }


  // Input filtrar año en popular
  const handleChangeYearPopularMovie = (e) => {
    const valor = e.target.value;
    setYear(valor);
    
    const newValor = popularMovies.filter((el) => el.release_date.split('-').join('').includes(valor));

    setArrayFilter(newValor); // Paso nuevo valor
    setTotalArrayFilter(newValor.length);
  }

  // Paginas SubCategoria popular
  const handleChangePagePopular = (e, newValor) => {
    scroll.scrollToTop();
    const page = newValor;
    // Por si cambia de Subcategoria, hara uso de los datos de paginas y asi se mantenga la anterior
    if(tabSelect === 'movie'){
      if(subCategory === 'searched'){
        setPageMovie(page);
      }

      if(subCategoryMovie === 'popular'){
        setPagePopularMovie(page);
      }
    }

    if(tabSelect === 'tv'){
      if(subCategoryTv === 'searched'){
        setPageTv(page);
      }

      if(subCategoryTv === 'popular'){
        setPagePopularTv(page);
      }
    }
    if(tabSelect !== ''){
      search_popular_filter(tabSelect, page);
    }
  }


  // Efecto de cabios en url
  useEffect(() => {
    setLoading(false);

    const categorySelect = () => {
      if(category !== undefined){
        setTabSelect(category);
      }

      if(name !== undefined){
        if(name === 'popular' || name === 'top-rated'){
          return;
        }
        if(name === 'movie' || name === 'tv'){
          return;
        }
        setSearch(name);
      }

      if(category !== undefined && name !== undefined){
        setTabSelect(category);
        setSearch(name);
      }
    }

    categorySelect();
    if(search !== ''){
      document.title = `${search} | VerQ`;
    }else{
      document.title = `VerQ`;
    }

    // Modificamos la url dependiendo la categoria y busqueda
  },[loading, category, name]);

  return(
    <>
        <Container className="mt-3 mb-5">
          <Row>
            {/* Formulario busqueda */}
            <Col>
              <TextField fullWidth hiddenLabel placeholder="Buscar" id="standard-basic" variant="standard" size="medium" margin="dense" value={search} onChange={handleSearch}/>
              <FormHelperText id="my-helper-text">Introduce el nombre de la serie o pelicula.</FormHelperText>
            </Col>
            <Col sm='auto'>
              <LoadingButton
                size="medium"
                onClick={handleSearchSubmit}
                loading={loading}
                loadingIndicator={"Buscando..."}
                variant="contained"
              >
                <SearchOutlinedIcon />
              </LoadingButton>
            </Col>
            {/* Fin Formulario busqueda */}
          </Row>

          <Row className='mt-3'>

            <Col>
              <TabContext value={tabSelect}>

                <Row>
                  <Col>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleTabSubmit} aria-label="lab API tabs example">
                        <LinkTab href={`/search/movie/${search}`} label="Peliculas" value="movie" />
                        <LinkTab href={`/search/tv/${search}`}  label="Series de Tv" value="tv" />
                      </TabList>
                    </Box>
                  </Col>

                  <TabPanel value="movie">
                    {
                      subCategoryMovie === 'searched' ? 
                        <Category onChange={handleSubCategoryChange} value={subCategoryMovie} loading={loading} Length={resultsMovies.length}  totalMovie={totalResultsMovie} Movies={resultsMovies}/>
                      :
                      subCategoryMovie === 'popular' ?
                        <Category
                          value={subCategoryMovie} onChange={handleSubCategoryChange} 
                          loading={loading} 

                          Length={!totalArrayFilter? popularMovies.length : totalArrayFilter} 
                          totalMovie={totalPopularMovies} Movies={!arrayFilter.length? popularMovies : arrayFilter}
                          
                          pageActive={pagePopularMovie} onChangePage={handleChangePagePopular} totalPages={totalPagePopularMovie}
                        />
                      
                      : null
                    }
                  </TabPanel>
                  <TabPanel value="tv">
                    {
                      subCategoryTv === 'searched' ? 
                        <Category onChange={handleSubCategoryChange} value={subCategoryTv} loading={loading} Length={resultsTv.length}  totalMovie={totalResultsTv} Movies={resultsTv}/>
                      :
                      subCategoryTv === 'popular' ?
                        <Category
                          value={subCategoryTv} onChange={handleSubCategoryChange} 
                          loading={loading} 

                          Length={!totalArrayFilter? popularTv.length : totalArrayFilter} 
                          totalMovie={totalPopularTv} Movies={!arrayFilter.length? popularTv : arrayFilter}
                          
                          pageActive={pagePopularTv} onChangePage={handleChangePagePopular} totalPages={totalPagePopularTv}
                        />
                      
                      : null
                    }
                  </TabPanel>
                </Row>

              </TabContext>
            </Col>

          </Row>
        </Container>
    </>
  );
}

export default Search;