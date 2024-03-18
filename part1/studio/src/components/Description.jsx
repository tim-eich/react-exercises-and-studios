import { Component } from 'react';
import styles from './Description';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.allrecipes.com/recipe/155222/philadelphia-classic-cheesecake/";
    let authorPhoto = "https://www.thefamouspeople.com/profiles/images/alton-brown-7.jpg";
    let authorName = "Alton Brown";

    return (
        <div className = { styles.recipeAuthorBlock }>
            <img src ={ authorPhoto } alt ="Goofy photo of Alton Brown" className ={ styles.imageUpdates } />
            <div>
                <h3>{ authorName }</h3>
                <a href ={ authorLink }>Alton Brown</a>
            </div>
        </div>
    );
}

class RecipeDescription extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Homemade Marshmallows</h1>
                    <p>Better-than-store-bought marshmallows using only a handful of ingredients.</p>
                </div>
            </div>
        );
    }
}

export default RecipeDescription;