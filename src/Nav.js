import React from 'react';
import {Link} from 'react-router-dom';

const Nav=()=>{
    return(
        <nav>
            <Link to='/'>
                <h1> Home</h1> 
            </Link>

            <Link to='/1d' >Day
                
            </Link>
            <Link to='/7d' >Week
                
            </Link> 
            <Link to='/365d' >Year
                
            </Link>
            <Link to='' >YearToDate
                
                </Link>
        </nav>
    )
}

export default Nav;