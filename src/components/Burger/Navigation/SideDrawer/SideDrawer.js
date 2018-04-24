import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import css from './SideDrawer.css'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Aux from '../../../../hoc/VirtualComponent'


const SideDrawer = (props) => {
    let attachedClasses = [css.SideDrawer, css.Close];
    
    if (props.open) {
        attachedClasses = [css.SideDrawer, css.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.open} onClickBackdrop={props.click} />
            <div className = {attachedClasses.join(' ')}>
                <div className = {css.Logo}>
                    <Logo />
                </div>
                <nav> 
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;