import React from 'react'
import StarWarLogo from '../assets/star-wars logo.svg'
import '../styles/app.css'

const Logo = () => {
  return (
    <div className='align-logo'>
        <img src={StarWarLogo} alt=""  className='logo'/>
    </div>
  )
}

export default Logo
