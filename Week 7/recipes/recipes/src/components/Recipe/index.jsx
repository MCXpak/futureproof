function Recipe({recipe, recipes, setRecipes}){

    function handleLike(e){
        e.preventDefault();
        setRecipes(recipes.map(val => {
            if(val === recipe){
                return {
                    ...val,
                    likes: recipe.likes + 1
                }
            }
            return val
        }))
    }

    function handleDislike(){
        setRecipes(recipes.filter(val => val !== recipe))
    }

    return(
        <div className="recipe">
            <h2>{recipe.name}</h2>
            <h3>Description</h3>
            <ul>
                {recipe.description}
            </ul>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            <button className="like-button" onClick={e=>handleLike(e)}>Like</button>
            <p>{recipe.likes}</p>
            <button className="dislike-button" onClick={handleDislike}>Dislike</button>
        </div>
    )
}

export default Recipe;
