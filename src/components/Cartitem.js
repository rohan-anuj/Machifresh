import React, {useContext} from 'react'

import { datacontext } from '../App'

function Cartitem({data}) {

    
   


    const removeAction=useContext(datacontext)
  
    
    
    
    
    return (
        <div className="flex w-screen    h-screen overflow-scroll  flex-col justify-between  ">
        
      
        {data?data.map(product=><div className="p-2  shadow-2xl rounded m-5 flex flex-col w-60 justify-between  items-center "><img className="w-52 h-40 rounded  object-fit " src={product.image} alt="productimage"/><h1 className="m-2"> {product.name}</h1> <p className=" text-gray-600">Price:₹ {product.price}</p> <button className="bg-red-500 m-2 p-2  text-white font-bold  rounded" onClick={()=>{ removeAction.dispatch({type:"remove",payload:product.name}) }}>Remove from cart</button><div className="flex jsutify-around items-center"><button className="p-2 text-white bg-red-500 rounded" onClick={()=>{removeAction.dispatch({type:"increment",payload:{id:product._id,name:product.name,Totalprice:product.price*(product.TotalQuantity+1),TotalQuantity:product.TotalQuantity+1}})
         }}>+</button><h1 className="text-lg font-bold">{product.TotalQuantity<0?0:product.TotalQuantity}</h1><button  className="bg-red-500 p-2 text-white font-bold  rounded" onClick={()=>{removeAction.dispatch({type:"increment",payload:{id:product._id,name:product.name,Totalprice:product.price*(product.TotalQuantity),TotalQuantity:product.TotalQuantity-1}})} }> - </button></div><h1 className="font-bold text-lg"> Totalprice: {product.TotalQuantity===0?0:product.Totalprice}</h1></div>):" "}
            
        </div>
    )
}

export default Cartitem
