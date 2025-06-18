const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    const result = eval(display.value);

    // Check for invalid or undefined results
    if (
      result === Infinity ||
      result === -Infinity ||
      isNaN(result) ||
      typeof result !== "number"
    ) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";
  
  if (allowedKeys.includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault(); // prevent form submission if inside a form
    calculateResult();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
