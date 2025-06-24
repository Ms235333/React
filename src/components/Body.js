import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmeri";

const Body=()=>
{// const {Nitika,Vijay}=props// console.log(); // const resData=Nitika
    const [restaurantlist,setRestaurantList]=useState([]);
    const [searchText, setSearchText]=useState("");
    const [filteredList,setFilteredList]=useState([]);
    console.log(restaurantlist);
    console.log("header Render");
  useEffect(()=>{
    console.log("useEffect Called");
  });

    useEffect(()=>{
        fetchData();
        
    },[]);
    
    const fetchData=async()=>{
        console.log("hsiah")
         const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         );
          
         const json=await data.json();
         console.log(json);
         console.log("vsg",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
         setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // if(restaurantlist.length===0)
    // {
    //     return<Shimmer/>
    // }
  return restaurantlist.length===0?(<Shimmer/>):
    (
    <div className="Body">
      <div className="filter">
        <div className="Search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>
            {
              setSearchText(e.target.value);
            }
          }/> 
          <button onClick={()=>
            {
              console.log(searchText);
              const filteredList=restaurantlist.filter((res)=>res.info.name.toLowerCase().includes(searchText)
            );
             setFilteredList(filteredList);
            
            }}>Search</button>
          </div>
       <button className="filter-btn" onClick={()=>{
        const filteredList=restaurantlist.filter((res)=>res.info.avgRating>4.6);
        setRestaurantList(filteredList);
       }}>Top Rated Restaurant</button>
       </div>
       <div className="Res-container">
        {filteredList.map((restaurant)=>
            (
                <Restaurantcard key={restaurant.info.id}resData={restaurant}/>
            )
        )}
       </div>
      {/* <div className="Res-container">
         {
          resList.map(restaurant=>
          (
            <Restaurantcard key={restaurant.info.id}resData={restaurant}/>
          )
          )
         }
      </div> */}
    </div>
  )
}
export default Body;
