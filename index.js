import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

onValue(shoppingListItemsInDB, function(snapshot) {
    let shoppingListItemsObject = snapshot.val()
    let shoppingListItemsArray = Object.values(shoppingListItemsObject)

    /*
    Challenge:
    Write a for loop and inside use innerHTML on shoppingListItemEl to render database items in the ul.
    */

    console.log(shoppingListItemsArray)
})

function pushItemToDB(item) {
    push(shoppingListItemsInDB, item)
}

function clearInputField() {
    inputFieldEl.value = ""
}

function addNewItemElToListEl(itemName) {
    shoppingListItemsEl.innerHTML += `<li>${itemName}</li>`
}
