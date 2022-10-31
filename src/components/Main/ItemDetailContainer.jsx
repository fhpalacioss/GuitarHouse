import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDatail'
import {products} from '../ItemList'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const[items,setItems] = useState({});
  const{detail} = useParams();
  useEffect(()=>{
    
     const getItems = () => {
  
      return new Promise((res,rej) => {
        const producFilter = products.find((prop) => prop.id === Number(detail) )
        const ref = detail ?  producFilter : products;
        setTimeout(() => {
          res(ref)
        }, 2000);
        
      });
     };
  
  
     getItems()
       .then((res) => {
        setItems(res)
        console.log (res)
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
      
  },[detail])
  

  return (
    <div>
        <ItemDetail prodcut={items} />
    </div>
  )
}

export default ItemDetailContainer