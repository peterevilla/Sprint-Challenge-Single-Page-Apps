import React from "react";
import { Card, CardTitle, CardImg, CardBody } from "reactstrap";

export default function LocationCard({ data }) {
  return (

<Card >
  <CardTitle>{data.name}</CardTitle>
  <CardBody>
  <p>Type:{data.type}</p>
  <p>{data.dimension}</p>
  <p>{data.residents}</p>
  </CardBody>
</Card>

  )
}
