import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {useHistory} from "react-router-dom"

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import CloseIcon from '@mui/icons-material/Close';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'js-cookie'




import LoadingButton from '@mui/lab/LoadingButton';

function Signin() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    const [response,setResponse]=useState()
    const [open,setOpen]=useState()
    const [err,setError]=useState(false)
    const [loading,setLoading]=useState(false)
    const history=useHistory()
    const [errresponse,seterrresponse]=useState()

    const handledSubmit= async (e)=>{
        

        e.preventDefault()
        if(email==="") return setError(true)
        if (password==="") return setError(true)
        axios.post("https://machifresh-api.herokuapp.com/login",{email:email,password:password})
        .then(res=>setResponse(res.data))
        .catch(err=>seterrresponse(err.response.status))
        console.log(response)
        if(response){
            setOpen(true)
            Cookies.set("auth",response.tokens)
            
        }
        else if(errresponse===401 ){
          setError(true)
        }
        else{
          setLoading(true)
        }

    }
    return (
        <div className="flex h-screen w-screen justify-center items-center">
        <div className="shadow-xl mt-20 flex justify-center items-center flex-col">
            <form className="flex flex-col p-5 justify-around items-center">
            <AccountCircleIcon style={{width:"300px", height:"100px"}}  className="text-blue-900"/>
            <TextField label="Email" style={{margin:"20px"}} value={email} onChange={e=>setEmail(e.target.value)}  type="email" required variant="outlined" />
            <TextField label="Password" style={{margin:"20px"}} type="password" value={password} onChange={e=>setPassword(e.target.value)}   variant="outlined" />
           
        <LoadingButton style={{margin:"20px",width:"200px"}}  onClick={handledSubmit} variant="outlined" >Submit</LoadingButton>
              </form>
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
                history.push("/")
                
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          user logged in
          
        </Alert>
      </Collapse>  
      </Box>
      <Box  sx={{  zIndex:'10', position:'absolute' }}>
      <Collapse in={err}>
        <Alert
        severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError(false);

              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Enter valid data
          
        </Alert>
      </Collapse>  
      </Box>
      <Box  sx={{  zIndex:'10', position:'absolute' }}>
      <Collapse in={loading}>
        <Alert
        severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setLoading(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          data loading... wait for a second!
          
        </Alert>
      </Collapse>  
      </Box>
        </div>
            
        </div>
    )
}

export default Signin
