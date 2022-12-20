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
// Challenge: Add const for 'shopping-list-items' ul

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(shoppingListItemsInDB, inputValue)

    inputFieldEl.value = ""

    // Challenge: Use innerHTML on new const to add latest inputValue as an li
})
