import {Carousel, Button} from 'react-bootstrap';

import list from '../datos';

const CarouselShared = () => {
  
  return(
    <>
      <Carousel>
        {
          list.length?
            list.map((pelis) =>(
              <Carousel.Item interval={2000}> 
                <img
                  className="d-block w-100"
                  src={pelis.url}
                  alt={pelis.alt}
                />
                <Carousel.Caption>
                  <h3>{pelis.tittle}</h3>
                  <p>{pelis.review}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
            : null
        }
      </Carousel>
    </>
  );
}

export default CarouselShared;