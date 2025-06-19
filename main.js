/**
 * main.js
 * 
 *
 * Description: Main controller script that initializes the drag-and-drop game,
 *              sets up event listeners, manages game state, and handles reset/pause logic.
 * License: MIT (or your preferred license)
 */

import { loadItems } from "./dataLoader.js";
import { updateScore, checkWinCondition } from "./gameLogic.js";
import { startTimer, pauseTimer, resumeTimer } from "./timer.js";
import { createItemElement, updateLivesDisplay } from "./ui.js";

// Game state variables
let allItems = [];
let lives = 3;

// Initialize app once DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("itemsContainer");

  // Load items and start game
  loadItems(allItems, container, createItemElement).then(() => {
    initDropZones(); // Set up drag-and-drop zones

    // Start countdown timer
    startTimer(60, () => {
      alert("⏰ Time's up! Try again.");
      resetAll();
    });

    // Reset buttons
    document.getElementById("resetBtn").addEventListener("click", resetAll);
    document.getElementById("restartBtn").addEventListener("click", resetAll);
  });

  // Pause/Resume toggle
  document.getElementById("pauseBtn").addEventListener("click", () => {
    const btn = document.getElementById("pauseBtn");
    if (btn.textContent === "⏸️Pause") {
      pauseTimer();
      btn.textContent = "▶️Resume";
    } else {
      resumeTimer();
      btn.textContent = "⏸️Pause";
    }
  });
});

/**
 * Initializes the drop zones for fruits and vegetables.
 * Attaches dragover, dragleave, and drop event listeners for category checking.
 */
function initDropZones() {
  const categories = [
    { zoneId: "fruitZone", category: "fruit" },
    { zoneId: "vegetableZone", category: "vegetable" },
  ];

  categories.forEach(({ zoneId, category }) => {
    const zone = document.getElementById(zoneId);

    // Allow dropping
    zone.addEventListener("dragover", e => {
      e.preventDefault();
      zone.classList.add("dragover");
    });

    // Visual feedback on drag leave
    zone.addEventListener("dragleave", () => {
      zone.classList.remove("dragover");
    });

    // Handle drop logic
    zone.addEventListener("drop", e => {
      e.preventDefault();
      const itemId = e.dataTransfer.getData("text/plain");
      const item = document.getElementById(itemId);
      const itemCategory = item.dataset.category;

      if (itemCategory === category) {
        // Correct drop
        zone.appendChild(item);
        document.getElementById("successSound").play();
        updateScore();
        checkWinCondition(allItems, resetAll);
      } else {
        // Incorrect drop
        document.getElementById("errorSound").play();
        lives--;
        updateLivesDisplay(lives);

        if (lives <= 0) {
          document.getElementById("gameOverModal").classList.remove("hidden");
        } else {
          alert(`Wrong! You have ${lives} ${lives === 1 ? "life" : "lives"} left.`);
        }
      }

      zone.classList.remove("dragover");
    });
  });
}

/**
 * Resets the game state to default.
 * - Moves all items back to the container
 * - Resets lives and score
 * - Restarts the timer
 * - Hides game over modal
 */
function resetAll() {
  const container = document.getElementById("itemsContainer");

  // Move items back to container
  ["fruitZone", "vegetableZone"].forEach(id => {
    const zone = document.getElementById(id);
    [...zone.querySelectorAll(".item")].forEach(item => container.appendChild(item));
  });

  lives = 3;
  updateLivesDisplay(lives);
  updateScore();

  startTimer(60, () => {
    alert("⏰ Time's up! Try again.");
    resetAll();
  });

  document.getElementById("gameOverModal").classList.add("hidden");
}


