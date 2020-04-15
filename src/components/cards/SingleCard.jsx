import React from "react";
import Countup from "react-countup";

const SingleCard = (props) => {
  return (
    <div className="col-sm">
      <div className="card">
        <div className="card-body">
          <h5 className={`card-title text-${props.color}`}>{props.category}</h5>
          <p className="card-text">
            <Countup start={0} end={props.count} duration={3} separator="," />
          </p>
        </div>
      </div>
    </div>
  );
};
export default SingleCard;
