import{useRef} from 'react';
import {FaBars, FaTimes }  from 'react-icons/fa';
const Navbar=()=>{
    const navRef= useRef();
    const showNavbar =()=>{
        navRef.current.classList.toggle('responsive-nav');
    }
    return(
        <header>
            <h1 className="logo">logo</h1>
            <nav ref={navRef}>
                <a href='/#'>home</a>
                <a href='/#'>services</a>
                <a href='/#'>products</a>
                <a href='/#'>contact</a>
                
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/> 
                
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
           
        </header>

    );  
}

export default Navbar;  