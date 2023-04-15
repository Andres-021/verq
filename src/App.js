import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/navBar';
import Footer from './components/footer';
import Movie from './pages/movie';
import Results from './pages/results';

import MoviePopular from './admin/movies/containers/MoviePopular';
import SearchMovie from './admin/movies/containers/SearchMovie';

import SeeByCategory from './admin/shared/containers/SeeByCategory';
import IndexMovie from './admin/indexMovie';
import NavBav from './admin/navBar';

const App = (props) => {
  return (
    <>
      <Router>
        <Routes>
          {/* -> :name parametro url */}
          <Route path="/:category/:id" element={<Movie/>}/>
          {/* <Route path="*" element={<NotFound/>} /> */}
          
          {/* 
          * Busqueda con name y category solo si selecciona un tab*
          <Route path="/search/:category/:name" element={<Results/>}/>

          <Route path="/search/:category/:filter" element={<Results/>}/>
          * Busqueda si no se a seleccionado un tab 
          <Route path="/search/:name" element={<Results/>}/> */}


          {/* Para poder ver la pagina de busquedas */}
          <Route path="/" element={<NavBav/>}/>

        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
