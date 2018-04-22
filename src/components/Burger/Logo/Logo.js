import React from 'react'
import css from './Logo.css'

import imgSource from '../../../assets/images/burger-logo.png';

const Logo = (props) => (
    <div className = {css.Logo} >
        <img src = {imgSource} />
    </div>
)

export default Logo;