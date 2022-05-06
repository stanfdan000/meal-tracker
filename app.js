// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const forms = document.getElementById('form1');
const foodItems = document.getElementById('listOfIngredients');
const discard = document.getElementById('remove');
const mealsOnWheels = document.getElementById('mealName');
const save = document.getElementById('save-button');
const mealList = document.getElementById('meal-list');

let howToArr = [];
let meals = [];

forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const form5 = new FormData(forms);
    const quantity = form5.get('quantity');
    const measurements = form5.get('measurements');
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
        forms.reset();
    }
}

function resetIngredient(){
    howToArr = [];
    foodItems.textContent = '';
}
resetIngredient();

discard.addEventListener('click', () => {
    howToArr.pop();
    displayIngredients();
    
});

save.addEventListener('click', () => {
    let meal = {
        ingredientsCount: howToArr.length,
        name: mealsOnWheels.value, 
        //ingredients:foodItems
        

    };
    console.log(foodItems);
    meals.push(meal);
    displayMeals();
    resetIngredient();
});

function displayMeals(){
    mealList.textContent = '';
    for (let meal of meals){
        const li = renderMeal(meal);
        mealList.append(li);
        
    }
}



