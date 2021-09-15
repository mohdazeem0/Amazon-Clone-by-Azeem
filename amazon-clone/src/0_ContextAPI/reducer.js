export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      //Logic for adding item in cart
      break;
    case "REMOVE_FROM_CART":
      return { ...state };
      //Logic to remove item from cart
      break;
    default:
      return state;
  }
};
export default reducer;
