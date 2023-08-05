import React from 'react'
import {imageCDN} from "./config";

const Card = ({restaurantData}) => {

   const handleCartClick=()=>{
    console.log("clicke cart add");
   }
  
  return (
    <div className='w-[300px] border border-green-500 rounded p-4'>
        <img className='w-[300px] p-2 ' src={imageCDN+restaurantData.info.cloudinaryImageId} alt="" />
        <h1>{restaurantData.info.name}</h1>
        <p>{restaurantData.info.avgRatingString}</p>
        <p>{restaurantData.info.costForTwo}</p>
        <p>{restaurantData.info.locality}</p>
        <button onClick={()=>{handleCartClick()}} className='bg-green-400 text-white font-bold px-2 rounded'>ADD</button>
    </div>
  )
}

export default Card
