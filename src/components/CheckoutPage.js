import React, {useContext} from 'react'
import { datacontext } from '../App'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { priceContext } from './Pricekeeper';

function CheckoutPage() {
    const Cartdata=useContext(datacontext)
    const Pricedata=useContext(priceContext)
    
  
    return (
        <div className="flex flex-col mt-20 h-screen  justify-center items-center ">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{fontSize:"20px",fontWeight:"bolder"}} colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right" style={{fontSize:"20px",fontWeight:"bolder"}}>Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{fontSize:"20px",fontWeight:"bolder"}}>ProductName</TableCell>
            
            <TableCell align="right" style={{fontSize:"20px",fontWeight:"bolder"}}>TotalQuantity</TableCell>
            <TableCell align="right "  style={{fontSize:"20px",fontWeight:"bolder"}}>Totalprice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Cartdata.state.basket.map((row) => (
            <TableRow >
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.TotalQuantity}</TableCell>
              <TableCell align="right">₹ {row.Totalprice}</TableCell>
            
            </TableRow>
          ))}

          
      
          <TableRow >
            <TableCell>Total</TableCell>
         <TableCell align="right">₹ {Pricedata.priceState.price}</TableCell> 
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <button className="p-2 rounded bg-red-700 m-5 focus:outline-none focus:ring-2 focus:ring-red-600  focus:border-transparent text-white font-bold">Buy Now</button>


        </div>
    )
}

export default CheckoutPage
