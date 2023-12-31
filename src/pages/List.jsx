import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


import './helper.css'
// import { useState ,useEffect} from "react";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const List =()=>{
    
    const[book,setbook]=useState(null);
    const[isbn,setisbn]=useState(null);
    const[price,setprice]=useState(null);
    const[image,setimage]=useState(null);
    const handlesubmit=()=>{
        console.log(book,isbn,price,image);
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
                            <Button sx={{width:'298px',mx:'auto',mb:0}} component="label" variant="outlined" startIcon={<CloudUploadIcon />} onChange={(e)=>setimage(e.target.files[0])}>Add Image<VisuallyHiddenInput type="file" /></Button>
                            <Button sx={{width:'300px',mx:'auto',mt:2,mb:0}} variant="contained" onClick={()=>{handlesubmit()}}>Create</Button>
                    </Box>
            </Box>
        </>
    );
}


export default List;