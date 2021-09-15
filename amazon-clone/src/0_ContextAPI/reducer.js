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
      //we cloned the cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index >= 0) {
        //item exists in cart, remove it. :(
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product(id: ${action.id})`);
      }
      return { ...state, cart: newCart };
      //Logic to remove item from cart
      break;
    default:
      return state;
  }
};
export default reducer;
