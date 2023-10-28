import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './helper.css'
// import { useState ,useEffect} from "react";
const List =()=>{
    
    const[book,setbook]=useState(null);
    const[isbn,setisbn]=useState(null);
    const[price,setprice]=useState(null);
    
    const handlesubmit=()=>{
        console.log(book,isbn,price);
    }

    return(
        <>
           <Box 
            component="form"sx={{}}
            noValidate
            autoComplete="off"
            >
                    <Box display='flex' flexDirection='column' sx={{width:'350px',mx:'auto',border:'solid',mt:10,borderWidth:'1px',borderRadius:'20px',pt:4,pb:4}}>
                            <Typography variant="h5" sx={{mx:'auto',mb:1.5}}>Register Book</Typography>
                            <TextField sx={{width:'300px',mx:'auto',mb:2}} id="standard-basic" label="Book Name" variant="standard"  onChange={(e)=>setbook(e.target.value)}/>
                            <TextField sx={{width:'300px',mx:'auto',mb:2}} id="standard-basic" label="ISBN Number" variant="standard" onChange={(e)=>setisbn(e.target.value)} />
                            <TextField sx={{width:'300px',mx:'auto',mb:2}} id="standard-basic" label="Price" variant="standard" onChange={(e)=>setprice(e.target.value)}/>
                            <Button sx={{width:'300px',mx:'auto',mt:2,mb:1}} variant="contained" onClick={()=>{handlesubmit()}}>Create</Button>
                    </Box>
            </Box>
        </>
    );
}


export default List;