import React from 'react';
import css from './DrawerToggle.css';

const DrawerToggle = (props) => (
    <div className = {css.DrawerToggle} onClick = {props.click}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle