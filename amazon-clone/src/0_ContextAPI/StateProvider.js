//setup data layer
//we need this to track the cart

import { createContext, useContext, useReducer } from "react";

//TJIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
