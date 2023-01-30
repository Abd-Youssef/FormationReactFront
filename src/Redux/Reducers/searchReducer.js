const initialState = {
  data: [],
};
const searchReducer = (state = initialState, { type, data ,searchTerm }) => {
  let list = [];

  switch (type) {
    case "SEARCH_PRODUCT":
        list = data.filter((el) => el.name.toLowerCase().includes(searchTerm.toLowerCase()) );
      return {
        data: list,
        searching: true,
      };
    default:
      return {
        data: list,
        searching: false,
      };
  }
};
export default searchReducer;
