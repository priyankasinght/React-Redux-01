import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { setIsLight } from "../slice";
import { Link } from 'react-router-dom'

const Navbar = () => {

  const isLight = useSelector((state)=>state.isLight)
  const dispatch = useDispatch()

  return (
    <div>
        <div>Geekster</div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <br></br>
        <Link to="/service">Service</Link>
        <br></br>
        <button onClick={()=>{
          const message = `I have changed theme to ${isLight?"Dark":"Light"}`
          dispatch(setIsLight(message))}}>Toggal Theme to {isLight?"Dark":"Light"}</button>   
    </div>
  )
}

export default Navbar