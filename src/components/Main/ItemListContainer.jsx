import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {products} from '../ItemList'
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
const[items,setItems] = useState([]);
const{category} = useParams();

useEffect(()=>{
  
   const getItems = () => {

    return new Promise((res,rej) => {
      const producFilter = products.filter((prop) => prop.category === category )
      const ref = category ?  producFilter : products;
      setTimeout(() => {
        res(ref)
      }, 2000);
    });
   };


   getItems()
     .then((res) => {
      setItems(res)
     }) 
     .catch((rej) => {
      console .log(rej)
    });

  // fetch('https://fakestoreapi.com/products')
  //   .then((res) =>{ return res.json()})
  //   .then((res) =>{
  //     setItems(res)
  //     console.log(res)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   });
    
},[category])

  
  return (
    <div className='MainContainer'>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer