// Define the local storage key to use.
const key = "color-scheme-choice";

// Use Inspector to change meta tag's "content" value.
function setColorScheme(colorScheme) {
  // Set the page color scheme.
  const metaTag = document.querySelector('meta[name="color-scheme"]');
  metaTag.setAttribute("content", colorScheme);

  // Store the color scheme.
  localStorage.setItem(key, colorScheme);
}

// Have the fieldset listen for change events that bubble from the radio buttons.
const chooser = document.getElementById("color-chooser");
function changeColors(event) {
  setColorScheme(event.target.value);
}
chooser.addEventListener("change", changeColors);

// When the page first loads, synchronize the stored color scheme with the page.
const color = localStorage.getItem(key);
if (color) {
  setColorScheme(color);

  // Update the form controls.
  chooser.querySelector(`input[value="${color}"]`).checked = true;
}
