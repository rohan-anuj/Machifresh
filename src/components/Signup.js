import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import CloseIcon from '@mui/icons-material/Close';




import LoadingButton from '@mui/lab/LoadingButton';


function Signup() {
    const [visible,setVisible]=useState(false)
    const [name, setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
    const [response,setResponse]=useState()
    const [open,setOpen]=useState(false)
    const [err,seterror]=useState(false)
    const [alt,setalt]=useState(false)
  
    
    
    
    console.log(email,name, phone,password,address)
    console.log(response)
            


    const handledSubmit=async (e)=>{
      e.preventDefault()
    
           setVisible(true)
      
            axios.post("https://machifresh-api.herokuapp.com/register",{name:name,email:email,phone:phone,password:password,address:address})
            .then(res=> setResponse(res.status))
            .catch(err=>setResponse(err.response.status))
           
             
            if(response===200)
             {
              setOpen(true)
              setVisible(false)
              
              
              
            }
            else if(response===409){
              setVisible(false)
            seterror(true)
              
               
            }
            else{
              setVisible(false)
             setalt(true)
            }
        

    }

  
    return (
        <div className="flex flex-col h-screen w-screen  justify-between items-center">
        <div className="shadow-2xl  p-4  flex-wrap h-screen   overflow-y-auto  overflow-x-hidden flex flex-col mt-32 items-center justify-between">
        
      <form  >
      
          <div className="flex justify-center items-center">
          <Box  sx={{  zIndex:'10', position:'absolute' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          user Added successfully
          
        </Alert>
      </Collapse>  
      </Box>
      <Box   sx={{  zIndex:'10', position:'absolute' }}>
      <Collapse in={err}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                seterror(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
        <div className="flex flex-col justify-between items-center">
       <h1> user Exists!</h1>
          
        <p>Try another account or else sign-in with the same</p>
        </div>

          
        </Alert>
      </Collapse>  
      </Box>
      <Box   sx={{  zIndex:'10', position:'absolute' }}>
      <Collapse in={alt}>
        <Alert severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setalt(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
        Try again!

          
        </Alert>
      </Collapse>  
      </Box>
      </div>
        <div>
        


        <TextField id="email" type="email" required style={{margin:"20px"}} onChange={e=>setEmail(e.target.value)} value={email} label="Email" variant="outlined" />
        <TextField id="name" required style={{margin:"20px",borderColor:"black"}} onChange={e=>setName(e.target.value)} value={name} label="Name" variant="outlined" />
       

        </div>
        <div>
        <TextField id="phone" type="tel"  required style={{margin:"20px",borderColor:"black"}}  value={phone} onChange={e=>setPhone(e.target.value)} label="phone" variant="outlined" />


        <TextField id="Password" type="password" required style={{margin:"20px",borderColor:"black"}} label="Password" onChange={e=>setPassword(e.target.value)} value={password} variant="outlined" />


        </div>
        <div>


        <TextField id="Address" style={{margin:"20px",borderColor:"black"}} label="Address"  value={address} onChange={e=>setAddress(e.target.value)} multiline
        rows={4}  />




        </div>
        <div className="flex justify-center mt-5 items-center">
            {/* <button className="text-white font-bold bg-blue-500 rounded-xl w-28 p-3" onClick={()=>{setVisible(true)}}>Signup</button> */}
            
         {visible?<LoadingButton loading variant="outlined">
  Submit
</LoadingButton>:<LoadingButton className="w-40 h-10 text-white bg-blue-500 border-2 border-blue-500"  onClick={handledSubmit} variant="outlined">
  Submit
</LoadingButton>} 


            

        </div>
        
        </form>











    


        </div>
            
        </div>
    )
}

export default Signup
