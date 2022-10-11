import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {RecipeList, IngredientSearch} from './components'

const initialRecipes = [
  {name: "Cheese Sandwich", description: "The classic cheese sandwich", ingredients: ["Bread", "Cheese", "More bread"], likes: 0, display: true},
  {name: "Cereal", description: "A bowl of cereal", ingredients: ["Milk", "Cereal"], likes: 0, display: true},
  {name: "Jam Toast", description: "Toasted bread with butter and jam topping", ingredients: ["Bread", "Jam of choice", "Butter"], likes: 0, display: true}
]

function App() {

  const [recipes, setRecipes] = useState(initialRecipes)


  function handleSort(){
    //HAVE to use spread operator for react to understand state change with changed array
    let sortedRecipes = recipes.sort((a,b) => b.likes - a.likes)
    setRecipes([...sortedRecipes])
  }

  function handleFilter(){
    setRecipes([...recipes.filter(recipe =>{
      if(recipe.likes > 0){
        return recipe
      }
    })])
  }

  return (
    <div className="App">
      <button className="sort-button" onClick={handleSort}>Sort</button>
      <button  className="filter-button" onClick={handleFilter}>Filter Liked</button>
      <IngredientSearch recipes={recipes} setRecipes={setRecipes}/>
      <RecipeList recipes={recipes} setRecipes={setRecipes}/>
    </div>
  )
}

export default App
