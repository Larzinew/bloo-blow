import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ imageSrc, altText, title, description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} alt={altText} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to="/appointment/new">
          <Button variant="primary">Book Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;

