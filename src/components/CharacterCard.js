import React from "react";
import { Card, CardTitle, CardImg, CardBody } from "reactstrap";

const CharacterCard = ({ data }) => {
  console.log(data)
  return (
    <div className="character-list">
        <Card>
          <CardTitle>{data.name}</CardTitle>
          <CardImg src={data.image}></CardImg>
          <CardBody>
            <ul>
            <li>Status: {data.status}</li>
            <li>Specie: {data.species}</li>
            <li>Location: {data.location.name}</li>
            </ul>
           
          </CardBody>
        </Card>
     
    </div>
  );
};

export default CharacterCard;
