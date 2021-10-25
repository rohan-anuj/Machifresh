import React, {useContext} from 'react'
import { datacontext } from '../App'
import Cartitem from './Cartitem'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router'
import {priceContext} from "./Pricekeeper"




function Cart() {

    const data=useContext(datacontext)
    const priceData=useContext(priceContext)
    const history=useHistory()

    
    
    
    return (

        <div className=" w-screen flex flex-col justify-between  h-max mt-10">
         <div className="flex md:flex-col  justify-around items-center bg-white z-10 sticky mb-10 absolute top-12 flex-wrap"> <h1 className="font-bold text-sm sm:text-sm md:text-xl mt-10 xl:text-2xl 2xl:text-2xl text-gray-600 ">Your cart has {data?data.state.basket.length:0} items </h1> <div className="p-2  h-18 shadow-xl rounded flex flex-col"><button className="p-2 text-white bg-yellow-500  mx-4 rounded"  onClick={function handledClick(){
        const auth=Cookies.get("auth")
        priceData.dispatch({type:"priceIncrease",payload:data.state.basket.map(product=>parseInt(product.Totalprice))})
        if(auth){
            history.push("/checkout")

           



        }
        else{
            history.push("/signin")
        }
    
    }}>Checkout</button></div> </div> 
        <Cartitem data={data.state.basket}/>

            
        </div>



    
        
    )
}

export default Cart
