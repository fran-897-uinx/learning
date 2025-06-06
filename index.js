
const input = document.querySelector("input");
const button = document.querySelector("button");

function first(){
if(input.value > 18)
    {
alert('ride on')
}else if(input.value == 18)
    {
alert('welcome to your first ride' )
}else if(input.value < 18)
    {
alert('sorry you under age')
}
}

button.addEventListener("click", first)