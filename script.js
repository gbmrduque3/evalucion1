let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");

// Función para manejar el intento del usuario
function checkGuess() {
  const userGuess = Number(input.value);

  // Validación
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    feedback.style.color = "white";
    return;
  }

  attempts++;

  // Comparación con el número secreto
  if (userGuess === secretNumber) {
    feedback.textContent = `🎉 ¡Correcto! Adivinaste el número ${secretNumber} en ${attempts} intento(s).`;
    feedback.style.color = "white";
    checkButton.disabled = true; // Deshabilitar botón
  } else if (userGuess < secretNumber) {
    feedback.textContent = "📉 Demasiado bajo. Intenta con un número más grande.";
    feedback.style.color = "white";
  } else {
    feedback.textContent = "📈 Demasiado alto. Intenta con un número más pequeño.";
    feedback.style.color = "white";
  }

  attemptsDisplay.textContent = `Intentos realizados: ${attempts}`;
  input.value = "";
  input.focus();
}

// Función para reiniciar el juego
function resetGame() {
  attempts = 0;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  feedback.textContent = "";
  attemptsDisplay.textContent = "";
  input.value = "";
  checkButton.disabled = false;
  input.focus();
}

// Eventos
checkButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

// Permitir presionar Enter para intentar
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkGuess();
  }
});
