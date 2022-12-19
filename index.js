const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

/*
Challenge:
Create an array called shoppingListItems and set it to the empty array.
*/
let shoppingListItems = []

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    /*
    Challenge:
    Push the inputValue to the shoppingListItems array
    */
   shoppingListItems.push(inputValue)

    console.log(inputValue)
})
