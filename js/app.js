// Save reference to text-field into a variable 
const textField = document.querySelector('.text-input');

// Save reference to new-item button into a variable
const newItemButton = document.querySelector('.btn-add');

// Save reference to unordered list into a variable 
const shoppingList = document.querySelector('.shopping-list');

// Save reference to paragraph for feedback
const feedback = document.querySelector('.feedback');


// Start function addItem
function addItem() {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('span');

    checkbox.type = 'checkbox';
    label.textContent = textField.value.trim();

    if (textField.value.trim() !== '') {
        // checkbox to list item
        listItem.appendChild(checkbox);

        // label to list item
        listItem.appendChild(label);

        // list item to shopping list
        shoppingList.appendChild(listItem);

        // clear feedback
        feedback.textContent = '';

        // clear text field 
        textField.value = '';

        // cursor back to text field
        textField.focus();

    } else {
        feedback.textContent = 'Invalid. Please enter an item.';
    }
}
 // addItem fo click on button 
    newItemButton.addEventListener('click', addItem);

