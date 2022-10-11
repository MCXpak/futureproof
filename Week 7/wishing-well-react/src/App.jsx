import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { WishForm, WishList } from './components'

function App() {
  const [inputText, setInputText] = useState('');
  const [wishes, setWishes] = useState(["I wish for happiness", "I wish for a good life"])

  return (
    <div className="App">
      <header>Wishing Well</header>
      <WishForm setInputText={setInputText} inputText={inputText} setWishes={setWishes} wishes={wishes}/>
      <WishList setWishes={setWishes} wishes={wishes}/>
    </div>
  )
}

export default App
