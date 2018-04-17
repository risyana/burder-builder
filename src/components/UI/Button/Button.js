import React from 'react'
import css from './Button.css'

const Button = (props) => (
    <button
        className = {[css.Button, css[props.btnType]].join(' ')}
        onClick = {props.onClickHandler}>
        {props.children}
    </button>
)

export default Button