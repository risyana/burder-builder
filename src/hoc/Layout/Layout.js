import React, { Component } from 'react'
import Aux from '../VirtualComponent/VirtualComponent'
import Toolbar from '../../components/Burger/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Burger/Navigation/SideDrawer/SideDrawer'
import Backdrop from '../../components/UI/Backdrop/Backdrop'
import css from './Layout.css'

class Layout extends Component {

    state = {
        sideDrawerOpen : false
    }

    backdropClickHanlder = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }
    
    toogleClickHanlder = () => {
        this.setState(prevState =>  { 
            return {sideDrawerOpen : !prevState.sideDrawerOpen}
        })

    }

    render() {
        return(
            <Aux>
                <Toolbar click = {this.toogleClickHanlder} />
                <SideDrawer 
                    open = {this.state.sideDrawerOpen} 
                    click={this.backdropClickHanlder} />
                <main className = {css.Content}>
                    {this.props.children}
                </main>
            </Aux> 
        )
    }
}

export default Layout