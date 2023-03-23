import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showCategories, showProduct } from "../../Api/Api";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Filter from "../../Components/Filter/Filter";
import NavPages from "../../Components/NavPages/NavPages";
import {
  AddItem,
  DesincrementProduct,
  IncrementProduct,
} from "../../Redux/Action";

export default function Products() {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.panier.data);
  const ref = useRef();
  const [TemporeryData, setTemporeryData] = useState([]);
  //Products
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await showProduct();
    if (response.status === 200) {
      setData(response.data);
      setTemporeryData(response.data);
    }
  };
  //categories :
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const response = await showCategories();
    if (response.status === 200) {
      setCategories(response.data);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  useEffect(() => {
    console.log("mount", TemporeryData);
    setTemporeryData(search.data);
  }, [search.data]);
  const goToTop = () => {
    ref.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex m-16">
        <Filter
          data={data}
          TemporeryData={TemporeryData}
          categories={categories}
        />
        <div className="width-100 ">
          <NavPages data={TemporeryData} />
          <div
            className="flex flex-wrap align-center justify-content product width-100 "
            ref={ref}
          >
            {TemporeryData.map((el, index) => (
              <Card
                link={`${el._id}`}
                key={index}
                price={el.price}
                name={el.name}
                description={el.description}
                image={el.image?.url}
                stock={
                  panier.filter((el2) => el._id === el2._id).length
                    ? el.stock
                    : el.stock
                }
                onClick={() => dispatch(AddItem(el))}
                add={() => dispatch(IncrementProduct(el))}
                minus={() => dispatch(DesincrementProduct(el))}
                exist={
                  panier.filter((el2) => el._id === el2._id).length
                    ? true
                    : false
                }
              ></Card>
            ))}
          </div>
        </div>
      </div>
      <Button name={"up"} onClick={goToTop} />
    </>
  );
}
