import { apiUrl , headers } from "../Config/config";

const signUp= async (body)=>{
    const response = await fetch( apiUrl+"signup", {
        method: "POST",
        body: body,
        headers:headers 
      })
        return response.json();
}

const signIn = async (body)=> {
    const response = await fetch ( apiUrl+"login",{
        method: "POST",
        body:body,
        headers:headers     
    })
    return response.json() ;
}


export {
    signUp,
    signIn,    
}