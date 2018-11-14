import React from 'react';
import './dependentsHeader.css';

const Header = props => 
    <div>
         <h3>{props.usuario}</h3>
                <div className="header" >
                    <div className="subHeader">
                        <h5> Dependientes  </h5>
                    </div>
                    
                </div>
    </div>

       
export default Header;