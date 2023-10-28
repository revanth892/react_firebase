import React from "react";

import { Routes,Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup";
import ViewOrder from "./pages/ViewOrder";
import ViewOrderDetail from "./pages/ViewOrderDetail";

function App() {
  return(
    <>
      {/* <Loginpage /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/book/list" element={<List/>}/>
        <Route path="/book/view/:bookId" element={<Detail/>}/>
        <Route path="/book/orders" element={<ViewOrder/>}/>
        <Route path="/books/orders/:bookId" element={<ViewOrderDetail/>}/>
      </Routes>
    </>
  )
}

export default App;
