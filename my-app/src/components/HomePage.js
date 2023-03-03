import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function HomePage(props) {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/v4cLgnV/thought-catalog-o0-Qqw21-0-NI-unsplash-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h-25"
          src="https://i.ibb.co/v4cLgnV/thought-catalog-o0-Qqw21-0-NI-unsplash-1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/v4cLgnV/thought-catalog-o0-Qqw21-0-NI-unsplash-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </>
  );
}

export default HomePage;

