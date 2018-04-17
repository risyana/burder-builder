import React from 'react'
import Aux from '../../hoc/VirtualComponent'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    Salad: 0.75,
    Bacon: 1.5,
    Cheese: 2,
    Meat: 2.5
}

class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            Salad : 0,
            Bacon : 0,
            Cheese: 0,
            Meat : 0,
        },
        totalPrice: 4,
        purchasable : false,
        purchasing : false,
    }

    updatePurchasableState = (ingredients) => {
        let sum = Object.keys(ingredients)
                .map((key) => {
                    return ingredients[key] 
                })
                .reduce((sum, curr) => (sum + curr), 0);

        this.setState({purchasable : sum > 0})

    }

    addIngredientHandler = (type) => {
        let {ingredients, totalPrice} = {...this.state}

        ingredients[type] = ingredients[type] + 1
        totalPrice += INGREDIENT_PRICES[type]

        this.setState({ingredients, totalPrice});
        this.updatePurchasableState(ingredients);
    }

    removeIngredientHandler = (type) => {
        let { ingredients, totalPrice } = { ...this.state }

        if (ingredients[type] <= 0) return null;

        ingredients[type] = ingredients[type] - 1
        totalPrice -= INGREDIENT_PRICES[type]

        this.setState({ ingredients, totalPrice });
        this.updatePurchasableState(ingredients);
    }

    clickOrderNowHandler = () => {
        this.setState({purchasing : true})
    }
    
    clickBackdropHandler = () => {
        this.setState({purchasing : false})
    }

    clickContinueHandler = () => {
        alert("you continue")
    }

    render(){

        let disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0 

        return (
            <Aux>
                <Modal
                 purchasing = {this.state.purchasing} 
                 onClickBackdrop = {this.clickBackdropHandler} >
                    <OrderSummary 
                        onClickCancel = {this.clickBackdropHandler}
                        onClickContinue = {this.clickContinueHandler}
                        ingredients = {this.state.ingredients}
                        totalPrice = {this.state.totalPrice} />
                </Modal>
                <h1>Burger Builder </h1>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    onClickMore = {this.addIngredientHandler}
                    onClickLess = {this.removeIngredientHandler}
                    disabledInfo = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}
                    clickOrderNow = {this.clickOrderNowHandler}
                     />
            </Aux>        
        )
            
    }
}

export default BurgerBuilder;