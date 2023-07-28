import { createContext, useContext, useReducer } from "react";

export const StateContext=createContext();/*data layer을 준비*/

export const StateProvider=({reducer ,initialState,chideren})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {chideren}
        </StateContext.Provider>
            
);
export const useStateValue=()=> useContext(StateContext);
/* 전역데이터를 위해보안된게 context*/