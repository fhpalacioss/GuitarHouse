import React from 'react'
import { useContext,useState } from 'react';
import {  db } from '../../services/firebaseConfig'
import {  collection, serverTimestamp,addDoc } from 'firebase/firestore'
import { CardContext} from '../../context/CardContext'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


const Form = () => {
    
const [name,setName] = useState('');
const [lastName,setLastName] = useState('');
const [correoValid,setCorreoValid] = useState('');
const [correo,setCorreo] = useState('');
const [telefono,setTelefono] = useState('');


const {cart,totalPrecio,deleteAll} = useContext(CardContext)
const totalCarrito = totalPrecio()
const [oriderId, setOrderId] = useState("");


const enviarDatos = (e) =>{

      e.preventDefault()

      if (correo === correoValid) {
        const obj ={
          buyer:{
              name,
              lastName,
              telefono: telefono,
              email:correo},
          items:cart,
          total:totalCarrito,
          date:serverTimestamp(),
        }
  
        const orderCollection = collection(db,"orders")
        addDoc(orderCollection, obj)
        .then((res)=>{
          setOrderId(res.id)
        
        })
        .catch((error)=>{
          console.log("error", error)
          
        })
        deleteAll();
      } else {
        swal("Error", "Los correos deben ser iguales", "warning");
      }   
}


const handleName =(e) => setName(e.target.value);
const handleLastName =(e) => setLastName(e.target.value);
const handleTelefono =(e) => setTelefono(e.target.value);
const handleCorreo =(e) => setCorreo(e.target.value);
const handleCorreoValid =(e) => setCorreoValid(e.target.value);

  if(oriderId){
    return(

            <div className='MainContainer directionContainer'>
                <div className='MarginButtoncart'>
                    <span className='textCart'>Gracias por tu compra tu numero de orden es : {oriderId}</span>
                </div>
                <div>
                 <Link to='/' className="btn btn-dark">Home</Link>
                </div>
            </div>
          )  
  }

  return (
    <div>


<div className='itemCartContainer row'>


<div className="col-xl-3" ></div>
  <div className="col-xl-6"  >
  <form action='' onSubmit={enviarDatos}>
        <div>
            <div className="mb-3">
                <label for="name" className="form-label">Nombre</label>
                <input type="text" className="form-control"  placeholder='Nombre' name="nombre" value={name} onChange={handleName}></input>
            </div>
            <div className="mb-3">
                <label for="Apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control"  placeholder='Apellido' name="apellido" value={lastName} onChange={handleLastName}></input>
            </div>
            <div className="mb-3">
                <label for="telefono" className="form-label">Telefono</label>
                <input type="text" className="form-control"  placeholder='telefono' name="telefono" value={telefono} onChange={handleTelefono}></input>
            </div>
            <div className="mb-3">
                <label for="correo" className="form-label">Correo</label>
                <input type="email"  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" className="form-control"  placeholder='Correo' name="correo" value={correo} onChange={handleCorreo}></input>
            </div>
            <div className="mb-3">
                <label for="correoValid" className="form-label">Repita su Correo</label>
                <input type="email"  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" className="form-control"  placeholder='Repita su Correo' name="correoValid" value={correoValid} onChange={handleCorreoValid}></input>
            </div>
            <button className='btn btn-outline-success'>Enviar</button>
            </div>
        </form>
  </div>
 <div className="col-xl-3"></div>
  </div>
  </div>
  )
}

export default Form