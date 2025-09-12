// Using  getElementById and innerHTML
// document.getElementById("demo").innerHTML = "Hello World!";

const ex1 = document.getElementById("ex1");
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
	ex1.innerText = "My new text using <code>innerHTML</code>";
});

const button3 = document.getElementById("button3");
// First get the div and its contents
const getDiv = document.getElementById("ex3");
// Then get all of the <p> elements within it, in an array
const getP = getDiv.getElementsByTagName("p");
button3.addEventListener("click", () => {
	for (const item of getP) {
		console.log(item);
	}
	// Use indexing to get an item out of the array
	getP[1].style.fontWeight = "bold";
});