let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + " = " + result);
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
  if (historyList.children.length > 5) {
    historyList.removeChild(historyList.lastChild);
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.documentElement.style.setProperty('--bg-color', '#fdf6f0');
    document.documentElement.style.setProperty('--text-color', '#222');
    document.documentElement.style.setProperty('--btn-color', '#fff');
    document.documentElement.style.setProperty('--btn-hover', '#e0d3d3');
    document.documentElement.style.setProperty('--accent', '#885c7d');
    document.documentElement.style.setProperty('--box', '#f7eaea');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#2d2d3a');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--btn-color', '#3e3e52');
    document.documentElement.style.setProperty('--btn-hover', '#5c5c7a');
    document.documentElement.style.setProperty('--accent', '#d9a7c7');
    document.documentElement.style.setProperty('--box', '#413e54');
  }
}

document.addEventListener("keydown", function (e) {
  if ((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
