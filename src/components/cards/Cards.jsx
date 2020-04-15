import React from "react";
import SingleCard from "./SingleCard";

const Cards = ({ data: { cases, recovered, deaths } }) => {
  return (
    <div className="container">
      <div className="row">
        <SingleCard category="Infected" color="warning" count={cases} />
        <SingleCard category="Recovered" color="success" count={recovered} />
        <SingleCard category="Deaths" color="danger" count={deaths} />
      </div>
    </div>
  );
};
export default Cards;
