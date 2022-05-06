export function renderIngredient(list) {
    const item = document.createElement('li');
    item.textContent = `${list.ingredients} - ${list.measurements} - ${list.quantity}`;
    return item;
}

export function renderMeal(meal){
    const li = document.createElement('li');
    li.textContent = `${meal.name}: ${meal.ingredientsCount} ingredients`;
    return li;
}