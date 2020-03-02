// Global variable 
let count = 0;
const element = document.getElementById("counter");

// Increase counter by 1
function increase() {
  count++;
  element.innerHTML = count;
}

// Decrease counter by 1
function decrease() {
  count--;
  element.innerHTML = count;
}

// Resets counter to 0
function reset() {
  count = 0;
  element.innerHTML = "<mark>" + count + "</mark>";
}

// Changes theme when buttons are clicked
function selectTheme(theme) {
  document.getElementsByTagName("body")[0].className = theme;
  document.getElementsByTagName("main")[0].className = theme;
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}