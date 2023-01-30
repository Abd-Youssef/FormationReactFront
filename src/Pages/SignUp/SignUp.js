import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Api/Api";
import amazonPng from "../../Assets/amazon.png";

function SignUp() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onSubmit = async () => {
    const response = await signUp(
      JSON.stringify({
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
        password: state.password,
      })
    );
    console.log(response);
    if (response.status === 201) {
      //use navigate
      navigate("/signin");
    }
  };
  const onNavigate = () => {
    navigate("/signin");
  };

  return (
    <div className="card-sign  justify-content align-center flex  py-0 height-100 width-100 ">
      <div className="card-sign  justify-content align-center flex  py-0 width-100 ">
        <img src={amazonPng} height={"45px"} width={"200px"}></img>
      </div>
      <div className="card-sign shadow justify-content align-center flex px-16 py-16 m-16">
        <h1 className="h">Sign Up</h1>
        <Input
          className={"width-100 input-border"}
          label={"First Name"}
          placeholder={""}
          onChange={(e) => onChange(e, "first_name")}
          value={state.first_name}
        />
        <Input
          className={"width-100 input-border"}
          label={"Last Name"}
          placeholder={""}
          onChange={(e) => onChange(e, "last_name")}
          value={state.last_name}
        />
        <Input
          className={"width-100 input-border"}
          label={"Email"}
          placeholder={""}
          onChange={(e) => onChange(e, "email")}
          value={state.email}
        />
        <Input
          label={"Password"}
          placeholder={""}
          onChange={(e) => onChange(e, "password")}
          value={state.password}
          className={"width-100 input-border"}
        />

        <Button
          onClick={onSubmit}
          name={"Validate"}
          className="width-100 height-100 default-input bg-gold button-border button-font"
        />
      </div>

      <div className="mg-0">
        <h5 className="h ">You already have an account</h5>
      </div>
      <div className="card-sign justify-content align-center flex ">
        <Button
          onClick={onNavigate}
          name={"Login"}
          className="width-100 height-100 default-input bg-gold button-border button-font"
        />
      </div>
    </div>
  );
}
export { SignUp };
