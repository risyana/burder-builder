import React, { Component } from 'react'
import css from './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;
        ingredient = this.props.ingredient === 'BreadTop'
            ? (
                <div className={css[this.props.ingredient]}>
                <div className={css.Seeds1}></div>
                    <div className={css.Seeds2}></div>
                </div>
            )
            : <div className={css[this.props.ingredient]}></div>

        return ingredient;      
    }
} 

BurgerIngredient.propTypes = {
    ingredient : PropTypes.string.isRequired,
}


export default BurgerIngredient