import { useState } from "react"
import { signIn } from "../../Api/Api"
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"

function SignIn(params) {
    const [state,setState]=useState({
        email : "",
        password : "",
    })
    const navigate = useNavigate();

    const onChange=(e,key)=>{
        setState({
            ...state,
            [key]: e.target.value ,
        })

    }
    const onSubmit = async() =>{
        const response = await signIn(
            JSON.stringify({
                email: state.email,
                password : state.password
        }))
        console.log(response);
        navigate("/dashboard")

        
    }

    return <> 
    
    <Input  className={"1"}
            label={"Email"} 
            placeholder={"Email"} 
            onChange={(e) => onChange(e,"email") } 
            value ={state.email}/>
    <Input  label={"Password"} 
            placeholder={"Password"} 
            onChange={(e) => onChange(e,"password")}
            value ={state.password}
            />
    <Button onClick={onSubmit} 
            name={"Sign In"}/>
    </>
}
export {SignIn }