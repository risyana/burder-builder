import React from 'react'
import css from './Logo.css'

import imgSource from '../../../assets/images/burger-logo.png';

const Logo = (props) => (
    <div className = {css.Logo} style = {{height : props.height}}>
        <img src = {imgSource} />
    </div>
)

export default Logo;