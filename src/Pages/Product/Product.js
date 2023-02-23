import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../Api/Api";
import product from "../../Assets/product.png";
import Button from "../../Components/Button/Button";
import SlidingCards from "../../Components/SlidingCards/SlidingCards";
import { AddItem } from "../../Redux/Action";

function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const getSingleProduct = async () => {
    const response = await getProduct(id);
    if (response.status === 200) {
      setData(response.data);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  console.log("data", data);
  return (
    <div>
      <div className="flex  justify-content ">
        <div className="flex width-75 height-100 border  m-16  ">
          <div className=" flex justify-content align-center width-50  overflow px-16 py-16 bg-light ">
            <img src={product} className="width-75 hover " />
          </div>
          <div className=" flex  column-direction space-between width-50 overflow px-16 py-16 ">
            <div className=" justify-content align-center  ">
              <h3 className="m-4 blueFont py-16"> {data.name}</h3>
              <p className="m-4">{data.category}</p>
              {data.stock == 0 ? (
                <p className="m-4">
                  <b className="m-4 red">Out Of Stock </b>
                </p>
              ) : (
                <p className="m-4">
                  <b className="green">EN Stock </b>
                </p>
              )}
              <h1 className="m-4 red">{data.price},000 DT</h1>
              <hr className="ligne" />
            </div>
            <p className="m-4 py-8"> {data.description}</p>
            {data.stock > 0 && (
              <p className="m-4">
                Nombre des piéce disponible :
                <b className="green"> {data.stock}</b>{" "}
              </p>
            )}
            <Button
              className={
                data.stock > 0
                  ? " m-0 px-16 py-16 button bg-green"
                  : "m-0 px-16 py-16 button bg-gold"
              }
              name={data.stock > 0 ? "Ajouter au panier" : "Epuisé"}
              onClick={() => dispatch(AddItem(data))}
              disabled={data.stock > 0 ? false : true}
            />
          </div>
        </div>
      </div>
      <SlidingCards />
    </div>
  );
}

export default Product;
