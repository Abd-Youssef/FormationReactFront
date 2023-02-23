const SetUser = (data) => {
  return {
    type: "SET_USER",
    data: data,
  };
};
const SameCategoryProduct = (data,event) => {
  return {
    type: "SAME_CATEGORY_PRODUCT",
    data: data,
    searchTerm:event,
  };
};
const SortAscendingProduct = (data) => {
  return {
    type: "SORT_PRODUCT_PRICE_ASCENDING",
    data: data,
  };
};
const SortDecreasingProduct = (data) => {
  return {
    type: "SORT_PRODUCT_PRICE_DECREASING",
    data: data,
  };
};

const searchProduct = (data, search) => {
  return {
    type: "SEARCH_PRODUCT",
    data: data,
    searchTerm: search,
  };
};
const SetLang = (data) => {
  return {
    type: "SET_LANG",
    data: data,
  };
};
const AddItem = (data) => {
  return {
    type: "ADD_PRODUCT",
    data: data,
  };
};
const RemoveItem = (data) => {
  return {
    type: "REMOVE_PRODUCT",
    data: data,
  };
};
const IncrementProduct = (data) => {
  console.log("data", data);
  return {
    type: "INCREMENT_PRODUCT",
    data: data,
  };
};
const DesincrementProduct = (data) => {
  return {
    type: "DESINCREMENT_PRODUCT",
    data: data,
  };
};
const ClearProduct = () => {
  return {
    type: "CLEAR_PANIER",
   // data: data,
  };
};
export {
  SetUser,
  SetLang,
  AddItem,
  RemoveItem,
  IncrementProduct,
  DesincrementProduct,
  ClearProduct,
  searchProduct,
  SortAscendingProduct,
  SortDecreasingProduct,
  SameCategoryProduct,
   
};
