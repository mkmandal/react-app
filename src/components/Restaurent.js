import {RESTRO_CDN_LOGO} from "../../Utills/Constants";

let Restaurent = (props)=>{
    const restData=props.restData;
    const {
     cloudinaryImageId,
     cuisines,
     deliveryTime,
     avgRating,
     name,
     costForTwoString

} = restData?.info;
    
   return <div className="restauron">
    <div className="res-card">
      <h2>{props.name}</h2>
      <img className="res-img" src={RESTRO_CDN_LOGO+cloudinaryImageId}/>
     <div className="item-info">
          <span className="dish-name" >{name}</span>
          <div className="rating" >{avgRating}</div>
     </div>
     <div className="item-info">
          <span className="cusines" >{cuisines.join(',')}</span>
          <div className="offer" >{costForTwoString}</div>
     </div>
     <div className="item-info">
          <span className="blanks" ></span>
          <div className="delivery-time" >{deliveryTime}</div>
     </div>
     </div>
    </div>

}    


export default Restaurent;