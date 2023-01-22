import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LangContext } from "../../Contexte/langContexte";
import { SetLang, SetUser } from "../../Redux/Action";
import Button from "../Button/Button";
import panierImg from "../../Assets/panier.png";

export default function NavBar() {
  const langList = useContext(LangContext);
  const lang = useSelector((state) => state.setting.lang);
  const user = useSelector((state) => state.auth.user);
  const panier = useSelector((state) => state.panier.data);

  console.log("panier",panier.length);
  const dispatch = useDispatch();
  return (
    <div className=" navbar space-between align-center flex  py-0">
      <div>
        <Link to={"/dashboard"} className="Link px-16">
          Dashboard
        </Link>
        <Link to={"/product"} className="Link px-16">
          {langList.products}
        </Link>
        {user.role === "admin" && (
          <Link to={"/product/add"} className="Link px-16">
            {langList.addproducts}
          </Link>
        )}
      </div>
      <div className="flex">
        <div style={{marginTop:"12px",marginRight:"12px",position :"relative"}}>
          <Link to={"/panier"} >
            <img src={panierImg} height={"26px"} width={"26px"}></img>
            <div
              style={{background: "red " ,width:"16px", height:"16px" ,
                      position:"absolute" , top : "-3px", right:"-4px",
                      borderRadius:"50%"}}>
                        {panier.length}
            </div>
          </Link>
        </div>
        <Button
          name={"Lang"}
          onClick={() =>
            dispatch(SetLang({ lang: lang === "fr" ? "an" : "fr" }))
          }
        />
        <Button
          name={"Log Out"}
          onClick={() => dispatch(SetUser({ user: null, token: null }))}
        />
      </div>
    </div>
  );
}
