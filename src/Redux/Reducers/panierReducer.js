const initialState = {
  data: [],
};
const panierReducer = (state = initialState, { type, data }) => {
  let list = [];
  let index = -1;

  switch (type) {
    case "ADD_PRODUCT":
      list = [...state.data, { ...data, count: 1 }];
      console.log("ADD_PRODUCT:", list);

      return {
        data: list,
      };
    case "REMOVE_PRODUCT":
      list = state.data.filter((el) => el._id === data._id);
      console.log("REMOVE_PRODUCT:", state.data);

      return {
        data: list,
      };
    case "INCREMENT_PRODUCT":
      index = state.data.findIndex((el) => el._id === data._id);
      let count = state.data[index].count;

      if (index !== -1 && data.stock > count) {
        list = state.data;
        list[index] = { ...list[index], count: list[index].count + 1 };
        console.log("INCREMENT_PRODUCT:", state.data);

        return {
          data: list,
        };
      }
      return state;
    case "DESINCREMENT_PRODUCT":
      index = state.data.findIndex((el) => el._id === data._id);
      list = state.data;

      if (index !== -1 && list[index].count > 1) {
        list[index] = { ...list[index], count: list[index].count - 1 };
        console.log("DESINCREMENT_PRODUCT:", state.data);

        return {
          data: list,
        };
      }
      if (index !== -1 && list[index].count == 1) {
        console.log("count",list[index].count);
        console.log("state",state.data);
        list = state.data.filter((el) => el._id !== data._id);
        console.log("item",list);
        return {
          data: list,
        };
      }
      return state;
    case "CLEAR_PANIER":
      console.log("CLEAR_PANIER:", state.data);

      return initialState;

    default:
      return state;
  }
};
export default panierReducer;
