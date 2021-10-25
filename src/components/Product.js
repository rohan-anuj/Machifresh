import { useContext } from "react"
import React from 'react'
import { datacontext } from "../App"





function Product({data}) {
    
    
    const controls=useContext(datacontext)
    
    
    
    
    
   
    return (
        <div className=" w-screen   h-max flex   flex-wrap justify-around  items-center ">
        
        {data.map(product=><div className="  h-96 w-72   shadow-2xl mx-5 items-center justify-around flex flex-col flex-wrap   ">
            <img src={product.image} alt="Productimage" className="w-screen h-40 object-fit rounded"/>
            <p className="font-serif ml-5  font-bold text-md w-58">{product.name}</p>
            <p className="m-2">Price: ₹{product.price}/{product.quantity}g</p>
         <button className="p-2 rounded-xl m-2  text-white border-2 border-gray-200 font-bold bg-red-600"  onClick={()=>{
        controls.dispatch({type:"Add",payload:product}) 
        


    } }>Add to Cart +</button>
        </div>)}
            
        </div>
    )
}

export default Product
