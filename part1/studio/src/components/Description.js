import React from 'react'
import styles from './Description.module.css';


function RecipeAuthor() {
    const authorLink = "https://downshiftology.com/recipes/best-ever-guacamole/";
    const authorPhoto = "https://downshiftology.com/about-lisa/";
    const authorName = "Lisa Bryan";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
            );
    }
  /*const RecipeDescription = () => {
    return(
        <div> 
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>   
        )
    } */
}
export default RecipeDescription;