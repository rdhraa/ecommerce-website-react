import React from 'react';
import { Carousel, Image, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home-body">
      
      <Row className="main-row">
       
        <Col md={3} className="left-column">
          <CardComponent src="/cosmetics.jpg" />
          <CardComponent src="/watches.jpg" />
        </Col>

        
        <Col md={6} className="carousel-column">
          <CarouselComponent />
          
          
          <Link to="/login">
            <Button className="sign-in-btn"size="lg">
              Sign In
            </Button>
          </Link>
        </Col>

        
        <Col md={3} className="right-column">
          <CardComponent src="/electronics.jpg" />
          <CardComponent src="/shoes.jpg" />
        </Col>
      </Row>
    </div>
  );
};


const CardComponent = ({ src }) => {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={src} className="card-img"/>
    </Card>
  );
};


const CarouselComponent = () => {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item interval={1000}>
        <Image src="/womenfashion.jpg" alt="Women Fashion" />
        <Carousel.Caption>
          <h3>WOMEN WINTER WEAR</h3>
          <p>Min 30% Off</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image src="/menfashion.jpg" alt="Men Fashion" />
        <Carousel.Caption>
          <h3>MEN'S FASHION</h3>
          <p>Upto 70% off</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <Image src="/kidsfashion2.png" alt="Kids Fashion" />
        <Carousel.Caption>
          <h3>TINY TRENDS</h3>
          <p>30% Off Kids' Fashion</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
