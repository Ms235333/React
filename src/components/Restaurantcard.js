import {CDN_URL} from "../utils/constants";
import { useEffect,useState } from "react";
const Restaurantcard=(props)=>
{
    console.log("jhhh==",props)
  const{resData}=props;
  console.log("ressdata=============",resData)
  const {
    cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla
  } =resData?.info;
     

  const [count, setCount] = useState(0);
    console.log("header Render");
    useEffect(()=>{
      console.log("useEffect Called");
});
  
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
      <h1>{name}</h1>
      <h4>{cuisines.join(",")}</h4>
    <h4>{costForTwo}</h4>
     <h4>{avgRating} Stars</h4>
       <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};
export default Restaurantcard;