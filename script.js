// Select DOM elements
const addItemButton = document.getElementById('itemButton');
const clearButton = document.getElementById('clearButton');
const shoppingList = document.getElementById('shoppingList');
const addButton = document.getElementById('addButton');

// Function to add an item to the list
function addItemButton() {
  const itemText = itemInput.value.trim(); 

  if (itemText) {
    const listItem = document.createElement('li'); // Create a new <li> element
    listItem.textContent = itemText; // Set its text
    shoppingList.appendChild(listItem); // Add to the list

    // Add event listener to toggle 'purchased' class
    listItem.addEventListener('click', function () {
      listItem.classList.toggle('purchased');
    });

    itemInput.value = ''; // Clear input field
  } else {
    alert('Please enter an item!');
  }
});

// Function to clear all items
clearListButton.addEventListener('click', function () {
  shoppingList.innerHTML = ''; // Clear the list
});