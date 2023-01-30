import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showProduct } from "../../Api/Api";
import { searchProduct } from "../../Redux/Action";
import Input from "../Input/Input";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const response = await showProduct();
    if (response.status === 200) {
      setData(response.data);
    }
  };
  useEffect(() => {
    getProducts();
    console.log("search",data);
  }, []);
  const onChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchProduct(data, e.target.value));
  };

  return (
    <>
      <Input
        type={"text"}
        placeholder={"search..."}
        onChange={(e) => onChange(e)}
        value={searchTerm}
        className={"width-100 input-border px-4 searchTerm"}
      />
    </>
  );
}

export default Search;
