import React from 'react';
import './modal.css';

export default Modal = (props)=>{
    return(
        <div className="Modal">
            {props.children}
            <button onClick={props.handleClick} className="Modal-close"/>
        </div>
    )
}
