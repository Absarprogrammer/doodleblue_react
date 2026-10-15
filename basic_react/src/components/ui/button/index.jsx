import React from 'react';
const Button=({name,onClick})=>{
    return(
        <button className='btnContainer'onClick={onClick}>{name}</button>
    )
}
export default Button;