import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/about";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Header from "./components/header";
const AppLayout = () => {
  return(
  <div className="app">
    <Header/> 
    <Body/>
    </div>
);
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
