import RestaurantData from "../../Utills/RestaurentData"
import Restaurent from "./Restaurent"

function SearchBar(){
    return (
          <div className="searchBar">
                <input type="text" placeholder="Search.."  name="search"/>
            </div>
    )
} 

let Body = ()=>{
      
    return (
    <div className="body">
    <SearchBar/>
     <div className="rest-container">
     {RestaurantData.map(data=>{
         return  <Restaurent key={data.data.id} restData={data} />
     })}    
       </div>
    </div>

)}


export default Body;