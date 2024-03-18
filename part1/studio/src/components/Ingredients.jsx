import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredientsList = ["35 grams cornstarch", "30g confectioners' sugar ", "21g unfalvored powdered gelatin", "237mL cold water, divided", "340g granulated sugar"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredientsList[0]}</li>
                <li>{ingredientsList[1]}</li>
                <li>{ingredientsList[2]}</li>
                <li>{ingredientsList[3]}</li>
                <li>{ingredientsList[4]}</li>
            </ul>
        </div>
    );    
}