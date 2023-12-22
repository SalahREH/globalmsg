import React, { useEffect } from 'react'
import logoImg from "../../Img/logo.png";
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation()
  
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', location.pathname === '/Global');
    console.log(location.pathname === '/Global')
  }, [location.pathname])

  return (
    <header className="App-header">
        <Link to={"/"}><img src={logoImg} alt="" /></Link>
        <ul className='header-ul'>
            <li>How it works</li>
            <li>Explore</li>
            <li><Link to={"/Global"}>Global chat</Link></li>
            <li>Friends</li>
            <li>Stickers/Emotes</li>
        </ul>
        <div className='header-login-area'>
            <p>Log in</p>
            <button className='square-button'>Get Started</button>
        </div>
    </header>
  )
}

export default Header