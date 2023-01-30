const SetUser = (data) => {
  return {
    type: "SET_USER",
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
const ClearProduct = (data) => {
  return {
    type: "CLEAR_PANIER",
    data: data,
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
};
