import React from 'react';
import './dependentsHeader.css';
import {connect} from  'react-redux';

const Header = props => 
    <div>
        <div className="headerDependent" >
            {`Usuario: ${props.user.nombre} ${props.user.apellidos.paterno} ${props.user.apellidos.materno} `}
             <br/>     
            {`Edad: ${props.user.edad}`}      
            <br/>
        </div>
    </div>

    
    const mapStateToProps =({usersReducer})=>{
        return ({
            user: usersReducer.user,
        }
        )
    }
       
export default connect(mapStateToProps) (Header);