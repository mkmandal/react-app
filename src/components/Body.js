import RestaurentData from "../../Utills/RestaurentData"
import Restaurent from "./Restaurent"
import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";


let Body = ()=>{
  const [RestaurentData1,setrestaurentList]=useState(null);
  const [RestaurentData2,setrestaurentListFilter]=useState(null);
  const [search, setsearch] = useState('');

  useEffect(() => {
    FetchData();
       
  }, []);
 //State Variable

 const FetchData= async ()=>{
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setrestaurentList(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setrestaurentListFilter(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  
}
 //react hooks ==> they are normal js utility function

 // locat state Variable 

//48:48 /06
//Normal js Variable
//op

//let restaurentList=[]

 //let restaurentList=RestaurentData;
   if(RestaurentData2===null) return <Shimmer/>
    return (
    <div className="body">
      <div className="top-section">
      <div className="searchBar">
                <input type="text" placeholder="Search.." id="search" name="search" onKeyUp={(event) => {
                  setsearch(event.target.value);
                }
             }/>
             <button onClick={()=>{
              FilteredrestaurentList=RestaurentData1.filter(res=>res.info.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              setrestaurentListFilter(FilteredrestaurentList)
              }}>search</button>
            </div>
      <div className="filter-btn">
        <button type="button" className="btn btn-primary" onClick={
          () => {
            console.log(RestaurentData1)
             FilteredrestaurentList=RestaurentData1.filter(res=> res.info.avgRating > 4
            
            )
             setrestaurentListFilter(FilteredrestaurentList)
             }
            }>Filter Restarents </button>
         </div>  

         <div className="filter-btn">
          <button type="button" className="btn btn-primary" onClick={() => {
            setrestaurentListFilter(RestaurentData1)
          }}
            >Reset Filter </button>
         </div>  
      </div>
      <div className="rest-container">
     {RestaurentData2.map(data=>{
         return  <Restaurent key={data.info.id} restData={data} />
       
     })}    
       </div>
    </div>

)}


export default Body;