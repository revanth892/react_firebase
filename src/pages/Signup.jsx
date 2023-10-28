import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
const Signup =()=>{

    const firebase=useFirebase();
    const navigate=useNavigate();
    const[email,setemail]=useState(null);
    const[password,setpassword]=useState(null);
    
    useEffect(()=>{
        if(firebase.isLoggedin)
        {
            navigate('/');
        }
    },[firebase,navigate])

    const handleSubmit=async()=>
    {
        console.log("signing up...");
        const result = await firebase.signuptheuser(email,password);
        console.log("logged",result);
    }

    return(
        <>
            
            <Box 
            component="form"sx={{}}
            noValidate
            autoComplete="off"
            >
                    <Box display='flex' flexDirection='column' sx={{width:'350px',mx:'auto',mt:10,border:'solid',borderWidth:'1px',borderRadius:'20px',pt:4,pb:4}}>
                            <Typography variant="h5" sx={{mx:'auto',mb:1.5}}>Signup</Typography>
                            <TextField sx={{width:'300px',mx:'auto',mb:2}} id="standard-basic" label="Email" variant="standard" onChange={(e)=>setemail(e.target.value)} />
                            <TextField sx={{width:'300px',mx:'auto',mb:2}} id="standard-basic" label="Password" variant="standard" onChange={(e)=>setpassword(e.target.value)}/>
                            <Button sx={{width:'300px',mx:'auto',mt:2,mb:1}} variant="contained" onClick={()=>handleSubmit()}>Signup</Button>
                    </Box>
            </Box>
        </>
    );
}


export default Signup;