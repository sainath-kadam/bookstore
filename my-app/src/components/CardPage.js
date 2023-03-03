
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


function CardPage(props) {
  return (
    <>
    <h1> {props.title} </h1>
    <div className="d-flex justify-content-around">
      <Card style={{ width: '25rem', bg:'black'}}>
        <Card.Img variant="top" src="https://i.ibb.co/FxgNf8J/pexels-pixabay-256450.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/q77mjRh/pexels-polina-zimmerman-3747163.jpg" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          </Placeholder>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

    </>
  );
}

export default CardPage;

