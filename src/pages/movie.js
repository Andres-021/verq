import {Container, Row, Col, Figure, Badge, Anchor, Spinner} from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import '../style/global.css';
import '../style/details.css'

import api from '../config/api';

const Movie = () => {
  const [watch, setWatch] = useState({});
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(false);

  // Obtenemos parametro :name de la url
  const params = useParams()

  const backdropImg = (res) => {
    var img = document.getElementById('banner');
    img.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"https://image.tmdb.org/t/p/original"+ res.backdrop_path})`;
    img.style.backgroundPosition = 'center';
    img.style.backgroundSize = 'cover';
  }
  
  const search_details = (category, page) => {

    if(category === "movie"){
      setLoading(true);

      api.movie.getDetailsMovies(page).then((res) => {
        setWatch(res);
        backdropImg(res);

        setLoading(false);
      });
    }

    if(category === "tv"){
      setLoading(true);

      api.tv.getDetailsTVs(page).then((res) => {
        setWatch(res);
        backdropImg(res);
        
        setLoading(false);
      })
    }
  }

  useEffect(() => {
    // Luego capturamos el name y category de la peli para realizar el filtrado.
    const {category, id} = params;
    search_details(category, id);
    setLoading(false);

  },[loading]);

  return(
    <>
      {
        loading?
          <Container>
            <Row className="mt-5">
            </Row>
            <Row className="mt-3 mb-5 justify-content-center loading-size-container">
              <Col md="auto">
                <Spinner animation="border" />
              </Col>
            </Row>
          </Container>
        :
        <div className="banner" id="banner">
          {/* <img src={"https://image.tmdb.org/t/p/original"+ watch.backdrop_path}/> */}
          <div className="poster">
            <img src={"https://image.tmdb.org/t/p/w500/"+ watch.poster_path}/>
          </div>
          <div className="content">
            <h2>{watch.title || watch.name}</h2>
            <ul className="details-content">
              {
                genre.length?
                genre.map((watch) => (
                  <li>{"/genre/"+ watch.name}</li>
                ))
                : null
              }
            </ul>
            <h5>Resumen</h5>
            <p>{watch.overview}</p>
            
            {/* <!-- <a href="#" className="play"><img> Ver trailer</a> --> */}
          </div>
          <div className="slide"></div>
        </div>
      }
    </>
  );
}

export default Movie;