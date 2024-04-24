import React from "react"
import './Recipe.css'
const Recipe = ({ title, image, ingredients, calories }) => {

    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(ingredient=>( 
                    <li>{ingredient.text}</li> 
                ))}
            </ol>
            <p>calories : {calories}</p>
            <img src={image} alt="food" className="image" />
        </div>

    )
}
export default Recipe