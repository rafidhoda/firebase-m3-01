import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://playground-eaa33-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const shoppingListItemsInDB = ref(database, "shoppingListItems")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListItemsEl = document.getElementById("shopping-list-items")

addButtonEl.addEventListener("click", function() {
    /*
    This is the 'main' function.
    Notice how well it reads.
    All the instructions are laid out, in order, with function names that tell us exactly what happens.
    */

    pushItemToDB()

    clearInputField()

    addNewItemElToListEl(inputValue)
})

function pushItemToDB() {
    let inputValue = inputFieldEl.value

    push(shoppingListItemsInDB, inputValue)
}

function clearInputField() {
    inputFieldEl.value = ""
}

function addNewItemElToListEl(itemName) {
    shoppingListItemsEl.innerHTML += `<li>${itemName}</li>`
}
