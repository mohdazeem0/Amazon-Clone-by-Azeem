import { red } from "@material-ui/core/colors";

export const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      //Logic for adding item in cart
      break;
    case "REMOVE_FROM_CART":
      //Logic to remove item from cart
      break;
    default:
      return state;
  }
}
export default reducer;
