import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDatail'
import { useParams } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import { db } from '../../services/firebaseConfig'
import {  collection, doc,getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {

  const[items,setItems] = useState({});
  const [loading,setloading] = useState(true);
  const{detail} = useParams();


  useEffect(()=>{

    const collectionProd = collection(db,'productos')
    const ref = doc(collectionProd,detail);

    getDoc(ref)
    .then((res) => {
          setItems({
            id: res.id,...res.data(),
          })
         }) 
         .catch((rej) => {
        })
        .finally(()=>{
            setloading(false)
        });
      
  },[detail])
  
  if(loading){
    return (
      <div className='MainContainer'>
        <ScaleLoader
          color="#343a40"
          size={30}
        />
      </div>
    )
  }
    return (
      <div>
        <ItemDetail prodcut={items} />
    
      </div>
    )
  
  
}

export default ItemDetailContainer