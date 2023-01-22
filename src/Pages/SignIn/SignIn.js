import { useState } from "react";
import { signIn } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useDispatch } from "react-redux";
import { SetUser } from "../../Redux/Action";

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
  };

  return (
    <div className="card-sign  justify-content  align-center flex  py-0 ">
      <div>
        <Input
          className={""}
          label={"Email"}
          placeholder={"Email"}
          onChange={(e) => onChange(e, "email")}
          value={state.email}
        />
        <Input
          label={"Password"}
          placeholder={"Password"}
          onChange={(e) => onChange(e, "password")}
          value={state.password}
          className={"password"}
        />
      </div>
      <Button onClick={onSubmit} name={"Sign In"} />
    </div>
  );
}
export { SignIn };
