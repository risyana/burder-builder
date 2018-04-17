import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import css from './Burger.css'

const Burger = (props) => {
    
    const { ingredients } = props

    let transformedIngredients = null;

    transformedIngredients = Object.keys(ingredients)
        .map((igKey) => {
            return [...Array(ingredients[igKey])].map( () => {
                return <BurgerIngredient key={Math.random()} ingredient= {igKey} />
            })
        })
        .reduce((reduced,current) => {  //Flattern array of ingredient.
            return reduced.concat(current)
        },[])
    
    if (transformedIngredients.length === 0) 
        transformedIngredients = <p>Please add ingredients</p>
        

    return (
        <div className = {css.Burger}>
            <BurgerIngredient ingredient = 'BreadTop' />
            {transformedIngredients}
            <BurgerIngredient ingredient = 'BreadBottom' />
        </div>
     )
}

export default Burger