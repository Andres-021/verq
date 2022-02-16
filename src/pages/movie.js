import {Container, Row, Col, Figure, Badge, Anchor, Spinner} from 'react-bootstrap';
import { useParams, Navigate, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../style/global.css';

import api from '../config/api';

const Movie = () => {
  const [watch, setWatch] = useState({});
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(false);

  // Obtenemos parametro :name de la url
  const params = useParams()
  
  const search_details = (category, page) => {

    if(category === "movie"){
      setLoading(true);

      api.movie.getDetailsMovies(page).then((res) => {
        setWatch(res);
        setLoading(false);
      });
    }

    if(category === "tv"){
      setLoading(true);

      api.tv.getDetailsTVs(page).then((res) => {
        setWatch(res);
        console.log(res)
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
        <Container className="" src={"https://image.tmdb.org/t/p/original"+watch.backdrop_path}>
          <Row className="mt-5">
            <Col xs={6} md={4}>
              <Figure>
                <Figure.Image
                  width={271}
                  height={280}
                  alt={''}
                  src={"https://image.tmdb.org/t/p/original"+watch.poster_path}
                />
                <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                  <Col sm="auto">
                    <h1>{watch.title || watch.name}</h1>
                  </Col>
                  <Col>
                    <Badge pill bg="warning">
                      <strong>
                        <Anchor>
                          <Link to='/year' className="color-link">{'year'}</Link>
                        </Anchor>
                      </strong>
                    </Badge>
                  </Col>
              </Row>
              <Row>
                <Col sm="auto">
                  <Badge pill bg="primary">
                    <strong>
                    <Anchor >{'category'}</Anchor>
                    </strong>
                  </Badge>
                </Col>
                <Col sm="auto">
                </Col>
                <Col>
                  {
                    genre.length?
                    genre.map((watch) => (
                      <Badge pill bg="info">
                        <Anchor href={"/genre/"+ watch.name} className="color-link">{watch.name}</Anchor>
                      </Badge>
                    ))
                    : null
                  }
                </Col>
              </Row>
              <Row className="mt-4">
                <h5>Sinopsis</h5>
              </Row>
              <Row className="mt-2">
                <p>{watch.overview}</p>
              </Row>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
}

export default Movie;