import axios from "axios";
import { apiUrl , headers ,headersFormData} from "../Config/config";
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

// await axios.post(apiUrl + "product/add", body, {
//     headers: {
//       ...headersFormData,
//       "Authorization": "Bearer " + getToken(),
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//     return response.data ;
//   })
//   .catch(function (error) {
//     console.log(error.response);
//     throws error.response;
//   })

const addProduct = async (body)=>{
    try {
        const response = await axios ( {
            method: "POST",
            url : apiUrl+"product/add",
            data:body,
            headers:{
                ...headersFormData,
                "Authorization":"Bearer "+getToken(),
            }    
        })
    
        return response.data ;
        
    } catch (error) {
        console.log("error",error);
        return error.response.data;
    }

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