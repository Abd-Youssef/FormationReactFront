import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCommand } from "../../Api/Api";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import { ClearProduct, DesincrementProduct, IncrementProduct } from "../../Redux/Action";

export default function Panier() {
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("panier", panier.data);
  const AddComand = async () => {
    const response = await addCommand(
      JSON.stringify({
        products: 
          panier.data.map((el, index) => ({
            product: el._id,
            quantity: el.count,
          })),
        
        // { product: panier.data._id, quantity: panier.data.count }
      })
    );
    console.log("response", response);
    if (response.status === 201) {
      //use navigate
      navigate("/product");
    }
  };
  const resetCommand = () => {

  };
  return (
    <div>
      <div className="flex flex-wrap product">
        {panier.data.map((el, index) => (
          <Card
            key={index}
            price={el.price}
            name={el.name}
            description={el.description}
            number={el.count}
            image={el.image?.url}
            add={() => dispatch(IncrementProduct(el))}
            minus={() => dispatch(DesincrementProduct(el))}
            exist={true}
          />
        ))}
      </div>
      <Button name={"Passer Commande"} onClick={AddComand} />
      <Button name={"Vider panier"} onClick={() => dispatch(ClearProduct())} />

    </div>
  );
}
