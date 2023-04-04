import { Link } from "react-router-dom";
import{useRef} from 'react';
import {FaBars, FaTimes ,FaUser}  from 'react-icons/fa';
import './navbar.css'



const Navbar=()=>{
    const navRef= useRef();
    const showNavbar =()=>{
        navRef.current.classList.toggle('responsive-nav');
    }
    return(
        <header>
            <h1 className="logo">logo</h1>
            <nav ref={navRef}>
              <Link to="/"> Home</Link>
              <Link to="/about">About</Link> 
              <Link to="/contacts">Contacts</Link> 
              <Link to="/cart">Cart</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/> 
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
            <button >
                    <FaUser/>
                </button>
           
        </header>

    );  
}

export  {Navbar};  