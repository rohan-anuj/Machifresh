import { createContext, useReducer } from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route,Link, Switch} from "react-router-dom"
import Cart from './components/Cart';
import Signup from './components/Signup';
import Signin from './components/Signin';
import CheckoutPage from './components/CheckoutPage';
import {Pricekeeper} from './components/Pricekeeper';



export const datacontext=createContext()
const initialstate={
  basket:[],
  
  
}
function reducer(state,action){
  
  
  switch(action.type){
    case "Add":
      return  {basket:[action.payload,...state.basket.filter(item=>item._id!==action.payload._id)]}  
      case "remove":return  { basket:state.basket.filter(item=>item.name!==action.payload)} 
     
      case "increment": {
        let objid=state.basket.findIndex((obj=>obj._id===action.payload.id))
             state.basket[objid].Totalprice=action.payload.Totalprice
             state.basket[objid].TotalQuantity=action.payload.TotalQuantity
             
             
                
                let uniquebasket=[...new Set(state.basket,...state.basket)]
                let newArray=Array.from(uniquebasket)
              
                

                
                return {basket:newArray}

      }
     
    
       
              
        

      default:
        return {  basket:[]  }
  }
}


function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  
  return (
    
    <div className="flex flex-col   h-full">
    <Pricekeeper>
    <datacontext.Provider value={ {state:state, dispatch:dispatch}} > 
    
    
    <Router><Header /><Switch> 
     <Route exact path="/"> 

     <Home/>
     
     
     
     
     </Route>
     <Route path="/cart"><Cart/> </Route>
     <Route path="/signup"> <Signup/></Route>
     <Route path="/signin"><Signin/></Route>
     <Route path="/checkout"><CheckoutPage/></Route>
     </Switch>
     
      <div className="bottom-0 left-0 right-0 absolute sticky z-10 w-screen  flex justify-around items-center h-10 border-black bg-white border-t-2 md:hidden lg:hidden xl:hidden 2xl:hidden">
      <Link to="/">  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer hover:text-red-500 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg></Link>
       <Link to="/cart"> <svg xmlns="http://www.w3.org/2000/svg" className="w-8 cursor-pointer hover:text-red-500 h-6  " viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg></Link>

       <Link to="/signin"> <svg xmlns="http://www.w3.org/2000/svg" className="w-8 cursor-pointer hover:text-red-500 h-6  " viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg></Link>
      <Link to="/signup">  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 cursor-pointer hover:text-red-500  h-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg></Link>



      </div> 
      </Router>   
      
      </datacontext.Provider>
      </Pricekeeper>
    </div>
    
  );
}

export default App;
