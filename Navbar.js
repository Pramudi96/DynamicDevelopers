import React, {
    Component
} from 'react';
import "./Navbar.scss";
import logo from '../../img1.jpg';
export default function Navbar() {


    return <nav className = "navbar" >
        <
        img src = {
        logo
    }
    alt = 'city' / >
        <ul className = "nav-links">
        <li>
        <a href = "/" className = 'nav-link'>
        HOME
        </a>
        </li>
        <li>
        <a href = "/" className = 'nav-link '>
        ABOUT US
    </a>
    </li>

    <li>
    <a href = "/" className = 'nav-link active'>
        EVENTS
        </a>
        </li>

        <li>
        <a href = "/" className = 'nav-link '>
        STAFF
        </a>
        </li>

        <li>
        <a href = "/" className = 'nav-link '>
        CONTACT US
    </a>
    </li>



    </ul>
    </nav>


}