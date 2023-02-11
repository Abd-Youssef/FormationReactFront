import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SortAscendingProduct, SortDecreasingProduct } from "../../Redux/Action";

function NavPages(props) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("Rien");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("selectedOption", event.target.value);
    switch (event.target.value) {
      case "Croissant":
        dispatch(SortAscendingProduct(props.data));

        break;
      case "Décroissant":
        dispatch(SortDecreasingProduct(props.data));

        break;

      default:
        break;
    }
  };

  return (
    <div className=" height-50px space-between bg-light  m-16 border">
      <div className="flex align-center height-100 ">
        <span className="blue m-16 ">Trier par</span>
        <select
          className="py-8 px-8"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="Rien" >Rien</option>
          <option value="Croissant">Prix croissant</option>
          <option value="Décroissant">Prix décroissant</option>
        </select>
      </div>
      <div className="flex align-center height-100 "></div>
    </div>
  );
}

export default NavPages;
