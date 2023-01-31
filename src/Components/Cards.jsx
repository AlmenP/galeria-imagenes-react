import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card class="m-5 p-2 bg-light border" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ props.src }/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="warning">Ver más...</Button>
      </Card.Body>
    </Card>


  );
}

export default Cards;