import { Link } from "react-router-dom";
import './navbar.css'

function Navbar(){
    return(
        <div className='App'>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/Contacts">Contact</Link>
            </li>
            <li>
            <Link to="/Profile">Profile</Link> 
            </li>
            <li>
            <Link to="/Cart">Cart</Link> 
            </li>
          </ul>
        </nav>
        </div>
    );

}

export {Navbar}