import React from "react";
import { useDispatch } from "react-redux";
import { SetPanier } from "../../Redux/Action";
import Button from "../Button/Button";
import product from "../../Assets/product.png";

function Card(props) {
  console.log(props.name, props.stock);
  return (
    <div className="card flex space-between  column-direction m-16 ">
      <div className="overflow">
        <img src={product} className="width-50 overflow" />
        {props.name && <h1 className="m-4 blueFont"> {props.name}</h1>}
        {props.description && <p className="m-4"> {props.description}</p>}
        {props.price && <h2 className="m-4">{props.price} DT</h2>}
        {props.stock>0 && (
          <p className="m-4">
            <b style={{ color: "red" }}>{props.stock} </b>piéce disponible
          </p>
        )}

        {props.stock==0 && (
          <p className="m-4">
            <b style={{ color: "red" }}>Out Of Stock </b>
          </p>
        )}
        {props.number && (
          <p className="m-4"> number of item : {props.number}</p>
        )}
      </div>
      {!props.exist && (
        <div className="width-100  m-0 relative">
          <Button
            className="width-100 height-100 m-0 px-16 py-16 b1 blue  "
            name="Commander"
            onClick={props.onClick}
            disabled={(props.stock>0) ? false : true }
            
          />
        </div>
      )}
      {props.exist && (
        <div className="width-100 m-0 ">
          <Button
            className="width-50 height-100 m-0 height-100 m-0 px-16 py-16 b1 bg-red"
            name="-"
            onClick={props.minus}
          />
          <Button
            className="width-50 height-100 m-0 px-16 py-16 b1 bg-green"
            name="+"
            onClick={props.add}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
