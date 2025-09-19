
// import {  useReducer,createContext } from "react";

// export const DataContext = createContext();

// const DataProvider = ({ children, reducer, initialState }) => {
//   return (
//     <DataContext.Provider value={useReducer(reducer, initialState)}>
//       {children}
//     </DataContext.Provider>
//   )
// }
// export default DataProvider;
// // const [state, dispatch] = useReducer(reducer, initialState);
// import { useReducer } from "react";
// import DataContext from "./DataContext";

// // export const DataContext = createContext();

// const DataProvider = ({ children, reducer, initialState }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <DataContext.Provider value={{ state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataProvider;
import { useReducer } from "react";
import DataContext from "./DataContext";

const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

