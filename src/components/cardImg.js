import {Card, Button} from 'react-bootstrap';

const CardBootstrapImg = (props) => {

  return(
    <>
      <Card className="bg-dark text-white text-start box-card" style={{ width: '10rem' }}>
        <Card.Img className="img-card" width='100%' height={270} src={props.src} alt={props.alt} />
        <Card.ImgOverlay className="imgBox-card">
          <Button variant="light" className="button-see-movie text-white" onClick={props.onClick}>
            {<img src="https://img.icons8.com/material-outlined/24/ffffff/play--v1.png"/>}
            <strong>Ver</strong>
          </Button>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default CardBootstrapImg;