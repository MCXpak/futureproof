import { useState, useEffect } from "react"

function IngredientSearch({recipes, setRecipes}){

    const [inputText, setInputText] = useState('')

    function handleInput(e){
        setInputText(e.target.value)
    }

    //Works but only when full word is given
    // function handleSearch(){
    //     //console.log(recipes)
    //     recipes.map(recipe => {
    //         !recipe.ingredients.includes(inputText) && inputText.length > 0 ? recipe.display = false : recipe.display = true
    //     })
    //     setRecipes([...recipes])
    // }

    function handleSearch(){
        recipes.forEach(recipe => {
            for(const ingredient of recipe.ingredients){
                console.log(ingredient)
                //Check if input isn't in ingredient and input is not empty string
                if(!ingredient.includes(inputText)){
                    recipe.display = false
                    console.log(recipe)
                } else {
                    recipe.display = true
                    break; //Exit when character match is found
                }
            }
        })
        console.log(recipes)
        setRecipes([...recipes])
    }

    useEffect(() => {
        handleSearch()
    },[inputText])

    return(
        <form>
            <input type="text" className="search-input" onChange={e=>{handleInput(e)}} placeholder="Search ingredient in recipe..."/>
        </form>
    )
}

export default IngredientSearch;
