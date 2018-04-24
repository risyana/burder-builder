import React, { Component } from 'react'
import Aux from '../../hoc/VirtualComponent'
import css from './Layout.css'
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Burger/Navigation/SideDrawer/SideDrawer'
import Backdrop from '../UI/Backdrop/Backdrop'

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