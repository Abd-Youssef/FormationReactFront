import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SameCategoryProduct } from "../../Redux/Action";
import Search from "../Search/Search";

function Filter(props) {
  const [selectedOption, setSelectedOption] = useState("Rien");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("selectedOption", event.target.value);
    dispatch(SameCategoryProduct(props.data, event.target.value));
  };
  return (
    <div className="width-25 flex bg-light column-direction m-16 border ">
      <div className="bg-blue height-50px border-up flex align-center px-16">
        <span className="white">Filter</span>
      </div>
      <div id="nav-search" className="flex my-16  ">
        <Search data={props.TemporeryData} />
      </div>
      <div className=" flex mx-16    ">
        <span className="blue ">Categories</span>
        <select
          className="py-8 px-8 mx-16 width-100 "
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="Tous">Tous</option>
          {props.categories.map((el, index) => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
