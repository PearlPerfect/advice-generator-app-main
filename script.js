
const allAdvice = document.querySelector("#advice");
const nextAdvice = document.querySelector("#dice");
const adviceId = document.querySelector("#adviceId");


nextAdvice.addEventListener("click", function(){
    fetch ("https://api.adviceslip.com/advice", {
        method: "GET",
 }).then((response) => response.json())
 .then((message) =>{
    adviceId.textContent = `ADVICE #${ message.slip.id}`
    allAdvice.textContent = `"${message.slip.advice}"`

    
 })
})




 
