import React from "react";
import { useDispatch } from "react-redux";
import { SetPanier } from "../../Redux/Action";
import Button from "../Button/Button";
import product from "../../Assets/product.png";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card flex space-between  column-direction m-16 ">
      <Link to={props.link} className="overflow">
        <img src={product} className="width-50 overflow" />
        {props.name && <h3 className="m-4 blueFont"> {props.name}</h3>}
        {/* {props.description && <p className="m-4"> {props.description}</p>} */}
        {props.price && <h2 className="m-4 ">{props.price} DT</h2>}
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
      </Link>
      {!props.exist && (
        <div className="width-100  m-0 relative">
          <Button
            className={(props.stock>0) ? "width-100 height-100 m-0 px-16 py-16 b1 bg-blue" : "width-100 height-100 m-0 px-16 py-16 b1 bg-gold"  }

            name={props.stock > 0 ? "Ajouter au panier" : "Epuisé"}
            onClick={props.onClick}
            disabled={(props.stock>0) ? false : true  }
            
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
