function WishForm({setInputText, inputText, setWishes, wishes}){

    function handleInput(e){
        setInputText(e.target.value)
    }

    function addWish(e){
        e.preventDefault();
        
        //Check if input is empty
        if(inputText.length > 0){
            //set wishes to wishes plus new wish (wish text)
            setWishes([
                ...wishes,
                inputText
            ])
            setInputText('') //Set input back to empty
        }

        
    }

    return(
        <form>
            <input value={inputText} type="text" className="wish-input" onChange={handleInput}/>
            <button type="submit" className="add-wish-button" onClick={addWish}>Add</button>
        </form>
    )
}

export default WishForm;
