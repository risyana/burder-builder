import React from 'react';
import css from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className = {css.Toolbar}>
            <div className={css.MobileOnly} onClick = {props.click} >MENU</div>
            <div className = {css.Logo}>
                <Logo />
            </div>
            <nav className={css.DesktopOnly} >
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar;