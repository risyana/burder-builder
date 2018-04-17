import React from "react"
import css from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label : 'Salad', type : 'Salad'},
    {label : 'Bacon', type : 'Bacon'},
    {label : 'Cheese', type : 'Cheese'},
    {label : 'Meat', type : 'Meat'},
]

const buildControls = (props) => (

        <div className = {css.buildControls}>
            <h4>{`Total Price : $ ${props.totalPrice.toFixed(2)}`} </h4>
            {controls.map((control) => (
                <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    type={control.type}  
                    onClickMore = {() => props.onClickMore(control.type)}
                    onClickLess = {() => props.onClickLess(control.type)}
                    disabledInfo = {props.disabledInfo[control.type]}
                    />
            ))}
            <button 
                className = {css.OrderButton}  
                disabled = {!props.purchasable}
                onClick = {props.clickOrderNow}
                >
                ORDER NOW
            </button> 
        </div>
    )


export default buildControls;