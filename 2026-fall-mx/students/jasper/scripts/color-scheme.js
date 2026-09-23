console.log("working");

const key = 'color-scheme-choice';

function setColorScheme(colorScheme) {
    const metaTag = document.querySelector('meta');
    console.log(colorScheme, metaTag);
    metaTag.setAttribute('content', colorScheme);
}
setColorScheme('jasper');

const chooser = document.getElementById('color-chooser');
console.log(chooser);

function changeColor(event) {
    console.log(event);
    setColorScheme(event.target.value);
}
chooser.addEventListener('change', changeColor);
