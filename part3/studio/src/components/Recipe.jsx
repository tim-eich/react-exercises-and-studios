import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.instagram.com/cookiesandcups/";
   let authorPhoto = "https://cookiesandcups.com/wp-content/uploads/2023/08/shelly-sidebar.jpg";
   let authorName = "Shelly Jaronsky";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 cups salted butter, room temperature", "2 cups granulated sugar", "9 large eggs", "3 1/4 cups all purpose flour", "1/2 tsp. vanilla extract"];
   return(
      <div className='recipeIngredients'>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p>This Classic Pound Cake recipe uses only 4 simple ingredients that all weigh in at 1 pound each. It’s a traditional butter cake that is perfect topped with strawberries and whipped cream!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F02%2F20%2Fdining%2F20COOKING-FIELDDAY-POUNDCAKE2%2F20COOKING-FIELDDAY-POUNDCAKE2-articleLarge.jpg&f=1&nofb=1&ipt=d2407a8c9ed2a0e645b1e30ea5f8edbc3080ff8573a74d6e44b2eaa49c1f0719&ipo=images" alt="Several slices of poundcake" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
