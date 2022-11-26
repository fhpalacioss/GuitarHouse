import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { db } from '../../services/firebaseConfig'
import {  collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({greeting}) => {
const [items,setItems] = useState([]);
const [loading,setloading] = useState(true)
const {category} = useParams();



useEffect(()=>{


  const collectionProd = collection(db,'productos')

  
  const ref = category 
          ? query(collectionProd, where('category', "==",category))
          :collectionProd

    getDocs(ref)
    .then((res) =>{
      const products = res.docs.map((prod) =>{
        return {
          id:prod.id, ...prod.data()
        }
      });
      setItems(products)
  
      console.log(products)
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      setloading(false)
    });
    
  

     return () =>{
       setloading(true)
     }
    
  },[category])

  if(loading){
    return (
      <div className='MainContainer'>
        <Skeleton count={5} width={300} height={50} />
      </div>
      
    )
  }
  return (
    <div className='MainContainer'>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer