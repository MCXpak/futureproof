export function Button({variant, btnText, onclick}){
    return(
      <button
        className={`lego ${variant}`}
        onClick = {onclick}
        />
    )
  }
  