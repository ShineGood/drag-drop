// Timer interval ID used to start and clear the timer
let timerInterval;

// Remaining time in seconds
let timeLeft = 60;

// Flag indicating whether the timer is paused
let paused = false;

/**
 * Starts the countdown timer for a given duration in seconds.
 * Updates the displayed timer every second.
 * Calls onTimeUp callback when time reaches zero.
 * 
 * @param {number} duration - Duration of the timer in seconds
 * @param {Function} onTimeUp - Callback to execute when timer ends
 */
export function startTimer(duration, onTimeUp) {
  timeLeft = duration;
  paused = false;
  const timerDisplay = document.getElementById("timer");

  // Clear any existing timer interval before starting a new one
  clearInterval(timerInterval);

  // Set interval to update timer every second
  timerInterval = setInterval(() => {
    if (!paused) {
      // Update the timer display
      timerDisplay.textContent = timeLeft;
      timeLeft--;

      // When time runs out, stop timer and trigger callback
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        onTimeUp();
      }
    }
  }, 1000);
}

/**
 * Stops the timer by clearing the interval.
 */
export function stopTimer() {
  clearInterval(timerInterval);
}

/**
 * Pauses the timer by setting the paused flag.
 */
export function pauseTimer() {
  paused = true;
}

/**
 * Resumes the timer by clearing the paused flag.
 */
export function resumeTimer() {
  paused = false;
}
