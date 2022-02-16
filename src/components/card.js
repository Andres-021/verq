import {Card, Badge} from 'react-bootstrap';

const CardBootstrap = (props) => {

  return(
    <Card className="bg-black text-white text-start" style={{ width: '18rem' }}>
      <Card.Header>
        <h6>{props.h}</h6>
      </Card.Header>
      <Card.Body >
        <Card.Text className="text-desbording-vertical">{props.cardText}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Badge pill bg="warning" className="text-black">{props.badgeVote}</Badge>
      </Card.Footer>
    </Card>
  );
}

export default CardBootstrap;