import { apiUrl , headers } from "../Config/config";
import STORE from "../Redux/Store";
const getToken=()=>{

    return STORE.getState().auth.token
}

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

const addProduct = async (body)=>{
    const response = await fetch ( apiUrl+"product/add",{
        method: "POST",
        body:body,
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })

    return response.json() ;

}
const showProduct = async ()=> {
    const response = await fetch ( apiUrl+"product",{
        method: "GET",
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })
    return response.json() ;
  
}
const getProduct = async (id)=> {
    const response = await fetch ( apiUrl+"product/find/"+id,{
        method: "GET",
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })
    return response.json() ;
  
}
const showCategories = async ()=> {
    const response = await fetch ( apiUrl+"product/categories/",{
        method: "GET",
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })
    return response.json() ;
  
}
const addCommand = async (body)=>{
    const response = await fetch ( apiUrl+"command/add",{
        method: "POST",
        body:body,
        headers:{
            ...headers,
            "Authorization":"Bearer "+getToken(),
        }    
    })

    return response.json() ;

}

export {
    signUp,
    signIn,   
    addProduct, 
    showProduct,
    addCommand,
    getProduct,
    showCategories,
}