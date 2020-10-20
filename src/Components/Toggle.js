import React from 'react';


const Toggle = props => (
    <i 
        className={props.toggled ? "fa fa-caret-square-o-up fa-2x" : "fa fa-caret-square-o-down fa-2x" } 
        aria-hidden="true"
        onClick={props.clicked}
        ></i>

);
    
export default Toggle;