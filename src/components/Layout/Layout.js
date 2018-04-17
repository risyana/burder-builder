import React from 'react'
import Aux from '../../hoc/VirtualComponent'
import css from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>toolbar, side drawer,backgdop</div>
        <main className={css.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout