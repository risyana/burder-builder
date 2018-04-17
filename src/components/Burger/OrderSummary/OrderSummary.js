import React from 'react';
import Aux from '../../../hoc/VirtualComponent'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

    let {ingredients, totalPrice} = {...props}

    ingredients = Object.keys(ingredients).map(key => {
        return (<li key = {`${key}_${ingredients[key]}`}>
                    <span>{key}</span> : {ingredients[key]}
                </li>)
    })

    return(
        <Aux>
            <h2>Order Summary</h2>
            <p>Your order ingredient</p>
            <ul>
                {ingredients}
            </ul>
            <h4>{`Total Price : $ ${totalPrice.toFixed(2)}`} </h4>
            <p>Continue to check out ? </p>
            <Button
                btnType = 'Danger'
                onClickHandler = {props.onClickCancel}
                >
                Cancel
            </Button>
            <Button
                btnType = 'Success'
                onClickHandler = {props.onClickContinue}
                >
                Continue
            </Button>
        </Aux>

    )
}

export default OrderSummary