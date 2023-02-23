const initialState = {
  data: [],
};
const searchReducer = (state = initialState, { type, data, searchTerm }) => {
  let list = [];

  switch (type) {
    case "SEARCH_PRODUCT":
      list = data.filter((el) =>
        el.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        data: list,
        searching: true,
      };
    case "SORT_PRODUCT_PRICE_ASCENDING":
      list = data.sort((a, b) => a.price - b.price);
      return {
        data: list,
      };
    case "SORT_PRODUCT_PRICE_DECREASING":
      list = data.sort((a, b) => b.price - a.price);
      return {
        data: list,
      };
    case "SAME_CATEGORY_PRODUCT":
      if (searchTerm.toLowerCase()=="tous") {
        list =data ;
      } else {
        list = data.filter((el) =>
        el.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      }
      return {
        data: list,
      };

    default:
      return {
        data: list,
        searching: false,
      };
  }
};
export default searchReducer;
