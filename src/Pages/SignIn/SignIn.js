import { useState } from "react";
import { signIn } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useDispatch } from "react-redux";
import { SetUser } from "../../Redux/Action";
import amazonPng from "../../Assets/amazon.png";

function SignIn(params) {
  const Dispatch = useDispatch();
  const [state, setState] = useState({
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
    const response = await signIn(
      JSON.stringify({
        email: state.email,
        password: state.password,
      })
    );
    console.log(response);
    if (response.status === 200) {
      Dispatch(SetUser({ user: response.data, token: response.token }));
      navigate("/dashboard");
    }
    if (response.status === 404) {
    }
  };
  const onNavigate = ()=>{
    navigate("/signup");
  }

  return (
    <div className="card-sign  justify-content align-center flex  py-0 height-100 width-100 ">
      <div className="card-sign  justify-content align-center flex  py-0 width-100 ">
          <img src={amazonPng} height={"45px"} width={"200px"}></img>
      </div>
      <div className="card-sign shadow justify-content align-center flex px-16 py-16 m-16">
        <h1 className="h">Login</h1>
        <Input
          className={"width-100 input-border"}
          label={"Email"}
          placeholder={""}
          onChange={(e) => onChange(e, "email")}
          value={state.email}
        />
        <Input
          type={"password"}
          label={"Password"}
          placeholder={""}
          onChange={(e) => onChange(e, "password")}
          value={state.password}
          className={"width-100 input-border"}
        />

        <Button
          onClick={onSubmit}
          name={"Sign In"}
          className="width-100 height-100 default-input bg-gold button-border button-font"
        />
      </div>

      <div className="mg-0">
        <h5 className="h ">New to Amazon ?</h5>
      </div>
      <div className="card-sign justify-content align-center flex ">
        <Button
          onClick={onNavigate}
          name={"Creat an account"}
          className="width-100 height-100 default-input bg-gold button-border button-font"
        />
      </div>
    </div>
  );
}
export { SignIn };
