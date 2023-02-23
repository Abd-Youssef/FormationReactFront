import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showProduct } from "../../Api/Api";
import { searchProduct } from "../../Redux/Action";
import Input from "../Input/Input";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  // const getProducts = async () => {
  //   const response = await showProduct();
  //   if (response.status === 200) {
  //     setData(response.data);
  //   }
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  const onChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchProduct(props.data, e.target.value));
  };

  return (
    <>
      <Input
        type={"text"}
        placeholder={"Chercher un article..."}
        onChange={(e) => onChange(e)}
        value={searchTerm}
        className={"width-100 input-border searchTerm m-0"}
      />
    </>
  );
}

export default Search;
