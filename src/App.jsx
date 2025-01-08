import ArrayCrudTodo from "./assets/New-todo"
// import TodoLogic from './assets/todo-list'
// import Crud from "./assets/crud.jsx"
// import UseEffect from './assets/UseEffect'
// // import FormEffect from './assets/FormEffect'
// import TodoForm from "./assets/todo-childtoparent/TodoForm"
// import ParentCounter from "./assets/childtoparent_props/Parent.jsx"
import './App.css'
import ProductListHOC from './assets/Hoc/HocLogic'
import LoaderView from './assets/Hoc/MainLogic'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import IncrementComponet from "./assets/react_navigation/increment"
// import Decrement from "./assets/react_navigation/decrement"
// import Multi_value from "./assets/react_navigation/multi_value"
// import ColorComponet from "./assets/react_navigation/colorPath"
// import A from "./assets/light_to_dark/A"
// import AutoFocusWithReactJSUseRef from './assets/userefauto/UseRefAutoFocus'
// import InputAutoFocusQuery from './assets/queryfolder/InputAutoFocusQuery'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <IncrementComponet />,
//   },
//   {
//     path: "/decrement",
//     element: <Decrement />,
//   },
//   {
//     path: "/multi_value",
//     element: <Multi_value />,
//   },{
//     path:"color/:colorKey",
//     element:<ColorComponet />
//   }
//   {
//     path: "/",
//     element: <InputAutoFocusQuery />,
//   }
// ]);

function App() {


  return (
    <>
    {/* <TodoLogic/> */}
    <ToastContainer />
    <ArrayCrudTodo/>
      {/* <Crud/> */}
      {/* <UseEffect/> */}
      {/* <FormEffect/> */}
      {/* <ParentCounter /> */}
      {/* <TodoForm/> */}
        {/* <RouterProvider router={router} />       */}
        {/* <A/> */}
        {/* <AutoFocusWithReactJSUseRef/> */}
        {/* <RouterProvider router={router} />  */}
        {/* <ProductListHOC/>
        <LoaderView/> */}
    </>
  )
}

export default App
