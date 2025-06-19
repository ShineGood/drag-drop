/**
 * Updates the displayed score counts for fruits and vegetables
 * by counting the number of correctly sorted items in each drop zone.
 */
export function updateScore() {
  const fruitZone = document.getElementById("fruitZone");
  const vegZone = document.getElementById("vegetableZone");

  // Count the number of fruit items in the fruit drop zone
  const fruitCount = [...fruitZone.children].filter(
    el => el.classList.contains("item") && el.dataset.category === "fruit"
  ).length;

  // Count the number of vegetable items in the vegetable drop zone
  const vegCount = [...vegZone.children].filter(
    el => el.classList.contains("item") && el.dataset.category === "vegetable"
  ).length;

  // Update the score display elements
  document.getElementById("fruitCount").textContent = fruitCount;
  document.getElementById("vegCount").textContent = vegCount;
}

/**
 * Checks whether all items have been correctly sorted.
 * If yes, displays a winning message and resets the game after a short delay.
 * 
 * @param {Array} allItems - Array containing all game items (fruits + vegetables)
 * @param {Function} resetAll - Function to reset the game state
 */
export function checkWinCondition(allItems, resetAll) {
  const total = allItems.length;

  // Get the current count of sorted fruits and vegetables
  const current =
    parseInt(document.getElementById("fruitCount").textContent) +
    parseInt(document.getElementById("vegCount").textContent);

  // If all items are sorted correctly, declare victory and reset
  if (current === total) {
    setTimeout(() => {
      alert("🎉 You Win! All items sorted correctly.");
      resetAll();
    }, 300);
  }
}
