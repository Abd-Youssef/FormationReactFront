import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LangContext } from "../../Contexte/langContexte";
import { SetLang, SetUser } from "../../Redux/Action";
import Button from "../Button/Button";
import panierImg from "../../Assets/panier.png";
import amazonPng from "../../Assets/amazon2.png";
import Search from "../Search/Search";
import A from "../A/A";

export default function NavBar() {
  const langList = useContext(LangContext);
  const lang = useSelector((state) => state.setting.lang);
  const user = useSelector((state) => state.auth.user);
  const panier = useSelector((state) => state.panier.data);

  const dispatch = useDispatch();
  return (
    <div
      id="navbar"
      className="navbar space-between align-center flex blue  py-0 navbarFont "
    >
      <Link
          to={"/dashboard"}
          className="py-16 px-16"
        >
          <img src={amazonPng} height={"25px"} width={"128px"}></img>
        </Link>

      <div id="nav-pages" className="nav-pages flex height-50 ">
        <Link
          to={"/dashboard"}
          className="Link flex align-center  px-16 navbarFont hover "
        >
          Dashboard
        </Link>
        <Link
          to={"/product"}
          className="Link flex align-center px-16 navbarFont hover  "
        >
          {langList.products}
        </Link>
        {user.role === "admin" && (
          <Link
            to={"/product/add"}
            className="Link flex align-center px-16 navbarFont hover"
          >
            <span> {langList.addproducts}</span>
          </Link>
        )}
        <div id="account" className="dropdown ">
          <ul>
            <li>
              <A name={"Categories"} onClick={() => dispatch()} />
              <ul className="dropdown-menu">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div id="nav-search" className="width-100">
        <Search />
      </div>

      <div id="nav-account" className="flex align-center  ">
        <div id="lang" className="dropdown  ">
          <ul>
            <li class="line-height-0">
              <span>Langue</span>
              <ul class="dropdown-menu py-0 px-0 m-0 ">
                <li class="line-height-3">
                  <Button
                    className="width-100 height-100 blue navbarFont m-0 "
                    name={"Français"}
                    onClick={() =>
                      dispatch(SetLang({ lang: lang === "an" ? "fr" : "fr" }))
                    }
                  />
                </li>
                <li>
                  <Button
                  className="width-100 height-100 blue navbarFont m-0 "
                    name={"English"}
                    onClick={() =>
                      dispatch(SetLang({ lang: lang === "fr" ? "an" : "an" }))
                    }
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="account" className="dropdown ">
          <ul>
            <li>
              <A name={"Account"} onClick={() => dispatch()} />
              <ul className="dropdown-menu">
                <li></li>
                <li></li>
                <li>
                  <Button
                    className="width-100 height-100 blue navbarFont m-0 "

                    name={"Log Out"}
                    onClick={() =>
                      dispatch(SetUser({ user: null, token: null }))
                    }
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="pannier" className="flex px-16">
          <div
            className=""
            style={{
              position: "relative",
            }}
          >
            <Link to={"/panier"}>
              <img src={panierImg} height={"36px"} width={"36px"}></img>
              <div
                className="blue"
                style={{
                  width: "16px",
                  height: "16px",
                  position: "absolute",
                  top: "0px",
                  right: "9px",
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                <p className="m-0 navbarFont orange ">{panier.length}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
