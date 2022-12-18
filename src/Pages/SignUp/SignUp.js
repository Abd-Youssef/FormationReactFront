import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input"
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Api/Api";

function SignUp() {
    const [state, setState] = useState({
        first_name : "",
        last_name : "",
        email : "",
        password : "",

    });
    const navigate = useNavigate();
    const onChange=(e,key) =>{
        setState({
            ...state,
            [key] : e.target.value,
        })
    }
    const onSubmit= async () =>{
        const response =await signUp(
            JSON.stringify({
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                password: state.password,
              }),
        )
        console.log(response);
        if (response.status===201){
            //use navigate
            navigate("/signin");
        }
    }
    
    return <> 
        <Input  label={"First Name"}
                placeholder={"First Name"}
                onChange={(e) => onChange(e,"first_name")}
                value={state.first_name}/>
        <Input  label={"Last Name"}
                placeholder={"Last Name"}
                onChange={(e) => onChange(e,"last_name")}
                value={state.last_name}/>
        <Input  label={"Email"}
                placeholder={"email"}
                onChange={(e) => onChange(e,"email")}
                value={state.email}/>
        <Input  label={"Password"}
                placeholder={"Password"}
                onChange={(e) => onChange(e,"password")}
                value={state.password}/>
        <Button  onClick={onSubmit} name={"SignUp"}/>

    </>
}
export {SignUp}