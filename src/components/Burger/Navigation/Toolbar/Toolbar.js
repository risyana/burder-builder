import React from 'react';
import css from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className = {css.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar;