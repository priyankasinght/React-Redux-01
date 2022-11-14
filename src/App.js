import React from "react";
import Home from "./Components/Home";
import {useSelector} from 'react-redux';
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const msg = useSelector(state=>state.msg)

  return (
    <BrowserRouter>
    <div>{msg}</div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>

    </BrowserRouter>
  );
}


export default App;