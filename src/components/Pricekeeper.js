import React, {createContext, useReducer} from 'react'

const initialstate={
    price:0
}
export  const priceContext=createContext()
function reducer(State,action){

    switch(action.type){
        case "priceIncrease":
             {
              const Total=action.payload.reduce((sum,a)=>sum+a,0)
              return {price:Total}

            }
            default:
                return {price:0}
    }
}


export const  Pricekeeper=props=> {
    const [State,dispatch]=useReducer(reducer,initialstate)
    return (
        <div>
        <priceContext.Provider value={{dispatch:dispatch,priceState:State}}>
            {props.children}
            </priceContext.Provider>
        </div>
    )
}



