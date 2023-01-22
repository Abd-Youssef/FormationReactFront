import React from "react"

const LANG ={
    fr :{
        home: "Page accueil",
        products:"Produits",
        addproducts:"Ajouter Produit"
    },
    
    an :{
        home: "Home Page",
        products:"Products",
        addproducts:"Add Product"
    }
}
const LangContext = React.createContext(LANG)
export{
    LANG,
    LangContext,
}