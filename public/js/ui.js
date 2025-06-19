/**
 * Creates a draggable item element representing a fruit or vegetable.
 * 
 * @param {Object} item - The item data containing id, category, name, and image
 * @returns {HTMLElement} - The created div element representing the item
 */
export function createItemElement(item) {
  // Create a div container for the item
  const div = document.createElement("div");
  div.className = "item"; // Apply CSS class
  div.setAttribute("draggable", "true"); // Make it draggable
  div.setAttribute("data-category", item.category); // Store category for validation
  div.setAttribute("id", `item-${item.id}`); // Unique ID for drag and drop

  // Set inner HTML: an image and the name text
  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="item-img">
    <span>${item.name}</span>
  `;

  // Add event listener for drag start to set dragged data as the item's ID
  div.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });

  return div;
}

/**
 * Updates the displayed number of lives left in the game UI.
 * 
 * @param {number} lives - Current number of lives
 */
export function updateLivesDisplay(lives) {
  document.getElementById("lives").textContent = lives;
}
