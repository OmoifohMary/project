// //create context .jsx file
// //import createContent which is used to create a hook
// // three steps of creating hooks  = 1. we create the hook,we  provide  the hook  and we use the hook
// // we invoke it and then use it to set a varaible
// //then we create a component, a component is a function that return a jsx value.
// //when ever we import something from react its good we first save them in a variable
// //the variable + .provider as the  way of providing wat is in create content
// // then we set the value of create content cos it is an empty container
// // for u to put a value, you have to declear the variable
// //where we want to use the value is in the children so we set the arguement directly to parament
// //then we set our hook before the funcion how do we do this we set a variable, and give it a funtion with a use content effect what do we want to use we want to use create content
// //that is what ever we have set
// //we then inport the main function name in the main.jsx
// //then import use contect in the pages u want to use it
// //then set the function as a variable so that you can use the variable
// import { useState } from "react";
// import { createContext, useContext } from "react";

// const Globalcontext = createContext();
// //set a hook

// export const useAppGlobal = () => useContext(Globalcontext);

// const AppContext = ({ children }) => {
//   const [count, setCount] = useState(0);
//   const handleDelete = () => {
//     setCount((c) => c * 0);
//     console.log(count);
//   };

//   return (
//     <Globalcontext.Provider value={{ count, setCount, handleDelete }}>
//       {children}
//     </Globalcontext.Provider>
//   );
// };
// export default AppContext;
import { createContext, useContext } from "react";
import { useState } from "react";
const myInHook = createContext();

export const useHook = () => useContext(myInHook);

const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const myDelete = () => setCount((c) => c + 1);
  return (
    <myInHook.Provider value={{ count, setCount, myDelete }}>
      {children}
    </myInHook.Provider>
  );
};
export default AppContext;
