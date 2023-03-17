import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap';


function CakeCards() {
  // Array con los datos de los pasteles
  const cakes = [
    {
      name: "Pastel de fresa",
      image: "uno.jpg",
      price: "$15.000",
    },
    {
      name: "Pastel de chocolate",
      image: "2.jpg",
      price: "$18.000",
    },
    {
      name: "Tarta de manzana",
      image: "3.jpg",
      price: "$12.500",
    },
    {
      name: "Pastel de vainilla",
      image: "4.jpg",
      price: "$16.000",
    },
    {
      name: "Pastel de zanahoria",
      image: "5.jpg",
      price: "$20.000",
    },
    {
      name: "Cheesecake",
      image: "6.jpg",
      price: "$22.000",
    },
    {
      name: "Tarta de frutas",
      image: "7.jpg",
      price: "$14.500",
    },
    {
      name: "Pastel de limón",
      image: "8.jpg",
      price: "$17.000",
    },
    {
      name: "Tiramisú",
      image: "9.jpg",
      price: "$25.000",
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5">
    {cakes.map((cake) => (
      <div className="" key={cake.id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`/img/${cake.image}`}
          style={{ height: "300px", width: "100%" }} />
          <Card.Body>
            <Card.Title>{cake.name}</Card.Title>
            <Card.Text>
              Precio: {cake.price} 
            </Card.Text>
            <Button variant="primary">Añadir al carrito</Button>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
);
}

export default CakeCards;
