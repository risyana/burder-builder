import React from 'react';
import css from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className = {css.Toolbar}>
            <DrawerToggle click={props.click}/>
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