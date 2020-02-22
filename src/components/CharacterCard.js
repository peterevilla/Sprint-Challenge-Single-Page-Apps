import React from "react";
import { Card, CardTitle, CardImg, CardBody } from "reactstrap";

const CharacterCard = ({ data }) => {
  console.log(data)
  return (
    <div className="character-list">
      {data.map(item => (
        <Card>
          <CardTitle>{item.name}</CardTitle>
          <CardImg src={item.image}></CardImg>
          <CardBody>
            <ul>
            <li>Status: {item.status}</li>
            <li>Specie: {item.species}</li>
            <li>Location: {item.location.name}</li>
            </ul>
           
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CharacterCard;
