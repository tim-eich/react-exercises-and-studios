import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  let recipeAuthor = recipedata.map((data) => (
    <div key={data.name}>
      {data.author}
    </div>
  ));

  let recipeAuthorImage = recipedata.map((data) => (
    <div key={data.name}>
      <img className='authorImage' src={data.recipeImage} alt={data.author}/>
    </div>
  ));

  let recipeWebsite = recipedata.map((data) => (
    <div key={data.name}>
      <a href={data.website}>{data.website}</a>
    </div>
  ));

     return (
      <div>
         {recipeAuthorImage}
         {recipeAuthor}
         {recipeWebsite}
      </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 