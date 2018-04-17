import React from "react"
import css from './BuildControl.css'

const buildControl = (props) => (
    <div className={css.BuildControl}>
        <div className = {css.Label}>{props.label}</div>
        <button className = {css.Less}
            onClick = {props.onClickLess}
            disabled = {props.disabledInfo}>
            Less
        </button>
        <button className = {css.More} 
            onClick = {props.onClickMore}>
            More
        </button>
    </div>
)

export default buildControl;