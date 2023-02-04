import React from 'react'
import './main.css'
import Pic from '../Assest/Samm.JPG'
import Email from '../Assest/Mail.png'


function Header() {
  return (
    <>
   <header className='container rounded-t-xl'>
    <div className="img-container">
        <img src={Pic} alt="" className='main-img' />
    </div>
  
        <div  className='sub-container'> 
            <h1 className='name'>Samson Aderonmu</h1>
            <h2 className='role'>Frontend Developer</h2>
            <h3 className='website mx-7'><a href="samsonaderonmu.netlify.app">samsonaderonmu.netlify.app</a></h3>
        </div>
        <div className='connect'>
            <a href="mailto:samsonaderonmu2021@gmail.com" className='mail' ><img src={Email} alt="Email"/>Email</a>
        </div>
   </header>
    </>
  )
}

export default Header