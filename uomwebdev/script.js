// Using  getElementById and innerHTML
// document.getElementById("demo").innerHTML = "Hello World!";

const ex1 = document.getElementById("ex1");
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
	ex1.innerText = "My new text using <code>innerHTML</code>";
});
