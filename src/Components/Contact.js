import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from './Navbar';
import './Common.css'


const Contact = () => {

  const isLight = useSelector((state)=>state.isLight)

  return (
    <>
    <div className={isLight?'light':'dark'}>
        <Navbar/>
        <h1>You can mail me priyanka9097g@gmail.com</h1>
    </div>
    </>
  )
}
export default Contact;