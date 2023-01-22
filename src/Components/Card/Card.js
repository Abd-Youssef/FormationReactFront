import React from "react";
import { useDispatch } from "react-redux";
import { SetPanier } from "../../Redux/Action";
import Button from "../Button/Button";

function Card(props) {
    console.log("exist",props.exist);
  return (
    <div className="card px-16 py-16 m-16">
      {props.name && <p> name : {props.name}</p>}
      {props.description && <p> description : {props.description}</p>}
      {props.price && <p> price : {props.price}</p>}
      {props.stock && <p> stock : {props.stock}</p>}
      {props.number && <p> number of item : {props.number}</p>}
      {!props.exist && <Button name="commander" onClick={props.onClick} />}
      {props.exist &&<>
      
       <Button name="+" onClick={props.add} />
       <Button name="-" onClick={props.minus} />
      </>
      }
    </div>
  );
}

export default Card;
