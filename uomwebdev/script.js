// Using  getElementById and innerHTML
// document.getElementById("demo").innerHTML = "Hello World!";

const ex1 = document.getElementById("ex1");
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
	ex1.innerText = "My new text using <code>innerHTML</code>";
});

const ex2 = document.getElementById("ex2");
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
	return console.log(ex2);
});