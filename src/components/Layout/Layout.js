import React from 'react'
import Aux from '../../hoc/VirtualComponent'
import css from './Layout.css'
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={css.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout