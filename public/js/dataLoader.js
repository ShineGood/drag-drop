/**
 * loadItems.js
 * 
 * 
 * Description: Asynchronously loads fruits and vegetables from data.json 
 *              and appends them to a container element.
 * License: MIT (or specify your preferred license)
 */

/**
 * Asynchronously loads item data from data.json, appends them to a container,
 * and updates the allItems array.
 * 
 * @param {Array} allItems - An array to store all loaded items.
 * @param {HTMLElement} container - The DOM element where items will be appended.
 * @param {Function} createItemElement - A function that returns a DOM element for a given item.
 * @returns {Promise<void>}
 */
export async function loadItems(allItems, container, createItemElement) {
  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const items = [...data.fruits, ...data.vegetables];
    allItems.push(...items);

    for (const item of items) {
      const div = createItemElement(item);
      container.appendChild(div);
    }

  } catch (error) {
    console.error("Failed to load items:", error);
    // Optionally show an error message to the user
    alert("Failed to load items. Please try again later.");
  }
}
