// Array holding the shopping list
let shoppingList = [];

// DOM elements
const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const shoppingListContainer = document.getElementById("shopping-list");
const clearButton = document.getElementById("clear-button");

// Function to render the shopping list
function renderList() {
  shoppingListContainer.innerHTML = ""; // Clear current list
  shoppingList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.classList.toggle("purchased", item.purchased);

    const text = document.createElement("span");
    text.textContent = item.name;

    const markButton = document.createElement("button");
    markButton.textContent = "Mark Purchased";
    markButton.addEventListener("click", () => togglePurchased(index));

    listItem.appendChild(text);
    listItem.appendChild(markButton);

    shoppingListContainer.appendChild(listItem);
  });
}

// Function to add an item to the shopping list
function addItem() {
  const itemName = itemInput.value.trim();
  if (itemName) {
    shoppingList.push({ name: itemName, purchased: false });
    itemInput.value = ""; // Clear the input field
    renderList(); // Re-render the list
  }
}

// Function to toggle the purchased state of an item
function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased;
  renderList(); 
}

// Function to clear the entire shopping list
function clearList() {
  shoppingList = [];
  renderList(); 
}

// Event listener for the "Add" button
addButton.addEventListener("click", addItem);

// Event listener for the "Clear List" button
clearButton.addEventListener("click", clearList);

// Initial render of the list
renderList();