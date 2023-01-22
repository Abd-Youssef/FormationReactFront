import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../Api/Api";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

export default function AddProduct() {
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });
  const navigate = useNavigate();
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onAdd = async () => {
    const response = await addProduct(
      JSON.stringify({
        name: state.name,
        description: state.description,
        price: state.price,
        category: state.category,
        stock: state.stock,
      })
    );
    console.log(response);
    if (response.status === 201) {
      //use navigate
      navigate("/product");
    }
  };

  return (
    <>
      <Input
        label={"Name"}
        placeholder={"Name"}
        onChange={(e) => onChange(e, "name")}
        value={state.name}
      />
      <Input
        label={"description"}
        placeholder={"description"}
        onChange={(e) => onChange(e, "description")}
        value={state.description}
      />
      <Input
        label={"price"}
        placeholder={"price"}
        onChange={(e) => onChange(e, "price")}
        value={state.price}
        type={"number"}
      />
      <Input
        label={"category"}
        placeholder={"category"}
        onChange={(e) => onChange(e, "category")}
        value={state.category}
      />
      <Input
        label={"stock"}
        placeholder={"stock"}
        onChange={(e) => onChange(e, "stock")}
        value={state.stock}
        type={"number"}
      />
      <Button onClick={onAdd} name={"Add"} />
    </>
  );
}
