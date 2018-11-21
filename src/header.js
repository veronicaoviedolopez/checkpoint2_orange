import React from 'react';
import {Navbar} from 'react-materialize';
import {Link} from 'react-router-dom';


const Header = (props) => (
    <Navbar left>
        <li>
            <Link to='/'>   
                <i class="material-icons">home </i>
            </Link>
        </li>
        <li>
            <Link to='/contacto'>   
                Contacto
            </Link>
        </li>

    </Navbar>

)
export default Header
  