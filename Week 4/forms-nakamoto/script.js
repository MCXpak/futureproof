let form = document.querySelector("#form")
let card = document.querySelector("#card")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    card.style.display = "block";

    let greeting = document.querySelector("#greeting")
    let message = document.querySelector("#message")
    let eventType = document.querySelector("#event-type");

    card.querySelector('#card-greeting').textContent = greeting.value;
    card.querySelector('#card-message').textContent = message.value;
    
})
