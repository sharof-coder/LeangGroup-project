import React from 'react'
import './button.scss'


const Button = ({ children }) => {
    return (
        <div>
            <button className='btn-com'>{children}</button>
        </div>
    )
}

export default Button