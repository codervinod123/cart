import React, { useEffect,useState } from 'react'
// import {imageCDN} from "../config";
import {itemsURL} from "./config";
import Card from './Card';

import Shimmer from './Shimmer';

// import {useDispatch} from "react-redux"

const Body = () => {
    
  // const dispatch=useDispatch();
  // const items=dispatch(store=>store.cart.items);
  // console.log(items);
    

    const [restaurant,setRestaurant]=useState([]);
    // const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    
    useEffect(()=>{
        getRestaurant();
    },[])

    const getRestaurant=async()=>{
         try {
              const data=await fetch(itemsURL);
              const json=await data.json();
              console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
              setRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
         } catch (error) {
              console.log(`error has occured due to ${error}`);
         }
    }

  

  return  restaurant.length===0? <Shimmer/> :(

    
    <div className='flex flex-wrap'>
         <>
           {
            restaurant.map((item,index)=>{
              return(
                <div key={index}>
                  <Card restaurantData={item}/>
                </div>
              )
            }) 
           }
         </>
    </div>
  )
}

export default Body;
