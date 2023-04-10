import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import './navbar.css'



const Navbar = () => {
    const navRef = useRef();
    const navigate = useNavigate();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }
    const handlClick = () => {
        navigate('/account');
    }
    return (
        <header>
            <h1 className="logo">logo</h1>
            <nav ref={navRef}>
                <NavLink to="/home"> Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
            <button className="user-icon" on onClick={handlClick}>
                <FaUserAlt />
            </button>
        </header>

    );
}

export { Navbar };  