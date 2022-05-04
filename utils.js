export function renderIngredient(list) {
    const item = document.createElement('li');
    item.textContent = `${list.ingredients} - ${list.measurements} - ${list.quantity}`;
    return item;
}