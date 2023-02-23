import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { LANG, LangContext } from "../../Contexte/langContexte";

function PrivateRoute(props) {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const lang = useSelector((state) => state.setting.lang);
  if (token) {
    return (
      <LangContext.Provider value={LANG[lang]}>
        {/* <Button name={"Lang"} onClick={() => setLang (lang === "fr" ? "an" : "fr")}/> */}
        <NavBar />
        <div className="page-content m-16 ">
          {props.role === user.role || !props.role ? props.component : null}
        </div>
        <Footer />
      </LangContext.Provider>
    );
  } else {
    return <Navigate to={"/signin"} replace />;
  }
}

export default PrivateRoute;
