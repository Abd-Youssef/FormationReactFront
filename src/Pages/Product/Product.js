import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { getProduct } from "../../Api/Api";
import product from "../../Assets/product.png";
import Button from "../../Components/Button/Button";
import SlidingCards from "../../Components/SlidingCards/SlidingCards";
import { AddItem } from "../../Redux/Action";

function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [stateSuccess, setstateSuccess] = useState();
  const getSingleProduct = async () => {
    const response = await getProduct(id);
    if (response.status === 200) {
      setData(response.data);
    }
    console.log(response.data.image.url);
  };

  const location = useLocation();

  useEffect(() => {
    getSingleProduct();
  }, [location]);

  return (
    <div>
      <div className="flex  justify-content column-direction  align-center">
        {stateSuccess === true ? (
          <div
            className={
              "flex  justify-content align-center  mx-16 bg-green border width-50 height-50px"
            }
          >
            <label className="white">
              SUCCESS : le produit est ajouté aux <b>PANIER</b> avec succés{" "}
            </label>
          </div>
        ) : (
          <></>
        )}
        <div className="flex width-75 height-100 border  m-16  ">
          <div className=" flex justify-content align-center width-50  overflow px-16 py-16 bg-light ">
            <img src={data.image?.url} className="width-75 hover " />
          </div>
          <div className=" flex  column-direction space-between width-50 overflow px-16 py-16 ">
            <div className=" justify-content align-center  ">
              <h3 className="m-4 blueFont py-16"> {data.name}</h3>
              <p className="m-4">{data.category}</p>
              {data.stock === 0 ? (
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
              name={
                data.stock > 0 && stateSuccess != true
                  ? "Ajouter au panier"
                  : stateSuccess == true
                  ? "Produit ajouté aux panier"
                  : "Epuisé"
              }
              onClick={() => {
                dispatch(AddItem(data));
                setstateSuccess(true);
              }}
              disabled={data.stock > 0 && stateSuccess != true ? false : true}
            />
          </div>
        </div>
      </div>
      <SlidingCards />
    </div>
  );
}

export default Product;
