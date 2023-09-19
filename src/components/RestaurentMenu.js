import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurentMenu =()=>{
  
    const [restaurentInfo, setRestaurentInfo]=useState(null)

   useEffect(()=>{
    fetchMenu();
   },[])

   
 const fetchMenu= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=17166&catalog_qa=undefined&submitAction=ENTER#");
 
    const json= await data.json();
   
    setRestaurentInfo(json.data);
   
 }
 if(restaurentInfo===null) return (<Shimmer/>);
 const data1= restaurentInfo?.cards[0]?.card?.card?.info;
 
 const {itemCards}= restaurentInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

 console.log(itemCards)
    return (
    <div  className="menu card">
     <div><h3>{data1.name}</h3></div>
     <div className="menu-info">
       {data1.cuisines.join(",")} 
        <h4>{data1.avgRatingString}  </h4> 
        <h5> {data1.costForTwoMessage}</h5>
        <h4> {data1.city} </h4>
        </div>
      </div>
    )
}

export default RestaurentMenu;