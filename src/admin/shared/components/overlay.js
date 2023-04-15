import {Card, Button, Col, OverlayTrigger, Tooltip, Badge} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import loading from '../../../img/loading.gif';
import dontImage from '../../../img/dontImage.jpg';

import api from '../../../config/api';

import CardBootstrap from '../../../components/card';
import CardBootstrapImg from '../../../components/cardImg';

const OverlayBootstrap = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [poster, setPoster] = useState('');

  const navigate = useNavigate();
  // Obtenemos parametro :name de la url
  const params = useParams();

  // Esta funcion recibe el alt de la carta seleccionada al momento de presionar ver pelicula o serie
  // Luego se modifica la url pasando el parametro que se obtuvo de la carta, osea el alt
  // Para despues recibir ese parametro en la otra pagina
  const goToWatch = () =>{
    
    // Luego capturamos el namey category de la peli para realizar el filtrado.
    const {category, id} = params;

    navigate("/"+ props.category+"/"+ props.pelis.id, {category: props.category, id: props.pelis.id});
  }

  useEffect(() => {
    setIsLoading(true);

    api.getQueryImg(props.pelis.poster_path).then((res) => {
      setPoster(res.url);
      setIsLoading(false);
    });

  },[props.pelis.poster_path]);

  return(
    <OverlayTrigger
      placement="auto"
      overlay={
        <CardBootstrap h={props.pelis.title || props.pelis.name} cardText={props.pelis.overview} badgeVote={props.pelis.vote_average}/>            
      }
    >
      <CardBootstrapImg onClick={() => goToWatch()} src={isLoading? loading : poster} alt={props.pelis.title || props.pelis.name}/>
    </OverlayTrigger>
  );
}

export default OverlayBootstrap;