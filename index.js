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
    let inputValue = inputFieldEl.value

    pushItemToDB(inputValue)

    addNewItemElToListEl(inputValue)

    clearInputField()
})

/*
Challenge:
1. Import the onValue function from firebase on line 2
2. Call the onValue function below on with 'shoppingListItemsInDB' as the first argument and function(snapshot){} as the second argument
3. Console log snapshot.val() inside of the function
*/

function pushItemToDB(item) {
    push(shoppingListItemsInDB, item)
}

function clearInputField() {
    inputFieldEl.value = ""
}

function addNewItemElToListEl(itemName) {
    shoppingListItemsEl.innerHTML += `<li>${itemName}</li>`
}
