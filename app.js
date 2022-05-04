// import functions and grab DOM elements
import { renderIngredient, } from './utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const forms = document.getElementById('form1');
const foodItems = document.getElementById('listOfIngredients');
const discard = document.getElementById('remove');

let howToArr = [];


forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const form5 = new FormData(forms);
    const measurements = form5.get('measurements');
    const quantity = form5.get('quantity');
    const ingredients = form5.get('ingredients');
    const howTo = { ingredients: ingredients, quantity: quantity, measurements: measurements };
    howToArr.push(howTo);
    displayIngredients();
    forms.reset();


});

function displayIngredients() {
    foodItems.textContent = '';
    for (let stuff of howToArr) {
        const thing = renderIngredient(stuff);
        foodItems.append(thing);
    }
}

