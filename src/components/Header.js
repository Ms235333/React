
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {

  const [btnNameReact,setbtnNameReact]=useState("login");
  // let btnNameReact="login"
  console.log("header Render");
    useEffect(()=>{
      console.log("useEffect Called");
});
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}alt="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        <button className="login" onClick={()=>{
          btnNameReact==="login"?setbtnNameReact("logout")
          :setbtnNameReact("login");
        }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;