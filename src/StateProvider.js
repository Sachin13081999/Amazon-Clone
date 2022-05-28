import React,{ createContext, useContext,
useReducer} from "react"; 
//To prepare the datalayer (in context api concept)
export const StateContext = createContext();
//wrap our app and provide datalayer to every component
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull information for the data layer
export const useStateValue = () => useContext(StateContext);