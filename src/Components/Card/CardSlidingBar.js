import React from "react";
import Button from "../Button/Button";
import product from "../../Assets/product.png";
import { Link } from "react-router-dom";

function CardSlidingBar(props) {
  return (
    <div className="text-center width-75 flex space-between  column-direction m-16 border">
      <Link to={"/product/"+props.link}  className="overflow">
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
      </Link>
      {(!props.exist) ? (
        <div className="width-100  m-0 relative">
          <Button
            className={(props.stock>0) ? "width-100 height-100 m-0 px-16 py-16 b1 bg-blue" : "width-100 height-100 m-0 px-16 py-16 b1 bg-gold"  }

            name={props.stock > 0 ? "Ajouter au panier" : "Epuisé"}
            onClick={props.onClick}
            disabled={(props.stock>0) ? false : true  }
            
          />
        </div>
      ): (<div className="width-100  m-0 relative">
      <Button
        className={"width-100 height-100 m-0 px-16 py-16 b1 bg-green"  }

        name={"Ajouté"}
        disabled={(props.stock>0) ? false : true  }
        
      />
    </div>)
        }
    </div>
  );
}

export default CardSlidingBar;
