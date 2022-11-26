import { useState,createContext } from "react";

export const  CardContext = createContext();

const CardProvider = (props) => {
    //variables
     const [cart,setCart] = useState([]);
     
     //funciones
    const addCart = (item,cantidad) => {
        
        if (isInCart(item.id)) {
            sumarCantidad(item,cantidad)
        }else{
            setCart([...cart,{...item,cantidad}])
        }
    }
    
    // funcion para ver si esta en el carrito
    const isInCart =(id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    // sumar la cantidad de un mismo producto
    const sumarCantidad = (itemPorAgregar,cantidad) =>{
        const cartActualizado = cart.map((prodDelCarrito) => {
            if(itemPorAgregar.id === prodDelCarrito.id){
     
              const productoActualizado = {
                ...prodDelCarrito,cantidad
              }
              return productoActualizado
            }else{
               return prodDelCarrito;
            }
        })
        setCart(cartActualizado)

    }

    // funcion para vaciar carrito

    const deleteAll = () =>{
        setCart([])
    }

    // funcion para eliminar un solo producto

    const deleteOne = (id) =>{
        const prodFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(prodFiltrados)
    }

    // funcion para sumar el total $ del carrito

    const totalPrecio = () =>{

        let count = 0
        let totalPrice = 0;
        const elementCopy = [...cart]
        elementCopy.forEach((element) => {
            count = count += element.cantidad;
            totalPrice = totalPrice + (element.cantidad * element.price);
        });

        return totalPrice
    }

    //funcion para sumar unidades totales de carrito
    const totalUnidades = () =>{

        let count = 0
        const elementCopy = [...cart]
        elementCopy.forEach((element) => {
            count = count += element.cantidad
        });

        return count
    }

    

    return(
        <CardContext.Provider value={{cart, addCart,deleteAll,deleteOne,totalUnidades,totalPrecio}}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardProvider