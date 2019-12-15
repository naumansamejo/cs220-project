import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css'

function Menu(){    
    
    return ( 

        <nav>
            <div className="app-logo">
                DB STORE.
            </div>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/products/men" >Men</Link>
                </li>
                <li>
                    <Link to="/products/women" >Women</Link>
                </li>
                <li>
                    <Link to="/products/kids" >Kids</Link>
                </li>
                <li>
                    <Link to="/products/sale" >Sale</Link>
                </li>

            </ul>
        </nav>
    );
}


export default Menu;