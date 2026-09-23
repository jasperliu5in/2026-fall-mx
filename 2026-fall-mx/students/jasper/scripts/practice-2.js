const button = document.getElementById("my-button");
console.log(button);

const title = document.getElementById("my-title");
console.log(title);

function testMyButton(event) {
    console.log("Listen to my button!", event);
}
testMyButton("NOW");

button.addEventListener("click", testMyButton);

function testBody(event) {
    console.log("Listen to my body!", event);
}

document.body.addEventListener("click", testBody);

const cssSelector = '.footer';
const meta = document.querySelector(cssSelector);
console.log(meta);