import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

    clearInputField()
})

onValue(shoppingListItemsInDB, function(snapshot) {
    let shoppingListItemsObject = snapshot.val()
    let shoppingListItemsArray = Object.entries(shoppingListItemsObject)

    clearListEl()

    renderListItems(shoppingListItemsArray)
})

function pushItemToDB(item) {
    push(shoppingListItemsInDB, item)
}

function clearInputField() {
    inputFieldEl.value = ""
}

function addNewItemElToListEl(itemName, itemID) {
    let newItemEl = document.createElement("li")

    newItemEl.textContent = itemName

    newItemEl.addEventListener("click", function() {
        removeItemInDB(itemID)
        removeItemEl(newItemEl)
    })

    shoppingListItemsEl.append(newItemEl)
}

function clearListEl() {
    shoppingListItemsEl.innerHTML = ""
}

function renderListItems(array) {
    for (let i = 0; i < array.length; i++) {
        let currentItemID = array[i][0]
        let currentItemValue = array[i][1]

        addNewItemElToListEl(currentItemValue, currentItemID)
    }
}

function removeItemInDB(itemID) {
    let exactLocationOfItemInDB = ref(database, `shoppingListItems/${itemID}`)

    remove(exactLocationOfItemInDB)
}

function removeItemEl(element) {
    element.remove()
}
