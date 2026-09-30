const key = "color-scheme-choice";

// Use Inspector to change meta tag's "content" value.
function setColorScheme(colorScheme) {
  // Set the page color scheme.
  const metaTag = document.querySelector('meta[name="color-scheme"]');
  metaTag.setAttribute("content", colorScheme);

  // Store the color scheme.
  localStorage.setItem(key, colorScheme);
}

const chooser = document.getElementById("color-chooser");

// Have the fieldset catch bubbling change events from the radio buttons.
function changeColors(event) {
  setColorScheme(event.target.value);
}

chooser.addEventListener("change", changeColors);

// Synchronize the stored color scheme and the page color scheme.
const color = localStorage.getItem(key);
if (color) {
  setColorScheme(color);

  // Update the form controls.
  chooser.querySelector(`input[value="${color}"]`).checked = true;
}
