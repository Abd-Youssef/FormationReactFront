import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showProduct } from "../../Api/Api";
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
  const [data, setData] = useState([]);
  const panier = useSelector((state) => state.panier.data);
  const ref = useRef();
  const getProducts = async () => {
    const response = await showProduct();
    if (response.status === 200) {
      setData(response.data);
    }
  };
  useEffect(() => {
      getProducts();
  }, []);
  useEffect(() => {
    if (search.searching) {
      setData(search.data);
    } else {
    }
    console.log("mount");
  }, [search.data]);
  const goToTop = () => {
    ref.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex">
        <Filter />
        <div className="width-100 ">
          <NavPages data={data} />
          <div
            className="flex flex-wrap align-center justify-content product width-100 "
            ref={ref}
          >
            {data.map((el, index) => (
              <Card
                link={`${el._id}`}
                key={index}
                price={el.price}
                name={el.name}
                description={el.description}
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
              >
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Button name={"up"} onClick={goToTop} />
    </>
  );
}
