import Recipe from '../Recipe'

function RecipeList({recipes, setRecipes}){
    

    return(
        <div className='recipe-list'>
            {recipes.map((recipe, index)=> {
                if(recipe.display){
                    return <Recipe key={index} recipe={recipe} recipes={recipes} setRecipes={setRecipes}/>
            }
        })}
        </div>
    )
}

export default RecipeList;
