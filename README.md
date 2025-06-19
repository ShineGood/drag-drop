# Drag and Drop Fruits & Vegetables Game

A simple and interactive web-based drag and drop sorting game where players sort fruits and vegetables into their correct categories before time runs out. Built with HTML, CSS, and JavaScript (ES Modules).

---

## Features

- Asynchronously loads item data from a `data.json` file.
- Displays a randomized list of draggable items.
- Includes two drop zones: one for **fruits** and one for **vegetables**.
- Uses sound effects and visual feedback for correct/incorrect sorting.
- Tracks score, lives, and includes timer functionality.
- Reset and pause/resume game controls.
- Fully implemented using plain HTML5, CSS3, and JavaScript.

---

## JSON Structure

The data.json file includes two arrays: fruits and vegetables. Each item has:

{
  "id": 1,
  "name": "Apple",
  "category": "fruit",
  "image": "images/baobab.png"
}

Validated using jsonlint.com.

---

## Installation & Usage

### Option 1: Local Server (Recommended for Development)

1. Install Node.js if not already installed.
2. Create a simple server.js file:
3. Run a local server (e.g., using `npm` and `express`, or `live-server`):
   ```bash
   npm install express
   node server.js
   Or use any static server to serve the public folder.
4. Open your browser and navigate to http://localhost:3000 (or the respective port).

### Option 2: Static Hosting (For Final Deployment)

1. Upload all files (including data.json) to a static hosting service:
  - GitHub Pages
  - Netlify
  - Vercel
2. Make sure the JSON file is in the root or accessible folder.

3. Update the fetch path in your code if necessary (e.g., https://yourdomain.com/data.json).

---

## Project Structure

```bash
/public
  /images      # Images for fruits and vegetables
  /sounds      # Audio feedback files (success, error)
  data.json   # JSON file containing items data
  index.html  # Main HTML page
  style.css   # CSS styling
/js
main.js     # Main app logic: initialization, event handling
dataLoader.js # Data fetching and loading
gameLogic.js # Score and win condition logic
timer.js     # Timer controls (start, pause, resume)
ui.js        # UI helpers (create elements, update lives)
/server.js    # Express server to serve static files and data
README.md    # Project documentation

```

---

## Technologies Used

- HTML5
- CSS3 (Flexbox, animations)
- JavaScript (ES6 Modules)
- Node.js & Express (for local server)

## How It Works

1. On page load, the app fetches data.json and dynamically displays all items.
2. Drag items from the container into the correct "Fruits" or "Vegetables" drop zones.
3. Correct drops increase your score and play a success sound.
4. Incorrect drops decrease your lives and play an error sound.
5. You have 3 lives and 60 seconds to sort all items correctly.
6. Use the Pause button to pause/resume the timer.
7. Use Reset to start a new game.

---

## Controls

- ⏸️ Pause / ▶️ Resume – Pauses or resumes the countdown timer.

- 🔁 Reset / Restart – Resets game state, lives, score, and timer.

--- 

## License

This project is created for educational purposes. You are free to use, modify, and distribute it non-commercially. For commercial use, please contact the author.

## Author

Developed by Kokoe Fiawoo


