import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

function Navbar() {

  return (
    <>
     <Box sx={{ flexGrow: 1,mx:'auto'}}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <Box display='flex' flexDirection='row' sx={{width:800 ,backgroundColor:"pink",mx:'auto'}}>
                {/* <Box display='flex' flexDirection='row' sx={{backgroundColor:'black'}}>    */}
                    <Typography variant="h6">MYapp</Typography>
                    <Box display='flex' flexDirection='row' sx={{backgroundColor:'blue',ml:'auto'}}>    
                        <Link style={{textDecoration:'none'}} to="/" sx={{mt:0.5,mr:1}}><Typography sx={{mt:0.5,mr:1,color:'white'}}>Home</Typography></Link>
                        <Link style={{textDecoration:'none'}} to="/book/list" sx={{mt:0.5,mr:1}}><Typography sx={{mt:0.5,mr:1,color:'white'}}>Add Listing</Typography></Link>
                        <Link style={{textDecoration:'none'}} to="/book/orders" sx={{mt:0.5,mr:1}}><Typography sx={{mt:0.5,mr:1,color:'white'}}>item3</Typography></Link>
                    </Box>
                {/* </Box> */}
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
export default Navbar;