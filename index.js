import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://playground-eaa33-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
// Challenge: Create a reference called shoppingListItemsInDB in the database

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

let shoppingListItems = []

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    shoppingListItems.push(inputValue)
    // Challenge: Push inputValue to the database at the shoppingListItemsInDB reference

    console.log(inputValue)
})
