import React from "react";
// import "./style.css";
import wiki from "../../images/wiki-pour.png";

const Card = (props) => {
  let images = [wiki];

  let Img = images.filter((image) => image.includes(props.Image)
  );
  console.log("hi");

  return (
    <div>
        <h1>hi</h1>
      <h1>{props.Title}</h1>

      <img src={Img} alt={props.Alt} />
    </div>
  );
}

export default Card;
