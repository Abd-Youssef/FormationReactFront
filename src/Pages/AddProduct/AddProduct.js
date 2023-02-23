import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, showCategories } from "../../Api/Api";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Textarea from "../../Components/Textarea/Textarea";

export default function AddProduct() {
  const navigate = useNavigate();
  const [stateSuccess, setstateSuccess] = useState();
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });
  const [stateCategorie, setstateCategorie] = useState();
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onChangeCategory = (e) => {
    setstateCategorie(e.target.value);
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
      //navigate("/product");
      setstateSuccess(true);
      setState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
      });
      setstateCategorie();
    } else {
      setstateSuccess(false);
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
    getCategories();
  }, []);
  const [selectedOption, setSelectedOption] = useState("Rien");
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("selectedOption", event.target.value);
    setState({
      ...state,
      category: event.target.value,
    });
  };

  return (
    <div className="flex justify-content column-direction  align-center height-100 width-100 ">
      {stateSuccess == true ? (
        <div
          className={
            "flex  justify-content align-center  mx-16 bg-green border width-25 height-50px"
          }
        >
          <label className="white">
            SUCCESS : le produit est ajouté avec succés{" "}
          </label>
        </div>
      ) : (
        <></>
      )}
      {stateSuccess == false ? (
        <div
          className={
            "flex  justify-content align-center  mx-16 bg-red border width-25 height-50px"
          }
        >
          <label className="white">ERREUR : vérifier les champ </label>
        </div>
      ) : (
        <></>
      )}
      <div className="width-50 column-direction shadow justify-content align-center flex px-16 py-16 m-16">
        <h1 className="h blue">Ajouter un produit</h1>
        <Input
          className={""}
          label={"Nom"}
          placeholder={"Nom de produit"}
          onChange={(e) => onChange(e, "name")}
          value={state.name}
        />

        <div className="py-0 width-100 px-16 py-16">
          <label className="m-2 form-label ">Catégorie</label>
          <div className={"flex mx-16 space-evenly"}>
            <div className="flex">
              <input
                className="input-border height-20px "
                type="radio"
                id="radio1"
                name="radio-group"
                value="New Category"
                onChange={(e) => onChangeCategory(e)}
              />
              <label for="radio1">Nouvelle Catégorie</label>
            </div>
            <div className="flex">
              <input
                className="input-border height-20px "
                type="radio"
                id="radio2"
                name="radio-group"
                value="Old Category"
                onChange={(e) => onChangeCategory(e)}
              />
              <label for="radio2">Déja existe</label>
            </div>
          </div>
          {stateCategorie == "New Category" ? (
            <div className={"flex mx-16 "}>
              <input
                className="input-border width-100 height-20px"
                type="String"
                value={state.category}
                placeholder={"Catégorie"}
                onChange={(e) => onChange(e, "category")}
              />
            </div>
          ) : (
            <></>
          )}
          {stateCategorie == "Old Category" ? (
            <div className={"flex mx-16 "}>
              <select
                className="py-8 px-8 mx-16 width-100 "
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="Tous">Tous</option>
                {categories.map((el, index) => (
                  <option value={el}>{el}</option>
                ))}
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Textarea
          className={"height-50"}
          label={"Description"}
          placeholder={"Description sur le produit"}
          onChange={(e) => onChange(e, "description")}
          value={state.description}
        />
        <Input
          className={""}
          label={"Prix"}
          placeholder={"Prix de produit"}
          onChange={(e) => onChange(e, "price")}
          value={state.price}
          type={"number"}
        />
        <Input
          className={""}
          label={"Stock"}
          placeholder={"Stock initialle"}
          onChange={(e) => onChange(e, "stock")}
          value={state.stock}
          type={"number"}
        />
        <Button
          onClick={onAdd}
          name={"Ajouter un Produit"}
          className="width-50 height-100 default-input bg-gold button-border button-font"
        />
      </div>
    </div>
  );
}
