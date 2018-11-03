import React from 'react';
import './dependentsHeader.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Header = props => 
    <div>
         <h3>{props.usuario}</h3>
                <div className="header" >
                    <div className="subHeader">
                        <h5> Dependientes  </h5>
                    </div>
                    <Button variant="fab" color="secondary" aria-label="Add">
                        <AddIcon />
                    </Button>
                </div>
    </div>

       
export default Header;