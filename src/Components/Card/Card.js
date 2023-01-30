import React from "react";
import { useDispatch } from "react-redux";
import { SetPanier } from "../../Redux/Action";
import Button from "../Button/Button";
import product from "../../Assets/product.png";

function Card(props) {
  return (
    <div className="card   m-16">
      <img src={product} className="width-50" />
      {props.name && <h1 className="m-4 blueFont"> {props.name}</h1>}
      {props.description && <p className="m-4"> {props.description}</p>}
      {props.price && <h2 className="m-4">{props.price} DT</h2>}
      {props.stock && (
        <p className="m-4">
          <b style={{ color: "red" }}>{props.stock} </b>piéce disponible
        </p>
      )}
      {props.number && <p className="m-4"> number of item : {props.number}</p>}
      {!props.exist && (
        <div className="width-100 m-0 relative">
          <Button
            className="width-100 height-100 m-0 px-16 py-16 b1 blue bottom"
            name="commander"
            onClick={props.onClick}
          />
        </div>
      )}
      {props.exist && (
        <div className="width-100 m-0">
          <Button
            className="width-50 height-100 m-0"
            name="+"
            onClick={props.add}
          />
          <Button
            className="width-50 height-100 m-0 "
            name="-"
            onClick={props.minus}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
