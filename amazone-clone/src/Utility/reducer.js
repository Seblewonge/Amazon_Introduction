// import { useReducer } from "react"
// import { Type } from "./actiontype"
// export const initialState ={
// baske:[],
// };
// // export const reducer = (state,action)=>{
// switch (action.type){
// case Type.ADD_TO_BASKET:
// return
// {
// ...state,
// basket: [...state,basket,action.item]
// }
// default:
// break;
// }
// }
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       return {
//         ...state,
//         basket: [...state.basket, action.item], 
//       };

//     default:
//       return state; 
//   }
// };
// const [state, dispatch ]= useReducer(reducer,initialState,)
// import { Type } from "./actiontype";

// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
   
//  const existingItem = state.basket.find((item) => item.id === action.item.id)
// if(existingItem){
//   return {
//     ...state,
//          basket: [...state.basket, {...action.item, amount:1}]
//   };
// }
// else
// {
// const updatedBasket = state.basket.map((item)=>
// {
//  return item.id === action.item.id?{...item,amount:item.amount +1}:item
// })
// return {
//    ...state,
// basket:updatedBasket
// }
// }

//     default:
//       return state;
//   }
// };
import { Type } from "./actiontype";

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      // Wrap the case block in braces
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (existingItem) {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }
    }

    default:
      return state;
  }
};
